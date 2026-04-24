import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Compass, PenTool,
  Hammer, Rocket, LifeBuoy,
} from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { PhaseMotion, ProcessHeroMotion } from "@/components/ProcessMotion";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildProcessPageJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Development Process — How 2xStudio Ships AI Agents, Apps & SaaS Products",
  description:
    "Transparent five-phase software development process: Discovery, Design, Build, Launch, Support. See exactly how we ship AI agents, full-stack apps, and mobile products — with regular demos and fixed-price quotes.",
  keywords: [
    "software development process",
    "how to hire app developers",
    "agile development workflow",
    "AI development process",
    "custom software development timeline",
    "fixed price software development",
  ],
  openGraph: {
    title: "Our Process — How 2xStudio Ships Complex Products",
    description:
      "Five phases: Discovery → Design → Build → Launch → Support. Regular demos, fixed pricing, zero surprises.",
    url: canonicalUrl("/process"),
  },
  alternates: { canonical: canonicalUrl("/process") },
};

// Who owns what
const WEB = "Web & Design";
const APP = "Mobile Apps";
const BOTH = "Both of us";

const phases = [
  {
    n: "01",
    icon: Compass,
    title: "Discovery",
    summary:
      "We get inside your head, your users' heads, and the problem itself. No code, no Figma — just clarity about what we're building and why.",
    deliverables: [
      "Stakeholder interviews + workflow mapping",
      "Scope definition and shared project board",
      "Fixed-price quote and signed SOW",
    ],
    owner: BOTH,
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    summary:
      "Information architecture first, then high-fidelity screens. You see real designs early and sign off before a single line of code is written.",
    deliverables: [
      "IA, user flows & wireframes",
      "High-fidelity Figma + design system tokens",
      "Clickable prototype for sign-off",
    ],
    owner: WEB,
  },
  {
    n: "03",
    icon: Hammer,
    title: "Build",
    summary:
      "We build in parallel — web and mobile developed simultaneously where needed. Regular demos, a live staging URL, and full visibility into progress.",
    deliverables: [
      "Production-grade web app (Next.js + TypeScript)",
      "AI agent architecture + LLM integration (OpenAI, Claude, Gemini)",
      "Native mobile app (Flutter — iOS & Android)",
      "Regular demos + staging deploys throughout",
    ],
    owner: BOTH,
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch",
    summary:
      "QA, accessibility audit, performance pass, and a clean cutover. We sweat the details so launch day is boring — the way it should be.",
    deliverables: [
      "Cross-browser, cross-device QA",
      "AI agent evaluation + edge-case testing",
      "App Store + Play Store submission (if mobile)",
      "Hand-off docs + recorded walkthroughs",
    ],
    owner: BOTH,
  },
  {
    n: "05",
    icon: LifeBuoy,
    title: "Support",
    summary:
      "14 days of free post-launch support included. After that, optional retainer for new features, fixes, and ongoing iteration.",
    deliverables: [
      "14-day free bug-fix window",
      "Optional monthly retainer",
      "Async-first communication, always",
    ],
    owner: BOTH,
  },
];

// Owner badge colors
const ownerStyles: Record<string, string> = {
  [WEB]: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  [APP]: "border-green-500/20 bg-green-500/10 text-green-400",
  [BOTH]: "border-border bg-card text-foreground/60",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={buildProcessPageJsonLd()} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-150 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.22 0 0) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ProcessHeroMotion>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Our Process
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">From kickoff</span>
              <br />
              <span className="text-foreground">to launch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Five phases. Regular demos. Zero surprises. Here&apos;s exactly
              what working with us looks like — step by step.
            </p>

            {/* Who does what legend */}
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                Who handles it
              </span>
              <div className="h-3 w-px bg-border" />
              {[
                { label: WEB, style: ownerStyles[WEB], dot: "bg-blue-400" },
                { label: APP, style: ownerStyles[APP], dot: "bg-green-400" },
                { label: BOTH, style: ownerStyles[BOTH], dot: "bg-foreground/40" },
              ].map(({ label, style, dot }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${style}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                  {label}
                </span>
              ))}
            </div>
          </ProcessHeroMotion>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            {/* Vertical connector line */}
            <div
              aria-hidden
              className="absolute bottom-0 left-6 top-0 w-px bg-linear-to-b from-transparent via-border to-transparent sm:left-8"
            />

            <div className="space-y-10">
              {phases.map((phase, i) => (
                <PhaseMotion key={phase.n} delay={i * 0.05}>
                  <div className="relative pl-20 sm:pl-24">
                    {/* Icon node */}
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/15 bg-card shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:h-16 sm:w-16">
                      <phase.icon className="h-5 w-5 text-foreground sm:h-6 sm:w-6" />
                    </div>

                    <div className="glass rounded-2xl p-6 sm:p-8">
                      {/* Header row */}
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div className="flex items-baseline gap-3">
                          <span className="font-heading text-xs font-bold text-foreground/40">
                            {phase.n}
                          </span>
                          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                            {phase.title}
                          </h2>
                        </div>
                        {/* Owner badge — replaces week timeline */}
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${ownerStyles[phase.owner]}`}
                        >
                          {phase.owner}
                        </span>
                      </div>

                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {phase.summary}
                      </p>

                      <div className="mt-6 border-t border-border pt-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                          What you get
                        </div>
                        <ul className="mt-3 space-y-2">
                          {phase.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3 text-sm text-foreground/80"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </PhaseMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Ready to start?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            Book a free discovery call. We&apos;ll scope your project and send
            a fixed-price quote within 48 hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
