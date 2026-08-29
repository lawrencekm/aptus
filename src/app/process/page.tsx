import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const TITLE = "Our Gold Sourcing Process, Step by Step";
const DESCRIPTION =
  "The six steps of an Aptus Group gold transaction — enquiry, buyer qualification, supply verification, independent assay, commercial terms and documentation, and secure logistics and settlement — and what each step produces that a third party can check.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/process",
});

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Our process", path: "/process" },
];

const STEPS = [
  {
    n: "01",
    title: "Submit your requirement",
    lede: "An enquiry costs you nothing and commits neither side. No material moves and no funds are discussed.",
    does: [
      "You tell us the form and fineness you need, an indicative quantity and frequency, your destination market and consignee, and your preferred transaction structure.",
      "We acknowledge with a named contact rather than a generic mailbox.",
      "We tell you plainly whether the requirement is one we can serve. Declining is a normal outcome and we would rather do it at this stage than at any later one.",
    ],
    produces: "A written summary of the requirement as we understood it, so any misunderstanding surfaces immediately.",
  },
  {
    n: "02",
    title: "Buyer qualification",
    lede: "Mutual KYC. We verify you; you verify us. A counterparty unwilling to be verified has told you something important.",
    does: [
      "Corporate identity: registered name, registration number, jurisdiction and registry confirmation.",
      "Beneficial ownership and directors, with identity documents.",
      "Sanctions and politically exposed person screening.",
      "Destination market, end use and intended consignee — because a refiner's acceptance policy can determine whether a shipment is placeable at all.",
      "We provide the same categories of information about ourselves, including our licence position and the entity that will invoice you.",
    ],
    produces: "A completed diligence file on both sides, before any commercial terms are discussed.",
  },
  {
    n: "03",
    title: "Supply verification",
    lede: "We confirm that supply actually exists against your requirement, and establish its provenance record, before quoting firm.",
    does: [
      "Availability confirmed against the specific requirement rather than in the abstract.",
      "Origin and chain-of-custody documentation assembled from the point of purchase forward.",
      "Purchase records evidencing title to the material.",
      "Volume sense-checked against the stated source — quantities out of scale with an origin are the most reliable indicator that a story has been invented.",
    ],
    produces: "A provenance record you can put in front of your own compliance function and your destination refiner.",
  },
  {
    n: "04",
    title: "Independent assay",
    lede: "Purity is the price, and it is the easiest figure in this trade to overstate. So it is not our figure.",
    does: [
      "Assay by an independent laboratory. You may instruct your own instead, and pay it directly.",
      "Your inspector is welcome at sampling and at weighing, on calibrated scales.",
      "Fire assay as the settlement basis on unrefined material; XRF, specific gravity and ultrasonic used for screening, never for value.",
      "A retained sample is held so a later dispute has something to test.",
    ],
    produces: "An assay certificate from a party you selected, and a retained sample held independently.",
  },
  {
    n: "05",
    title: "Commercial terms and documentation",
    lede: "Everything is agreed in writing before material is committed, and the export file is assembled so that it reconciles.",
    does: [
      "Pricing stated as a formula: benchmark, fixing, pricing date and differential.",
      "Incoterms, routing, insurance, consignee and where risk passes.",
      "The exporter of record named, with licence category and number.",
      "Settlement mechanism defined against a verifiable event.",
      "Export permit application, export declaration, certificate of origin, invoice, packing list and customs entry prepared through our own licensed clearing operation.",
    ],
    produces: "A document set in which entity names, weights, fineness and dates agree across every page.",
  },
  {
    n: "06",
    title: "Secure logistics and settlement",
    lede: "Material is stored under insurance, moved by a specialist carrier, and paid for against something that can be checked.",
    does: [
      "Insured, access-controlled storage in Nairobi between verification and export — never informal holding.",
      "Specialist air freight with continuous insurance cover across every handover, including transit hubs.",
      "Delivery to your nominated refinery, vault or consignee, with the importer of record identified in advance.",
      "Settlement against destination outturn or documents under a bank instrument. Bank-to-bank, between the named contracting entities, never in advance and never in cash.",
    ],
    produces: "A completed transaction with a documentary record that still makes sense to an auditor two years later.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does a first transaction take?",
    a: "It depends on the requirement, the diligence both sides run and the destination refiner's acceptance process. We do not quote a fixed timeline, because a compressed timeline is one of the pressures fraud in this sector relies on. We would rather be slower than a competitor and complete.",
  },
  {
    q: "Can I use my own assay laboratory and my own inspector?",
    a: "Yes, and we recommend it. You instruct and pay them directly, and they are welcome at sampling and weighing. We do not ask a buyer to rely on a laboratory we control.",
  },
  {
    q: "At what point do I pay?",
    a: "Against a verifiable event — the destination refinery's outturn, or presentation of documents under a bank instrument. Not before verification, not in cash, and never to a third party. Any request otherwise, from anyone claiming to represent us, is not us.",
  },
  {
    q: "What if the destination assay disagrees with the origin assay?",
    a: "The contract specifies the tolerance that triggers a dispute and names the umpire laboratory whose result is final. That is agreed at step five, before shipment — not negotiated after a disagreement.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Six steps from enquiry to delivered lot"
        summary="An Aptus Group gold transaction runs through six defined stages: requirement, buyer qualification, supply verification, independent assay, commercial terms and documentation, and secure logistics and settlement. Each stage produces evidence a third party can check, which is the point — nothing in this sequence asks a buyer to take our word for anything that matters."
        trail={TRAIL}
        primary={{ label: "Start with an enquiry", href: "/contact" }}
        secondary={{ label: "Compliance and documentation", href: "/compliance" }}
      />

      <Section tone="light">
        <Container>
          <ol className="space-y-px bg-[var(--hairline)]">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-white">
                <Reveal className="grid gap-8 p-8 lg:grid-cols-[auto_1fr_20rem] lg:gap-12 lg:p-12">
                  <span className="font-serif text-4xl text-gold-500 lg:text-5xl" aria-hidden="true">
                    {step.n}
                  </span>

                  <div>
                    <h2 className="display-3 text-ink-950">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-[1.02rem] text-ink-600">{step.lede}</p>
                    <ul className="mt-7 space-y-3">
                      {step.does.map((d) => (
                        <li
                          key={d}
                          className="relative max-w-2xl pl-6 text-[0.94rem] text-ink-700 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-gold-600"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className="self-start border-l-2 border-gold-500 bg-ink-50 px-6 py-5">
                    <p className="eyebrow text-gold-800">What this step produces</p>
                    <p className="mt-2 text-[0.92rem] text-ink-700">{step.produces}</p>
                  </aside>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="About the process" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <CtaSection
        title="Ready to test the process?"
        lede="A first lot exists to prove the sequence works end to end, not to make a margin. Tell us the requirement and we will tell you whether we can serve it."
        secondary={{ label: "Read the due diligence checklist", href: "/resources/gold-supplier-due-diligence-checklist" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/process", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
          {
            "@type": "HowTo",
            "@id": `${SITE_URL}/process#howto`,
            name: "Sourcing gold from Kenya through Aptus Group",
            description: DESCRIPTION,
            step: STEPS.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.lede,
              url: `${SITE_URL}/process#step-${i + 1}`,
            })),
          },
        )}
      />
    </>
  );
}
