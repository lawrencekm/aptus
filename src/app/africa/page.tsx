import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const TITLE = "Sourcing Gold from Africa: Where Kenya Fits";
const DESCRIPTION =
  "How African gold reaches international buyers, the difference between large-scale mine output and aggregated artisanal supply, where provenance risk concentrates, and what an East African origin means for a buyer's due diligence.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/africa" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Africa", path: "/africa" },
];

const FAQ_ITEMS = [
  {
    q: "Is African gold riskier than gold from other origins?",
    a: "The metal is the same everywhere. What differs is how much of the supply reaching new international buyers comes through aggregation of artisanal and small-scale production, where provenance has to be recorded deliberately rather than inherited from an institutional producer. That is a documentation problem with a documentation solution, not a reason to avoid the continent.",
  },
  {
    q: "Why can't I buy directly from a mine?",
    a: "Large-scale mine output is generally committed under long-term offtake agreements with accredited refiners. Spot availability offered to an unfamiliar buyer is almost never mine output, and a counterparty implying otherwise is describing a transaction that does not exist as described.",
  },
  {
    q: "Will my refiner accept material of this origin?",
    a: "Ask before shipment, not after. Refineries apply their own responsible sourcing policies derived from the OECD framework, and they decline consignments. Material that arrives and cannot be placed is a far worse outcome than a transaction that was never contracted.",
  },
];

export default function AfricaPage() {
  return (
    <>
      <PageHero
        eyebrow="Market — Africa"
        title="Sourcing gold from Africa, and where Kenya sits in it"
        summary="African gold reaches international buyers through two very different chains: large-scale mine output committed to accredited refiners under long-term agreements, and artisanal and small-scale production that passes through local buyers and aggregators before export. The second chain supplies most of what is offered to new international buyers, and it is where provenance and documentation risk concentrate — which is precisely what a buyer's due diligence has to address."
        trail={TRAIL}
        primary={{ label: "Discuss a requirement", href: "/contact" }}
        secondary={{ label: "Supply chain overview", href: "/resources/sourcing-gold-from-africa-supply-chain-overview" }}
      />

      <Section tone="light">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "Two chains, not one" },
                {
                  t: "table",
                  caption: "How African gold reaches international buyers",
                  head: ["", "Large-scale mining", "Artisanal and small-scale"],
                  rows: [
                    ["Producer", "Licensed industrial operations with published reporting", "Individual and small operator production at varying degrees of formalisation"],
                    ["Route to market", "Direct offtake to accredited refiners", "Local buyers, aggregators and dealers, then export"],
                    ["Documentation", "Institutional, auditable, continuous", "Assembled at aggregation; quality varies sharply"],
                    ["Available to a new buyer", "Rarely — output is contracted", "This is what is offered to most new international buyers"],
                    ["Principal risk", "Commercial and price risk", "Provenance, documentation, counterparty and authenticity risk"],
                  ],
                },
                { t: "h3", text: "Where the risk concentrates" },
                {
                  t: "ul",
                  items: [
                    "Aggregation, where material from many small sources is combined and individual provenance is lost unless deliberately recorded at each step.",
                    "Cross-border movement before export, which is materially harder to document and which destination refiners will probe.",
                    "Documentation assembled retrospectively to support an export, rather than accumulated during the chain.",
                    "Informal cash purchasing upstream, which leaves no trail — a compliance problem at the destination even where nothing improper occurred.",
                  ],
                },
                {
                  t: "p",
                  text: "The OECD Due Diligence Guidance exists because these are structural features of the chain rather than individual failings. Its five steps — management systems, risk identification, risk response, third-party audit at identified points, and public reporting — are the shape any credible answer to a provenance question takes.",
                },
                { t: "h3", text: "What an East African origin means for a buyer" },
                {
                  t: "p",
                  text: "Kenya offers an established licensing framework under the Mining Act, 2016, a functioning commercial and banking centre in Nairobi, English-language commercial and legal documentation, and direct long-haul air freight. What it does not offer — and what no legitimate origin offers — is metal below the international benchmark.",
                },
                {
                  t: "ol",
                  items: [
                    "Ask which chain the material comes from, and expect a direct answer.",
                    "Where the answer is artisanal in origin, ask what was done about the risks the OECD framework identifies, and what records exist from the point of purchase forward.",
                    "Confirm your destination refiner's acceptance policy before shipment.",
                    "Treat documentation depth as a commercial variable: material with a thin file is worth less, takes longer to place, and may not be placeable at all.",
                    "Prefer counterparties who volunteer the difficult parts of the chain. Selective silence about upstream steps is itself a finding.",
                  ],
                },
                {
                  t: "verify",
                  text: "Country-level rules on artisanal formalisation, export licensing and beneficiation differ substantially across Africa and change over time. Confirm the current position for each origin with local counsel before contracting.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="On African supply" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <CtaSection secondary={{ label: "The Kenyan market in detail", href: "/kenya" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/africa", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
