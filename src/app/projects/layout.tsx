import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildProjectsListJsonLd } from "@/lib/jsonld";
import { projects } from "@/data/projectData";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — AI Agents, SaaS Platforms & Mobile Apps | dualdev",
  description:
    "Explore dualdev's portfolio: production AI agent systems, SaaS platforms, workflow automation tools, and cross-platform mobile apps. Detailed case studies with tech stacks, architecture decisions, and measurable outcomes.",
  keywords: [
    "AI agent case study",
    "SaaS development portfolio",
    "full-stack developer portfolio",
    "mobile app development case study",
    "workflow automation examples",
    "Next.js project examples",
    "Flutter app portfolio",
    "AI development portfolio",
  ],
  openGraph: {
    title: "Portfolio & Case Studies — dualdev",
    description:
      "Production AI agents, SaaS platforms, and mobile apps — shipped end-to-end. See our detailed case studies.",
    url: canonicalUrl("/projects"),
  },
  alternates: { canonical: canonicalUrl("/projects") },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={buildProjectsListJsonLd(
          projects.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            image: p.image,
          }))
        )}
      />
      {children}
    </>
  );
}