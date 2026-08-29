import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq } from "@/components/ui/primitives";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const TITLE = "Frequently Asked Questions";
const DESCRIPTION =
  "Answers to the questions international buyers ask about sourcing gold from Kenya: legality, licensing, verification, documentation, transaction structure, Hong Kong buyers, and how Aptus Group works.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/faq" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

const GROUPS: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "Sourcing from Kenya",
    items: [
      {
        q: "Can international buyers source gold through Kenya?",
        a: "Yes. Kenya licenses mineral dealing and export under the Mining Act, 2016, administered by the Ministry of Mining, Blue Economy and Maritime Affairs through the Directorate of Mines. Export requires a permit supported by a dealer's licence, an assay certificate, tax compliance and the customs documentation those depend on. The requirement for a foreign buyer is to transact with a counterparty holding the correct licence category, and to verify that at source.",
      },
      {
        q: "Which licence allows a Kenyan entity to export gold?",
        a: "A Mineral Dealer's Trading Licence permits buying, selling, aggregating and exporting specified minerals. A Mineral Dealer's Processing Licence covers processing, refining and export of processed minerals. A Mineral Dealer's Permit is domestic only and carries no export authority.",
      },
      {
        q: "How do I verify a Kenyan licence or permit?",
        a: "Ask for the category, number, exact registered entity name and expiry date, then confirm them with the Directorate of Mines directly or through your own Kenyan advocate. Licences are held on an online cadastre, so the position is a matter of record. Never accept a scanned certificate as confirmation — forged permits are a routine feature of gold fraud in the region.",
      },
      {
        q: "What documentation does a compliant export produce?",
        a: "A gold export permit, evidence of lawful ownership, a valid dealer's licence, an assay certificate, a Tax Compliance Certificate from the Kenya Revenue Authority, an Export Declaration Form, a certificate of origin, a commercial invoice and packing list, customs entry and clearance documentation, an insurance certificate and an airway bill. The documents reference one another, so a genuine file is internally consistent.",
      },
    ],
  },
  {
    heading: "Verification and trust",
    items: [
      {
        q: "How is gold purity established?",
        a: "By independent assay. Fire assay is the reference method and the appropriate settlement basis because it measures the whole sample destructively. Handheld XRF reads only the surface, which is precisely what plated and clad fraud is built to defeat, so it is a screening tool rather than a settlement basis. Specific gravity and ultrasonic testing help detect a foreign core.",
      },
      {
        q: "Can I use my own laboratory and my own inspector?",
        a: "Yes, and we recommend it. You instruct and pay them directly, and they are welcome at sampling and weighing. We do not ask a buyer to settle on a figure we produced.",
      },
      {
        q: "Why should I believe anything on this website?",
        a: "You should not, on its own. That is why we publish only what can be checked elsewhere, and why our compliance page carries an open list of things about this business that are not yet evidenced. Ask for the entity details, the licence position and the banking details during qualification and verify each at source.",
      },
      {
        q: "How do I know an approach claiming to be Aptus Group is genuine?",
        a: "We do not ask for advance fees, release fees, clearance fees or cash at any stage, and we do not invoice from or receive payment into any account other than our own registered company account. If you receive a message that does any of those things, call the published trade desk number and check before responding.",
      },
    ],
  },
  {
    heading: "Working with us",
    items: [
      {
        q: "Where is Aptus Group based?",
        a: "Airport North Road, Nairobi, Kenya. The trade desk, our customs clearing operation and our vaulting facility are all in Nairobi.",
      },
      {
        q: "What information should I provide in a first enquiry?",
        a: "Your company and country, the form and fineness you need, an indicative quantity and frequency, your destination market and consignee, and your preferred transaction structure. That is enough for us to tell you whether we can serve the requirement. We do not need commercially sensitive detail at this stage.",
      },
      {
        q: "How does the buyer inquiry process work?",
        a: "A named person on the trade desk picks up your enquiry and writes back with the requirement as we understood it. If we cannot serve it, we say so then. If we can, mutual qualification begins — corporate identity, beneficial ownership, screening, banking and end use, in both directions — before any commercial terms are discussed.",
      },
      {
        q: "Do you work with buyers in Hong Kong?",
        a: "Yes. Hong Kong is one of the markets the trade desk is set up to serve, and we maintain a page covering the considerations specific to that corridor — the Hong Kong DPMS registration regime, freight routing through Gulf transit hubs, refiner acceptance and settlement.",
      },
      {
        q: "At what point does payment happen?",
        a: "Against a verifiable event — destination refinery outturn, or presentation of documents under a bank instrument. Bank-to-bank between the named contracting entities. Never in advance of verification, never in cash, and never to a third party.",
      },
      {
        q: "Do you still handle freight and warehousing?",
        a: "Yes. Freight forwarding, customs clearing, warehousing and safe-deposit vaulting remain an operating part of the business, and they are the infrastructure a gold transaction runs on.",
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Frequently asked questions"
        summary="The questions international buyers actually ask before making contact — about the legality and licensing of Kenyan gold export, how purity and provenance are verified, how a transaction is structured and paid for, and how this business works. Answers are factual and, where a claim would need evidence we do not yet publish, we say so."
        trail={TRAIL}
        primary={{ label: "Ask us something else", href: "/contact" }}
        secondary={{ label: "Buyer resource centre", href: "/resources" }}
      />

      <Section tone="light">
        <Container size="narrow">
          {GROUPS.map((group, i) => (
            <div key={group.heading} className={i > 0 ? "mt-20" : ""}>
              <SectionHeading level={2} eyebrow={`0${i + 1}`} title={group.heading} />
              <Faq items={group.items} />
            </div>
          ))}

          <p className="mt-16 text-[0.9rem] text-ink-500">
            Longer treatments of most of these sit in the{" "}
            <Link href="/resources" className="btn-ghost">
              buyer resource centre
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CtaSection secondary={{ label: "How our process works", href: "/process" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/faq", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(ALL),
        )}
      />
    </>
  );
}
