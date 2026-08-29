import { NextResponse } from "next/server";
import { validateInquiry, formatInquiry, type InquiryPayload } from "@/lib/inquiry";
import { TRADE_EMAIL } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Buyer enquiry endpoint.
 *
 * Delivery is environment-gated so the site is deployable before mail is
 * configured:
 *   RESEND_API_KEY + INQUIRY_FROM  → delivered via the Resend HTTP API
 *   SMTP_URL       + INQUIRY_FROM  → delivered over SMTP
 *   neither                        → logged, and the client is told to use
 *                                    WhatsApp or email instead
 *
 * INQUIRY_TO overrides the destination mailbox; it defaults to the published
 * trade address.
 */

/* ----------------------------------------------------------- rate limiting */

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string): boolean {
  const now = Date.now();

  // Opportunistic sweep so the map cannot grow without bound.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (v.resetAt < now) buckets.delete(k);
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_PER_WINDOW;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/* ------------------------------------------------------------- delivery -- */

async function deliver(subject: string, body: string, replyTo: string): Promise<"sent" | "unconfigured"> {
  const from = process.env.INQUIRY_FROM;
  const to = process.env.INQUIRY_TO ?? TRADE_EMAIL;

  if (process.env.RESEND_API_KEY && from) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], subject, text: body, reply_to: replyTo }),
    });
    if (!response.ok) {
      throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
    }
    return "sent";
  }

  if (process.env.SMTP_URL && from) {
    const { createTransport } = await import("nodemailer");
    const transport = createTransport(process.env.SMTP_URL);
    await transport.sendMail({ from, to, subject, text: body, replyTo });
    return "sent";
  }

  console.warn(
    "[inquiry] No mail transport configured (set RESEND_API_KEY or SMTP_URL, plus INQUIRY_FROM). Enquiry captured in logs only.",
  );
  console.info(`[inquiry]\n${body}`);
  return "unconfigured";
}

/* ------------------------------------------------------------- handler --- */

export async function POST(request: Request) {
  if (rateLimited(clientKey(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries from this connection. Please try again shortly, or message the trade desk on WhatsApp." },
      { status: 429 },
    );
  }

  let data: Partial<InquiryPayload>;
  try {
    data = (await request.json()) as Partial<InquiryPayload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a hidden field only an automated submitter fills in.
  if (String(data.website ?? "").trim()) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  // Submissions completed implausibly fast are not human.
  if (typeof data.elapsedMs === "number" && data.elapsedMs < 2500) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const errors = validateInquiry(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const payload = data as InquiryPayload;
  const body = formatInquiry(payload, { received: new Date().toISOString() });
  const subject = `Buyer enquiry — ${payload.company} (${payload.country}) — ${payload.enquiryType}`;

  try {
    const outcome = await deliver(subject, body, payload.email);
    return NextResponse.json({ ok: true, delivered: outcome === "sent" });
  } catch (error) {
    console.error("[inquiry] delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not deliver your enquiry just now. Please message the trade desk on WhatsApp or email us directly — we do not want you to lose the detail you have written.",
      },
      { status: 502 },
    );
  }
}
