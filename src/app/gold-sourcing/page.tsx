import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Container,
  Section,
  SectionHeading,
  FactList,
  ButtonLink,
  Arrow,
  Faq,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import {
  pageMetadata,
  graph,
  webPageSchema,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

const TITLE = "Gold Sourcing from Kenya — What We Do and How We Are Positioned";
const DESCRIPTION =
  "Aptus Group coordinates gold sourcing from Kenya for international buyers: matching requirements to supply, verifying provenance and purity independently, assembling the export file and moving the metal under insurance.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/gold-sourcing",
});

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Gold sourcing", path: "/gold-sourcing" },
];

const FAQ_ITEMS = [
  {
    q: "Are you a miner, a refiner or a trader?",
    a: "None of those. Aptus Group is a sourcing and trade coordination desk. We connect qualified international buyers to gold supply in Kenya and manage verification, documentation, storage and export around that transaction. We do not operate mines and we do not refine metal.",
  },
  {
    q: "Do you sell gold, or arrange it?",
    a: "The structure depends on the transaction and is stated in writing before anything moves — including who the exporter of record is and under which licence. We will not leave that question ambiguous, because ambiguity about the exporter of record is the most common structural failure in this trade.",
  },
  {
    q: "What quantities do you work with?",
    a: "Tell us your requirement and we will tell you whether we can serve it. We would rather decline an enquiry than accept one we cannot fill, and we recommend that a first transaction be sized to test the process rather than to make a margin.",
  },
];

export default function GoldSourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Gold sourcing"
        title="Gold sourcing from Kenya, coordinated end to end"
        summary="Aptus Group is a Nairobi-based trade desk that coordinates gold sourcing from Kenya for international buyers. We match a buyer's requirement to available supply, verify provenance and purity through parties the buyer can choose, assemble the export documentation, hold the material under insurance and move it to the buyer's nominated consignee."
        trail={TRAIL}
        primary={{ label: "Submit a buyer enquiry", href: "/contact" }}
        secondary={{ label: "See our process", href: "/process" }}
      />

      {/* Where we sit in the chain */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Our position in the chain"
            title="What we do, and — just as usefully — what we do not"
            lede="Buyers are misled in this sector more often by vagueness than by outright falsehood. So here is the boundary of our role, stated plainly."
          />

          <div className="mt-14 grid gap-px bg-[var(--hairline)] md:grid-cols-2">
            <Reveal className="bg-white p-9">
              <p className="eyebrow text-gold-800">What Aptus Group does</p>
              <ul className="mt-6 space-y-4">
                {[
                  "Qualifies international buyers and completes mutual KYC before commercial terms.",
                  "Matches a stated requirement — form, fineness, quantity, destination — to available Kenyan supply.",
                  "Establishes and documents the provenance record for the material offered.",
                  "Arranges independent assay, with the buyer free to instruct their own laboratory and attend sampling.",
                  "Assembles the export file: permit, declaration, certificate of origin, invoicing, customs entry.",
                  "Holds material in insured, access-controlled storage between verification and export.",
                  "Coordinates specialist air freight and delivery to the buyer's nominated refinery, vault or consignee.",
                  "Quotes against a published benchmark with a stated differential.",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 text-[0.95rem] text-ink-700 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-gold-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90} className="bg-white p-9">
              <p className="eyebrow text-ink-500">What we do not do</p>
              <ul className="mt-6 space-y-4">
                {[
                  "We do not mine. We are not a producer and we do not hold mineral rights.",
                  "We do not refine. Material requiring refining goes to an accredited refiner, not to us.",
                  "We do not offer gold below the international benchmark, because no legitimate seller can.",
                  "We do not take advance fees, release fees, clearance fees or cash payments of any kind.",
                  "We do not invoice from, or receive payment into, any account other than our own registered company account.",
                  "We do not ask a buyer to rely on an assay we control.",
                  "We do not publish certifications, volumes, client names or accreditations we cannot evidence.",
                  "We do not give legal, tax or investment advice, and nothing here is an offer to sell.",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 text-[0.95rem] text-ink-600 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-ink-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The commercial frame */}
      <Section tone="bone">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="The commercial frame"
              title="What gets agreed in writing before anything moves"
              lede="Every one of these is settled before material is committed. A transaction that leaves any of them open is not ready."
            />
            <FactList
              facts={[
                {
                  term: "Form and fineness",
                  detail:
                    "What is being supplied and to what purity standard, and on whose assay that figure rests.",
                },
                {
                  term: "Quantity and cadence",
                  detail:
                    "The lot size, and whether this is a single transaction or a repeating requirement.",
                },
                {
                  term: "Pricing basis",
                  detail:
                    "Which published benchmark, which fixing, which pricing date, and the differential applied — stated as a formula, not a number.",
                },
                {
                  term: "Assay and settlement",
                  detail:
                    "Which laboratory, who instructs and pays it, whether settlement follows origin assay or destination outturn, the tolerance that triggers a dispute, and the umpire laboratory.",
                },
                {
                  term: "Delivery terms",
                  detail:
                    "Incoterms, where risk passes, the routing and carrier, insurance cover and whose interest is noted, and the consignee at destination.",
                },
                {
                  term: "Exporter of record",
                  detail:
                    "The named entity exporting, and the licence category and number it holds. Never left implicit.",
                },
                {
                  term: "Payment mechanism",
                  detail:
                    "The verifiable event that releases funds, and the bank accounts at both ends — in the registered names of the contracting entities.",
                },
                {
                  term: "Governing law",
                  detail:
                    "The law of the contract and the dispute forum, reviewed by each side's own counsel.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* Onward links */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Go deeper"
            title="The detail behind each part of this"
          />
          <ul className="mt-12 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "What we can supply", body: "Forms, purities and lot structures we quote on.", href: "/gold-supply" },
              { label: "Our six-step process", body: "From enquiry to delivered lot, with what each step produces.", href: "/process" },
              { label: "Compliance and documentation", body: "KYC, AML, permits and the file that has to reconcile.", href: "/compliance" },
              { label: "The Kenyan market", body: "Licensing, export procedure and where risk sits.", href: "/kenya" },
            ].map((item) => (
              <li key={item.href} className="bg-white">
                <Link href={item.href} className="group flex h-full flex-col gap-3 p-8 transition-colors hover:bg-ink-50">
                  <span className="font-serif text-[1.1rem] text-ink-950">{item.label}</span>
                  <span className="text-[0.9rem] text-ink-600">{item.body}</span>
                  <span className="mt-auto pt-4 text-gold-700">
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="About our role" />
          <Faq items={FAQ_ITEMS} />
          <div className="mt-10">
            <ButtonLink href="/faq" variant="secondary">
              All frequently asked questions
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <CtaSection secondary={{ label: "How our process works", href: "/process" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/gold-sourcing", name: TITLE, description: DESCRIPTION }),
          serviceSchema({
            name: "Gold sourcing coordination",
            description: DESCRIPTION,
            path: "/gold-sourcing",
          }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
