import type { Article } from "./types";

export const transactionStructures: Article = {
  slug: "how-international-gold-transactions-are-structured",
  title: "How International Gold Transactions Are Structured",
  h1: "How international gold transactions are structured",
  description:
    "Pricing references, differentials, Incoterms, settlement against outturn, documentary instruments and consignment structures — the commercial mechanics behind a cross-border gold purchase.",
  cluster: "buyers",
  answers: "What does the commercial structure of a cross-border gold purchase look like?",
  summary:
    "A cross-border gold transaction is priced off a public benchmark plus or minus a differential, delivered on agreed Incoterms, and settled against a verifiable event — usually the destination refinery's outturn or presentation of documents under a bank instrument. Structures where funds move ahead of verification are the ones that fail.",
  published: "2026-08-29",
  minutes: 7,
  sections: [
    {
      heading: "Price is a formula, not a number",
      blocks: [
        {
          t: "p",
          text: "Gold is priced against a public benchmark — commonly the LBMA Gold Price, published twice each London business day — rather than negotiated in the abstract. A commercial quotation therefore has four components.",
        },
        {
          t: "ol",
          items: [
            "The reference: which published price, and which fixing.",
            "The pricing date: the day, or the averaging period, on which the reference is taken.",
            "The differential: a discount or premium reflecting form, fineness, refining cost, freight, insurance, financing and risk.",
            "The quantity basis: fine metal content, not gross weight.",
          ],
        },
        {
          t: "note",
          title: "Why an unexplained discount is a warning rather than an opportunity",
          text: "The differential on legitimately sourced material is bounded by real costs. A quotation far below benchmark is not a better deal; it is a different transaction from the one being described.",
        },
      ],
    },
    {
      heading: "Delivery terms",
      blocks: [
        {
          t: "p",
          text: "Incoterms allocate cost and risk between seller and buyer at each stage. For air-freighted precious metal the terms most often used are CIF or CIP to the destination airport, DAP to a nominated vault or refinery, or ex-works or FCA where the buyer's freight forwarder takes control at origin.",
        },
        {
          t: "ul",
          items: [
            "Establish precisely where risk passes, and confirm insurance covers the whole journey with no gap at the handover point.",
            "Confirm the consignee: for most refinery-bound metal the consignee is the refinery or the buyer's vault operator, not the buyer personally.",
            "Confirm the security arrangements at both airports, and whether a specialist valuables carrier is used.",
            "Confirm who is importer of record at destination and who handles the customs formalities there.",
          ],
        },
      ],
    },
    {
      heading: "Settlement mechanisms",
      blocks: [
        {
          t: "table",
          caption: "Common settlement structures and where the risk sits",
          head: ["Structure", "How it works", "Principal risk"],
          rows: [
            [
              "Settlement against refinery outturn",
              "Metal ships to the destination refinery; final value follows the refinery's determination of recoverable fine metal.",
              "Seller carries the risk until outturn. Standard for unrefined and doré material.",
            ],
            [
              "Documentary letter of credit",
              "The buyer's bank pays against compliant documents presented by the seller.",
              "Bank-mediated, but pays against documents rather than metal — the document set must be specified tightly.",
            ],
            [
              "Escrow against independent verification",
              "Funds held by a regulated third party and released on a verification event both sides defined in advance.",
              "Only as good as the escrow agent. Verify the agent independently; fake escrow is a known fraud pattern.",
            ],
            [
              "Payment on delivery at a vault",
              "Funds release when metal is received and verified into a named vault under the buyer's control.",
              "Clean where the vault is independently operated; meaningless where the vault is the seller's.",
            ],
            [
              "Advance payment",
              "Buyer pays before verification or shipment.",
              "The buyer carries everything. This is the structure that virtually all gold fraud requires.",
            ],
          ],
        },
      ],
    },
    {
      heading: "The compliance layer that sits over all of it",
      blocks: [
        {
          t: "p",
          text: "Gold moves through the regulated financial system, and the transaction structure has to survive contact with it. Banks at both ends will apply anti-money-laundering obligations; destination markets increasingly regulate precious metals dealers directly; and refineries apply their own responsible sourcing standards derived from the OECD framework.",
        },
        {
          t: "ul",
          items: [
            "Complete mutual KYC before commercial terms are finalised, not afterwards.",
            "Expect source-of-funds and source-of-wealth questions from the seller's bank as well as your own.",
            "Establish that the destination refinery will accept material of this origin under its own responsible sourcing policy before shipment, not after.",
            "Keep the documentary record complete: a transaction that cannot be explained to a compliance officer eighteen months later is an unfinished transaction.",
          ],
        },
        {
          t: "verify",
          text: "Structures should be settled with your bank, your counsel and your destination refinery. Nothing here is legal, tax or financial advice.",
        },
      ],
    },
  ],
  related: [
    { label: "Our process from enquiry to delivery", href: "/process" },
    { label: "Working with international buyers", href: "/international-buyers" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: ["how-gold-purity-is-verified", "gold-supplier-due-diligence-checklist"],
};

export const fraudPatterns: Article = {
  slug: "recognising-gold-fraud-in-east-africa",
  title: "Recognising Gold Fraud in East Africa: How the Scams Actually Work",
  h1: "Recognising gold fraud in East Africa",
  description:
    "The documented mechanics of fake-gold fraud in Kenya and the region — the setup, the forged paperwork, the fee sequence — and the controls that make a buyer a poor target.",
  cluster: "buyers",
  answers: "How do gold scams in Kenya and East Africa work, and how do I avoid becoming a target?",
  summary:
    "The regional fake-gold fraud follows a stable script: an introduction offering gold below market, a period of relationship-building in expensive settings, a genuine sample, forged permits and laboratory reports, and a sequence of fees to release a consignment that never exists. It depends entirely on the buyer paying before independent verification. Reverse that order and the script fails.",
  published: "2026-08-29",
  minutes: 7,
  sections: [
    {
      heading: "The documented pattern",
      blocks: [
        {
          t: "p",
          text: "This is not folklore. Research published by the Global Initiative Against Transnational Organized Crime documented approximately USD 25 million in losses across 18 reported incidents in Kenya and Uganda over a twelve-month period, with victims from the UAE, India, Malaysia, Korea and Ukraine among others. Kenyan reporting has covered court cases involving billions of shillings. The consistency of the method across cases is what makes it usable as a checklist.",
        },
        {
          t: "ol",
          items: [
            "Introduction. An approach offering a substantial quantity at a price below the international benchmark, often through an intermediary who appears to be doing the buyer a favour.",
            "Legitimation. Meetings in expensive hotels, displays of wealth, and introductions to people presented as senior officials, military officers, revenue officials or international agency staff.",
            "The sample. A genuine piece of gold, or a gold-plated item, is provided and tests convincingly with a handheld instrument.",
            "The paperwork. Forged export permits, laboratory reports, cargo receipts and airway bills are produced. False documentation is a core component of the method, not an afterthought.",
            "The fees. A sequence of payments is requested to release, clear, insure, or re-test the consignment. Each is smaller than the loss already sunk, which is the psychological engine of the fraud.",
            "The delivery that is not one. Sealed boxes containing brass, pebbles or plated base metal, or a consignment that simply never moves.",
          ],
        },
      ],
    },
    {
      heading: "Why experienced buyers still lose",
      blocks: [
        {
          t: "p",
          text: "The victims in the documented cases are not naive. They are commodity traders and businesspeople. Three mechanisms explain it.",
        },
        {
          t: "ul",
          items: [
            "Sunk cost. Once travel, hotels and initial fees are spent, each new demand is small relative to the existing exposure, and walking away means accepting a certain loss instead of a probable one.",
            "Manufactured authority. Introductions to apparent state officials substitute for institutional verification. The buyer feels they have checked, because someone official-looking confirmed it.",
            "Time pressure. Every version of the fraud includes a reason the normal sequence cannot be followed on this occasion — a departing flight, a competing buyer, a closing window.",
          ],
        },
      ],
    },
    {
      heading: "The controls that actually work",
      blocks: [
        {
          t: "ol",
          items: [
            "No payment of any kind before independent verification of both the metal and the seller's authority to sell it. This single rule defeats the entire pattern.",
            "No cash. Bank-to-bank only, between named legal entities, into an account in the seller's own registered name.",
            "No third-party payments. Not to an official, not to an agent, not to a 'clearing' contact — no exceptions, whatever the story.",
            "Verification at source. Licences confirmed with the issuing authority; assay by a laboratory you instruct and pay; your own inspector present at sampling.",
            "Your own advocate, engaged before funds move, with no connection to the seller or to anyone the seller introduced.",
            "Meetings at registered business premises, never at a hotel or a private room.",
            "A first transaction small enough that its purpose is to test the process.",
          ],
        },
        {
          t: "note",
          title: "If you are already in one",
          text: "Stop paying immediately — the next fee never releases anything. Preserve all correspondence, transfer records and documents, report to the police in the origin jurisdiction and to your own, and instruct counsel in both. Do not accept an offer to recover funds in exchange for a further payment; recovery fraud is a standard second act.",
        },
      ],
    },
    {
      heading: "What legitimate counterparties do differently",
      blocks: [
        {
          t: "p",
          text: "A real supplier's behaviour is boring in specific ways. They quote against a public benchmark rather than below it. They ask you for KYC. They welcome an assay they do not control. They invoice from the entity named on the licence and take payment into that entity's own account. They are willing to lose a deal to a slow process. The absence of urgency is the signal.",
        },
      ],
    },
  ],
  related: [
    { label: "How Aptus Group verifies and documents", href: "/compliance" },
    { label: "Our process", href: "/process" },
    { label: "Talk to the trade desk", href: "/contact" },
  ],
  seeAlso: ["gold-supplier-due-diligence-checklist", "questions-to-ask-an-african-gold-supplier"],
};

export const africaSupply: Article = {
  slug: "sourcing-gold-from-africa-supply-chain-overview",
  title: "Sourcing Gold from Africa: How the Supply Chain Is Structured",
  h1: "Sourcing gold from Africa: how the supply chain is structured",
  description:
    "From artisanal and small-scale production through aggregation, refining and export — how African gold reaches international buyers, and where provenance risk concentrates.",
  cluster: "africa",
  answers: "How does African gold actually reach an international buyer, and where does risk sit?",
  summary:
    "African gold reaches international buyers through two broadly different chains: large-scale mining that sells directly to accredited refiners, and artisanal and small-scale production that passes through local buyers and aggregators before export. The second chain supplies most of the material offered to new international buyers, and it is where provenance risk and documentation risk concentrate.",
  published: "2026-08-29",
  minutes: 7,
  sections: [
    {
      heading: "Two chains, not one",
      blocks: [
        {
          t: "p",
          text: "Understanding which chain a quotation comes from tells you most of what you need to know about the risk you are being offered.",
        },
        {
          t: "table",
          caption: "The two routes African gold takes to market",
          head: ["", "Large-scale mining", "Artisanal and small-scale (ASM)"],
          rows: [
            ["Producer", "Licensed industrial operations with published reporting", "Individual and small operator production, often at varying degrees of formalisation"],
            ["Route to market", "Direct offtake to accredited refiners under long-term agreement", "Local buyers, aggregators, dealers, then export"],
            ["Documentation", "Institutional, auditable, continuous", "Assembled at aggregation; quality varies sharply"],
            ["Availability to a new buyer", "Rarely available — output is contracted", "This is what is offered to most new international buyers"],
            ["Principal risk", "Commercial and price risk", "Provenance, documentation, counterparty and authenticity risk"],
          ],
        },
        {
          t: "p",
          text: "The practical implication is uncomfortable but important: if an unfamiliar counterparty is offering you spot availability of African gold, it is almost certainly aggregated ASM material rather than mine output. That is not disqualifying — a large share of the world's gold has ASM origins, and formalising it is an explicit policy objective in several producing countries — but it does determine what due diligence is required.",
        },
      ],
    },
    {
      heading: "Where the risk concentrates",
      blocks: [
        {
          t: "ul",
          items: [
            "Aggregation. Material from many small sources is combined, and individual provenance is lost unless it is deliberately recorded at each step.",
            "Cross-border movement before export. Gold that has moved between countries before reaching the stated exporter is materially harder to document, and destination refiners will probe it.",
            "Documentation assembled retrospectively. A file created to support an export, rather than accumulated during the chain, is thin under inspection.",
            "Informal payment. Cash-based purchasing upstream leaves no trail, which is a compliance problem at the destination even where nothing improper occurred.",
          ],
        },
        {
          t: "p",
          text: "The OECD Due Diligence Guidance exists precisely because these are structural features rather than individual failings. Its five-step framework — management systems, risk identification, risk response, third-party audit at identified points, and public reporting — is the shape any credible answer to a provenance question takes.",
        },
      ],
    },
    {
      heading: "What this means for a buyer's requirements",
      blocks: [
        {
          t: "ol",
          items: [
            "Ask which chain the material comes from, and expect a direct answer.",
            "Where the answer is ASM, ask what was done about the risks the OECD framework identifies, and what records exist from the point of purchase forward.",
            "Confirm in advance that your destination refinery will accept material of this origin under its own responsible sourcing policy. Refineries decline consignments, and a decline after arrival is an expensive problem.",
            "Treat documentation depth as a commercial variable. Material with a thin file is worth less, takes longer to place, and may not be placeable at all.",
            "Prefer counterparties who volunteer the difficult parts of the chain. Selective silence about upstream steps is a finding.",
          ],
        },
        {
          t: "verify",
          text: "Country-level rules on ASM formalisation, export licensing and beneficiation differ substantially and change. Confirm the current position for each origin country with local counsel before contracting.",
        },
      ],
    },
  ],
  related: [
    { label: "Gold sourcing from Africa", href: "/africa" },
    { label: "Compliance and documentation", href: "/compliance" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: ["how-to-source-gold-from-kenya", "gold-supplier-due-diligence-checklist"],
};

export const hongKongGuide: Article = {
  slug: "sourcing-gold-from-kenya-for-hong-kong-buyers",
  title: "Sourcing Gold from Kenya: A Guide for Hong Kong Buyers",
  h1: "Sourcing gold from Kenya for Hong Kong buyers",
  description:
    "What a Hong Kong dealer, refiner or manufacturer needs to consider when sourcing gold from Kenya: the DPMS registration regime, counterparty diligence, transaction structure, freight and settlement.",
  cluster: "hong-kong",
  answers: "What should a Hong Kong buyer consider before sourcing gold from Kenya?",
  summary:
    "A Hong Kong buyer sourcing from Kenya has obligations at both ends. In Hong Kong, dealers in precious metals and stones must register with the Customs and Excise Department and, where cash transactions at or above HKD 120,000 are involved, meet customer due diligence and record-keeping requirements under the AMLO. In Kenya, the buyer must satisfy itself on licensing, provenance, assay and export documentation before funds move.",
  published: "2026-08-29",
  minutes: 8,
  sections: [
    {
      heading: "Start with your own registration position in Hong Kong",
      blocks: [
        {
          t: "p",
          text: "Hong Kong operates a registration regime for dealers in precious metals and stones (DPMS), administered by the Customs and Excise Department. It matters before a Kenyan transaction is contemplated, because it shapes what your business may lawfully do and what records it must keep.",
        },
        {
          t: "table",
          caption: "The two registration categories",
          head: ["", "Category A", "Category B"],
          rows: [
            ["Covers", "Non-cash specified transactions only", "Cash transactions, and the AML obligations that attach"],
            ["Threshold", "Transactions at or above HKD 120,000, single or linked", "Cash transactions at or above HKD 120,000, single or linked"],
            ["AML obligations", "Registration; cash transactions not permitted", "Customer due diligence and record-keeping under the AMLO, plus fit-and-proper testing"],
          ],
        },
        {
          t: "p",
          text: "Exemptions apply to authorised institutions, pawnbrokers and certain regulated financial institutions conducting ancillary business. The practical consequence for a Kenya sourcing programme is straightforward: structure the transaction so it settles through the banking system rather than in cash, and keep records to the standard the regime expects.",
        },
        {
          t: "verify",
          text: "Confirm your registration category, current fees and obligations with the Customs and Excise Department or your Hong Kong counsel. This summary reflects the published regime and is not advice on your firm's position.",
        },
      ],
    },
    {
      heading: "Why Hong Kong buyers look at Kenya",
      blocks: [
        {
          t: "p",
          text: "Hong Kong is one of the world's established precious metals trading centres, with concentrated refining, fabrication and jewellery manufacturing demand and deep connections into mainland Chinese consumption. That demand needs feedstock, and East African supply is one of the origins that appears in the market.",
        },
        {
          t: "p",
          text: "What Kenya specifically offers is not lower prices — a below-benchmark quotation from any origin should be treated as a warning rather than an opportunity — but an origin with an established licensing framework, a functioning commercial and banking centre in Nairobi, and direct long-haul air freight capacity. The proposition is a documented, verifiable transaction, not a discount.",
        },
      ],
    },
    {
      heading: "The considerations specific to this corridor",
      blocks: [
        { t: "h3", text: "Time zones and pace" },
        {
          t: "p",
          text: "Hong Kong is UTC+8; Nairobi is UTC+3. The five-hour difference leaves a workable overlap between a Hong Kong afternoon and a Nairobi morning, which is when pricing conversations against the London reference are most practical. Expect a counterparty to be explicit about which fixing and which pricing date apply.",
        },
        { t: "h3", text: "Freight routing" },
        {
          t: "p",
          text: "There is no short air route between Nairobi and Hong Kong; consignments transit a hub, most commonly in the Gulf. Every transit point is a handover, and each handover is a place where insurance cover and chain of custody must be continuous. Confirm the routing, the carrier's valuables handling, the security arrangements at each transit point, and the consignee at destination before agreeing terms.",
        },
        { t: "h3", text: "Refining and acceptance" },
        {
          t: "p",
          text: "Establish before shipment that your intended refiner will accept material of this origin under its own responsible sourcing policy, and whether it requires material to arrive already refined by an accredited refiner. Material that arrives and cannot be placed is a far worse outcome than a transaction that was never contracted.",
        },
        { t: "h3", text: "Language and documentation" },
        {
          t: "p",
          text: "Kenyan commercial and legal documentation is in English, which removes a translation layer common to other origins. Contracts should nonetheless specify governing law and dispute forum explicitly, and be reviewed by counsel in both jurisdictions.",
        },
      ],
    },
    {
      heading: "A practical sequence for a first Kenya transaction",
      blocks: [
        {
          t: "ol",
          items: [
            "Confirm your own DPMS registration category covers the structure you intend to use.",
            "Qualify the Kenyan counterparty: registered entity, mineral dealer's licence category and number confirmed with the Directorate of Mines, directors, and a bank account in the entity's own name.",
            "Agree the commercial frame in writing: form, fineness, benchmark and differential, pricing date, Incoterms, exporter of record, and settlement basis.",
            "Instruct your own assay and your own inspector in Kenya. Do not rely on the seller's laboratory.",
            "Confirm acceptance with your Hong Kong refiner or vault operator, and identify the importer of record.",
            "Settle against a verifiable event — outturn or documents under a bank instrument. Never in advance, never in cash, never to a third party.",
            "Size the first lot to test the process end to end.",
          ],
        },
        {
          t: "note",
          title: "The corridor is not the risk",
          text: "Nothing about a Kenya-to-Hong-Kong route is inherently more hazardous than any other origin. The risk sits with counterparty selection and transaction structure — which are the two things a buyer fully controls.",
        },
      ],
    },
  ],
  related: [
    { label: "Working with Hong Kong buyers", href: "/hong-kong-buyers" },
    { label: "Our process", href: "/process" },
    { label: "Submit a buyer enquiry", href: "/contact" },
  ],
  seeAlso: [
    "how-to-source-gold-from-kenya",
    "how-international-gold-transactions-are-structured",
    "gold-supplier-due-diligence-checklist",
  ],
};
