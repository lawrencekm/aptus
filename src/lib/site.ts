/**
 * Single source of truth for company facts, contact channels and navigation.
 *
 * VERIFICATION POLICY
 * -------------------
 * Nothing in this file may be invented. Every value is either (a) carried over
 * from the previous aptusgroup site / repository, or (b) marked in
 * `UNVERIFIED_FACTS` below as requiring confirmation from the business before
 * it is published. Do not add licence numbers, volumes, years in business,
 * certifications, partners or client names here without written confirmation.
 */

export const SITE_URL = "https://aptusgroup.net";

export const company = {
  legalName: "Aptus Group",
  shortName: "Aptus Group",
  tagline: "Safe. Secure. Always delivered.",
  /** One-sentence entity definition. Used verbatim in schema + AI-readable copy. */
  definition:
    "Aptus Group is a Nairobi-based trade and logistics company that coordinates gold sourcing from Kenya for qualified international buyers, and operates freight, customs clearing, warehousing and insured safe-deposit vaulting in Kenya.",
  foundedYear: 2012, // carried over from previous site copy ("Trusted Logistics Company Since 2012")
  address: {
    street: "Airport North Road",
    locality: "Nairobi",
    region: "Nairobi County",
    country: "Kenya",
    countryCode: "KE",
  },
  geo: { lat: -1.3236, lng: 36.9271 }, // Airport North Road corridor, Nairobi — approximate
} as const;

/** Primary trade-desk number. Digits only, E.164 without "+", for wa.me links. */
const TRADE_DESK_E164 = "254101631676";
const TRADE_DESK_DISPLAY = "+254 101 631 676";
const OPERATIONS_E164 = "254107816884";
const OPERATIONS_DISPLAY = "+254 107 816 884";
const LOGISTICS_E164 = "254773946117";
const LOGISTICS_DISPLAY = "+254 773 946 117";

export const TRADE_EMAIL = "info@aptusgroup.com";

/** Builds a wa.me deep link with a pre-filled, context-specific opening message. */
export function whatsappLink(message: string, number: string = TRADE_DESK_E164) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto link with subject and body pre-filled. */
export function mailtoLink(subject: string, body?: string, to: string = TRADE_EMAIL) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}

export const contact = {
  tradeDesk: {
    display: TRADE_DESK_DISPLAY,
    tel: `tel:+${TRADE_DESK_E164}`,
    e164: TRADE_DESK_E164,
  },
  operations: {
    display: OPERATIONS_DISPLAY,
    tel: `tel:+${OPERATIONS_E164}`,
    e164: OPERATIONS_E164,
  },
  logistics: {
    display: LOGISTICS_DISPLAY,
    tel: `tel:+${LOGISTICS_E164}`,
    e164: LOGISTICS_E164,
  },
  email: TRADE_EMAIL,
  mailto: mailtoLink(
    "Gold sourcing enquiry",
    "Company:\nCountry / destination market:\nBuyer type (refinery, dealer, manufacturer, trader):\nIndicative quantity and frequency:\nPurity required:\nPreferred transaction structure:\n\nNotes:\n",
  ),
  /** Default WhatsApp opener for the trade desk. */
  whatsapp: whatsappLink(
    "Hello Aptus Group trade desk — I am enquiring about gold sourcing from Kenya. My company is [company], based in [country].",
  ),
  whatsappDisplay: TRADE_DESK_DISPLAY,
  hours: "Monday to Friday, 08:00–17:00 East Africa Time (UTC+3)",
} as const;

/* ------------------------------------------------------------------ NAV -- */

export type NavChild = { label: string; href: string; blurb?: string };
export type NavGroup = { label: string; href?: string; children: NavChild[] };

export const primaryNav: NavGroup[] = [
  {
    label: "Gold",
    children: [
      { label: "Gold sourcing", href: "/gold-sourcing", blurb: "What we do and how we are positioned in the chain" },
      { label: "Gold supply", href: "/gold-supply", blurb: "Forms, purities and lot structures we quote on" },
      { label: "Our process", href: "/process", blurb: "Six steps from enquiry to delivered lot" },
      { label: "Compliance & documentation", href: "/compliance", blurb: "KYC, AML, permits and the paper trail" },
    ],
  },
  {
    label: "Markets",
    children: [
      { label: "Kenya", href: "/kenya", blurb: "The regulatory and commercial picture" },
      { label: "Nairobi", href: "/nairobi", blurb: "Why the transaction happens here" },
      { label: "Africa", href: "/africa", blurb: "Where Kenya sits in continental supply" },
      { label: "International buyers", href: "/international-buyers", blurb: "How we work with buyers abroad" },
      { label: "Hong Kong buyers", href: "/hong-kong-buyers", blurb: "Kenya-to-Hong-Kong considerations" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Aptus Group", href: "/about" },
      { label: "Logistics & vaulting", href: "/logistics", blurb: "The freight and secure-storage business" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Buyer resource centre", href: "/resources", blurb: "Guides written for international buyers" },
      { label: "Frequently asked questions", href: "/faq" },
    ],
  },
];

/* ------------------------------------------------- FACTS AWAITING SIGN-OFF */

/**
 * Rendered on /compliance as an internal-facing checklist during staging, and
 * used to keep unverifiable claims off the public pages. Remove an entry only
 * once the business has supplied documentary evidence.
 */
export const UNVERIFIED_FACTS = [
  "Company registration number and registered legal entity name",
  "Mineral Dealer's Trading Licence (MDTL) number and expiry, or the licensed counterparty relied on",
  "Gold export permit reference issued by the Ministry of Mining, Blue Economy and Maritime Affairs",
  "KRA PIN and current Tax Compliance Certificate",
  "Which assay laboratory or refinery issues certificates on our lots",
  "Whether Aptus Group exports as principal, or facilitates for a licensed exporter",
  "Insurance underwriter and cover limits for vault storage and in-transit consignments",
  "Years of operation in gold specifically (2012 refers to the logistics business)",
  "Any refinery, bank or logistics relationships that may be named publicly",
  "Destination markets served to date",
] as const;
