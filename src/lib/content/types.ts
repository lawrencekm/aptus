export type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; caption?: string; head: string[]; rows: string[][] }
  | { t: "note"; title: string; text: string }
  | { t: "verify"; text: string };

export type Cluster = "kenya" | "africa" | "buyers" | "hong-kong";

export type Article = {
  slug: string;
  /** Title tag. Written for a human scanning a results page. */
  title: string;
  /** The single H1 on the page. May differ from the title tag. */
  h1: string;
  description: string;
  cluster: Cluster;
  /** The buyer question this page exists to answer, in one sentence. */
  answers: string;
  /** Direct, self-contained answer. Rendered as the page's opening summary. */
  summary: string;
  published: string;
  updated?: string;
  minutes: number;
  sections: { heading: string; blocks: Block[] }[];
  /** Commercial pages this article should hand the reader on to. */
  related: { label: string; href: string }[];
  /** Sibling articles. Slugs only; resolved at render time. */
  seeAlso: string[];
};

export const CLUSTERS: Record<Cluster, { label: string; blurb: string }> = {
  kenya: {
    label: "Kenya",
    blurb: "How the Kenyan gold trade is regulated, documented and exported.",
  },
  africa: {
    label: "Africa",
    blurb: "Where Kenya sits in continental supply, and what that means for provenance.",
  },
  buyers: {
    label: "Buyer due diligence",
    blurb: "Verification, assay, transaction structure and fraud avoidance.",
  },
  "hong-kong": {
    label: "Hong Kong",
    blurb: "Considerations specific to buyers importing into Hong Kong.",
  },
};
