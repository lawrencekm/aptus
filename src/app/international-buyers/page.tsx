import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq, Arrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const TITLE = "Working With International Gold Buyers";
const DESCRIPTION =
  "How Aptus Group works with refineries, dealers, manufacturers and traders outside Kenya: buyer qualification, the evidence your compliance function will need, transaction structure, freight and settlement.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/international-buyers" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "International buyers", path: "/international-buyers" },
];

const BUYER_TYPES = [
  {
    title: "Refineries and refiner agents",
    body: "Feedstock buyers whose acceptance policy governs whether a consignment can be placed at all. We establish acceptance before shipment rather than after arrival.",
    needs: "Provenance record, origin documentation, consistent weights and fineness across the file.",
  },
  {
    title: "Bullion and precious metals dealers",
    body: "Buyers reselling into an onward market, for whom documentation depth is a commercial variable as much as a compliance one.",
    needs: "Assay certification, retained samples, a clean chain of title and a settlement mechanism their bank recognises.",
  },
  {
    title: "Jewellery manufacturers",
    body: "Fabrication buyers with specific fineness and form requirements and a continuity of supply problem rather than a one-off purchase.",
    needs: "Consistent fineness, predictable cadence, and a counterparty that will decline rather than substitute.",
  },
  {
    title: "Commodity traders and trading houses",
    body: "Counterparties who price against a benchmark as a matter of course and who will test whether a quotation is a formula or a number.",
    needs: "Stated reference, fixing, pricing date and differential; clear Incoterms and risk transfer.",
  },
  {
    title: "Import and export companies",
    body: "Intermediaries whose own customers will ask the same questions again, one step further down the chain.",
    needs: "A document set that survives being passed on, and an exporter of record they can name.",
  },
  {
    title: "Institutional and private buyers",
    body: "Buyers operating legitimately within their own jurisdiction's regulations, including registration regimes for precious metals dealers.",
    needs: "A transaction that satisfies their own regulator, not only their own satisfaction.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you work with buyers outside Kenya?",
    a: "Yes — that is the purpose of the trade desk. Our buyers are refineries, bullion dealers, jewellery manufacturers, commodity traders, import and export companies and institutional buyers operating within their own regulations.",
  },
  {
    q: "What will you provide to our compliance function?",
    a: "Corporate identity and beneficial ownership records, licence and export permit references confirmable at source, provenance documentation for the material, independent assay certification and retained samples, and a customs and freight file whose documents reconcile on entity, weight, fineness and date.",
  },
  {
    q: "Which markets do you serve?",
    a: "We are set up to serve Hong Kong and the wider Asian trading centres, the United Arab Emirates, Europe and the United Kingdom, and Türkiye and the Levant, with other destinations subject to refiner acceptance and route feasibility. Tell us your destination and we will tell you whether the route is workable.",
  },
  {
    q: "How do we start?",
    a: "Send a requirement through the enquiry form or message the trade desk directly. We respond with a named contact, a written summary of the requirement as we understood it, and either a qualification pack or a clear statement that we cannot serve it.",
  },
];

export default function InternationalBuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="International buyers"
        title="Built for buyers who answer to a compliance function"
        summary="Aptus Group works with refineries, bullion dealers, jewellery manufacturers, commodity traders and import-export companies outside Kenya. What those buyers need is not only metal — it is a transaction whose provenance, purity, licensing and payment trail can still be explained to their own bank, refiner and auditor eighteen months later. That requirement, rather than price, is what our process is built around."
        trail={TRAIL}
        primary={{ label: "Submit a buyer enquiry", href: "/contact" }}
        secondary={{ label: "For Hong Kong buyers", href: "/hong-kong-buyers" }}
      />

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Who we work with"
            title="Different buyers, different questions"
            lede="The requirement changes depending on where you sit in the chain. So does what we have to evidence."
          />
          <ul className="mt-14 grid gap-px bg-[var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
            {BUYER_TYPES.map((b, i) => (
              <li key={b.title} className="bg-white">
                <Reveal delay={i * 50} className="flex h-full flex-col p-8">
                  <h3 className="text-[1.12rem] text-ink-950">{b.title}</h3>
                  <p className="mt-3 text-[0.93rem] text-ink-600">{b.body}</p>
                  <p className="mt-auto border-t border-[var(--hairline)] pt-4 text-[0.85rem] text-ink-500">
                    <span className="font-semibold uppercase tracking-[0.08em] text-gold-800">Needs: </span>
                    {b.needs}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "What a first engagement looks like" },
                {
                  t: "ol",
                  items: [
                    "You send a requirement: form, fineness, indicative quantity and cadence, destination market and consignee, preferred transaction structure.",
                    "We respond with a named contact and a written summary of the requirement as we understood it — or a clear statement that we cannot serve it.",
                    "Mutual qualification: corporate identity, beneficial ownership, screening, banking and end use, in both directions.",
                    "We confirm supply against the requirement and assemble the provenance record before quoting firm.",
                    "Independent assay, with your laboratory and your inspector if you prefer.",
                    "Commercial terms in writing, the export file assembled, and settlement against a verifiable event.",
                  ],
                },
                { t: "h3", text: "Things we will tell you that other desks may not" },
                {
                  t: "ul",
                  items: [
                    "When we cannot serve a requirement. Declining is a normal outcome and we prefer to do it early.",
                    "When your destination refiner is unlikely to accept material of a given origin, before you contract rather than after arrival.",
                    "When a structure you have been offered elsewhere carries risk you may not have priced — particularly any structure requiring payment before verification.",
                    "What we cannot currently evidence about ourselves. That list is published on our compliance page rather than hidden.",
                  ],
                },
                {
                  t: "note",
                  title: "On time zones",
                  text: "Nairobi is UTC+3. That gives a working overlap with the Gulf and South Asia through most of the day, with Europe from mid-morning, and with East Asia in our morning. Pricing conversations against the London reference are most practical in our afternoon.",
                },
              ]}
            />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/resources/how-international-gold-transactions-are-structured" className="btn btn-secondary">
              How transactions are structured
              <Arrow />
            </Link>
            <Link href="/resources/gold-supplier-due-diligence-checklist" className="btn btn-secondary">
              Due diligence checklist
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="From international buyers" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <CtaSection secondary={{ label: "Our process", href: "/process" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/international-buyers", name: TITLE, description: DESCRIPTION }),
          serviceSchema({
            name: "International buyer facilitation",
            description: DESCRIPTION,
            path: "/international-buyers",
          }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
