"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Entrance reveal using IntersectionObserver — roughly 500 bytes of client
 * JavaScript in place of an animation library. Honours prefers-reduced-motion
 * via CSS (see .reveal in globals.css), and reveals immediately if the
 * observer is unavailable so content is never hidden by a script failure.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => {
              target.dataset.shown = "true";
            }, delay);
            observer.unobserve(target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error -- ref type widens across the polymorphic tag union
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
