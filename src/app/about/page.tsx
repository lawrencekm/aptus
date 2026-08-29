import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, FactList, Verify, Arrow } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { company } from "@/lib/site";

const TITLE = "About Aptus Group";
const DESCRIPTION =
  "Aptus Group is a Nairobi trade and logistics company. This page sets out what the business is, what it operates, how the gold trade desk relates to the freight and vaulting operation, and what we will not claim.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/about" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A Nairobi trade desk, built on a logistics business"
        summary="Aptus Group operates from Airport North Road in Nairobi. The business began in freight, customs clearing, warehousing and insured safe-deposit vaulting across East Africa and the Great Lakes region, and the gold trade desk is built on that infrastructure: the same clearing operation, the same vault, the same freight relationships. That is the difference between coordinating a gold transaction and introducing one."
        trail={TRAIL}
        primary={{ label: "Talk to the trade desk", href: "/contact" }}
        secondary={{ label: "Logistics and vaulting", href: "/logistics" }}
      />

      <Section tone="light">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "What the business is" },
                {
                  t: "p",
                  text: "Aptus Group is a trade and logistics company based in Nairobi, Kenya. It operates two connected lines of business: gold sourcing coordination for international buyers, and the freight, customs clearing, warehousing and safe-deposit vaulting operation the group has run in East Africa and the Great Lakes region.",
                },
                {
                  t: "p",
                  text: "The second is not a side business kept for historical reasons. It is the reason the first can be offered credibly. A gold transaction from Kenya depends on customs clearing, insured storage between verification and export, and secure air freight to a destination consignee. Most desks in this market broker those three things through other people. We run them.",
                },
                { t: "h3", text: "How the gold desk relates to the logistics operation" },
                {
                  t: "ul",
                  items: [
                    "Customs clearing for gold exports is handled through the group's own licensed clearing operation, rather than by an agent introduced for the transaction.",
                    "Material sits in the group's insured, access-controlled vaulting between independent assay and export, so it is never held informally while a transaction completes.",
                    "Freight to the destination consignee is coordinated through the group's existing carrier relationships, with continuous insurance across every handover.",
                    "The commercial and compliance discipline is the same one that applies to bonded cargo: a documented chain, a named accountable party, and a file that reconciles.",
                  ],
                },
                { t: "h3", text: "What we will not claim" },
                {
                  t: "p",
                  text: "Websites in this sector routinely solve the credibility problem by inventing it — years in the gold trade, transaction volumes, client logos, accreditations, government relationships. We publish none of those, because a buyer who checks will find they do not stand up, and a buyer who does not check is not the buyer we want.",
                },
                {
                  t: "p",
                  text: "Our compliance page carries an open list of the things about this business that are not yet evidenced on this site. Ask for any of them directly during buyer qualification.",
                },
                {
                  t: "verify",
                  text: "The 2012 date associated with Aptus Group refers to the logistics business. The period of operation in gold specifically, the registered legal entity name and number, the licence position and the insurance underwriter all require confirmation before they appear as claims on this site.",
                },
              ]}
            />
          </div>

          <div className="mt-12">
            <Link href="/compliance" className="btn btn-secondary">
              What we can and cannot substantiate
              <Arrow />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="bone">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading eyebrow="At a glance" title="The facts about this business" />
            <FactList
              facts={[
                { term: "Legal name", detail: <><span>{company.legalName}</span> <Verify>registered entity name and company number</Verify></> },
                { term: "Head office", detail: `${company.address.street}, ${company.address.locality}, ${company.address.country}` },
                { term: "Lines of business", detail: "Gold sourcing coordination for international buyers; freight, customs clearing, warehousing and safe-deposit vaulting." },
                { term: "Markets served", detail: "Kenya and East Africa for operations; international buyers for the gold trade desk." },
                { term: "Working language", detail: "English, for all commercial and legal documentation." },
                { term: "In the logistics business since", detail: <>2012 <Verify>confirm and distinguish from time in the gold trade</Verify></> },
                { term: "Licence position", detail: <Verify>mineral dealer licence category and number, or the named licensed exporter relied on</Verify> },
                { term: "Insurance", detail: <Verify>underwriter and cover limits for vaulting and in-transit consignments</Verify> },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Judge us on what you can check"
        lede="Ask for the entity details, the licence position and the banking details, and verify each of them at source. That is the standard we would want applied to anyone we bought from."
        secondary={{ label: "Questions to ask any supplier", href: "/resources/questions-to-ask-an-african-gold-supplier" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/about", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
        )}
      />
    </>
  );
}
