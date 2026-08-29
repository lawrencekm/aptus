import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Container,
  Section,
  SectionHeading,
  FactList,
  Verify,
  Faq,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { UNVERIFIED_FACTS } from "@/lib/site";

const TITLE = "Compliance, Verification and Documentation";
const DESCRIPTION =
  "How Aptus Group approaches KYC and AML, provenance and chain of custody, independent assay, and the Kenyan export documentation set — plus an explicit list of the claims we will not make until they are evidenced.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/compliance",
});

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Compliance", path: "/compliance" },
];

const FAQ_ITEMS = [
  {
    q: "Are you OECD certified?",
    a: "No, and neither is anyone else — the OECD Due Diligence Guidance is a framework for how a company manages supply chain risk, not a certification that a body issues. What a buyer should ask is what a counterparty actually does at each of the five steps, and what evidence exists for it. We answer that question in writing during buyer qualification.",
  },
  {
    q: "Will you complete our KYC pack?",
    a: "Yes. We expect to, and we ask the same of you. A counterparty who resists KYC on themselves has almost certainly not applied it to their own supply.",
  },
  {
    q: "Who issues the assay certificate?",
    a: "An independent laboratory, and you may instruct your own and pay it directly. We do not ask a buyer to settle on a figure we produced.",
  },
  {
    q: "Can I confirm your licence position independently?",
    a: "Yes. Licence and permit references should always be confirmable with the issuing authority rather than accepted as a scan, and that applies to us as much as to anyone else. Ask us during qualification and verify it with the Directorate of Mines yourself.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Verification, documentation and the limits of what we claim"
        summary="Aptus Group builds each transaction so that its critical facts are established by parties the buyer chooses: identity through registry records, licence through the issuing authority, purity through an independent laboratory, and export through a customs file whose documents agree with one another. Where a claim cannot be evidenced, we do not make it — and this page lists what those claims currently are."
        trail={TRAIL}
        primary={{ label: "Start buyer qualification", href: "/contact" }}
        secondary={{ label: "Due diligence checklist", href: "/resources/gold-supplier-due-diligence-checklist" }}
      />

      {/* KYC / AML */}
      <Section tone="light">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Buyer qualification"
              title="Know your counterparty, in both directions"
              lede="Qualification runs before commercial terms, not after them. It is mutual by design: everything we ask of a buyer, a buyer is entitled to ask of us."
            />
            <FactList
              facts={[
                {
                  term: "Corporate identity",
                  detail:
                    "Registered legal name, registration number and jurisdiction, confirmed against the companies registry rather than against a letterhead.",
                },
                {
                  term: "Beneficial ownership",
                  detail:
                    "Directors and ultimate beneficial owners, with identity documentation.",
                },
                {
                  term: "Screening",
                  detail:
                    "Sanctions and politically exposed person screening on the entity and its principals.",
                },
                {
                  term: "Banking",
                  detail:
                    "Accounts in the registered names of the contracting entities. No third-party accounts, no personal accounts, no cash.",
                },
                {
                  term: "End use and destination",
                  detail:
                    "The destination market, the intended consignee and, where relevant, the refiner's own acceptance policy for material of this origin.",
                },
                {
                  term: "Anti-money-laundering context",
                  detail:
                    "Kenya's financial intelligence function sits with the Financial Reporting Centre, and Know Your Source and Know Your Customer expectations aligned to the OECD gold guidance apply across the sector.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* Provenance */}
      <Section tone="bone">
        <Container>
          <SectionHeading
            eyebrow="Provenance"
            title="The OECD framework, and what it means in practice"
            lede="The OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas is the reference framework for this sector. It is a five-step process, not a badge."
          />
          <ol className="mt-14 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Management systems", "A company structure that can actually carry a due diligence policy, with named responsibility and record-keeping."],
              ["Identify and assess risk", "Map the chain from the point of purchase forward, and identify where provenance, documentation and counterparty risk concentrate."],
              ["Respond to risk", "A written strategy for the risks found, with steps that change what the business does rather than what it says."],
              ["Third-party audit", "Independent audit of due diligence practice at identified points in the chain — most consequentially at the refiner."],
              ["Report", "Public reporting on supply chain due diligence, so the framework is checkable from outside."],
            ].map(([title, body], i) => (
              <li key={title} className="bg-ink-50 p-7">
                <span className="font-serif text-2xl text-gold-600" aria-hidden="true">
                  {`0${i + 1}`}
                </span>
                <h3 className="mt-4 text-[1.05rem] text-ink-950">{title}</h3>
                <p className="mt-2.5 text-[0.9rem] text-ink-600">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-[0.95rem] text-ink-600">
            A large share of Kenyan gold originates in artisanal and small-scale production, which is
            the part of the chain the framework is most concerned with. That is not a reason to avoid
            the origin — it is the reason the provenance record has to be assembled deliberately,
            from the point of purchase forward, rather than reconstructed at export.
          </p>
        </Container>
      </Section>

      {/* Documentation */}
      <Section tone="light">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Documentation"
                title="The export file, and why it has to reconcile"
              />
              <p className="mt-6 text-[0.97rem] text-ink-600">
                A compliant Kenyan gold export produces a specific set of documents, and they depend
                on one another: the permit rests on the licence and the assay, the customs entry
                rests on the permit, the airway bill rests on the entry. That interdependence is what
                makes a genuine file consistent — and a fabricated one detectable, because names,
                weights, fineness and dates stop agreeing across the set.
              </p>
              <p className="mt-4 text-[0.97rem] text-ink-600">
                Forged export permits, laboratory reports, freight receipts and airway bills are a
                standard component of gold fraud in this region. The defence is not a sharper eye for
                a forgery. It is refusing to rely on any document that cannot be confirmed at source.
              </p>
            </div>

            <Reveal className="card p-8">
              <p className="eyebrow text-gold-800">Documents a compliant export generates</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Gold export permit — Ministry of Mining, Blue Economy and Maritime Affairs",
                  "Evidence of lawful ownership of the material",
                  "Mineral dealer's trading or processing licence held by the exporter",
                  "Assay certificate establishing fineness",
                  "Tax Compliance Certificate — Kenya Revenue Authority",
                  "Export Declaration Form (EDF)",
                  "Certificate of origin",
                  "Commercial invoice and packing list",
                  "Customs entry and clearance documentation",
                  "Insurance certificate covering the consignment in transit",
                  "Airway bill",
                ].map((d) => (
                  <li
                    key={d}
                    className="relative pl-6 text-[0.92rem] text-ink-700 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-gold-600"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.85rem] text-ink-500">
                Royalty on minerals is a continuing obligation under the Kenyan regime and a rate of
                five per cent of gross value is widely cited for gold. Fiscal terms are revised from
                time to time — confirm the position applying on your shipment date.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What we will not claim */}
      <Section tone="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="What we will not claim"
            title="An open list of what this site does not yet evidence"
            lede="Most websites in this sector solve the credibility problem by inventing credentials. We would rather publish the gap. Each item below is being substantiated; until it is, it does not appear as a claim anywhere on this site."
          />

          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2">
            {UNVERIFIED_FACTS.map((fact) => (
              <li key={fact} className="bg-ink-950 px-7 py-5 text-[0.93rem] text-ink-300">
                {fact}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl text-[0.95rem] text-ink-300">
            If you are evaluating us as a counterparty, ask for any of these directly during buyer
            qualification. We would rather answer &ldquo;we cannot evidence that yet&rdquo; than have
            you discover it later.
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="On compliance" />
          <Faq items={FAQ_ITEMS} />
          <p className="mt-10 text-[0.9rem] text-ink-500">
            <Verify>
              This page describes Kenyan procedure as published by regulators and legal
              commentators. It is not legal advice. Confirm the current position for your
              transaction with qualified counsel in Kenya and in your destination jurisdiction.
            </Verify>
          </p>
        </Container>
      </Section>

      <CtaSection
        title="Verify us before you transact with us"
        lede="That is not a slogan. Ask for our licence position, our entity details and our banking details during qualification, and confirm each of them at source."
        primaryLabel="Begin buyer qualification"
        secondary={{ label: "Questions to ask any supplier", href: "/resources/questions-to-ask-an-african-gold-supplier" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/compliance", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
