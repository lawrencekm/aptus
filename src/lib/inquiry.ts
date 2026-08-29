/** Shared shape and validation for the buyer enquiry, used by client and route. */

export const BUYER_TYPES = [
  "Refinery or refiner agent",
  "Bullion / precious metals dealer",
  "Jewellery manufacturer",
  "Commodity trader or trading house",
  "Import / export company",
  "Institutional buyer",
  "Private buyer",
  "Other",
] as const;

export const ENQUIRY_TYPES = [
  "Gold sourcing / supply",
  "Freight, clearing or warehousing",
  "Safe deposit and vaulting",
  "Other",
] as const;

export const PURITIES = [
  "999.9 (24K) refined",
  "995.0 or better",
  "916 (22K)",
  "750 (18K)",
  "Doré / to be established by assay",
  "Not yet determined",
] as const;

export const STRUCTURES = [
  "Settlement against destination refinery outturn",
  "Documentary letter of credit",
  "Escrow against independent verification",
  "Payment on delivery into a nominated vault",
  "Open to discussion",
] as const;

export const CONTACT_METHODS = ["Email", "WhatsApp", "Telephone"] as const;

export type InquiryPayload = {
  fullName: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  buyerType: string;
  enquiryType: string;
  quantity: string;
  purity: string;
  destination: string;
  structure: string;
  message: string;
  preferredContact: string;
  /** Honeypot — must be empty. Hidden from real users. */
  website?: string;
  /** Milliseconds the form was open before submission. */
  elapsedMs?: number;
};

export type FieldErrors = Partial<Record<keyof InquiryPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Validation shared by the browser and the server. The server is the authority. */
export function validateInquiry(data: Partial<InquiryPayload>): FieldErrors {
  const errors: FieldErrors = {};

  const required: [keyof InquiryPayload, string][] = [
    ["fullName", "Enter your full name."],
    ["company", "Enter your company name."],
    ["country", "Enter the country you are enquiring from."],
    ["email", "Enter your business email address."],
    ["enquiryType", "Choose what your enquiry is about."],
    ["message", "Tell us briefly what you are looking for."],
  ];

  for (const [field, msg] of required) {
    if (!String(data[field] ?? "").trim()) errors[field] = msg;
  }

  if (data.email && !EMAIL_RE.test(String(data.email).trim())) {
    errors.email = "That does not look like a valid email address.";
  }

  if (data.message && String(data.message).trim().length < 15) {
    errors.message = "A sentence or two helps us route your enquiry correctly.";
  }

  for (const [field, limit] of [
    ["fullName", 120],
    ["company", 160],
    ["country", 80],
    ["email", 160],
    ["phone", 40],
    ["quantity", 120],
    ["destination", 120],
    ["message", 4000],
  ] as [keyof InquiryPayload, number][]) {
    const value = String(data[field] ?? "");
    if (value.length > limit) errors[field] = `Please keep this under ${limit} characters.`;
  }

  return errors;
}

/** Plain-text rendering of an enquiry for email delivery. */
export function formatInquiry(data: InquiryPayload, meta: { received: string }) {
  const rows: [string, string][] = [
    ["Received", meta.received],
    ["Enquiry about", data.enquiryType],
    ["Name", data.fullName],
    ["Company", data.company],
    ["Country", data.country],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone || "—"],
    ["Buyer type", data.buyerType || "—"],
    ["Indicative quantity", data.quantity || "—"],
    ["Purity required", data.purity || "—"],
    ["Destination market", data.destination || "—"],
    ["Preferred structure", data.structure || "—"],
    ["Preferred contact", data.preferredContact || "—"],
  ];

  const width = Math.max(...rows.map(([k]) => k.length));
  const table = rows.map(([k, v]) => `${k.padEnd(width)} : ${v}`).join("\n");

  return `NEW BUYER ENQUIRY — aptusgroup.net\n\n${table}\n\nMESSAGE\n-------\n${data.message}\n`;
}
