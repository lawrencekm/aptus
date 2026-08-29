"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  BUYER_TYPES,
  CONTACT_METHODS,
  ENQUIRY_TYPES,
  PURITIES,
  STRUCTURES,
  validateInquiry,
  type FieldErrors,
  type InquiryPayload,
} from "@/lib/inquiry";
import { track, EVENTS } from "@/lib/analytics";
import { contact } from "@/lib/site";
import { Arrow } from "@/components/ui/primitives";
import { WhatsAppIcon, MailIcon } from "@/components/ui/icons";

const EMPTY: InquiryPayload = {
  fullName: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  buyerType: "",
  enquiryType: "",
  quantity: "",
  purity: "",
  destination: "",
  structure: "",
  message: "",
  preferredContact: "Email",
  website: "",
};

const STEPS = [
  { key: "you", label: "About you", fields: ["fullName", "company", "country", "email", "phone", "buyerType"] },
  { key: "requirement", label: "Your requirement", fields: ["enquiryType", "quantity", "purity", "destination", "structure"] },
  { key: "detail", label: "Detail", fields: ["message", "preferredContact"] },
] as const;

export function BuyerInquiryForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<InquiryPayload>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [delivered, setDelivered] = useState(true);

  const startedAt = useRef<number>(Date.now());
  const hasStarted = useRef(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  useEffect(() => {
    track(EVENTS.inquiryFormViewed, { form: "buyer_inquiry" });
  }, []);

  function update<K extends keyof InquiryPayload>(field: K, value: InquiryPayload[K]) {
    if (!hasStarted.current) {
      hasStarted.current = true;
      startedAt.current = Date.now();
      track(EVENTS.inquiryFormStarted, { form: "buyer_inquiry" });
    }
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function validateStep(index: number): boolean {
    const all = validateInquiry(data);
    const stepFields = STEPS[index]!.fields as readonly (keyof InquiryPayload)[];
    const stepErrors: FieldErrors = {};
    for (const field of stepFields) if (all[field]) stepErrors[field] = all[field];
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }

  function next() {
    if (!validateStep(step)) return;
    track(EVENTS.inquiryStepCompleted, { form: "buyer_inquiry", step: STEPS[step]!.key });
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    headingRef.current?.focus();
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
    headingRef.current?.focus();
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending") return;

    const all = validateInquiry(data);
    if (Object.keys(all).length > 0) {
      setErrors(all);
      // Send the visitor back to the first step that has a problem.
      const firstBad = STEPS.findIndex((s) =>
        (s.fields as readonly (keyof InquiryPayload)[]).some((f) => all[f]),
      );
      if (firstBad >= 0) setStep(firstBad);
      return;
    }

    setStatus("sending");
    setServerMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsedMs: Date.now() - startedAt.current }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        if (result?.errors) {
          setErrors(result.errors as FieldErrors);
          setStatus("idle");
          return;
        }
        throw new Error(result?.error ?? "Your enquiry could not be sent.");
      }

      setDelivered(result.delivered !== false);
      setStatus("sent");
      track(EVENTS.inquirySubmitted, {
        form: "buyer_inquiry",
        enquiry_type: data.enquiryType,
        buyer_type: data.buyerType || "unspecified",
      });
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error ? error.message : "Your enquiry could not be sent.");
      track(EVENTS.inquiryFailed, { form: "buyer_inquiry" });
    }
  }

  /* --------------------------------------------------------- success view */

  if (status === "sent") {
    return (
      <div className="card p-8 lg:p-10" role="status" aria-live="polite">
        <p className="eyebrow text-gold-800">Enquiry received</p>
        <h2 className="display-3 mt-4 text-ink-950">Thank you — we have your enquiry</h2>

        <ol className="mt-8 space-y-5 border-t border-[var(--hairline)] pt-8">
          {[
            ["A named person picks it up", "Your enquiry goes to the trade desk, not to a shared mailbox. You will hear from a named individual rather than an auto-responder."],
            ["We write back with what we understood", "So that any misunderstanding about form, fineness, quantity or destination surfaces immediately rather than three steps later."],
            ["We say yes or no plainly", "If we cannot serve the requirement we will tell you at this stage rather than a later one. Declining is a normal outcome."],
            ["If we can, qualification begins", "Mutual KYC in both directions before any commercial terms are discussed. Nothing moves and no funds are involved."],
          ].map(([title, body], i) => (
            <li key={title} className="flex gap-5">
              <span className="font-serif text-xl text-gold-600" aria-hidden="true">
                {`0${i + 1}`}
              </span>
              <span>
                <span className="block font-serif text-[1.05rem] text-ink-950">{title}</span>
                <span className="mt-1 block text-[0.92rem] text-ink-600">{body}</span>
              </span>
            </li>
          ))}
        </ol>

        {!delivered ? (
          <p className="mt-8 border-l-2 border-gold-500 bg-gold-50 px-5 py-4 text-[0.9rem] text-ink-700">
            Email delivery is not yet configured on this site. Your enquiry has been recorded, but to
            be certain it reaches the desk today, please also send it by WhatsApp or email using the
            links below.
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--hairline)] pt-8">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(EVENTS.whatsappClicked, { location: "inquiry_success" })}
            className="btn btn-primary"
          >
            <WhatsAppIcon size={17} />
            Continue on WhatsApp
          </a>
          <a
            href={contact.mailto}
            onClick={() => track(EVENTS.emailClicked, { location: "inquiry_success" })}
            className="btn btn-secondary"
          >
            <MailIcon size={17} />
            Email the trade desk
          </a>
        </div>

        <p className="mt-6 text-[0.85rem] text-ink-500">{contact.hours}</p>
      </div>
    );
  }

  /* ------------------------------------------------------------ form view */

  const showRequirementDetail = data.enquiryType === "Gold sourcing / supply" || data.enquiryType === "";

  return (
    <form onSubmit={submit} noValidate className="card p-7 lg:p-10">
      {/* Progress */}
      <div ref={headingRef} tabIndex={-1} className="outline-none">
        <p className="eyebrow text-gold-800">
          Step {step + 1} of {STEPS.length} — {STEPS[step]!.label}
        </p>
        <ol className="mt-4 flex gap-1.5" aria-hidden="true">
          {STEPS.map((s, i) => (
            <li
              key={s.key}
              className={`h-0.5 flex-1 transition-colors ${i <= step ? "bg-gold-500" : "bg-ink-200"}`}
            />
          ))}
        </ol>
      </div>

      {/* Honeypot — hidden from people, offered to bots. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(e) => setData((p) => ({ ...p, website: e.target.value }))}
        />
      </div>

      <div className="mt-8 space-y-5">
        {step === 0 ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={`${uid}-name`} label="Full name" required error={errors.fullName}>
                <input
                  id={`${uid}-name`}
                  className="field"
                  autoComplete="name"
                  value={data.fullName}
                  aria-invalid={Boolean(errors.fullName)}
                  onChange={(e) => update("fullName", e.target.value)}
                />
              </Field>
              <Field id={`${uid}-company`} label="Company" required error={errors.company}>
                <input
                  id={`${uid}-company`}
                  className="field"
                  autoComplete="organization"
                  value={data.company}
                  aria-invalid={Boolean(errors.company)}
                  onChange={(e) => update("company", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={`${uid}-country`} label="Country" required error={errors.country}>
                <input
                  id={`${uid}-country`}
                  className="field"
                  autoComplete="country-name"
                  value={data.country}
                  aria-invalid={Boolean(errors.country)}
                  onChange={(e) => update("country", e.target.value)}
                />
              </Field>
              <Field id={`${uid}-email`} label="Business email" required error={errors.email}>
                <input
                  id={`${uid}-email`}
                  type="email"
                  inputMode="email"
                  className="field"
                  autoComplete="email"
                  value={data.email}
                  aria-invalid={Boolean(errors.email)}
                  onChange={(e) => update("email", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id={`${uid}-phone`}
                label="Phone or WhatsApp"
                hint="Include the country code."
                error={errors.phone}
              >
                <input
                  id={`${uid}-phone`}
                  type="tel"
                  inputMode="tel"
                  className="field"
                  autoComplete="tel"
                  placeholder="+852 …"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>
              <Field id={`${uid}-buyer`} label="Buyer type">
                <select
                  id={`${uid}-buyer`}
                  className="field"
                  value={data.buyerType}
                  onChange={(e) => update("buyerType", e.target.value)}
                >
                  <option value="">Select…</option>
                  {BUYER_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <Field id={`${uid}-enquiry`} label="What is your enquiry about?" required error={errors.enquiryType}>
              <select
                id={`${uid}-enquiry`}
                className="field"
                value={data.enquiryType}
                aria-invalid={Boolean(errors.enquiryType)}
                onChange={(e) => update("enquiryType", e.target.value)}
              >
                <option value="">Select…</option>
                {ENQUIRY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>

            {showRequirementDetail ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id={`${uid}-quantity`}
                    label="Indicative quantity"
                    hint="Per lot, and whether it repeats."
                    error={errors.quantity}
                  >
                    <input
                      id={`${uid}-quantity`}
                      className="field"
                      placeholder="e.g. 5 kg, monthly"
                      value={data.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                    />
                  </Field>
                  <Field id={`${uid}-purity`} label="Purity required">
                    <select
                      id={`${uid}-purity`}
                      className="field"
                      value={data.purity}
                      onChange={(e) => update("purity", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {PURITIES.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id={`${uid}-destination`}
                    label="Destination market"
                    hint="Where the metal is going, and to whom."
                    error={errors.destination}
                  >
                    <input
                      id={`${uid}-destination`}
                      className="field"
                      placeholder="e.g. Hong Kong — refiner"
                      value={data.destination}
                      onChange={(e) => update("destination", e.target.value)}
                    />
                  </Field>
                  <Field id={`${uid}-structure`} label="Preferred transaction structure">
                    <select
                      id={`${uid}-structure`}
                      className="field"
                      value={data.structure}
                      onChange={(e) => update("structure", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {STRUCTURES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>
              </>
            ) : (
              <p className="text-[0.9rem] text-ink-500">
                Tell us the detail on the next step and we will route it to the right desk.
              </p>
            )}
          </>
        ) : null}

        {step === 2 ? (
          <>
            <Field
              id={`${uid}-message`}
              label="Your requirement"
              required
              hint="A sentence or two is enough. We do not need commercially sensitive detail at this stage."
              error={errors.message}
            >
              <textarea
                id={`${uid}-message`}
                className="field min-h-40 resize-y"
                rows={6}
                value={data.message}
                aria-invalid={Boolean(errors.message)}
                onChange={(e) => update("message", e.target.value)}
              />
            </Field>

            <fieldset>
              <legend className="label">Preferred contact method</legend>
              <div className="flex flex-wrap gap-2">
                {CONTACT_METHODS.map((method) => (
                  <label
                    key={method}
                    className={`cursor-pointer border px-4 py-2.5 text-[0.9rem] transition-colors ${
                      data.preferredContact === method
                        ? "border-gold-600 bg-gold-50 text-ink-950"
                        : "border-ink-200 text-ink-600 hover:border-ink-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      className="sr-only"
                      checked={data.preferredContact === method}
                      onChange={() => update("preferredContact", method)}
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>

            <p className="text-[0.82rem] leading-relaxed text-ink-500">
              We use what you send here only to respond to this enquiry. We do not ask for
              identity documents, banking details or payment at this stage, and we never will by
              email or message. See our{" "}
              <a href="/privacy" className="btn-ghost">
                privacy notice
              </a>
              .
            </p>
          </>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 border-l-2 border-[#B3261E] bg-[#B3261E]/5 px-5 py-4 text-[0.9rem] text-ink-800">
          {serverMessage}{" "}
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Message the trade desk instead
          </a>
        </p>
      ) : null}

      <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-[var(--hairline)] pt-7">
        {step > 0 ? (
          <button type="button" onClick={back} className="btn btn-secondary">
            Back
          </button>
        ) : null}

        {step < STEPS.length - 1 ? (
          <button type="button" onClick={next} className="btn btn-primary">
            Continue
            <Arrow />
          </button>
        ) : (
          <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Submit buyer enquiry"}
            {status === "sending" ? null : <Arrow />}
          </button>
        )}

        <span className="text-[0.82rem] text-ink-500">No obligation. Nothing moves at this stage.</span>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ field */

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {required ? <span className="ml-1 text-gold-700">*</span> : null}
      </label>
      {children}
      {hint && !error ? <p className="mt-1.5 text-[0.8rem] text-ink-500">{hint}</p> : null}
      {error ? (
        <p className="mt-1.5 text-[0.82rem] font-medium text-[#B3261E]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
