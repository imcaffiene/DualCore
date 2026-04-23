import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Bot, Workflow,
  BrainCircuit, Layers, Network, Activity,
} from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { Header } from "@/features/Header";
import { Marquee3D } from "@/components/ui/Marquee3D";
import { Footer } from "@/features/Footer";
import { CtaMotion, HeroMotion, ServicesMotion } from "@/features/HomeMotion";
import { cloudinaryUrl } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "dualdev — Engineering Studio for Complex Software & AI",
  description:
    "We engineer complex full-stack applications, AI agents, and automation systems that ship to production. From multi-tenant platforms to multi-agent architectures — we build what others can't.",
  openGraph: {
    title: "dualdev — Engineering Studio for Complex Software & AI",
    description:
      "We engineer complex applications and AI agents that actually ship. Full-stack platforms, automation engines, and production AI.",
    url: canonicalUrl("/"),
  },
  alternates: { canonical: canonicalUrl("/") },
};

const services = [
  { icon: Network, title: "Complex System Design", desc: "Event-driven architectures, real-time processing, multi-tenant platforms, and systems built to handle serious scale." },
  { icon: Layers, title: "Full-Stack Applications", desc: "End-to-end SaaS, dashboards, and data-heavy platforms — from database design to pixel-perfect frontends." },
  { icon: Bot, title: "AI Agent Architecture", desc: "Multi-agent systems, tool-calling pipelines, and autonomous workflows that reason, plan, and act." },
  { icon: BrainCircuit, title: "LLM Integration", desc: "OpenAI, Claude, Gemini APIs in production — with streaming, RAG, embeddings, and function calling." },
  { icon: Workflow, title: "Workflow Automation", desc: "Visual builders, BullMQ queues, webhook processing, and background job engines that scale." },
  { icon: Activity, title: "Production Operations", desc: "Monitoring, evaluation, cost optimization, and scaling of complex workloads in production." },
];

// Cloudinary-powered showcase images
// Public IDs must match your Cloudinary Media Library: showcase/01, showcase/02 ...
const showcaseImages = Array.from({ length: 20 }, (_, i) => ({
  src: cloudinaryUrl(`${String(i + 1).padStart(2, "0")}`, {
    width: 640,
    quality: "auto",
    format: "auto",
  }),
  alt: `UI/UX design showcase ${i + 1}`,
}));

const row1 = showcaseImages.slice(0, 10);
const row2 = showcaseImages.slice(10, 20);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 pb-16 pt-44 sm:pt-48 lg:pt-52">
        <Marquee3D />
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
                href="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
              >
                Hire Us
              </Link>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ServicesMotion className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              What we build
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Systems engineered</span>
              <br />
              for production.
            </h2>
          </ServicesMotion>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServicesMotion key={s.title} delay={i * 0.06} className="h-full">
                <div className="group relative flex h-full flex-col bg-card p-8 transition-colors hover:bg-accent">
                  <s.icon className="h-7 w-7 text-foreground/80 transition-transform group-hover:scale-110" />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </ServicesMotion>
            ))}
          </div>
        </div>
      </section>

      {/* ── UI/UX SHOWCASE MARQUEE ── */}
      {/* <section className="relative overflow-hidden border-t border-border py-24"></section> */}
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 — left scroll */}
        {/* <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex w-max items-stretch gap-4">
            {[...row1, ...row1].map((img, i) => (
              <div key={i} className="relative h-52 shrink-0 overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Row 2 — right scroll
        <div className="mt-4 flex overflow-hidden">
          <div className="animate-marquee-right flex w-max items-stretch gap-4">
            {[...row2, ...row2].map((img, i) => (
              <div key={i} className="relative h-52 shrink-0 overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}


      {/* ── PROOF ── */}
      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ServicesMotion className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Track record
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Numbers</span>{" "}
              <span className="text-foreground">don&apos;t lie.</span>
            </h2>
          </ServicesMotion>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "8+", label: "Complex products shipped" },
              { value: "200K+", label: "Users across our apps" },
              { value: "99.9%", label: "Background job reliability" },
              { value: "4.4★", label: "App Store rating" },
            ].map((stat) => (
              <ServicesMotion key={stat.label}>
                <div className="flex flex-col items-center justify-center bg-card p-8 text-center">
                  <div className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-xs font-medium uppercase tracking-wider text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              </ServicesMotion>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative border-t border-border py-32">
        <div className="mx-auto max-w-4xl px-6">
          <CtaMotion>
            <div className="glass relative overflow-hidden rounded-3xl p-12 text-center sm:p-16">
              <div
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at center, oklch(0.25 0 0) 0%, transparent 70%)",
                }}
              />
              <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold sm:text-5xl">
                <span className="text-gradient">Have something complex</span>
                <br />
                <span className="text-foreground">to build?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
                Tell us about your project. We respond within 24 hours, every time.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CtaMotion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
