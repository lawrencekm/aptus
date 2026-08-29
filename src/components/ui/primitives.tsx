import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------- Container */

export function Container({
  children,
  size = "default",
  className = "",
}: {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
  className?: string;
}) {
  const width =
    size === "wide" ? "max-w-[88rem]" : size === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${width} px-[var(--spacing-gutter)] ${className}`}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- Section */

export function Section({
  children,
  tone = "light",
  id,
  className = "",
  as: Tag = "section",
}: {
  children: ReactNode;
  tone?: "light" | "bone" | "dark" | "ink";
  id?: string;
  className?: string;
  as?: "section" | "div" | "article" | "footer";
}) {
  const tones = {
    light: "bg-white text-ink-900",
    bone: "bg-ink-50 text-ink-900",
    dark: "bg-ink-950 text-ink-100 dark-section engraved",
    ink: "bg-ink-900 text-ink-100 dark-section",
  } as const;

  return (
    <Tag
      id={id}
      className={`py-[var(--spacing-section)] ${tones[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------- Eyebrow */

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p className={`eyebrow ${tone === "dark" ? "text-gold-400" : "text-gold-800"}`}>
      {children}
    </p>
  );
}

/* ----------------------------------------------------------- Section head */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  level = 2,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  level?: 1 | 2 | 3;
}) {
  const Tag = (`h${level}` as "h1" | "h2" | "h3");
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={`display-2 mt-4 ${tone === "dark" ? "text-white" : "text-ink-950"}`}
      >
        {title}
      </Tag>
      {lede ? (
        <p className={`lede mt-6 ${tone === "dark" ? "text-ink-300" : "text-ink-600"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/* ----------------------------------------------------------------- Button */

type ButtonVariant = "primary" | "secondary" | "on-dark" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = `btn btn-${variant} ${className}`;
  const isExternal = external || /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------ Arrow glyph */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      className={className}
    >
      <path d="M1 8h13M9.5 3.5 14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ------------------------------------------------------------ Breadcrumbs */

export function Breadcrumbs({
  trail,
  tone = "light",
}: {
  trail: { name: string; path: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem] ${tone === "dark" ? "text-ink-400" : "text-ink-500"}`}>
        {trail.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="opacity-50">/</span> : null}
            {i === trail.length - 1 ? (
              <span aria-current="page" className={tone === "dark" ? "text-ink-200" : "text-ink-700"}>
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-gold-600 underline-offset-4 hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ Steps */

export function Steps({
  steps,
  tone = "light",
}: {
  steps: { title: string; body: string; detail?: string[] }[];
  tone?: "light" | "dark";
}) {
  return (
    <ol className="mt-14 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={`flex flex-col gap-3 p-7 lg:p-8 ${tone === "dark" ? "bg-ink-950" : "bg-white"}`}
        >
          <span
            className={`font-serif text-2xl ${tone === "dark" ? "text-gold-400" : "text-gold-600"}`}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`text-lg ${tone === "dark" ? "text-white" : "text-ink-950"}`}>
            {step.title}
          </h3>
          <p className={`text-[0.95rem] ${tone === "dark" ? "text-ink-300" : "text-ink-600"}`}>
            {step.body}
          </p>
          {step.detail?.length ? (
            <ul className={`mt-1 space-y-1.5 text-[0.85rem] ${tone === "dark" ? "text-ink-400" : "text-ink-500"}`}>
              {step.detail.map((d) => (
                <li key={d} className="relative pl-4 before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2 before:bg-gold-600">
                  {d}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* --------------------------------------------------------------- Fact row */

export function FactList({
  facts,
  tone = "light",
}: {
  facts: { term: string; detail: ReactNode }[];
  tone?: "light" | "dark";
}) {
  return (
    <dl className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
      {facts.map((f) => (
        <div key={f.term} className="grid gap-1 py-5 sm:grid-cols-[15rem_1fr] sm:gap-8">
          <dt className={`text-[0.82rem] font-semibold uppercase tracking-[0.08em] ${tone === "dark" ? "text-gold-400" : "text-gold-800"}`}>
            {f.term}
          </dt>
          <dd className={`text-[0.97rem] ${tone === "dark" ? "text-ink-300" : "text-ink-700"}`}>
            {f.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------- Verify tag */

/**
 * Renders an explicit placeholder for a claim the business has not yet
 * substantiated. Visible on purpose: an unverified claim must never be
 * silently published as fact.
 */
export function Verify({ children }: { children: ReactNode }) {
  return (
    <mark className="mx-0.5 inline-block rounded-[2px] border border-dashed border-gold-600 bg-gold-50 px-1.5 py-0.5 align-baseline text-[0.75rem] font-semibold uppercase tracking-wide text-gold-900">
      Verify: {children}
    </mark>
  );
}

/* -------------------------------------------------------------- Accordion */

export function Faq({
  items,
  tone = "light",
}: {
  items: { q: string; a: ReactNode }[];
  tone?: "light" | "dark";
}) {
  return (
    <div className="mt-12 border-t border-[var(--hairline)]">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-[var(--hairline)]">
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-serif text-lg marker:hidden ${
              tone === "dark" ? "text-ink-100" : "text-ink-950"
            }`}
          >
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-2 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-45"
            >
              <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </summary>
          <div className={`pb-6 pr-10 text-[0.97rem] ${tone === "dark" ? "text-ink-300" : "text-ink-600"}`}>
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
