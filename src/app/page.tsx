import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";
import { Navigation } from "@/features/Navigation";
import { SiteFooter } from "@/features/SiteFooter";
import { Hero } from "@/features/Hero";
import { Services } from "@/features/Services";
import { WhyUs } from "@/features/WhyUs";
import { Contact } from "@/features/Contact";
import { JsonLd } from "@/components/JsonLd";
import { buildProfessionalServiceJsonLd, buildWebSiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "2xStudio — Hire AI Developers & Full-Stack Engineers | Production AI Agents & SaaS Development",
  description:
    "Looking to hire AI developers or a full-stack engineering team? 2xStudio builds production AI agents, automation systems, SaaS platforms, and complex web & mobile applications.",
  keywords: [
    "hire AI developers", "AI agent development company", "full-stack development studio",
    "freelance AI engineer", "custom software development", "SaaS development agency",
  ],
  openGraph: {
    title: "2xStudio — Hire AI Developers & Full-Stack Engineers",
    description: "We build production AI agents, automation systems, and complex full-stack applications.",
    url: canonicalUrl("/"),
    type: "website",
    siteName: "2xStudio",
    images: [
      {
        url: "https://www.2xstudio.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "2xStudio — AI Agents & Full-Stack Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    description: "Production AI agents, SaaS platforms, and mobile apps — engineered by two senior developers.",
    images: ["https://www.2xstudio.in/og-image.png"],
  },
  alternates: { canonical: canonicalUrl("/") },
};

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <JsonLd data={buildProfessionalServiceJsonLd()} />
      <JsonLd data={buildWebSiteJsonLd()} />
      <Navigation />

      <Hero />

      <section id="services" className="border-t border-border">
        <Services />
      </section>

      <section id="process" className="border-t border-border">
        <WhyUs />
      </section>

      <Contact />

      <SiteFooter />
    </div>
  );
}