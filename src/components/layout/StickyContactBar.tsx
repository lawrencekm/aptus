"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { contact } from "@/lib/site";
import { track, EVENTS } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/ui/icons";

/**
 * Unobtrusive persistent contact affordance for small screens. It appears only
 * after the visitor has scrolled past the hero, sits in the safe area, and
 * never covers content (a matching spacer is reserved in the layout). No
 * popups, no interstitials.
 */
export function StickyContactBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!shown}
      className={`no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 backdrop-blur transition-transform duration-300 sm:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch gap-2 p-2.5">
        <Link
          href="/contact"
          tabIndex={shown ? 0 : -1}
          onClick={() => track(EVENTS.primaryCtaClicked, { location: "sticky_bar" })}
          className="btn btn-primary flex-1 py-3 text-[0.85rem]"
        >
          Request gold supply
        </Link>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={shown ? 0 : -1}
          onClick={() => track(EVENTS.whatsappClicked, { location: "sticky_bar" })}
          className="btn btn-on-dark px-4 py-3"
        >
          <WhatsAppIcon size={18} />
          <span className="sr-only">Message the trade desk on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
