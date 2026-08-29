"use client";

import type { ReactNode } from "react";
import { track, type EventName } from "@/lib/analytics";

/**
 * Anchor that reports a conversion event before navigating. Used for the
 * WhatsApp, telephone and email channels so contact intent is measurable
 * without collecting anything about the person clicking.
 */
export function TrackedLink({
  href,
  event,
  location,
  children,
  className = "",
  ...rest
}: {
  href: string;
  event: EventName;
  location: string;
  children: ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isHttp = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      onClick={() => track(event, { location })}
      {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
