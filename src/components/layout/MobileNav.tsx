"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, contact } from "@/lib/site";
import { track, EVENTS } from "@/lib/analytics";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink-100 lg:hidden"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          {open ? <path d="m5 5 14 14M19 5 5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="dark-section fixed inset-x-0 bottom-0 top-[4.4rem] z-40 overflow-y-auto overscroll-contain bg-ink-950 md:top-[6.5rem] lg:hidden"
        >
          <nav aria-label="Main" className="px-[var(--spacing-gutter)] pb-32 pt-6">
            {primaryNav.map((group) => (
              <div key={group.label} className="border-b border-white/10 py-5">
                <p className="eyebrow text-gold-400">{group.label}</p>
                <ul className="mt-3 space-y-1">
                  {group.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="-mx-2 block rounded-[2px] px-2 py-2.5 font-serif text-lg text-ink-100 hover:bg-white/[0.06]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-7 space-y-3">
              <Link href="/contact" className="btn btn-primary w-full">
                Submit a buyer enquiry
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track(EVENTS.whatsappClicked, { location: "mobile_nav" })}
                className="btn btn-on-dark w-full"
              >
                Message the trade desk on WhatsApp
              </a>
              <div className="flex flex-col gap-1 pt-3 text-sm text-ink-400">
                <a
                  href={contact.tradeDesk.tel}
                  onClick={() => track(EVENTS.phoneClicked, { location: "mobile_nav" })}
                  className="py-1"
                >
                  {contact.tradeDesk.display}
                </a>
                <a
                  href={contact.mailto}
                  onClick={() => track(EVENTS.emailClicked, { location: "mobile_nav" })}
                  className="py-1"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
