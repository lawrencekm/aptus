import Link from "next/link";
import Image from "next/image";
import { company, contact, TRADE_EMAIL } from "@/lib/site";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { EVENTS } from "@/lib/analytics";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Gold",
    links: [
      { label: "Gold sourcing", href: "/gold-sourcing" },
      { label: "Gold supply", href: "/gold-supply" },
      { label: "Our process", href: "/process" },
      { label: "Compliance & documentation", href: "/compliance" },
    ],
  },
  {
    heading: "Markets",
    links: [
      { label: "Kenya", href: "/kenya" },
      { label: "Nairobi", href: "/nairobi" },
      { label: "Africa", href: "/africa" },
      { label: "International buyers", href: "/international-buyers" },
      { label: "Hong Kong buyers", href: "/hong-kong-buyers" },
    ],
  },
  {
    heading: "Buyer resources",
    links: [
      { label: "Resource centre", href: "/resources" },
      { label: "How to source gold from Kenya", href: "/resources/how-to-source-gold-from-kenya" },
      { label: "Due diligence checklist", href: "/resources/gold-supplier-due-diligence-checklist" },
      { label: "Questions to ask a supplier", href: "/resources/questions-to-ask-an-african-gold-supplier" },
      { label: "Frequently asked questions", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Aptus Group", href: "/about" },
      { label: "Logistics & vaulting", href: "/logistics" },
      { label: "Contact the trade desk", href: "/contact" },
      { label: "Privacy notice", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-ink-300 no-print">
      <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-[clamp(3.5rem,6vw,5.5rem)]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          {/* Identity + channels */}
          <div>
            <Image
              src="/images/logo-mark.png"
              alt={`${company.shortName} logo`}
              width={426}
              height={300}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-[0.93rem] leading-relaxed text-ink-400">
              Aptus Group coordinates gold sourcing from Kenya for qualified international buyers,
              and operates freight, customs clearing, warehousing and insured vaulting from Nairobi.
            </p>

            <address className="mt-7 space-y-3 not-italic text-[0.9rem]">
              <p className="flex items-start gap-3">
                <PinIcon size={17} className="mt-0.5 shrink-0 text-gold-500" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.locality}, {company.address.country}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <PhoneIcon size={17} className="shrink-0 text-gold-500" />
                <TrackedLink
                  href={contact.tradeDesk.tel}
                  event={EVENTS.phoneClicked}
                  location="footer"
                  className="hover:text-gold-300"
                >
                  {contact.tradeDesk.display}
                </TrackedLink>
                <span className="text-ink-600">·</span>
                <TrackedLink
                  href={contact.operations.tel}
                  event={EVENTS.phoneClicked}
                  location="footer_secondary"
                  className="hover:text-gold-300"
                >
                  {contact.operations.display}
                </TrackedLink>
              </p>
              <p className="flex items-center gap-3">
                <MailIcon size={17} className="shrink-0 text-gold-500" />
                <TrackedLink
                  href={contact.mailto}
                  event={EVENTS.emailClicked}
                  location="footer"
                  className="hover:text-gold-300"
                >
                  {TRADE_EMAIL}
                </TrackedLink>
              </p>
              <p className="flex items-center gap-3">
                <WhatsAppIcon size={17} className="shrink-0 text-gold-500" />
                <TrackedLink
                  href={contact.whatsapp}
                  event={EVENTS.whatsappClicked}
                  location="footer"
                  className="hover:text-gold-300"
                >
                  WhatsApp the trade desk
                </TrackedLink>
              </p>
            </address>

            <p className="mt-6 text-[0.82rem] text-ink-400">Trade desk hours: {contact.hours}</p>
          </div>

          {/* Navigation */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="eyebrow font-sans text-gold-400">{col.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-ink-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl font-serif text-[1.05rem] leading-relaxed text-ink-300">
            A Nairobi trade desk built for counterparties who verify before they transact — documented
            sourcing, independent assay, and a paper trail that survives inspection at the destination.
          </p>
          <div className="mt-8 flex flex-col justify-between gap-4 text-[0.8rem] text-ink-400 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {company.legalName}. All rights reserved.
            </p>
            <p className="max-w-xl sm:text-right">
              Nothing on this website is an offer to sell, financial advice, or a guarantee of
              availability or price. Every transaction is subject to buyer qualification, compliance
              checks and signed commercial terms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
