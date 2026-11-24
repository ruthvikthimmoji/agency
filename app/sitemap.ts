import type { MetadataRoute } from "next";
import { site, work } from "@/data/site";

/** Tells search engines which pages exist. Served at /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/work", "/services", "/process", "/about", "/contact", "/privacy"];
  const caseStudies = work.filter((p) => p.published).map((p) => p.href);

  return [...pages, ...caseStudies].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/work") ? 0.8 : 0.6,
  }));
}
