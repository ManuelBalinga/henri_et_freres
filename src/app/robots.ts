import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://henrietfreres.com/sitemap.xml",
    host: "https://henrietfreres.com",
  };
}
