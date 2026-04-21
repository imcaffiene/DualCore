import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, PenTool, Hammer, Rocket, LifeBuoy } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { PhaseMotion, ProcessHeroMotion } from "@/components/ProcessMotion";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer.tsx";

export const metadata: Metadata = {
  title: "Our Process — How dualdev ships premium products",
  description:
    "Discovery, design, build, launch, support — a transparent five-phase process designed to ship premium products fast, without surprises.",
  openGraph: {
    title: "Our Process — How dualdev works",
    description:
      "A transparent five-phase process: Discovery → Design → Build → Launch → Support.",
    url: canonicalUrl("/process"),
  },
  alternates: { canonical: canonicalUrl("/process") },
};

const phases = [
  {
    n: "01",
    icon: Compass,
    title: "Discovery",
    duration: "Week 1",
    summary:
      "We get inside your head, your users' heads, and the problem itself. No code, no Figma — just clarity.",
    deliverables: [
      "Stakeholder interviews + workflow mapping",
      "Scope, success metrics & shared Linear board",
      "Fixed-price quote and signed SOW",
    ],
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    duration: "Weeks 2–3",
    summary:
      "Information architecture first, then high-fidelity Figma. You see real screens by the end of week 2.",
    deliverables: [
      "IA, user flows & wireframes",
      "High-fidelity Figma + design system tokens",
      "Clickable prototype for sign-off",
    ],
  },
  {
    n: "03",
    icon: Hammer,
    title: "Build",
    duration: "Weeks 3–N",
    summary:
      "Build in public — weekly Friday demos, a live staging URL, and a Linear board you can watch in real time.",
    deliverables: [
      "Production-grade React + typed backend",
      "Weekly demo + staging deploy",
      "Test coverage on critical paths",
    ],
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch",
    duration: "Final week",
    summary:
      "QA, accessibility audit, performance pass, and a clean cutover. We sweat the details so launch day is boring.",
    deliverables: [
      "Cross-browser + device QA",
      "Lighthouse 95+ on production",
      "Hand-off docs + recorded walkthroughs",
    ],
  },
  {
    n: "05",
    icon: LifeBuoy,
    title: "Support",
    duration: "Ongoing",
    summary:
      "14 days of free post-launch support, then optional retainer for new features, fixes, and iteration.",
    deliverables: [
      "14-day free bug-fix window",
      "Optional monthly retainer",
      "Async-first communication, always",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-70"
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
              Five phases. Weekly demos. Zero surprises. Here&apos;s exactly what
              working with us looks like, week by week.
            </p>
          </ProcessHeroMotion>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-8"
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
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div className="flex items-baseline gap-3">
                          <span className="font-heading text-xs font-bold text-foreground/40">
                            {phase.n}
                          </span>
                          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                            {phase.title}
                          </h2>
                        </div>
                        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/60">
                          {phase.duration}
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
            Book a free 30-minute discovery call. We&apos;ll scope your project and
            send a fixed-price quote within 48 hours.
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
