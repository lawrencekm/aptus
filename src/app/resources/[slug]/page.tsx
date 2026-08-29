import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Blocks } from "@/components/ui/Blocks";
import { Container, Section, Breadcrumbs, Eyebrow, Arrow } from "@/components/ui/primitives";
import {
  pageMetadata,
  graph,
  webPageSchema,
  breadcrumbSchema,
  articleSchema,
} from "@/lib/seo";
import { ARTICLES, getArticle, CLUSTERS } from "@/lib/content/resources";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found", robots: { index: false, follow: true } };

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
    type: "article",
    publishedTime: article.published,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: article.h1, path: `/resources/${article.slug}` },
  ];

  const seeAlso = article.seeAlso
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      {/* Header */}
      <section className="bg-ink-950 text-ink-100 dark-section engraved">
        <Container size="narrow">
          <div className="py-[clamp(2.5rem,6vw,4rem)]">
            <Breadcrumbs trail={trail} tone="dark" />
            <p className="eyebrow flex flex-wrap items-center gap-3 text-gold-400">
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              {CLUSTERS[article.cluster].label}
              <span className="text-ink-600">·</span>
              <span className="text-ink-400">{article.minutes} min read</span>
            </p>
            <h1 className="display-2 mt-6 text-white">{article.h1}</h1>
            <p className="lede mt-7 text-ink-300">{article.answers}</p>
          </div>
        </Container>
      </section>

      {/* Direct answer — written to stand alone if lifted out of the page. */}
      <Section tone="bone" className="!py-[clamp(2.5rem,5vw,4rem)]">
        <Container size="narrow">
          <div className="border-l-2 border-gold-500 pl-6">
            <Eyebrow>In short</Eyebrow>
            <p className="mt-3 font-serif text-[1.2rem] leading-relaxed text-ink-900">
              {article.summary}
            </p>
          </div>
        </Container>
      </Section>

      {/* Body */}
      <Section tone="light">
        <Container size="narrow">
          <article className="prose-aptus">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </article>

          {/* Onward commercial links */}
          <div className="mt-16 border-t border-[var(--hairline)] pt-10">
            <Eyebrow>Related on this site</Eyebrow>
            <ul className="mt-5 flex flex-wrap gap-3">
              {article.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="btn btn-secondary text-[0.85rem]">
                    {r.label}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sibling articles */}
          {seeAlso.length > 0 ? (
            <div className="mt-14">
              <Eyebrow>Continue reading</Eyebrow>
              <ul className="mt-6 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
                {seeAlso.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/resources/${a.slug}`}
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <span>
                        <span className="block font-serif text-[1.1rem] text-ink-950 group-hover:text-gold-800">
                          {a.h1}
                        </span>
                        <span className="mt-1 block text-[0.88rem] text-ink-500">{a.answers}</span>
                      </span>
                      <Arrow className="shrink-0 text-gold-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-14 text-[0.85rem] leading-relaxed text-ink-500">
            Published {new Date(article.published).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            {article.updated ? ` · Updated ${new Date(article.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}` : ""}.
            {" "}This guide is general commercial information about the gold trade, not legal, tax or
            financial advice, and it is not an offer to sell. Confirm the current position for your
            transaction with qualified counsel in the relevant jurisdictions.
          </p>
        </Container>
      </Section>

      <CtaSection secondary={{ label: "All buyer resources", href: "/resources" }} />

      <JsonLd
        data={graph(
          webPageSchema({
            path: `/resources/${article.slug}`,
            name: article.title,
            description: article.description,
          }),
          articleSchema({
            path: `/resources/${article.slug}`,
            headline: article.h1,
            description: article.description,
            datePublished: article.published,
            dateModified: article.updated,
          }),
          breadcrumbSchema(trail),
        )}
      />
    </>
  );
}
