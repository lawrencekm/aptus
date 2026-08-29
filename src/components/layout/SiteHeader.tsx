import Link from "next/link";
import Image from "next/image";
import { primaryNav, contact, company } from "@/lib/site";
import { MobileNav } from "./MobileNav";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { EVENTS } from "@/lib/analytics";
import { PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Arrow } from "@/components/ui/primitives";

/**
 * The header is dark on every page. The logo is a gold lockup drawn for a black
 * ground, so a dark bar is where it belongs — and it gives the site one
 * consistent brand rail whether the page below it is light or dark.
 */
export function SiteHeader() {
  return (
    <header className="dark-section sticky top-0 z-50 bg-ink-950 no-print">
      {/* Trust strip — factual, no claims. */}
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-[var(--spacing-gutter)] py-2 text-[0.78rem] text-ink-400">
          <p className="flex items-center gap-2">
            <PinIcon size={14} className="text-gold-500" />
            <span>
              {company.address.street}, {company.address.locality}, Kenya — gold sourcing desk for
              international buyers
            </span>
          </p>
          <div className="flex items-center gap-5">
            <TrackedLink
              href={contact.tradeDesk.tel}
              event={EVENTS.phoneClicked}
              location="header_strip"
              className="transition-colors hover:text-gold-300"
            >
              {contact.tradeDesk.display}
            </TrackedLink>
            <TrackedLink
              href={contact.whatsapp}
              event={EVENTS.whatsappClicked}
              location="header_strip"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <WhatsAppIcon size={14} className="text-gold-500" />
              WhatsApp
            </TrackedLink>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-[var(--spacing-gutter)] py-3.5">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${company.shortName} — home`}>
          <Image
            src="/images/logo-mark.png"
            alt={`${company.shortName} logo`}
            width={426}
            height={300}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((group) => (
              <li key={group.label} className="group relative">
                {group.href ? (
                  <Link
                    href={group.href}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[0.9rem] font-medium text-ink-300 transition-colors hover:text-white"
                  >
                    {group.label}
                    <Chevron />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[0.9rem] font-medium text-ink-300 transition-colors hover:text-white"
                  >
                    {group.label}
                    <Chevron />
                  </button>
                )}

                <div className="invisible absolute left-0 top-full z-10 w-[22rem] translate-y-1 border border-white/10 bg-ink-900 p-2 opacity-0 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul>
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-[2px] px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                        >
                          <span className="block text-[0.92rem] font-medium text-ink-100">
                            {child.label}
                          </span>
                          {child.blurb ? (
                            <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-400">
                              {child.blurb}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden text-[0.85rem] sm:inline-flex">
            Request gold supply
            <Arrow />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" width="9" height="9" fill="none" aria-hidden="true" className="mt-0.5 opacity-60">
      <path d="m2 4.5 4 4 4-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
