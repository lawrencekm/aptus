import type { ReactNode } from "react";
import { Container, Breadcrumbs, ButtonLink, Arrow } from "./primitives";
import { Ornament } from "./Ornament";

/**
 * Standard page opening: breadcrumb trail, single H1, a direct one-paragraph
 * answer to what the page is about, and the page's primary action.
 *
 * The summary paragraph is deliberately self-contained — it is written so it
 * can be lifted out of the page and still make sense, which is what both a
 * search snippet and a generative answer engine need.
 */
export function PageHero({
  eyebrow,
  title,
  summary,
  trail,
  primary,
  secondary,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  summary: ReactNode;
  trail: { name: string; path: string }[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-ink-100 dark-section engraved">
      <Container>
        <div className="py-[clamp(2.5rem,6vw,4rem)]">
          <Breadcrumbs trail={trail} tone="dark" />

          <div className="grid gap-14 pb-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-400">
                <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
                {eyebrow}
              </p>
              <h1 className="display-2 mt-6 text-white">{title}</h1>
              <p className="lede mt-7 max-w-2xl text-ink-300">{summary}</p>

              {primary || secondary ? (
                <div className="mt-9 flex flex-wrap gap-3">
                  {primary ? (
                    <ButtonLink href={primary.href} variant="primary">
                      {primary.label}
                      <Arrow />
                    </ButtonLink>
                  ) : null}
                  {secondary ? (
                    <ButtonLink href={secondary.href} variant="on-dark">
                      {secondary.label}
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="hidden justify-self-center lg:block">
              {aside ?? <Ornament className="h-64 w-64 opacity-80" />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
