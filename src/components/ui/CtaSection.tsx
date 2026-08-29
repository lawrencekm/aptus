import { Container, Section, ButtonLink, Arrow, Eyebrow } from "./primitives";
import { TrackedLink } from "./TrackedLink";
import { EVENTS } from "@/lib/analytics";
import { contact } from "@/lib/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";

/**
 * Closing conversion block. Used at the foot of every commercial page so the
 * next step is never more than one screen away, without resorting to popups.
 */
export function CtaSection({
  eyebrow = "Next step",
  title = "Looking to source gold from Kenya?",
  lede = "Tell us what you are looking for — form, quantity, purity and destination market — and our trade desk will tell you plainly whether we can serve it, and on what terms.",
  primaryLabel = "Submit a buyer enquiry",
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  primaryLabel?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h2 className="display-2 mt-4 text-white">{title}</h2>
            <p className="lede mt-6 max-w-2xl text-ink-300">{lede}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary">
                {primaryLabel}
                <Arrow />
              </ButtonLink>
              {secondary ? (
                <ButtonLink href={secondary.href} variant="on-dark">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <ContactChannels location="cta_section" />
        </div>
      </Container>
    </Section>
  );
}

/** Direct channels. Rendered wherever a visitor may want to skip the form. */
export function ContactChannels({ location }: { location: string }) {
  const items = [
    {
      icon: <WhatsAppIcon size={18} className="text-gold-400" />,
      label: "WhatsApp the trade desk",
      value: contact.whatsappDisplay,
      href: contact.whatsapp,
      event: EVENTS.whatsappClicked,
    },
    {
      icon: <PhoneIcon size={18} className="text-gold-400" />,
      label: "Call the trade desk",
      value: contact.tradeDesk.display,
      href: contact.tradeDesk.tel,
      event: EVENTS.phoneClicked,
    },
    {
      icon: <MailIcon size={18} className="text-gold-400" />,
      label: "Email with your requirement",
      value: contact.email,
      href: contact.mailto,
      event: EVENTS.emailClicked,
    },
  ];

  return (
    <div className="card-dark divide-y divide-white/10">
      {items.map((item) => (
        <TrackedLink
          key={item.label}
          href={item.href}
          event={item.event}
          location={location}
          className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.04]"
        >
          <span className="shrink-0">{item.icon}</span>
          <span className="min-w-0">
            <span className="block text-[0.78rem] uppercase tracking-[0.1em] text-ink-400">
              {item.label}
            </span>
            <span className="mt-0.5 block truncate font-serif text-lg text-white">{item.value}</span>
          </span>
        </TrackedLink>
      ))}
      <p className="px-6 py-4 text-[0.78rem] text-ink-400">{contact.hours}</p>
    </div>
  );
}
