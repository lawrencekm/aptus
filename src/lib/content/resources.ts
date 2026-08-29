import type { Article, Cluster } from "./types";
import { sourcingFromKenya, exportProcess, nairobiGuide } from "./articles-kenya";
import { dueDiligenceChecklist, questionsToAsk, purityVerification } from "./articles-buyers";
import {
  transactionStructures,
  fraudPatterns,
  africaSupply,
  hongKongGuide,
} from "./articles-markets";

export const ARTICLES: Article[] = [
  sourcingFromKenya,
  exportProcess,
  nairobiGuide,
  dueDiligenceChecklist,
  questionsToAsk,
  purityVerification,
  transactionStructures,
  fraudPatterns,
  africaSupply,
  hongKongGuide,
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesInCluster(cluster: Cluster): Article[] {
  return ARTICLES.filter((a) => a.cluster === cluster);
}

export { type Article, type Cluster, CLUSTERS } from "./types";
