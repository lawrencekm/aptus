import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, SectionHeading, Faq } from "@/components/ui/primitives";
import { BuyerInquiryForm } from "@/components/forms/BuyerInquiryForm";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { EVENTS } from "@/lib/analytics";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { company, contact, whatsappLink, mailtoLink } from "@/lib/site";
import { WhatsAppIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

const TITLE = "Contact the Aptus Group Trade Desk";
const DESCRIPTION =
  "Submit a buyer enquiry, or contact the Aptus Group gold trade desk in Nairobi directly by WhatsApp, telephone or email. No obligation, and nothing moves at the enquiry stage.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/contact" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const FAQ_ITEMS = [
  {
    q: "What happens after I submit an enquiry?",
    a: "A named person on the trade desk picks it up and writes back with what we understood your requirement to be, so any misunderstanding surfaces immediately. If we cannot serve it we say so at that point. If we can, mutual qualification begins — and nothing moves and no funds are involved until that is complete.",
  },
  {
    q: "Will you ask me for money or documents in a first reply?",
    a: "No. We do not request payment, banking details or identity documents in a first reply, and we never ask for advance fees, release fees or cash at any stage. If you receive a message claiming to be Aptus Group that does, call the published trade desk number and check before responding.",
  },
  {
    q: "Can I contact you outside Kenyan business hours?",
    a: "You can send an enquiry or a message at any time. The desk works Monday to Friday, 08:00–17:00 East Africa Time (UTC+3), which overlaps with the Gulf and South Asia through most of the day, Europe from mid-morning, and East Asia in our morning.",
  },
];

export default function ContactPage() {
  const channels = [
    {
      icon: <WhatsAppIcon size={20} className="text-gold-600" />,
      label: "WhatsApp the trade desk",
      value: contact.whatsappDisplay,
      note: "Fastest for a first conversation.",
      href: contact.whatsapp,
      event: EVENTS.whatsappClicked,
    },
    {
      icon: <PhoneIcon size={20} className="text-gold-600" />,
      label: "Call the trade desk",
      value: contact.tradeDesk.display,
      note: contact.hours,
      href: contact.tradeDesk.tel,
      event: EVENTS.phoneClicked,
    },
    {
      icon: <MailIcon size={20} className="text-gold-600" />,
      label: "Email",
      value: contact.email,
      note: "Opens with a structured enquiry template.",
      href: contact.mailto,
      event: EVENTS.emailClicked,
    },
    {
      icon: <PhoneIcon size={20} className="text-gold-600" />,
      label: "Logistics and clearing operations",
      value: contact.logistics.display,
      note: "Freight, customs clearing, warehousing and safe deposit.",
      href: contact.logistics.tel,
      event: EVENTS.phoneClicked,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are looking for"
        summary="Send the trade desk your requirement — form, fineness, indicative quantity, destination market and preferred transaction structure — and we will tell you plainly whether we can serve it and on what terms. An enquiry commits neither side: no material moves, no funds are discussed, and we do not ask for documents or payment in a first reply."
        trail={TRAIL}
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Buyer enquiry" title="Submit a buyer enquiry" level={2} />
              <div className="mt-10">
                <BuyerInquiryForm />
              </div>
            </div>

            <aside className="lg:pt-24">
              <h2 className="eyebrow text-gold-800">Or contact us directly</h2>
              <ul className="mt-6 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
                {channels.map((c) => (
                  <li key={c.label}>
                    <TrackedLink
                      href={c.href}
                      event={c.event}
                      location="contact_page"
                      className="flex items-start gap-4 py-5 transition-colors hover:bg-ink-50"
                    >
                      <span className="mt-1 shrink-0">{c.icon}</span>
                      <span className="min-w-0">
                        <span className="block text-[0.78rem] uppercase tracking-[0.1em] text-ink-500">
                          {c.label}
                        </span>
                        <span className="mt-1 block break-words font-serif text-[1.1rem] text-ink-950">
                          {c.value}
                        </span>
                        <span className="mt-1 block text-[0.83rem] text-ink-500">{c.note}</span>
                      </span>
                    </TrackedLink>
                  </li>
                ))}
              </ul>

              <address className="mt-8 flex items-start gap-4 not-italic">
                <PinIcon size={20} className="mt-1 shrink-0 text-gold-600" />
                <span className="text-[0.95rem] text-ink-700">
                  {company.address.street}
                  <br />
                  {company.address.locality}, {company.address.region}
                  <br />
                  {company.address.country}
                </span>
              </address>

              <div className="mt-8 border-l-2 border-gold-500 bg-ink-50 px-6 py-5">
                <p className="eyebrow text-gold-800">Sourcing into Hong Kong?</p>
                <p className="mt-2 text-[0.92rem] text-ink-700">
                  Our afternoon overlaps your business day. Message the desk directly and mention
                  your destination refiner.
                </p>
                <TrackedLink
                  href={whatsappLink(
                    "Hello Aptus Group trade desk — I am a Hong Kong based buyer enquiring about gold sourcing from Kenya. Our company is [company].",
                  )}
                  event={EVENTS.whatsappClicked}
                  location="contact_hk_block"
                  className="btn btn-secondary mt-4 text-[0.85rem]"
                >
                  <WhatsAppIcon size={16} className="text-gold-700" />
                  WhatsApp about a Hong Kong requirement
                </TrackedLink>
              </div>

              <div className="mt-8 border-l-2 border-ink-300 bg-ink-50 px-6 py-5">
                <p className="eyebrow text-ink-600">Logistics enquiry?</p>
                <p className="mt-2 text-[0.92rem] text-ink-700">
                  Freight, customs clearing, warehousing or safe deposit enquiries go to the
                  operations team.
                </p>
                <TrackedLink
                  href={mailtoLink(
                    "Logistics enquiry",
                    "Service required (freight / clearing / warehousing / safe deposit):\nOrigin and destination:\nCargo type:\nIndicative volume and timing:\n\nNotes:\n",
                  )}
                  event={EVENTS.emailClicked}
                  location="contact_logistics_block"
                  className="btn btn-secondary mt-4 text-[0.85rem]"
                >
                  <MailIcon size={16} />
                  Email the operations team
                </TrackedLink>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="bone">
        <Container size="narrow">
          <SectionHeading eyebrow="Before you write" title="What to expect from us" />
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <JsonLd
        data={graph(
          webPageSchema({ path: "/contact", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          faqSchema(FAQ_ITEMS),
          {
            "@type": "ContactPage",
            url: "https://aptusgroup.net/contact",
            name: TITLE,
            description: DESCRIPTION,
          },
        )}
      />
    </>
  );
}
