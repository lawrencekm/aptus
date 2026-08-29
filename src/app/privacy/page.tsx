import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { company, contact } from "@/lib/site";

const TITLE = "Privacy Notice";
const DESCRIPTION =
  "How Aptus Group handles the information you provide through this website, what we collect, why, how long we keep it and what rights you have.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/privacy" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Privacy notice", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        summary="This notice explains what information this website collects, why, how long it is kept and how to ask us about it. In short: we collect what you type into an enquiry form so we can answer it, and nothing else that identifies you."
        trail={TRAIL}
      />

      <Section tone="light">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "Who is responsible" },
                {
                  t: "p",
                  text: `${company.legalName}, ${company.address.street}, ${company.address.locality}, ${company.address.country}, is responsible for information collected through this website. Questions about this notice can be sent to ${contact.email}.`,
                },
                {
                  t: "verify",
                  text: "Registered legal entity name, company registration number, and registration status with the Office of the Data Protection Commissioner in Kenya, must be confirmed and inserted here before publication.",
                },
                { t: "h3", text: "What we collect" },
                {
                  t: "ul",
                  items: [
                    "Information you enter into the buyer enquiry form: your name, company, country, email address, telephone or WhatsApp number if you provide one, buyer type, and the details of your requirement.",
                    "The content of any email, telephone or WhatsApp conversation you start with us.",
                    "Aggregate, non-identifying interaction events — such as which pages are viewed and which calls to action are used — where website analytics is configured.",
                  ],
                },
                {
                  t: "note",
                  title: "What we do not ask for on this website",
                  text: "We do not ask for identity documents, banking details, payment details or any financial information through this website or in a first reply to an enquiry. If you receive a request that does, it did not come from us — call the published trade desk number and check.",
                },
                { t: "h3", text: "Why we use it" },
                {
                  t: "ul",
                  items: [
                    "To answer your enquiry and to have the conversation you started.",
                    "To carry out counterparty due diligence where a commercial relationship is being considered, which is a requirement of operating in this sector rather than a marketing activity.",
                    "To keep records of business communications as required for tax, compliance and audit.",
                  ],
                },
                { t: "h3", text: "Who sees it" },
                {
                  t: "p",
                  text: "Enquiry details are delivered to our trade desk mailbox. We use a third-party email delivery provider to transmit them, and a hosting provider to run this website; both process the information on our instructions. We do not sell information, and we do not share it for advertising.",
                },
                { t: "h3", text: "How long we keep it" },
                {
                  t: "p",
                  text: "Enquiries that do not lead to a commercial relationship are retained only as long as needed to conclude the conversation and to keep an ordinary business record. Where a relationship is entered into, records are kept for the period required by applicable tax, anti-money-laundering and audit obligations.",
                },
                { t: "h3", text: "Cookies and analytics" },
                {
                  t: "p",
                  text: "This website does not set advertising cookies and does not use third-party tracking for advertising. Where analytics is configured, it records aggregate interaction events — page views and calls to action used — rather than anything that identifies you personally.",
                },
                { t: "h3", text: "Your rights" },
                {
                  t: "p",
                  text: "Kenya's Data Protection Act, 2019 gives data subjects rights over their personal data, including rights of access, correction and erasure, exercised through the framework the Act establishes and overseen by the Office of the Data Protection Commissioner. If you are contacting us from another jurisdiction, the rights available to you there may also apply. Write to us at the address above and we will respond.",
                },
                {
                  t: "verify",
                  text: "This notice must be reviewed by counsel before publication, and completed with the data controller registration details, the named email and hosting processors, and defined retention periods.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <JsonLd data={graph(webPageSchema({ path: "/privacy", name: TITLE, description: DESCRIPTION }), breadcrumbSchema(TRAIL))} />
    </>
  );
}
