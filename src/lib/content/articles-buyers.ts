import type { Article } from "./types";

export const dueDiligenceChecklist: Article = {
  slug: "gold-supplier-due-diligence-checklist",
  title: "Due Diligence Checklist for Buyers Sourcing Gold from Africa",
  h1: "A due diligence checklist for sourcing gold from Africa",
  description:
    "A working checklist covering counterparty identity, licensing, provenance, assay, transaction structure and payment controls — written for buyers who intend to verify rather than hope.",
  cluster: "buyers",
  answers: "What should I verify before transacting with an African gold supplier?",
  summary:
    "Due diligence on an African gold supply chain has five layers: who the counterparty legally is, what they are licensed to do, where the material came from, what it actually assays at, and how money moves. A supplier who is comfortable with all five is a different proposition from one who is comfortable with the first two.",
  published: "2026-08-29",
  minutes: 8,
  sections: [
    {
      heading: "Why this is a structured exercise, not a judgement call",
      blocks: [
        {
          t: "p",
          text: "The OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas is the reference framework for this sector, and it is deliberately procedural. It sets out a five-step process: establish strong company management systems; identify and assess risk in the supply chain; design and implement a strategy to respond to identified risks; carry out independent third-party audit of due diligence at identified points in the chain; and report publicly on supply chain due diligence.",
        },
        {
          t: "p",
          text: "The point of a framework is that it does not depend on your read of a person. Sophisticated fraud in this sector is specifically designed to pass an impression test — expensive hotels, apparent officials, confident answers. It is much less good at passing a document test conducted at source.",
        },
      ],
    },
    {
      heading: "Layer 1 — Counterparty identity",
      blocks: [
        {
          t: "ul",
          items: [
            "Exact registered legal name, registration number and jurisdiction of incorporation. Confirm it against the companies registry, not against a letterhead.",
            "Directors and beneficial owners, with identity documents, and a screening pass against sanctions and PEP lists.",
            "A physical operating address you can visit or have visited on your behalf.",
            "A bank account held in the company's own registered name. No third-party accounts, no personal accounts, no 'our finance partner will invoice you'.",
            "A named, contactable individual who is accountable for the transaction and who exists in more than one place — company records, correspondence, in person.",
          ],
        },
      ],
    },
    {
      heading: "Layer 2 — Licensing and authority to sell",
      blocks: [
        {
          t: "ul",
          items: [
            "The specific licence or permit category that authorises dealing and export in the country of origin, with number and expiry date.",
            "Independent confirmation from the issuing authority — in Kenya, the Directorate of Mines within the Ministry of Mining. A scan of a certificate is not confirmation.",
            "Clarity on who the exporter of record will be, if it is not the entity you are contracting with, and on what basis that relationship exists.",
            "Tax standing in the country of origin, evidenced by a current tax compliance certificate.",
          ],
        },
        {
          t: "note",
          title: "The most common structural failure",
          text: "A buyer contracts with an entity that holds no export authority, on the assumption that 'their partner will handle export'. If the export leg is not contracted and evidenced, it does not exist.",
        },
      ],
    },
    {
      heading: "Layer 3 — Provenance of the material",
      blocks: [
        {
          t: "p",
          text: "Provenance is not a formality. Refineries and banks at the destination will ask, and an answer that cannot be substantiated can strand a consignment after it has arrived.",
        },
        {
          t: "ul",
          items: [
            "Documented origin of the material and the chain of custody from that point to the seller.",
            "Whether the supply is artisanal and small-scale in origin, and if so, what steps were taken on the risks the OECD guidance identifies.",
            "Purchase records supporting the seller's own title to the material.",
            "Consistency between the stated origin and the volumes involved. Volumes materially out of scale with a stated source are the most reliable indicator that a story is invented.",
          ],
        },
      ],
    },
    {
      heading: "Layer 4 — Verification of the metal",
      blocks: [
        {
          t: "ul",
          items: [
            "An assay by a laboratory you instruct and pay, not one introduced by the seller.",
            "Fire assay as the settlement basis where the lot is unrefined. XRF alone reads only the surface and is exactly what plated and clad fraud is built to defeat.",
            "Your own inspector present at sampling, and a retained sample held independently.",
            "Weights taken on calibrated scales, witnessed, and reconciled against every document in the file.",
            "Agreement in advance on whose assay governs settlement, and on the tolerance and dispute mechanism.",
          ],
        },
      ],
    },
    {
      heading: "Layer 5 — Transaction and payment structure",
      blocks: [
        {
          t: "ul",
          items: [
            "Payment released against a verifiable event — destination refinery outturn, or presentation of documents under a bank instrument — never against a promise or a photograph.",
            "No advance fees of any kind: no 'release' fee, no 'clearance' fee, no payment to an official, no cash component.",
            "A written contract governed by a named law with a named dispute forum, reviewed by your own counsel in the country of origin.",
            "Insurance in place for the transit leg, with your interest noted.",
            "A first lot sized to test the process rather than to make the margin.",
          ],
        },
        {
          t: "verify",
          text: "This checklist is general commercial guidance, not legal advice. Instruct qualified counsel in both the origin and destination jurisdictions before committing funds.",
        },
      ],
    },
  ],
  related: [
    { label: "How Aptus Group qualifies buyers and counterparties", href: "/compliance" },
    { label: "Our six-step process", href: "/process" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: [
    "questions-to-ask-an-african-gold-supplier",
    "recognising-gold-fraud-in-east-africa",
    "how-gold-purity-is-verified",
  ],
};

export const questionsToAsk: Article = {
  slug: "questions-to-ask-an-african-gold-supplier",
  title: "Questions to Ask an African Gold Supplier Before You Transact",
  h1: "Questions to ask an African gold supplier",
  description:
    "Twenty questions that separate a supplier with a real operation from one with a good pitch — and what a credible answer to each actually sounds like.",
  cluster: "buyers",
  answers: "What should I ask a gold supplier, and what does a good answer sound like?",
  summary:
    "The useful questions are the ones a legitimate supplier can answer immediately and a fraudulent one cannot answer consistently: who is the exporter of record, which laboratory assays, whose account receives payment, and what happens if the assay disagrees. Vagueness on these four is disqualifying on its own.",
  published: "2026-08-29",
  minutes: 7,
  sections: [
    {
      heading: "On identity and authority",
      blocks: [
        {
          t: "ol",
          items: [
            "What is your exact registered legal name and registration number, and in which jurisdiction? — A credible answer is immediate and matches the registry.",
            "Which licence authorises you to deal in and export gold, and what is its number and expiry? — Should be specific about category, not just 'we are licensed'.",
            "Who will be the exporter of record on my consignment? — If it is not them, they should name the entity and explain the relationship without prompting.",
            "Can I confirm your licence with the issuing authority directly? — The only acceptable answer is yes.",
            "Who are the directors and beneficial owners? — Refusal here ends the conversation.",
          ],
        },
      ],
    },
    {
      heading: "On the material",
      blocks: [
        {
          t: "ol",
          items: [
            "Where does this material come from, and what documents evidence that? — Expect a specific origin and purchase records, not a region and a story.",
            "Is the supply artisanal in origin, and what due diligence have you done on it? — A supplier who has never considered the question has not done the work.",
            "What form and fineness are you offering, and on what basis is that figure stated? — Which laboratory, which method, what date.",
            "Which laboratory will assay the lot, and may I instruct my own instead? — 'Yes, at your cost' is the right answer.",
            "May my inspector be present at sampling and weighing? — Any resistance is decisive.",
            "Will you provide a retained sample? — Standard practice; refusal is not.",
          ],
        },
        {
          t: "note",
          title: "Listen for the reversal",
          text: "A supplier who answers a verification question by explaining why verification is unnecessary this time — a trusted relationship, a time constraint, a special arrangement — is telling you what will fail.",
        },
      ],
    },
    {
      heading: "On the transaction",
      blocks: [
        {
          t: "ol",
          items: [
            "Which bank account receives payment, and is it in your registered company name? — A third-party or personal account ends the discussion.",
            "What is the settlement basis: origin assay or destination outturn? — Both exist commercially; ambiguity does not.",
            "What Incoterms apply, and who bears risk at each stage?",
            "Who insures the consignment, for what value, and is my interest noted?",
            "What is the dispute mechanism if the destination assay disagrees with the origin assay?",
            "Are there any fees payable before delivery, to anyone, for any reason? — The only safe answer is no.",
          ],
        },
      ],
    },
    {
      heading: "On the record",
      blocks: [
        {
          t: "ol",
          items: [
            "Describe your last completed shipment: carrier, destination, consignee type, laboratory, settlement mechanism. — Detail is difficult to invent under follow-up.",
            "Which advocate or law firm represents you in your jurisdiction?",
            "Will you complete our KYC pack, including source-of-funds questions? — A supplier who resists KYC on themselves has not applied it to their own supply.",
          ],
        },
        {
          t: "p",
          text: "None of these questions is aggressive. A professional counterparty expects all of them and has the answers to hand, because they ask the same questions of the buyers they deal with. Discomfort in the face of routine diligence is itself the finding.",
        },
      ],
    },
  ],
  related: [
    { label: "How we answer these questions", href: "/compliance" },
    { label: "About Aptus Group", href: "/about" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: ["gold-supplier-due-diligence-checklist", "recognising-gold-fraud-in-east-africa"],
};

export const purityVerification: Article = {
  slug: "how-gold-purity-is-verified",
  title: "How Gold Purity Is Verified: Assay Methods and What They Prove",
  h1: "How gold purity is verified, and what each method actually proves",
  description:
    "Fire assay, XRF, specific gravity and ultrasonic testing compared: what each method measures, what it misses, and which one should govern settlement on a cross-border gold transaction.",
  cluster: "buyers",
  answers: "How is gold purity established, and which method should settlement be based on?",
  summary:
    "Fire assay is the reference method and the appropriate basis for settlement because it measures the whole sample destructively. X-ray fluorescence is a fast surface screen and is what plated or clad fraud is designed to defeat. Specific gravity and ultrasonic testing detect a foreign core. A serious transaction uses screening on site and fire assay or refinery outturn for value.",
  published: "2026-08-29",
  minutes: 6,
  sections: [
    {
      heading: "The vocabulary",
      blocks: [
        {
          t: "table",
          caption: "Terms used in purity and settlement",
          head: ["Term", "Meaning"],
          rows: [
            ["Fineness", "Gold content expressed in parts per thousand — 995.0 means 99.5% gold."],
            ["Karat", "Gold content in twenty-fourths. 24K is nominally pure; 22K is 916 fineness."],
            ["Gross weight", "Total weight of the item as presented."],
            ["Net or fine weight", "The weight of contained gold: gross weight multiplied by fineness."],
            ["Outturn", "The refinery's determination of recoverable fine metal after processing — the figure that usually governs final settlement."],
            ["Doré", "Semi-pure alloy from mining or initial processing, requiring refining to reach investment fineness."],
          ],
        },
      ],
    },
    {
      heading: "The methods",
      blocks: [
        {
          t: "h3",
          text: "Fire assay (cupellation)",
        },
        {
          t: "p",
          text: "A sample is fused, the base metals oxidised and absorbed into a cupel, and the remaining precious metal bead weighed. It is destructive, takes hours, requires a properly equipped laboratory, and it is the reference method — the one refineries and courts rely on. Because it consumes and measures the whole sample rather than a surface, it cannot be defeated by plating or a foreign core.",
        },
        { t: "h3", text: "X-ray fluorescence (XRF)" },
        {
          t: "p",
          text: "A handheld or benchtop instrument reads the elemental composition of the surface layer, in seconds, without damaging the item. It is genuinely useful for screening large numbers of items and for confirming that a refined bar is roughly what it claims to be. Its limitation is fundamental rather than a matter of instrument quality: it reads microns deep. A tungsten core under a gold skin reads as gold.",
        },
        { t: "h3", text: "Specific gravity" },
        {
          t: "p",
          text: "Weighing in air and in water gives density. Gold is unusually dense at 19.3 g/cm³, so most substitutes fail immediately. Tungsten is the exception at almost exactly the same density, which is precisely why it is the fraudster's metal of choice — so specific gravity alone is not sufficient either.",
        },
        { t: "h3", text: "Ultrasonic testing" },
        {
          t: "p",
          text: "Measuring the speed of sound through a bar detects internal discontinuities and cores. It pairs well with XRF and specific gravity because it addresses exactly the gap they leave, and it is non-destructive.",
        },
        {
          t: "note",
          title: "The combination that works",
          text: "Screen on site with XRF plus specific gravity plus ultrasonic. Settle on fire assay or destination refinery outturn. No single non-destructive method is a settlement basis.",
        },
      ],
    },
    {
      heading: "What to write into the contract",
      blocks: [
        {
          t: "ul",
          items: [
            "The named laboratory, and who instructs and pays it.",
            "The sampling protocol, and who is present at sampling and weighing.",
            "Whether settlement follows origin assay or destination outturn.",
            "The tolerance between assays that triggers a dispute, and the umpire laboratory whose result is final.",
            "How retained samples are held, by whom, and for how long.",
            "How weights are established and reconciled, and on whose calibrated scales.",
          ],
        },
        {
          t: "p",
          text: "For refined metal moving into the international market, the London Bullion Market Association's Good Delivery framework sets the recognised standard for bars and the refiners accredited to produce them. Where a buyer needs metal that will be accepted without re-refining, the practical route is material refined by an accredited refiner rather than material assayed at origin.",
        },
      ],
    },
  ],
  related: [
    { label: "Gold supply: forms, purities and lot structures", href: "/gold-supply" },
    { label: "Our verification and documentation process", href: "/process" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: ["gold-supplier-due-diligence-checklist", "how-international-gold-transactions-are-structured"],
};
