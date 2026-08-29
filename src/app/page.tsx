import Link from "next/link";
import type { Metadata } from "next";

import {
  Container,
  Section,
  SectionHeading,
  ButtonLink,
  Arrow,
  Eyebrow,
  Steps,
  Faq,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Ornament } from "@/components/ui/Ornament";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, graph, webPageSchema, serviceSchema, faqSchema } from "@/lib/seo";
import { ARTICLES } from "@/lib/content/resources";
import {
  ShieldIcon,
  DocIcon,
  ScaleIcon,
  RouteIcon,
  VaultIcon,
  GlobeIcon,
} from "@/components/ui/icons";

const TITLE = "Aptus Group — Gold Sourcing from Kenya for International Buyers";
const DESCRIPTION =
  "Aptus Group is a Nairobi trade desk coordinating gold sourcing from Kenya for refineries, dealers, manufacturers and traders abroad — with independent assay, documented export and our own customs clearing, vaulting and freight.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});

const PROCESS = [
  {
    title: "Submit your requirement",
    body: "Form, indicative quantity, fineness, destination market and preferred transaction structure. No obligation, and no material moves.",
    detail: ["Enquiry acknowledged with a named contact", "We say plainly if we cannot serve it"],
  },
  {
    title: "Buyer qualification",
    body: "Mutual KYC. We verify who you are and your capacity to transact; you verify the same about us.",
    detail: ["Corporate identity and beneficial ownership", "Sanctions and PEP screening", "Destination and end-use"],
  },
  {
    title: "Supply verification",
    body: "We confirm availability against the requirement and establish the provenance record before quoting firm.",
    detail: ["Chain-of-custody documentation", "Origin records from point of purchase"],
  },
  {
    title: "Independent assay",
    body: "Purity is established by an independent laboratory. You may instruct your own, and your inspector is welcome at sampling and weighing.",
    detail: ["Fire assay as settlement basis", "Retained sample held for dispute", "Witnessed calibrated weights"],
  },
  {
    title: "Commercial terms and documentation",
    body: "Benchmark, pricing date, differential, Incoterms, exporter of record and settlement mechanism, in writing before anything ships.",
    detail: ["Export permit and customs file assembled", "Documents reconcile across the set"],
  },
  {
    title: "Secure logistics and settlement",
    body: "Insured storage between verification and export, specialist air freight to your nominated consignee, and settlement against a verifiable event.",
    detail: ["No payment before verification", "Bank-to-bank, named entities only"],
  },
];

const FAQ_ITEMS = [
  {
    q: "Can international buyers source gold through Kenya?",
    a: "Yes. Kenya licenses mineral dealing and export under the Mining Act, 2016, administered by the Ministry of Mining, Blue Economy and Maritime Affairs. Export requires a permit supported by a dealer's licence, an assay certificate, tax compliance and the customs documentation those depend on. The requirement for a foreign buyer is to transact with a counterparty that holds the correct licence category and to verify it at source.",
  },
  {
    q: "Where is Aptus Group based?",
    a: "Airport North Road, Nairobi, Kenya. The trade desk, our customs clearing operation and our vaulting facility are all in Nairobi, which is where the regulator, the tax authority, the banks, the laboratories and the long-haul air freight capacity are.",
  },
  {
    q: "What information do you need in a first enquiry?",
    a: "Your company and country, the form and fineness you need, an indicative quantity and frequency, your destination market and consignee, and your preferred transaction structure. That is enough for us to tell you whether we can serve the requirement.",
  },
  {
    q: "How is purity established?",
    a: "By independent assay, not by our own figure. Fire assay is the reference method and the appropriate settlement basis; handheld XRF reads only the surface and is used for screening. You are free to instruct your own laboratory and to have your inspector present at sampling and weighing.",
  },
  {
    q: "Do you work with buyers in Hong Kong?",
    a: "Yes — Hong Kong is one of the markets we are set up to serve, and we maintain a page covering the considerations specific to that corridor, including the Hong Kong DPMS registration regime, freight routing and refiner acceptance.",
  },
  {
    q: "Do you ask for payment before delivery?",
    a: "No. We do not ask for advance fees, release fees, clearance fees or cash, and we do not invoice from or take payment into any account other than our own registered company account. Any approach claiming to be Aptus Group that does otherwise is not us.",
  },
];

export default function HomePage() {
  const featured = ARTICLES.slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="relative overflow-hidden bg-ink-950 text-ink-100 dark-section engraved">
        <Container>
          <div className="grid items-center gap-16 py-[clamp(4rem,10vw,8rem)] lg:grid-cols-[1.35fr_1fr]">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-400">
                <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
                Nairobi, Kenya — international gold sourcing
              </p>

              <h1 className="display-1 mt-7 max-w-[15ch] text-white">
                Gold sourcing from Kenya,{" "}
                <span className="block italic text-gold-300">for buyers who verify </span>
                before they transact.
              </h1>

              <p className="lede mt-8 max-w-2xl text-ink-300">
                Aptus Group coordinates gold sourcing from Kenya for refineries, bullion dealers,
                jewellery manufacturers and commodity traders abroad. Independent assay, an export
                file that reconciles document to document, and our own customs clearing, insured
                vaulting and freight in Nairobi.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Request gold supply
                  <Arrow />
                </ButtonLink>
                <ButtonLink href="/process" variant="on-dark">
                  See how our process works
                </ButtonLink>
              </div>

              <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
                {[
                  ["Based in", "Nairobi, Kenya"],
                  ["Serving", "International buyers"],
                  ["Purity", "Independent assay"],
                  ["In-house", "Freight & vaulting"],
                ].map(([term, detail]) => (
                  <div key={term}>
                    <dt className="text-[0.72rem] uppercase tracking-[0.14em] text-ink-400">
                      {term}
                    </dt>
                    <dd className="mt-1.5 font-serif text-[1.05rem] text-ink-100">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hidden justify-self-center lg:block">
              <Ornament className="h-[26rem] w-[26rem] opacity-90" />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ CREDIBILITY */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Why an international buyer would engage us"
            title="Everything we tell you is designed to be checked by someone else"
            lede="Gold sourcing from this region has a fraud problem, and buyers are right to be sceptical. We have built our process so that the parts that matter are verified by people we do not pay."
          />

          <div className="mt-16 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldIcon size={22} />,
                title: "Verification you control",
                body: "You may instruct your own assay laboratory and have your own inspector present at sampling and weighing. We do not ask you to rely on our figure.",
              },
              {
                icon: <DocIcon size={22} />,
                title: "A file that reconciles",
                body: "Licence, permit, assay, invoice, packing list, customs entry and airway bill agree on entity, weight, fineness and date. Inconsistency is the tell, so we remove it.",
              },
              {
                icon: <ScaleIcon size={22} />,
                title: "Benchmark pricing",
                body: "Quotations reference a published benchmark and a stated differential. We do not offer gold below the market, because nobody legitimately can.",
              },
              {
                icon: <VaultIcon size={22} />,
                title: "Our own infrastructure",
                body: "Customs clearing, insured vaulting and freight coordination are our own operations in Nairobi, not a chain of introductions.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="bg-white p-8 lg:p-9">
                <span className="text-gold-600">{item.icon}</span>
                <h3 className="mt-5 text-[1.15rem] text-ink-950">{item.title}</h3>
                <p className="mt-3 text-[0.94rem] text-ink-600">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-[0.92rem] text-ink-500">
            We publish no certifications, transaction volumes, client names or accreditations that we
            cannot evidence.{" "}
            <Link href="/compliance" className="btn-ghost">
              What we can and cannot substantiate
            </Link>
          </p>
        </Container>
      </Section>

      {/* --------------------------------------------------- WHAT WE PROVIDE */}
      <Section tone="bone">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="What we provide"
              title="A single counterparty across sourcing, verification, documentation and export"
              lede="Most buyers sourcing from this region end up assembling four or five separate relationships. Ours is one desk, accountable end to end."
            />

            <div className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
              {[
                {
                  icon: <ScaleIcon size={20} />,
                  title: "Gold sourcing and supply coordination",
                  body: "Matching a buyer requirement to available Kenyan supply, and quoting against a published benchmark with a stated differential.",
                  href: "/gold-sourcing",
                },
                {
                  icon: <ShieldIcon size={20} />,
                  title: "Buyer qualification and counterparty diligence",
                  body: "Mutual KYC, sanctions and PEP screening, beneficial ownership, and the provenance record behind the material.",
                  href: "/compliance",
                },
                {
                  icon: <DocIcon size={20} />,
                  title: "Export documentation and customs clearing",
                  body: "Permit, declaration, certificate of origin, invoicing and clearance handled by our own licensed clearing operation.",
                  href: "/compliance",
                },
                {
                  icon: <VaultIcon size={20} />,
                  title: "Insured vaulting between verification and export",
                  body: "Access-controlled, insured storage in Nairobi so material is never held informally while a transaction completes.",
                  href: "/logistics",
                },
                {
                  icon: <RouteIcon size={20} />,
                  title: "Secure freight and delivery coordination",
                  body: "Specialist air freight to your nominated refinery, vault or consignee, with continuous cover across every handover.",
                  href: "/logistics",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-5 py-6 transition-colors hover:bg-white"
                >
                  <span className="mt-1 shrink-0 text-gold-600">{item.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 font-serif text-[1.15rem] text-ink-950">
                      {item.title}
                      <Arrow className="shrink-0 text-gold-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-2 block text-[0.94rem] text-ink-600">{item.body}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------ WHY KENYA */}
      <Section tone="light">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Gold sourcing from Kenya"
                title="Why the transaction happens in Nairobi, not at the mine"
                lede="Kenyan gold is produced in the west of the country, much of it artisanal and small-scale. Everything that makes a cross-border transaction safe is in Nairobi."
              />
              <p className="mt-6 max-w-xl text-[0.97rem] text-ink-600">
                The Directorate of Mines that issues and records dealer licences; the Kenya Revenue
                Authority that clears the export; commercial banks with correspondent relationships;
                assay capacity; insured storage; and Jomo Kenyatta International Airport with direct
                long-haul freight to the Gulf, Europe and Asia. A buyer sourcing from Kenya is
                contracting into that infrastructure — which is why the identity and licence position
                of the counterparty matters more than any story about a deposit.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/kenya" variant="secondary">
                  The Kenyan market
                </ButtonLink>
                <ButtonLink href="/nairobi" variant="secondary">
                  Sourcing in Nairobi
                </ButtonLink>
              </div>
            </div>

            <dl className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
              {[
                {
                  term: "Governing framework",
                  detail:
                    "The Mining Act, 2016 and its regulations, administered by the Ministry of Mining, Blue Economy and Maritime Affairs through the Directorate of Mines.",
                },
                {
                  term: "Export authority",
                  detail:
                    "A Mineral Dealer's Trading Licence permits buying, selling, aggregating and exporting. A Mineral Dealer's Permit is domestic only and carries no export authority.",
                },
                {
                  term: "Export documentation",
                  detail:
                    "Export permit, proof of lawful ownership, dealer's licence, assay certificate, KRA tax compliance, export declaration, certificate of origin, invoice, packing list, customs entry, insurance certificate and airway bill.",
                },
                {
                  term: "Language and law",
                  detail:
                    "Commercial and legal documentation is in English, and contracts can specify governing law and dispute forum explicitly.",
                },
              ].map((f) => (
                <div key={f.term} className="py-6">
                  <dt className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-gold-800">
                    {f.term}
                  </dt>
                  <dd className="mt-2 text-[0.95rem] text-ink-700">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- PROCESS */}
      <Section tone="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="How the process works"
            title="Six steps from enquiry to delivered lot"
            lede="Nothing in this sequence asks you to trust us. Each step produces something a third party can check."
          />
          <Steps steps={PROCESS} tone="dark" />
          <div className="mt-12">
            <ButtonLink href="/process" variant="on-dark">
              The process in detail
              <Arrow />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------- INTERNATIONAL BUYERS */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="International buyers"
            title="Built for counterparties who have to answer to a compliance function"
            lede="Refineries, dealers and manufacturers abroad do not only need metal. They need a transaction that can be explained to their own bank and auditor eighteen months later."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <GlobeIcon size={22} />,
                title: "Who we work with",
                items: [
                  "Refineries and refiner agents",
                  "Bullion and precious metals dealers",
                  "Jewellery manufacturers",
                  "Commodity trading houses",
                  "Import and export companies",
                  "Institutional and private buyers operating within their own regulations",
                ],
              },
              {
                icon: <DocIcon size={22} />,
                title: "What we provide to your compliance team",
                items: [
                  "Corporate identity and beneficial ownership records",
                  "Licence and export permit references, confirmable at source",
                  "Provenance documentation for the material",
                  "Independent assay certification and retained samples",
                  "A customs and freight file that reconciles",
                ],
              },
              {
                icon: <RouteIcon size={22} />,
                title: "Markets we are set up to serve",
                items: [
                  "Hong Kong and the wider Asian trading centres",
                  "United Arab Emirates",
                  "Europe and the United Kingdom",
                  "Türkiye and the Levant",
                  "Other destinations subject to refiner acceptance and route feasibility",
                ],
              },
            ].map((col) => (
              <Reveal key={col.title} className="card p-8">
                <span className="text-gold-600">{col.icon}</span>
                <h3 className="mt-5 text-[1.15rem] text-ink-950">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[0.92rem] text-ink-600 before:absolute before:left-0 before:top-[0.68em] before:h-px before:w-2.5 before:bg-gold-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/international-buyers" variant="secondary">
              Working with international buyers
            </ButtonLink>
            <ButtonLink href="/hong-kong-buyers" variant="secondary">
              For Hong Kong buyers
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------- RESOURCES */}
      <Section tone="bone">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Buyer resources"
              title="What we know, written down"
              lede="Original guides on Kenyan export procedure, assay, transaction structure and the fraud patterns this region is known for."
            />
            <ButtonLink href="/resources" variant="secondary" className="shrink-0">
              All resources
              <Arrow />
            </ButtonLink>
          </div>

          <ul className="mt-14 grid gap-px bg-[var(--hairline)] md:grid-cols-3">
            {featured.map((article) => (
              <li key={article.slug} className="bg-ink-50">
                <Link
                  href={`/resources/${article.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 p-8 transition-colors hover:bg-white"
                >
                  <div>
                    <Eyebrow>{article.minutes} min read</Eyebrow>
                    <h3 className="mt-4 text-[1.2rem] text-ink-950">{article.h1}</h3>
                    <p className="mt-3 text-[0.92rem] text-ink-600">{article.answers}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-gold-800">
                    Read the guide
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- FAQ */}
      <Section tone="light">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Common questions"
            title="What buyers ask before they make contact"
          />
          <Faq items={FAQ_ITEMS} />
          <p className="mt-8 text-[0.9rem] text-ink-500">
            More at our{" "}
            <Link href="/faq" className="btn-ghost">
              full list of questions
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CtaSection secondary={{ label: "Read the buyer guide first", href: "/resources/how-to-source-gold-from-kenya" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/", name: TITLE, description: DESCRIPTION }),
          serviceSchema({
            name: "Gold sourcing from Kenya",
            description:
              "Coordination of gold sourcing from Kenya for international buyers, including buyer qualification, provenance and independent assay verification, export documentation, insured vaulting and secure freight.",
            path: "/",
          }),
          faqSchema(FAQ_ITEMS.map((f) => ({ q: f.q, a: f.a }))),
        )}
      />
    </>
  );
}
