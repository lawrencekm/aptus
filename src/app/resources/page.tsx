import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section, Eyebrow, Arrow } from "@/components/ui/primitives";
import { pageMetadata, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { ARTICLES, CLUSTERS } from "@/lib/content/resources";
import type { Cluster } from "@/lib/content/types";
import { SITE_URL } from "@/lib/site";

const TITLE = "Buyer Resource Centre";
const DESCRIPTION =
  "Original guides for international buyers sourcing gold from Kenya and Africa: export procedure and documentation, assay and purity verification, transaction structure, due diligence, and the fraud patterns this region is known for.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/resources" });

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
];

const ORDER: Cluster[] = ["kenya", "buyers", "africa", "hong-kong"];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyer resources"
        title="What we know, written down"
        summary="These are the guides we would want to read if we were the buyer: how Kenyan gold export is licensed and documented, how purity is actually established, how a cross-border transaction is structured and settled, what due diligence looks like in practice, and how the fraud in this region works. They are written to be useful whether or not you ever transact with us."
        trail={TRAIL}
        primary={{ label: "Submit a buyer enquiry", href: "/contact" }}
      />

      <Section tone="light">
        <Container>
          {ORDER.map((cluster, ci) => {
            const items = ARTICLES.filter((a) => a.cluster === cluster);
            if (items.length === 0) return null;

            return (
              <div key={cluster} className={ci > 0 ? "mt-24" : ""}>
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[var(--hairline)] pb-5">
                  <h2 className="display-3 text-ink-950">{CLUSTERS[cluster].label}</h2>
                  <p className="max-w-md text-[0.92rem] text-ink-500">{CLUSTERS[cluster].blurb}</p>
                </div>

                <ul className="mt-px grid gap-px bg-[var(--hairline)] md:grid-cols-2">
                  {items.map((article) => (
                    <li key={article.slug} className="bg-white">
                      <Link
                        href={`/resources/${article.slug}`}
                        className="group flex h-full flex-col justify-between gap-8 p-8 transition-colors hover:bg-ink-50 lg:p-9"
                      >
                        <div>
                          <Eyebrow>{article.minutes} min read</Eyebrow>
                          <h3 className="mt-4 text-[1.3rem] text-ink-950">{article.h1}</h3>
                          <p className="mt-3 text-[0.95rem] text-ink-600">{article.answers}</p>
                          <p className="mt-4 border-l-2 border-gold-500 pl-4 text-[0.88rem] text-ink-500">
                            {article.summary}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-gold-800">
                          Read the guide
                          <Arrow className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </Section>

      <CtaSection
        title="Read something that raised a question?"
        lede="Ask the trade desk. We would rather answer a question that ends in you not transacting with us than have you transact without asking it."
        secondary={{ label: "Frequently asked questions", href: "/faq" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: "/resources", name: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(TRAIL),
          {
            "@type": "ItemList",
            itemListElement: ARTICLES.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: a.h1,
              url: `${SITE_URL}/resources/${a.slug}`,
            })),
          },
        )}
      />
    </>
  );
}
