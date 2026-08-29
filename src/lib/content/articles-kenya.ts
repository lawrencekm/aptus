import type { Article } from "./types";

export const sourcingFromKenya: Article = {
  slug: "how-to-source-gold-from-kenya",
  title: "How to Source Gold from Kenya: A Guide for International Buyers",
  h1: "How to source gold from Kenya",
  description:
    "What an international buyer actually has to do to source gold from Kenya: who is licensed to sell and export, what documents exist, how purity is established, and where transactions fail.",
  cluster: "kenya",
  answers: "How does an overseas buyer source gold from Kenya without getting it wrong?",
  summary:
    "Sourcing gold from Kenya legitimately means transacting with a counterparty who holds a mineral dealer's licence, taking delivery against an independent assay rather than a seller's own figure, and exporting under a permit issued by the Ministry of Mining with the customs and tax documentation that permit depends on. Almost every failed transaction we see failed at one of those three points.",
  published: "2026-08-29",
  minutes: 9,
  sections: [
    {
      heading: "Start with who is legally allowed to sell you gold",
      blocks: [
        {
          t: "p",
          text: "Kenya's mining sector operates under the Mining Act, 2016 and the regulations made under it, administered by the Ministry of Mining, Blue Economy and Maritime Affairs through the Directorate of Mines. Licences are applied for and held on the online mining cadastre, which means a licence is a matter of record rather than a piece of paper somebody shows you in a hotel lobby.",
        },
        {
          t: "p",
          text: "The distinction that matters most to a foreign buyer is between the licence categories. They are not interchangeable, and a counterparty holding the wrong one cannot lawfully complete your transaction.",
        },
        {
          t: "table",
          caption: "Kenyan mineral dealer licence categories",
          head: ["Instrument", "What it permits", "Relevance to an export buyer"],
          rows: [
            [
              "Mineral Dealer's Trading Licence (MDTL)",
              "Buying, selling, aggregating and exporting specified minerals",
              "This is the category that supports an export sale. Confirm the specified mineral includes gold.",
            ],
            [
              "Mineral Dealer's Processing Licence (MDPL)",
              "Processing, refining, beneficiating and exporting processed minerals",
              "Relevant where the lot is refined or upgraded locally before shipment.",
            ],
            [
              "Mineral Dealer's Permit (MDP)",
              "Domestic dealing only",
              "Does not carry export authority. A permit holder cannot be your exporter of record.",
            ],
          ],
        },
        {
          t: "p",
          text: "Ask for the licence category, the licence number, the licensed entity's exact registered name, and the expiry date — then verify them with the Directorate of Mines directly rather than accepting a scan. A scanned certificate proves nothing; forged permits are a routine feature of gold fraud in the region.",
        },
      ],
    },
    {
      heading: "Understand the two structures a Kenyan sale can take",
      blocks: [
        {
          t: "p",
          text: "There are broadly two ways a foreign buyer ends up holding Kenyan gold, and they carry different risk profiles.",
        },
        {
          t: "ol",
          items: [
            "Export sale, delivered abroad. The licensed exporter ships to the buyer's nominated refinery or vault, and title and payment settle against arrival and the destination refinery's own outturn. The buyer's exposure sits with the exporter and the freight leg, and the final settlement figure follows the destination assay.",
            "Domestic sale, buyer exports. The buyer or the buyer's agent takes delivery in Kenya and handles export themselves. This requires the buyer's side to satisfy the permit, tax and customs requirements, and to hold or contract a licensed party who can. It is the structure most often mis-sold to first-time buyers, because it moves the compliance burden onto the party least able to carry it.",
          ],
        },
        {
          t: "note",
          title: "The practical test",
          text: "Ask directly: who is the exporter of record, and under which licence? A counterparty who cannot answer that in one sentence is not ready to transact.",
        },
      ],
    },
    {
      heading: "Establish purity independently, before value is agreed",
      blocks: [
        {
          t: "p",
          text: "Purity is the price. A one percent difference in fineness on a meaningful lot is a large sum, and it is the single easiest number for a dishonest seller to overstate. Never accept a seller's own assay as the settlement basis.",
        },
        {
          t: "ul",
          items: [
            "X-ray fluorescence (XRF) is fast and non-destructive but reads the surface only, which is precisely why gold-plated tungsten and clad bars are used in fraud. It is a screening tool, not a settlement basis.",
            "Fire assay (cupellation) is destructive and slow but remains the reference method for establishing fineness, and it is what refineries settle on.",
            "Specific gravity and ultrasonic testing help detect a core of a different density, and are useful alongside XRF rather than instead of assay.",
            "The assay that matters commercially is the one performed by an independent laboratory or by the destination refinery — not by the seller, and not by a laboratory the seller introduces.",
          ],
        },
        {
          t: "p",
          text: "Build the assay step into the commercial terms rather than treating it as a formality: state which laboratory, who pays, who witnesses, how disputes are resolved, and whether final settlement follows the origin assay or the destination refinery's outturn. Outturn-based settlement is the norm in refined metal trade for good reason.",
        },
      ],
    },
    {
      heading: "The documentation an export actually generates",
      blocks: [
        {
          t: "p",
          text: "A compliant Kenyan gold export produces a specific, checkable set of documents. Reported requirements include a gold export permit from the Ministry of Mining, evidence of lawful ownership of the material, a valid dealer's licence, an assay certificate, a Tax Compliance Certificate from the Kenya Revenue Authority, an Export Declaration Form, a certificate of origin, commercial invoice and packing list, customs entry and clearance records, an insurance certificate and an airway bill.",
        },
        {
          t: "p",
          text: "Two things follow from that list. First, the documents interlock — the permit depends on the licence and the assay, the customs entry depends on the permit, the airway bill depends on the customs entry. A genuine file is internally consistent. Second, because they interlock, a fabricated file is usually detectable: names, weights, dates and reference numbers stop matching across documents.",
        },
        {
          t: "verify",
          text: "Confirm the exact permit reference, royalty rate and tax position applying to your transaction with the Ministry and the KRA at the time of shipment. Rates and procedures change, and nothing on this page is a substitute for current advice from a Kenyan advocate or licensed customs agent.",
        },
      ],
    },
    {
      heading: "Where transactions go wrong",
      blocks: [
        {
          t: "p",
          text: "East Africa has a well-documented fake-gold problem, and the pattern is consistent enough to be used as a checklist. Reporting by the Global Initiative Against Transnational Organized Crime recorded roughly USD 25 million of losses across 18 reported incidents in Kenya and Uganda in a single twelve-month period, with victims drawn from the UAE, India, Malaysia, Korea and elsewhere.",
        },
        {
          t: "ul",
          items: [
            "A price meaningfully below the international benchmark. There is no discount on gold; there is only a discount on the probability that the gold exists.",
            "Payments requested to intermediaries — a customs officer, a general, an agency contact — rather than to the selling entity's own account.",
            "A sequence of small fees to 'release', 'unlock' or 'clear' a consignment that never moves.",
            "Documents that arrive as images rather than verifiable references, and that cannot be confirmed with the issuing authority.",
            "Pressure to travel, to meet in a hotel, to view material in a private room, or to hand over funds in cash.",
            "A counterparty who resists an independent assay, or who wants the assay done by a laboratory they nominate and accompany.",
          ],
        },
        {
          t: "note",
          title: "One rule covers most of it",
          text: "Never let money move before an independent party has verified both the metal and the seller's authority to sell it. Every variation of this fraud depends on reversing that order.",
        },
      ],
    },
    {
      heading: "A workable sequence for a first transaction",
      blocks: [
        {
          t: "ol",
          items: [
            "Qualify the counterparty: registered entity, licence category and number, directors, and a bank account in the entity's own name.",
            "Agree the commercial frame in writing before any material moves: form, indicative quantity, fineness basis, pricing reference and differential, assay and settlement mechanism, Incoterms, and who is exporter of record.",
            "Complete mutual KYC. A seller who will not complete KYC on you is not a seller who has completed KYC on their own supply.",
            "Verify the material through an independent laboratory, with your own representative or inspector present.",
            "Confirm the export permit and customs entry exist as records, not as attachments.",
            "Settle through a structure where release of funds is tied to a verifiable event — destination refinery outturn, or a documentary instrument through a bank — not to a promise.",
            "Start small. A first lot exists to test the process, not to make the margin.",
          ],
        },
      ],
    },
  ],
  related: [
    { label: "Our sourcing process, step by step", href: "/process" },
    { label: "Compliance and documentation", href: "/compliance" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: [
    "kenya-gold-export-process-and-documentation",
    "gold-supplier-due-diligence-checklist",
    "how-gold-purity-is-verified",
  ],
};

export const exportProcess: Article = {
  slug: "kenya-gold-export-process-and-documentation",
  title: "The Kenya Gold Export Process and the Documents It Produces",
  h1: "The Kenya gold export process, document by document",
  description:
    "The regulators involved in a Kenyan gold export, the permits and certificates a compliant shipment generates, and how a buyer checks that the file is internally consistent.",
  cluster: "kenya",
  answers: "What paperwork does a legitimate Kenyan gold export produce, and how do I check it?",
  summary:
    "A compliant Kenyan gold export is authorised by a permit from the Ministry of Mining, supported by a dealer's licence, an assay certificate and tax compliance, and completed through customs with an export declaration, certificate of origin, invoice, packing list, insurance certificate and airway bill. The documents reference each other, which is what makes a fabricated file detectable.",
  published: "2026-08-29",
  minutes: 7,
  sections: [
    {
      heading: "Who regulates what",
      blocks: [
        {
          t: "table",
          caption: "Authorities a Kenyan gold export touches",
          head: ["Authority", "Role in the transaction"],
          rows: [
            [
              "Ministry of Mining, Blue Economy and Maritime Affairs",
              "Issues mineral dealer licences and the gold export permit; maintains the licensing cadastre through the Directorate of Mines.",
            ],
            [
              "Kenya Revenue Authority (KRA)",
              "Tax Compliance Certificate, Export Declaration Form, customs entry and clearance, royalty and duty position.",
            ],
            [
              "Financial Reporting Centre (FRC)",
              "Kenya's financial intelligence unit; the reporting counterpart for anti-money-laundering obligations.",
            ],
            [
              "Kenya Bureau of Standards (KEBS)",
              "Standards and, where applicable, conformity requirements touching exported goods.",
            ],
            [
              "Customs and border control",
              "Physical export clearance and the record that the consignment lawfully left the country.",
            ],
          ],
        },
        {
          t: "verify",
          text: "The precise sequence and current fee, royalty and reporting position for a specific consignment should be confirmed with a Kenyan advocate or licensed clearing agent at the time of shipment.",
        },
      ],
    },
    {
      heading: "The document set",
      blocks: [
        {
          t: "p",
          text: "Reported requirements for a gold export permit application and the shipment that follows include the items below. Treat this as the shape of a genuine file rather than a definitive statutory list.",
        },
        {
          t: "ul",
          items: [
            "Gold export permit issued by the Ministry of Mining.",
            "Evidence of lawful ownership of the material being exported.",
            "A valid mineral dealer's trading or processing licence held by the exporter.",
            "Assay certificate establishing fineness, issued by a licensed laboratory or refinery.",
            "Tax Compliance Certificate from the Kenya Revenue Authority.",
            "Export Declaration Form (EDF) lodged with KRA.",
            "Certificate of origin.",
            "Commercial invoice and packing list, consistent in weight and description with the assay.",
            "Customs entry and clearance documentation.",
            "Insurance certificate covering the consignment in transit.",
            "Airway bill from the carrier.",
          ],
        },
        {
          t: "p",
          text: "Royalty on minerals is a continuing obligation of the rights holder under the Kenyan regime, and a rate of five per cent of gross value is widely cited for gold. Because fiscal terms are revised from time to time, confirm the figure applying on your shipment date rather than relying on any published summary, including this one.",
        },
      ],
    },
    {
      heading: "How to read the file as a buyer",
      blocks: [
        {
          t: "p",
          text: "You are not auditing the state; you are checking that one story is told consistently by every document. Four cross-checks catch most fabrications.",
        },
        {
          t: "ol",
          items: [
            "Entity consistency. The licensed entity name, the exporter named on the permit, the invoicing entity and the bank account holder should all be the same legal person. Any mismatch requires an explanation in writing before funds move.",
            "Weight and fineness consistency. Gross weight, net weight and fineness should reconcile across the assay certificate, the packing list, the invoice and the airway bill.",
            "Date order. A permit cannot predate the assay it relies on; a customs entry cannot predate the permit; an airway bill cannot predate the entry.",
            "Independent confirmation. Licence and permit references should be confirmable with the issuing authority. Documents that can only ever be confirmed by the seller are not evidence.",
          ],
        },
        {
          t: "note",
          title: "Forged documents are normal in this sector",
          text: "Fabricated export permits, laboratory reports, freight receipts and airway bills are a standard component of gold fraud in East Africa. The defence is not a better eye for a forgery — it is refusing to rely on any document you cannot confirm at source.",
        },
      ],
    },
  ],
  related: [
    { label: "Compliance and documentation at Aptus Group", href: "/compliance" },
    { label: "Gold sourcing from Kenya", href: "/kenya" },
    { label: "Talk to the trade desk", href: "/contact" },
  ],
  seeAlso: ["how-to-source-gold-from-kenya", "recognising-gold-fraud-in-east-africa"],
};

export const nairobiGuide: Article = {
  slug: "gold-sourcing-in-nairobi-what-buyers-should-know",
  title: "Gold Sourcing in Nairobi: What International Buyers Should Know",
  h1: "Gold sourcing in Nairobi: what international buyers should know",
  description:
    "Why Nairobi rather than the goldfields is where an international gold transaction is actually structured, verified, documented and shipped — and what that means for a buyer's risk.",
  cluster: "kenya",
  answers: "Why does a Kenyan gold transaction happen in Nairobi, and what does the city provide?",
  summary:
    "Gold is mined in western Kenya, but the transaction happens in Nairobi because that is where the regulator, the tax authority, the banks, the laboratories, the insured vaulting and the intercontinental air freight are. A buyer sourcing from Kenya is, in practice, contracting into Nairobi's institutional infrastructure rather than into a mine.",
  published: "2026-08-29",
  minutes: 6,
  sections: [
    {
      heading: "The separation between where gold comes from and where it is traded",
      blocks: [
        {
          t: "p",
          text: "Kenyan gold production is concentrated in the west of the country — the Migori and Kakamega belts in particular — and a substantial share of it is artisanal and small-scale. Government policy in recent years has pushed toward formalising that activity and toward local beneficiation, with the National Mining Corporation given a role in state participation.",
        },
        {
          t: "p",
          text: "None of that infrastructure is in Nairobi. What Nairobi has is everything a cross-border transaction needs after the material exists: the Directorate of Mines, the Kenya Revenue Authority, commercial banks with correspondent relationships, testing capacity, insured storage, professional advisers, and Jomo Kenyatta International Airport with direct long-haul freight capacity to the Gulf, Europe and Asia.",
        },
        {
          t: "p",
          text: "For a buyer, the consequence is practical: the questions that determine whether your transaction is safe are answered in Nairobi, not at the pit. Who holds the licence, who is the exporter of record, who assays, who insures, who clears customs, and how funds move — all of it is city infrastructure.",
        },
      ],
    },
    {
      heading: "What a buyer should expect a Nairobi counterparty to provide",
      blocks: [
        {
          t: "ul",
          items: [
            "A registered Kenyan legal entity, with a bank account in that entity's own name and no request to pay a third party.",
            "A stated licence position: either the entity's own mineral dealer's licence, or a named licensed exporter it works through, disclosed up front.",
            "A physical business address a buyer can visit, and a named individual accountable for the transaction.",
            "Independent assay arranged at a laboratory the buyer is free to choose or to send a representative to.",
            "Insured, access-controlled storage between verification and export, rather than material held informally.",
            "A customs and freight route it can describe in detail, including the carrier, the security arrangements at the airport and the consignee at destination.",
          ],
        },
        {
          t: "note",
          title: "A useful question",
          text: "Ask a prospective counterparty to walk you through the last shipment they completed — carrier, destination, consignee type, assay laboratory, settlement mechanism. Detail is hard to invent under follow-up questions; a rehearsed pitch is not.",
        },
      ],
    },
    {
      heading: "Why buyers still travel, and what to do when you arrive",
      blocks: [
        {
          t: "p",
          text: "Serious buyers usually visit before a first transaction, which is reasonable. The risk is that the visit is choreographed: an expensive hotel, a private viewing, introductions to people described as officials, and a sense of momentum that discourages verification.",
        },
        {
          t: "ol",
          items: [
            "Meet at the counterparty's registered business premises, not at a hotel.",
            "Verify the licence with the Directorate of Mines yourself, in person or through your own advocate — not through anyone introduced to you.",
            "Instruct your own laboratory and your own inspector. Pay them directly.",
            "Refuse cash transactions entirely. Every payment should be bank-to-bank between named entities.",
            "Retain a Kenyan advocate who is not connected to the seller before, rather than after, funds move.",
          ],
        },
      ],
    },
  ],
  related: [
    { label: "Gold sourcing in Nairobi", href: "/nairobi" },
    { label: "How our process works", href: "/process" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: ["how-to-source-gold-from-kenya", "recognising-gold-fraud-in-east-africa"],
};
