import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { projects } from "@/data/projectData";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use a stable "last major update" date for static pages
  const siteLastUpdated = new Date("2025-05-01");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: siteLastUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: siteLastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    // Fresh blog content gets high priority for discovery
    priority: 0.85,
    // Image sitemap entries for Google Image Search (string[] per Next.js type)
    ...(p.image && p.image !== `${SITE_URL}/og-image.png`
      ? { images: [p.image] }
      : {}),
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
