import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Lets search engines crawl everything and points them to the sitemap. Served at /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}