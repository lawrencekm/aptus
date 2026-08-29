import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 828, 1080, 1280, 1600, 1920],
  },

  /**
   * SEO migration.
   *
   * The previous site was a single page with in-page anchors, plus the URL
   * shapes left over from the Laravel Blade template it was converted from.
   * These map the paths a crawler or an old inbound link is most likely to
   * still hold to their nearest equivalent on the new architecture.
   *
   * [VERIFY] Before go-live, export the top pages from Google Search Console
   * and Bing Webmaster Tools for aptusgroup.net and aptusgroup.com and extend
   * this table with anything receiving impressions that is not covered here.
   */
  async redirects() {
    const map: Record<string, string> = {
      "/index.html": "/",
      "/home": "/",
      "/index.php": "/",
      "/about-us": "/about",
      "/aboutus": "/about",
      "/services": "/logistics",
      "/our-services": "/logistics",
      "/logistics-services": "/logistics",
      "/warehousing": "/logistics",
      "/safe-deposit": "/logistics",
      "/safe-depository": "/logistics",
      "/quote": "/contact",
      "/get-a-quote": "/contact",
      "/request-quote": "/contact",
      "/contact-us": "/contact",
      "/track": "/logistics",
      "/tracking": "/logistics",
      "/gold": "/gold-sourcing",
      "/buy-gold": "/gold-supply",
      "/gold-trading": "/gold-sourcing",
      "/blog": "/resources",
      "/insights": "/resources",
    };

    return Object.entries(map).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
