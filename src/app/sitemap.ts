import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { projects } from "@/data/projectData";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/why-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
