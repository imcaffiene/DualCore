import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildContactPageJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Hire Us — Get a Quote for AI Agent, SaaS, or App Development | 2xStudio",
  description:
    "Ready to build an AI agent, SaaS platform, or mobile app? Contact 2xStudio for a free project consultation. We respond within 24 hours with a fixed-price quote. Senior AI & full-stack engineers available worldwide.",
  keywords: [
    "hire AI developer",
    "get a quote app development",
    "freelance developer for hire",
    "AI agent development quote",
    "custom software development contact",
    "SaaS development consultation",
    "hire Next.js developer",
    "hire Flutter developer",
  ],
  openGraph: {
    title: "Hire 2xStudio — Start Your Project",
    description:
      "Get a free consultation and fixed-price quote for your AI agent, SaaS, or mobile app project. We respond within 24 hours.",
    url: canonicalUrl("/contact"),
  },
  alternates: { canonical: canonicalUrl("/contact") },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildContactPageJsonLd()} />
      {children}
    </>
  );
}