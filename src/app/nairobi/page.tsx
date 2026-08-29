import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq, FactList } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE_URL, company, contact } from "@/lib/site";

const TITLE = "Gold Sourcing and Trading in Nairobi";
const DESCRIPTION =
  "Why an international gold transaction from Kenya is structured, verified, documented and shipped in Nairobi — the regulator, the banks, the laboratories, the vaulting and the air freight — and what to expect from a Nairobi counterparty.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/nairobi" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Nairobi", path: "/nairobi" },
];

const FAQ_ITEMS = [
  {
    q: "Where in Nairobi is Aptus Group based?",
    a: `Airport North Road, Nairobi. The trade desk, our customs clearing operation and our vaulting facility are all in Nairobi, close to Jomo Kenyatta International Airport, which is where consignments leave from.`,
  },
  {
    q: "Should I visit before a first transaction?",
    a: "Many buyers do, and it is reasonable. Meet at the counterparty's registered business premises rather than at a hotel, verify the licence with the Directorate of Mines yourself rather than through anyone introduced to you, and instruct your own laboratory and your own advocate. A choreographed visit is a feature of fraud in this region, so structure the visit around independent verification rather than hospitality.",
  },
  {
    q: "Do you meet buyers at hotels?",
    a: "No. We meet at our own premises, because a business address you can verify is part of what you are buying. If someone claiming to represent Aptus Group proposes a hotel meeting, a private viewing room or a cash component, that is not us — contact the trade desk on the published number and check.",
  },
];

export default function NairobiPage() {
  return (
    <>
      <PageHero
        eyebrow="Market — Nairobi"
        title="Nairobi is where the transaction actually happens"
        summary="Kenyan gold is produced in the west of the country, but a cross-border gold transaction is structured, verified, documented and shipped from Nairobi. The regulator, the revenue authority, the banks with correspondent relationships, the testing capacity, the insured storage and the intercontinental air freight are all here. A buyer sourcing from Kenya is, in practice, contracting into Nairobi's institutional infrastructure."
        trail={TRAIL}
        primary={{ label: "Talk to the Nairobi trade desk", href: "/contact" }}
        secondary={{ label: "What buyers should know", href: "/resources/gold-sourcing-in-nairobi-what-buyers-should-know" }}
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="What the city provides"
              title="The infrastructure a cross-border transaction depends on"
              lede="None of this is at the pit. All of it is why the counterparty's Nairobi position matters more than any story about a deposit."
            />
            <FactList
              facts={[
                { term: "Regulator", detail: "The Directorate of Mines within the Ministry of Mining, which issues and records dealer licences and export permits." },
                { term: "Revenue and customs", detail: "The Kenya Revenue Authority for tax compliance, export declaration and customs clearance." },
                { term: "Banking", detail: "Commercial banks with correspondent relationships, so settlement can run bank-to-bank between named entities rather than in cash." },
                { term: "Verification", detail: "Assay capacity, and access to independent laboratories a buyer can instruct directly." },
                { term: "Storage", detail: "Insured, access-controlled vaulting, so material is never held informally while a transaction completes." },
                { term: "Freight", detail: "Jomo Kenyatta International Airport, with direct long-haul capacity to the Gulf, Europe and Asia, and specialist valuables handling." },
                { term: "Professional services", detail: "Advocates, clearing agents and inspectors a buyer can engage independently of the seller." },
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
                { t: "h3", text: "What to expect from a Nairobi counterparty" },
                {
                  t: "ul",
                  items: [
                    "A registered Kenyan legal entity, with a bank account in that entity's own name and no request to pay a third party.",
                    "A stated licence position: either its own mineral dealer's licence, or a named licensed exporter it works through, disclosed without being asked.",
                    "A physical business address you can visit, and a named individual accountable for the transaction.",
                    "Independent assay at a laboratory you are free to choose, with your inspector present at sampling and weighing.",
                    "Insured, access-controlled storage between verification and export.",
                    "A customs and freight route it can describe in detail: carrier, security arrangements, transit points and destination consignee.",
                  ],
                },
                { t: "h3", text: "How to structure a visit" },
                {
                  t: "ol",
                  items: [
                    "Meet at registered business premises. Not a hotel, not a private viewing room.",
                    "Verify the licence yourself with the Directorate of Mines, or through your own advocate — never through someone the seller introduced.",
                    "Instruct your own laboratory and your own inspector, and pay them directly.",
                    "Refuse cash entirely. Every payment bank-to-bank, between named legal entities.",
                    "Engage a Kenyan advocate with no connection to the seller, before funds move rather than after.",
                  ],
                },
                {
                  t: "note",
                  title: "Detail is the test",
                  text: "Ask a prospective counterparty to walk you through their last completed shipment — carrier, destination, consignee type, laboratory, settlement mechanism. Specific detail is difficult to invent under follow-up questions. A rehearsed pitch is not.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="About sourcing in Nairobi" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <CtaSection
        title="Our desk is in Nairobi. Come and check."
        lede="Ask for our entity details, our licence position and our banking details, and verify each of them at source before you transact."
        secondary={{ label: "Compliance and documentation", href: "/compliance" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/nairobi", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
          {
            "@type": "LocalBusiness",
            "@id": `${SITE_URL}/nairobi#localbusiness`,
            name: company.legalName,
            description: company.definition,
            url: `${SITE_URL}/nairobi`,
            telephone: `+${contact.tradeDesk.e164}`,
            email: contact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address.street,
              addressLocality: company.address.locality,
              addressRegion: company.address.region,
              addressCountry: company.address.countryCode,
            },
            geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
            areaServed: { "@type": "Place", name: "Worldwide" },
            parentOrganization: { "@id": `${SITE_URL}/#organization` },
          },
        )}
      />
    </>
  );
}
