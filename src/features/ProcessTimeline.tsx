import {
  Compass, PenTool, Hammer, Rocket, LifeBuoy,
} from "lucide-react";
import { PhaseMotion } from "@/components/ProcessMotion";



const phases = [
  {
    n: "01", icon: Compass, title: "Discovery",
    summary: "We get inside your head, your users' heads, and the problem itself. No code, no Figma — just clarity about what we're building and why.",
    deliverables: [
      "Stakeholder interviews + workflow mapping",
      "Scope definition and shared project board",
      "Fixed-price quote and signed SOW",
    ],
  },
  {
    n: "02", icon: PenTool, title: "Design",
    summary: "Information architecture first, then high-fidelity screens. You see real designs early and sign off before a single line of code is written.",
    deliverables: [
      "IA, user flows & wireframes",
      "High-fidelity Figma + design system tokens",
      "Clickable prototype for sign-off",
    ],
  },
  {
    n: "03", icon: Hammer, title: "Build",
    summary: "We build in parallel — web and mobile developed simultaneously where needed. Regular demos, a live staging URL, and full visibility into progress.",
    deliverables: [
      "Production-grade web app (Next.js + TypeScript)",
      "AI agent architecture + LLM integration (OpenAI, Claude, Gemini)",
      "Native mobile app (Flutter — iOS & Android)",
      "Regular demos + staging deploys throughout",
    ],
  },
  {
    n: "04", icon: Rocket, title: "Launch",
    summary: "QA, accessibility audit, performance pass, and a clean cutover. We sweat the details so launch day is boring — the way it should be.",
    deliverables: [
      "Cross-browser, cross-device QA",
      "AI agent evaluation + edge-case testing",
      "App Store + Play Store submission (if mobile)",
      "Hand-off docs + recorded walkthroughs",
    ],
  },
  {
    n: "05", icon: LifeBuoy, title: "Support",
    summary: "14 days of free post-launch support included. After that, optional retainer for new features, fixes, and ongoing iteration.",
    deliverables: [
      "14-day free bug-fix window",
      "Optional monthly retainer",
      "Async-first communication, always",
    ],
  },
];



export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div
        aria-hidden
        className="absolute bottom-0 left-6 top-0 w-px bg-linear-to-b from-transparent via-border to-transparent sm:left-8"
      />
      <div className="space-y-10">
        {phases.map((phase, i) => (
          <PhaseMotion key={phase.n} delay={i * 0.05}>
            <div className="relative pl-16 sm:pl-20 md:pl-24">
              {/* Icon node */}
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm sm:h-16 sm:w-16">
                <phase.icon className="h-5 w-5 text-foreground sm:h-6 sm:w-6" />
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-xs font-bold text-foreground/40">{phase.n}</span>
                    <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                      {phase.title}
                    </h3>
                  </div>

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
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
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
  );
}