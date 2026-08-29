import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq, Arrow, FactList } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { contact, whatsappLink } from "@/lib/site";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { EVENTS } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/ui/icons";

const TITLE = "Kenya Gold Sourcing for Hong Kong Buyers";
const DESCRIPTION =
  "For Hong Kong dealers, refiners and manufacturers sourcing gold from Kenya: the DPMS registration regime, counterparty verification in Kenya, freight routing, refiner acceptance, settlement and the practical sequence for a first transaction.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/hong-kong-buyers" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Hong Kong buyers", path: "/hong-kong-buyers" },
];

const FAQ_ITEMS = [
  {
    q: "Do you work with buyers in Hong Kong?",
    a: "Yes. Hong Kong is one of the markets our trade desk is set up to serve, and we deal with buyers there in English, with commercial and legal documentation in English on the Kenyan side.",
  },
  {
    q: "Do we need to be registered in Hong Kong to buy gold from Kenya?",
    a: "Hong Kong operates a registration regime for dealers in precious metals and stones, administered by the Customs and Excise Department. Category A covers non-cash specified transactions; Category B covers cash transactions and carries customer due diligence and record-keeping obligations under the AMLO. Both categories track transactions at or above HKD 120,000, single or linked. Confirm your own position with the department or your Hong Kong counsel.",
  },
  {
    q: "How does gold get from Nairobi to Hong Kong?",
    a: "There is no short direct air route; consignments transit a hub, most commonly in the Gulf. Every transit point is a handover, so the material questions are the carrier's valuables handling, whether insurance cover is continuous across each handover, the security arrangements at each transit point, and who the consignee and importer of record are at destination.",
  },
  {
    q: "Will our refiner in Hong Kong accept Kenyan material?",
    a: "That has to be established before shipment. Refineries apply their own responsible sourcing policies derived from the OECD framework and they do decline consignments. If your refiner requires material already refined by an accredited refiner, we will tell you that rather than ship and hope.",
  },
  {
    q: "Can we pay in cash or through a third party?",
    a: "No. Settlement is bank-to-bank between the named contracting entities, against a verifiable event — destination outturn or documents under a bank instrument. We do not take cash, advance fees or payments routed through third parties, and structuring a transaction that way would also sit badly against your own obligations in Hong Kong.",
  },
];

export default function HongKongPage() {
  return (
    <>
      <PageHero
        eyebrow="Market — Hong Kong"
        title="Sourcing gold from Kenya into Hong Kong"
        summary="A Hong Kong buyer sourcing from Kenya carries obligations at both ends of the corridor. In Hong Kong, dealers in precious metals and stones register with the Customs and Excise Department, and cash transactions at or above HKD 120,000 bring customer due diligence and record-keeping duties under the AMLO. In Kenya, the buyer must satisfy itself on the counterparty's licence, the material's provenance, an independent assay and the export file — before funds move. This page covers what is specific to that corridor."
        trail={TRAIL}
        primary={{ label: "Submit a buyer enquiry", href: "/contact" }}
        secondary={{ label: "Full Hong Kong guide", href: "/resources/sourcing-gold-from-kenya-for-hong-kong-buyers" }}
      />

      {/* HK regime */}
      <Section tone="light">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Your side of the corridor"
              title="The Hong Kong DPMS registration regime"
              lede="This shapes what your business may lawfully do and what records it must keep, and it is worth settling before a Kenyan transaction is contemplated."
            />
            <FactList
              facts={[
                {
                  term: "Who registers",
                  detail:
                    "Persons and companies carrying on a business dealing in precious metals and stones and engaging in specified transactions. Exemptions apply to authorised institutions, pawnbrokers and certain regulated financial institutions conducting ancillary business.",
                },
                {
                  term: "Category A",
                  detail:
                    "Non-cash specified transactions only — bank transfer, cheque, card, e-wallet. Cash transactions are not permitted under this category.",
                },
                {
                  term: "Category B",
                  detail:
                    "Cash transactions, with customer due diligence and record-keeping obligations under the AMLO, and fit-and-proper testing for the persons concerned.",
                },
                {
                  term: "Threshold",
                  detail:
                    "HKD 120,000 or equivalent, applied to single or linked transactions, tracked separately for cash and non-cash.",
                },
                {
                  term: "Practical consequence",
                  detail:
                    "Structure a Kenya sourcing programme to settle through the banking system rather than in cash, and keep records to the standard the regime expects.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "Why Hong Kong buyers look at Kenya" },
                {
                  t: "p",
                  text: "Hong Kong is one of the world's established precious metals trading centres, with concentrated refining, fabrication and jewellery manufacturing demand and deep connections into mainland Chinese consumption. That demand needs feedstock, and East African supply is one of the origins that appears in the market.",
                },
                {
                  t: "p",
                  text: "What Kenya offers specifically is not a lower price. A below-benchmark quotation from any origin should be read as a warning rather than an opportunity, and we will not make one. What it offers is an origin with a codified licensing framework under the Mining Act, 2016, a functioning commercial and banking centre in Nairobi, English-language documentation, and direct long-haul air freight capacity.",
                },
                { t: "h3", text: "What is specific to this corridor" },
                {
                  t: "table",
                  head: ["Consideration", "What it means in practice"],
                  rows: [
                    ["Time zone", "Hong Kong is UTC+8, Nairobi UTC+3. A Hong Kong afternoon overlaps a Nairobi morning, which is the practical window for pricing against the London reference."],
                    ["Freight routing", "No short direct route; consignments transit a hub, commonly in the Gulf. Each transit is a handover where cover and custody must be continuous."],
                    ["Refiner acceptance", "Establish before shipment whether your refiner accepts material of this origin, and whether it requires metal already refined by an accredited refiner."],
                    ["Documentation language", "Kenyan commercial and legal documentation is in English, removing a translation layer common to other origins."],
                    ["Governing law", "Specify governing law and dispute forum explicitly, and have the contract reviewed by counsel in both jurisdictions."],
                    ["Settlement", "Bank-to-bank between named entities against a verifiable event. Never in advance, never in cash, never to a third party."],
                  ],
                },
                { t: "h3", text: "A practical sequence for a first transaction" },
                {
                  t: "ol",
                  items: [
                    "Confirm your own DPMS registration category covers the structure you intend to use.",
                    "Qualify the Kenyan counterparty: registered entity, mineral dealer's licence category and number confirmed with the Directorate of Mines, directors, and a bank account in the entity's own registered name.",
                    "Agree the commercial frame in writing: form, fineness, benchmark and differential, pricing date, Incoterms, exporter of record and settlement basis.",
                    "Instruct your own assay laboratory and your own inspector in Kenya. Do not rely on the seller's laboratory.",
                    "Confirm acceptance with your Hong Kong refiner or vault operator, and identify the importer of record.",
                    "Settle against outturn or documents under a bank instrument.",
                    "Size the first lot to test the process end to end.",
                  ],
                },
                {
                  t: "note",
                  title: "The corridor is not the risk",
                  text: "Nothing about a Kenya-to-Hong-Kong route is inherently more hazardous than any other origin. The risk sits with counterparty selection and transaction structure — the two things a buyer fully controls.",
                },
                {
                  t: "verify",
                  text: "This page summarises the published Hong Kong regime and Kenyan procedure. It is not legal advice on your firm's position. Confirm your registration category and obligations with the Customs and Excise Department or your Hong Kong counsel.",
                },
              ]}
            />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/resources/sourcing-gold-from-kenya-for-hong-kong-buyers" className="btn btn-secondary">
              The full Hong Kong guide
              <Arrow />
            </Link>
            <Link href="/kenya" className="btn btn-secondary">
              The Kenyan market
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="From Hong Kong buyers" />
          <Faq items={FAQ_ITEMS} />

          <div className="mt-12 border-t border-[var(--hairline)] pt-8">
            <p className="text-[0.95rem] text-ink-600">
              Hong Kong hours overlap our afternoon. If a written enquiry is not the fastest route,
              message the trade desk directly.
            </p>
            <TrackedLink
              href={whatsappLink(
                "Hello Aptus Group trade desk — I am a Hong Kong based buyer enquiring about gold sourcing from Kenya. Our company is [company] and our destination refiner is [refiner].",
              )}
              event={EVENTS.whatsappClicked}
              location="hong_kong_page"
              className="btn btn-secondary mt-5"
            >
              <WhatsAppIcon size={17} className="text-gold-700" />
              WhatsApp the trade desk — {contact.whatsappDisplay}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Sourcing gold from Kenya into Hong Kong?"
        lede="Tell us the form, fineness, quantity and your destination refiner, and we will tell you plainly whether the route works and on what terms."
        secondary={{ label: "Working with international buyers", href: "/international-buyers" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/hong-kong-buyers", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
