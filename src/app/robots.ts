import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/lp/",
    },
    sitemap: "https://algardening.com/sitemap.xml",
  };
}
