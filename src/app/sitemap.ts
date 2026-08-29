import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/content/resources";

/**
 * Every indexable route is listed here. Adding a page without adding it to this
 * table leaves it orphaned from the sitemap, so this file and the app router
 * tree must be kept in step.
 */
const STATIC_ROUTES: { path: string; priority: number; frequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, frequency: "weekly" },
  { path: "/gold-sourcing", priority: 0.9, frequency: "monthly" },
  { path: "/gold-supply", priority: 0.8, frequency: "monthly" },
  { path: "/process", priority: 0.9, frequency: "monthly" },
  { path: "/compliance", priority: 0.8, frequency: "monthly" },
  { path: "/kenya", priority: 0.9, frequency: "monthly" },
  { path: "/nairobi", priority: 0.8, frequency: "monthly" },
  { path: "/africa", priority: 0.7, frequency: "monthly" },
  { path: "/international-buyers", priority: 0.8, frequency: "monthly" },
  { path: "/hong-kong-buyers", priority: 0.8, frequency: "monthly" },
  { path: "/about", priority: 0.6, frequency: "yearly" },
  { path: "/logistics", priority: 0.6, frequency: "yearly" },
  { path: "/contact", priority: 0.9, frequency: "yearly" },
  { path: "/resources", priority: 0.7, frequency: "weekly" },
  { path: "/faq", priority: 0.6, frequency: "monthly" },
  { path: "/privacy", priority: 0.2, frequency: "yearly" },
  { path: "/terms", priority: 0.2, frequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.frequency,
      priority: route.priority,
    })),
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/resources/${article.slug}`,
      lastModified: new Date(article.updated ?? article.published),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
