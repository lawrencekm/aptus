import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Verify, Faq } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata, graph, webPageSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { RouteIcon, VaultIcon, DocIcon, ShieldIcon, GlobeIcon, ScaleIcon } from "@/components/ui/icons";

const TITLE = "Logistics, Customs Clearing and Safe Depository";
const DESCRIPTION =
  "Aptus Group's freight, customs clearing, warehousing and insured safe-deposit vaulting operation in Kenya — the infrastructure that also underpins our gold sourcing transactions.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/logistics" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Logistics & vaulting", path: "/logistics" },
];

const SERVICES = [
  {
    icon: <GlobeIcon size={22} />,
    title: "Air, sea and road freight",
    body: "Freight forwarding for cargo moving into and out of East Africa, including urgent, valuable and fragile consignments requiring specialist handling.",
  },
  {
    icon: <DocIcon size={22} />,
    title: "Customs clearing",
    body: "Clearing and forwarding through Kenyan customs, including the declaration and entry work that a gold export depends on.",
  },
  {
    icon: <ScaleIcon size={22} />,
    title: "Freight consulting",
    body: "Route, cost and compliance planning for cargo moving across the East African and Great Lakes corridors.",
  },
  {
    icon: <RouteIcon size={22} />,
    title: "CFS — clearing and forwarding station",
    body: "A customs bonded terminal in Mombasa, approximately 7.5 kilometres from the Port.",
  },
  {
    icon: <ShieldIcon size={22} />,
    title: "Warehousing",
    body: "Secure warehousing for customers requiring storage between arrival and onward distribution.",
  },
  {
    icon: <VaultIcon size={22} />,
    title: "Safe depository and safekeeping",
    body: "Automated, access-controlled safe deposit facilities with insured storage. The same facility holds gold consignments between independent assay and export.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is the logistics business separate from the gold trade desk?",
    a: "They are lines of the same business, and that is deliberate. The customs clearing operation, the vault and the freight relationships that serve logistics customers are the same ones a gold transaction uses, which is why we can be accountable for the whole chain rather than introducing it.",
  },
  {
    q: "Do you still take logistics enquiries?",
    a: "Yes. Freight, clearing, warehousing and safe deposit enquiries are handled by the operations team on the published operations number, or through the contact page.",
  },
  {
    q: "Is stored material insured?",
    a: "Storage in the safe depository facility is insured. The underwriter and cover limits are confirmed in writing as part of a storage or transaction agreement rather than published here.",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Logistics & vaulting"
        title="The operation the trade desk is built on"
        summary="Aptus Group operates freight forwarding, customs clearing, warehousing and insured safe-deposit vaulting in Kenya, serving cargo moving across East Africa and the Great Lakes region. It is a business in its own right, and it is also why a gold transaction coordinated by us does not depend on a chain of introductions: the clearing, the storage and the freight are ours."
        trail={TRAIL}
        primary={{ label: "Send a logistics enquiry", href: "/contact" }}
        secondary={{ label: "How this supports gold sourcing", href: "/process" }}
      />

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What the operation covers"
            lede="Carried over from the group's established logistics business, and stated only to the extent we can substantiate it."
          />
          <ul className="mt-14 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <li key={s.title} className="bg-white">
                <Reveal delay={i * 50} className="h-full p-8">
                  <span className="text-gold-600">{s.icon}</span>
                  <h3 className="mt-5 text-[1.12rem] text-ink-950">{s.title}</h3>
                  <p className="mt-3 text-[0.93rem] text-ink-600">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[0.9rem] text-ink-500">
            <Verify>
              Facility specifications, warehouse capacity, fleet, bonded terminal licence references
              and insurance underwriter and limits require confirmation before publication. Figures
              carried on the previous version of this site were not evidenced and have been removed.
            </Verify>
          </p>
        </Container>
      </Section>

      <Section tone="bone">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why it matters to a gold buyer"
                title="Three points in a gold transaction where this infrastructure is the difference"
              />
            </div>
            <ol className="space-y-8">
              {[
                ["Customs clearing", "The export declaration and customs entry are prepared by our own licensed clearing operation, so the export file is assembled by the people accountable for it rather than by an agent introduced for one shipment."],
                ["Insured vaulting", "Between independent assay and export, material sits in access-controlled, insured storage. It is never held informally, in a private office, or at a hotel — all of which appear in the fraud patterns this region is known for."],
                ["Freight coordination", "Movement to the destination consignee runs on established carrier relationships with continuous insurance across every handover, including transit hubs where cover most often lapses."],
              ].map(([title, body], i) => (
                <li key={title} className="border-l-2 border-gold-500 pl-6">
                  <p className="eyebrow text-gold-800">{`0${i + 1}`}</p>
                  <h3 className="mt-2 text-[1.15rem] text-ink-950">{title}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="About the logistics operation" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <CtaSection
        title="Freight, clearing, storage — or gold?"
        lede="Tell us which, and the enquiry reaches the right desk. Both are handled by the same company from the same Nairobi office."
        primaryLabel="Send an enquiry"
        secondary={{ label: "About Aptus Group", href: "/about" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/logistics", name: TITLE, description: DESCRIPTION }),
          serviceSchema({
            name: "Freight forwarding, customs clearing, warehousing and safe depository",
            description: DESCRIPTION,
            path: "/logistics",
          }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
        )}
      />
    </>
  );
}
