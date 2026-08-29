import type { Metadata } from "next";
import { SITE_URL, company, contact } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Absolute or root-relative OG image. Defaults to the generated route image. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  noindex,
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      title,
      description,
      url,
      siteName: company.shortName,
      locale: "en_GB",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${company.shortName} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ------------------------------------------------------------- JSON-LD --- */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: company.legalName,
    url: SITE_URL,
    description: company.definition,
    slogan: company.tagline,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.jpeg`, width: 475, height: 300 },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.countryCode,
    },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Place", name: "East Africa" },
      { "@type": "Place", name: "International" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: "Gold trade desk",
        telephone: `+${contact.tradeDesk.e164}`,
        email: contact.email,
        availableLanguage: ["en", "sw"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        name: "Logistics operations",
        telephone: `+${contact.logistics.e164}`,
        availableLanguage: ["en", "sw"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: company.shortName,
    description: company.definition,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string }) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Place", name: "Worldwide" },
    ],
    audience: {
      "@type": "BusinessAudience",
      name: "Refineries, bullion dealers, jewellery manufacturers and commodity traders",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}${opts.path}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": SITE_ID },
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    inLanguage: "en",
  };
}

/** Wraps one or more node objects into a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
