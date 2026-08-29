import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { company, contact } from "@/lib/site";

const TITLE = "Terms of Use";
const DESCRIPTION =
  "The terms on which this website is provided, including the status of the information published here and the limits of what it represents.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/terms" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Terms of use", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        summary="This website provides information about Aptus Group and about sourcing gold from Kenya. Nothing on it is an offer to sell, a guarantee of availability or price, or legal, tax or financial advice. Every transaction is subject to buyer qualification, compliance checks and signed commercial terms."
        trail={TRAIL}
      />

      <Section tone="light">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "Status of the information published here" },
                {
                  t: "ul",
                  items: [
                    "Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a commitment to supply.",
                    "No price, differential, quantity, purity or availability described here is binding. Commercial terms exist only in a signed agreement.",
                    "Descriptions of Kenyan, Hong Kong or international regulatory requirements are summaries of published material at the time of writing. Rules change; confirm the current position with qualified counsel.",
                    "Nothing here is legal, tax, investment or financial advice, and no advisory relationship is created by reading it.",
                  ],
                },
                { t: "h3", text: "Transactions" },
                {
                  t: "p",
                  text: "Any transaction is subject to buyer qualification, counterparty and compliance checks in both directions, independent verification of the material, and signed commercial terms. We may decline an enquiry or discontinue a discussion at any stage without giving reasons.",
                },
                { t: "h3", text: "Communications and impersonation" },
                {
                  t: "p",
                  text: `We do not request advance fees, release fees, clearance fees or cash payments at any stage, and we do not invoice from or receive payment into any account other than our own registered company account. If you receive a communication claiming to be from ${company.legalName} that does otherwise, treat it as fraudulent and contact us on the published trade desk number before responding.`,
                },
                { t: "h3", text: "Third-party links" },
                {
                  t: "p",
                  text: "Where this website refers to external authorities, standards bodies or published research, those references are for the reader's own verification. We are not responsible for the content of external websites.",
                },
                { t: "h3", text: "Intellectual property" },
                {
                  t: "p",
                  text: `The content of this website, including the guides in the resource centre, is the original work of ${company.legalName} unless stated otherwise. It may be quoted with attribution and a link, but not reproduced wholesale.`,
                },
                { t: "h3", text: "Contact" },
                {
                  t: "p",
                  text: `${company.address.street}, ${company.address.locality}, ${company.address.country}. Email ${contact.email}. Trade desk ${contact.tradeDesk.display}.`,
                },
                {
                  t: "verify",
                  text: "These terms are a plain-language starting point and must be reviewed and completed by counsel before publication, including governing law, jurisdiction, liability limitations and the registered entity's details.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <JsonLd data={graph(webPageSchema({ path: "/terms", name: TITLE, description: DESCRIPTION }), breadcrumbSchema(TRAIL))} />
    </>
  );
}
