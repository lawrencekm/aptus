import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Verify, Faq } from "@/components/ui/primitives";
import { Blocks } from "@/components/ui/Blocks";
import { pageMetadata, graph, webPageSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const TITLE = "Gold Supply: Forms, Purities and Lot Structures";
const DESCRIPTION =
  "The forms of gold an international buyer encounters when sourcing from Kenya, what fineness means commercially, how lots are structured and priced against a published benchmark, and what we need in an enquiry to quote.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/gold-supply" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Gold supply", path: "/gold-supply" },
];

const FAQ_ITEMS = [
  {
    q: "Do you quote a fixed price per kilogram?",
    a: "No, and no legitimate counterparty does. Gold is priced against a published benchmark — commonly the LBMA Gold Price — with a stated differential reflecting form, fineness, refining cost, freight, insurance, financing and risk. A quotation is a formula: reference, fixing, pricing date and differential.",
  },
  {
    q: "Why is a below-benchmark offer a warning rather than an opportunity?",
    a: "Because the differential on legitimately sourced material is bounded by real costs. A price materially below the international benchmark is not a better version of the same transaction; it is a different transaction from the one being described. It is the single most consistent feature of fraud in this sector.",
  },
  {
    q: "Can you supply Good Delivery bars?",
    a: "Good Delivery is a standard maintained by the London Bullion Market Association covering bar specifications and the refiners accredited to produce them. Material meeting it comes from an accredited refiner, not from an origin assay. Where a buyer needs metal accepted without re-refining, that is the route, and we will say so rather than imply otherwise.",
  },
  {
    q: "What is the minimum lot?",
    a: "Tell us your requirement and we will tell you whether we can serve it. We recommend a first lot sized to test the process end to end rather than to make a margin.",
  },
];

export default function GoldSupplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Gold supply"
        title="What is actually being bought and sold"
        summary="Gold sourced from Kenya reaches an international buyer in a small number of recognisable forms, at fineness levels that determine both price and what has to happen to the metal next. This page sets out those forms, what fineness means commercially, how a lot is priced against a published benchmark, and what we need from you in order to quote."
        trail={TRAIL}
        primary={{ label: "Send us a requirement", href: "/contact" }}
        secondary={{ label: "How purity is verified", href: "/resources/how-gold-purity-is-verified" }}
      />

      <Section tone="light">
        <Container size="narrow">
          <div className="prose-aptus">
            <Blocks
              blocks={[
                { t: "h3", text: "Forms" },
                {
                  t: "table",
                  caption: "Forms of gold in the sourcing market",
                  head: ["Form", "What it is", "What happens next"],
                  rows: [
                    ["Doré", "Semi-pure alloy from mining or initial processing, typically well below investment fineness", "Refining by an accredited refiner; value follows refinery outturn"],
                    ["Cast or poured bars", "Locally produced bars of varying fineness", "Assay, then refining unless already produced by an accredited refiner"],
                    ["Refined bars", "Bars produced by a refiner to a stated fineness, with the refiner's marks and serial", "Acceptance depends on the refiner's accreditation, not on the bar's appearance"],
                    ["Granules and grain", "Refined metal in granular form, common in manufacturing feedstock", "Direct to fabrication where fineness and accreditation are satisfied"],
                  ],
                },
                {
                  t: "note",
                  title: "Appearance proves nothing",
                  text: "Stamps, serial numbers, certificates and packaging are all trivially reproduced. Fineness is established by assay, and acceptance is established by the refiner's accreditation — never by how a bar looks in a photograph.",
                },
                { t: "h3", text: "Fineness and what it costs" },
                {
                  t: "p",
                  text: "Fineness is gold content in parts per thousand: 995.0 means 99.5 per cent gold. It is the number that converts gross weight into fine weight, and fine weight is what is being paid for. The distance between a lot's fineness and the fineness the destination requires is a cost — refining, losses, time and financing — and that cost appears in the differential.",
                },
                {
                  t: "table",
                  caption: "Common fineness references",
                  head: ["Fineness", "Karat equivalent", "Typical context"],
                  rows: [
                    ["999.9", "24K", "Investment-grade refined metal"],
                    ["995.0", "—", "Minimum fineness in the London Good Delivery specification for large bars"],
                    ["916.0", "22K", "Common jewellery standard in South Asian and Middle Eastern markets"],
                    ["750.0", "18K", "Common European jewellery standard"],
                    ["Variable", "—", "Doré and locally cast material, established by assay on each lot"],
                  ],
                },
                { t: "h3", text: "How a lot is priced" },
                {
                  t: "ol",
                  items: [
                    "The reference: which published benchmark and which fixing.",
                    "The pricing date: the day, or averaging period, on which the reference is taken.",
                    "The differential: the discount or premium reflecting form, fineness, refining, freight, insurance, financing and risk.",
                    "The quantity basis: fine metal content, not gross weight.",
                  ],
                },
                {
                  t: "p",
                  text: "Because those four components are stated, a quotation from us can be checked against the market on the day. That is the intention. A number quoted without its formula cannot be checked, which is why we do not give one.",
                },
                { t: "h3", text: "What we need in order to quote" },
                {
                  t: "ul",
                  items: [
                    "The form and fineness you require, and whether the material must arrive already refined by an accredited refiner.",
                    "Indicative quantity, and whether this is a single lot or a repeating requirement.",
                    "Destination market, intended consignee and importer of record.",
                    "Your preferred settlement basis: origin assay or destination outturn.",
                    "Preferred delivery terms, and whether your own freight forwarder is taking control at origin.",
                    "Any acceptance constraints your refiner applies to material of this origin.",
                  ],
                },
                {
                  t: "verify",
                  text: "Availability, current lot sizes and the specific forms Aptus Group can offer at any given time must be confirmed by the trade desk. This page describes the market and our quoting basis; it is not an offer to sell and does not represent held inventory.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="On supply and pricing" />
          <Faq items={FAQ_ITEMS} />
          <p className="mt-10 text-[0.9rem] text-ink-500">
            <Verify>Confirm indicative differentials and current availability with the trade desk before relying on any figure.</Verify>
          </p>
        </Container>
      </Section>

      <CtaSection secondary={{ label: "How transactions are structured", href: "/resources/how-international-gold-transactions-are-structured" }} />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/gold-supply", name: TITLE, description: DESCRIPTION }),
          serviceSchema({ name: "Gold supply coordination", description: DESCRIPTION, path: "/gold-supply" }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
