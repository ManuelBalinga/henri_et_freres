import type { MetadataRoute } from "next";

const base = "https://henrietfreres.com";

const routes = [
  "",
  "/about",
  "/our-story",
  "/products",
  "/brands",
  "/distribution",
  "/services",
  "/partners",
  "/news",
  "/careers",
  "/csr",
  "/contact",
  "/company-profile",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "" || r === "/news" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
