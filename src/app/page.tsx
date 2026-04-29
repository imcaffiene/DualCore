import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import { CtaMotion, HeroMotion, ServicesMotion } from "@/features/HomeMotion";
import { JsonLd } from "@/components/JsonLd";
import { buildProfessionalServiceJsonLd, buildWebSiteJsonLd } from "@/lib/jsonld";
import { ServicesBentoLazy } from "@/components/lazy/ServicesBentoLazy";
import { ProcessTimeline } from "@/features/ProcessTimeline";
import { ContactSection } from "@/features/ContactSection";
import { ProjectMarquee } from "@/features/Projectmarquee ";

export const metadata: Metadata = {
  title: "2xStudio — Hire AI Developers & Full-Stack Engineers | Production AI Agents & SaaS Development",
  description:
    "Looking to hire AI developers or a full-stack engineering team? 2xStudio builds production AI agents, automation systems, SaaS platforms, and complex web & mobile applications. Senior engineers, agency-quality, freelancer pricing.",
  keywords: [
    "hire AI developers", "AI agent development company", "full-stack development studio",
    "freelance AI engineer", "custom software development", "SaaS development agency",
    "Next.js development company", "hire full-stack developer", "LLM integration services",
    "workflow automation developer", "mobile app development studio", "production AI systems",
  ],
  openGraph: {
    title: "2xStudio — Hire AI Developers & Full-Stack Engineers",
    description: "We build production AI agents, automation systems, and complex full-stack applications. Senior engineers, agency-quality work, freelancer pricing.",
    url: canonicalUrl("/"),
    type: "website",
    siteName: "2xStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    description: "Production AI agents, SaaS platforms, and mobile apps — engineered by two senior developers.",
  },
  alternates: { canonical: canonicalUrl("/") },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">

      {/* ── Cosmic Nebula Background ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      <JsonLd data={buildProfessionalServiceJsonLd()} />
      <JsonLd data={buildWebSiteJsonLd()} />
      <Header />

      {/* ── HERO ── */}
      <section className="relative z-10 flex min-h-screen items-start justify-center overflow-hidden px-6 pb-16 pt-44 sm:pt-48 lg:pt-52">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <HeroMotion>
            <span className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Complex Apps · AI Agents · Automation
            </span>

            <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">We engineer what</span>
              <br />
              <span className="text-foreground">others can&apos;t.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Complex full-stack applications, AI agents, and automation
              systems — engineered for production. From multi-tenant platforms
              to multi-agent architectures, if it&apos;s hard to build, we build it.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
              >
                See Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
              >
                Hire Us
              </Link>
            </div>
          </HeroMotion>
        </div>
      </section>


      {/* PROJECT UI MARQUEE */}
      <ProjectMarquee />

      {/* ── SERVICES BENTO ── */}
      <section className="relative z-10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ServicesMotion className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              What we build
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Systems engineered</span>
              <br />
              for production.
            </h2>
          </ServicesMotion>
          <ServicesBentoLazy />
        </div>
      </section>


      <section className="relative z-10 border-t border-border py-32">
        <div className="mx-auto max-w-4xl px-6">
          <ServicesMotion className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Our Process
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">From kickoff</span>
              <br />
              <span className="text-foreground">to launch.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Five phases. Regular demos. Zero surprises.
            </p>
          </ServicesMotion>

          <ProcessTimeline />

        </div>
      </section>



      <ContactSection className="border-t border-border pb-24 pt-32" />

      <Footer />
    </div>
  );
}