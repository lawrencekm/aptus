import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq, Arrow } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const TITLE = "Gold in Kenya: Licensing, Export and What Buyers Need to Know";
const DESCRIPTION =
  "How the Kenyan gold trade is regulated under the Mining Act 2016, which licence categories carry export authority, what a compliant export produces, and where the real risks sit for an international buyer.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/kenya" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Kenya", path: "/kenya" },
];

const FAQ_ITEMS = [
  {
    q: "Is it legal for a foreign buyer to source gold from Kenya?",
    a: "Yes, where the transaction runs through a counterparty holding the correct licence and the export is authorised by a permit from the Ministry of Mining with the supporting tax and customs documentation. The legality question in practice is not about the buyer's nationality; it is about whether the seller holds export authority and whether the material's provenance can be documented.",
  },
  {
    q: "Which licence allows a Kenyan entity to export gold?",
    a: "A Mineral Dealer's Trading Licence permits buying, selling, aggregating and exporting specified minerals. A Mineral Dealer's Processing Licence covers processing, refining and export of processed minerals. A Mineral Dealer's Permit is domestic only and carries no export authority — a permit holder cannot be your exporter of record.",
  },
  {
    q: "How do I verify a Kenyan gold licence?",
    a: "Licences are applied for and held through the Directorate of Mines and the online mining cadastre, which means the licence position is a matter of record. Ask for the category, number, exact registered entity name and expiry, then confirm them with the Directorate directly or through your own Kenyan advocate. Do not accept a scan.",
  },
  {
    q: "What royalty applies to gold exports from Kenya?",
    a: "Royalty is a continuing obligation of mineral rights holders under the Kenyan regime, and a rate of five per cent of gross value is widely cited for gold. Fiscal terms are revised from time to time, so confirm the rate applying on your shipment date with the Kenya Revenue Authority or Kenyan counsel rather than relying on any published summary.",
  },
];

export default function KenyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Market — Kenya"
        title="Gold in Kenya: how the trade is licensed, documented and exported"
        summary="Kenya regulates mineral dealing and export under the Mining Act, 2016, administered by the Ministry of Mining, Blue Economy and Maritime Affairs through the Directorate of Mines, with licences applied for and recorded on an online cadastre. For an international buyer, the practical consequence is that a counterparty's authority to sell and export is a matter of public record — and therefore something you can and should verify at source rather than accept on trust."
        trail={TRAIL}
        primary={{ label: "Source gold from Kenya", href: "/contact" }}
        secondary={{ label: "Full buyer guide", href: "/resources/how-to-source-gold-from-kenya" }}
      />

      <Section tone="light">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "Where Kenyan gold comes from" },
                {
                  t: "p",
                  text: "Kenyan gold production is concentrated in the west of the country, notably the Migori and Kakamega belts, and a substantial share of it is artisanal and small-scale rather than industrial. Government policy has been moving toward formalising that activity and toward local beneficiation and value addition, with the National Mining Corporation given a role in state participation and commercial development.",
                },
                {
                  t: "p",
                  text: "For a buyer, this matters in one specific way: if an unfamiliar counterparty offers spot availability of Kenyan gold, it is far more likely to be aggregated artisanal material than mine output, because industrial output is generally contracted. That is not disqualifying — but it determines what due diligence the transaction requires, and it is where provenance risk concentrates.",
                },
                { t: "h3", text: "The licensing framework" },
                {
                  t: "table",
                  caption: "Mineral dealer instruments under the Kenyan regime",
                  head: ["Instrument", "Authorises", "Export authority"],
                  rows: [
                    ["Mineral Dealer's Trading Licence (MDTL)", "Buying, selling, aggregating and exporting specified minerals", "Yes"],
                    ["Mineral Dealer's Processing Licence (MDPL)", "Processing, refining, beneficiating and exporting processed minerals", "Yes, for processed minerals"],
                    ["Mineral Dealer's Permit (MDP)", "Domestic dealing only", "No"],
                  ],
                },
                {
                  t: "note",
                  title: "The question that resolves most of this",
                  text: "Who is the exporter of record on my consignment, and under which licence category and number? A counterparty who cannot answer that in one sentence is not ready to transact, whatever else they can show you.",
                },
                { t: "h3", text: "The authorities a transaction touches" },
                {
                  t: "table",
                  head: ["Authority", "Role"],
                  rows: [
                    ["Ministry of Mining, Blue Economy and Maritime Affairs", "Mineral dealer licences and the gold export permit, through the Directorate of Mines"],
                    ["Kenya Revenue Authority", "Tax Compliance Certificate, Export Declaration Form, customs entry and clearance, royalty and duty"],
                    ["Financial Reporting Centre", "Kenya's financial intelligence unit and AML reporting counterpart"],
                    ["Kenya Bureau of Standards", "Standards and conformity requirements where applicable"],
                    ["Customs and border control", "Physical export clearance and the record of lawful departure"],
                  ],
                },
                { t: "h3", text: "What a compliant export produces" },
                {
                  t: "p",
                  text: "Reported requirements include a gold export permit, evidence of lawful ownership, a valid dealer's licence, an assay certificate from a licensed laboratory or refinery, a Tax Compliance Certificate, an Export Declaration Form, a certificate of origin, commercial invoice and packing list, customs entry and clearance documentation, an insurance certificate and an airway bill.",
                },
                {
                  t: "p",
                  text: "These documents depend on one another, which is what makes a genuine file internally consistent and a fabricated one detectable. Check entity names, gross and net weights, fineness and dates across the whole set — fabrications fail on consistency long before they fail on appearance.",
                },
                { t: "h3", text: "The risk that actually matters" },
                {
                  t: "p",
                  text: "Kenya's regulatory framework is not the problem an international buyer faces. Counterparty selection is. The region has a well-documented fake-gold fraud industry: research by the Global Initiative Against Transnational Organized Crime recorded roughly USD 25 million in losses across 18 reported incidents in Kenya and Uganda in a twelve-month period, and forged permits, laboratory reports and airway bills are a standard part of the method.",
                },
                {
                  t: "p",
                  text: "Every documented version of that fraud requires the buyer to pay before independent verification. A buyer who refuses to reverse that order is a poor target, regardless of how convincing the presentation is.",
                },
                {
                  t: "verify",
                  text: "This page summarises published regulatory material. Confirm the current licensing, permit, royalty and tax position for your transaction with Kenyan counsel or a licensed clearing agent before contracting.",
                },
              ]}
            />
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/nairobi" className="btn btn-secondary">
              Sourcing in Nairobi
              <Arrow />
            </Link>
            <Link href="/resources/kenya-gold-export-process-and-documentation" className="btn btn-secondary">
              The export process in detail
            </Link>
            <Link href="/resources/recognising-gold-fraud-in-east-africa" className="btn btn-secondary">
              How the fraud works
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="About sourcing from Kenya" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <CtaSection secondary={{ label: "How our process works", href: "/process" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/kenya", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
