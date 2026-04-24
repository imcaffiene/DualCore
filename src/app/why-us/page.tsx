import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { canonicalUrl } from "@/lib/seo";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import { ComparisonCardMotion, FaqMotion, WhyUsMotion } from "@/components/WhyUsMotion";

export const metadata: Metadata = {
  title: "Why Hire 2xStudio — Freelancer vs Agency vs Engineering Studio for AI & App Development",
  description:
    "Comparing freelancers, agencies, and 2xStudio for AI agent development and custom software. Two senior engineers delivering agency-quality architecture at freelancer rates — with full end-to-end ownership.",
  keywords: [
    "freelancer vs agency",
    "hire AI developer comparison",
    "best way to hire developers",
    "freelancer vs development studio",
    "AI development agency alternative",
    "affordable custom software development",
    "senior developer for hire",
  ],
  openGraph: {
    title: "Why 2xStudio — Freelancer vs Agency vs Studio",
    description: "Freelancers vs Agencies vs 2xStudio for complex software & AI agent development — the honest comparison.",
    url: canonicalUrl("/why-us"),
  },
  alternates: { canonical: canonicalUrl("/why-us") },
};

const faqs = [
  {
    q: "How much does a project cost?",
    a: "Every project is scoped individually based on your goals, timeline, and requirements. We’d first discuss the details with you, understand the full scope, and then share a tailored quote.",
  },
  {
    q: "How long until my project ships?",
    a: "Timelines depend on scope, but most projects wrap up within 2-6 weeks. After our initial discussion, you'll receive a clear timeline with milestones.",
  },
  {
    q: "Why not just hire a full-time developer?",
    a: "Hiring in-house is costly, experienced designers can exceed $100k and developers $120k annually, not including the benefits. We deliver senior-level expertise at a fraction of the cost.",
  },
  {
    q: "Do you handle both design AND development?",
    a: 'Yes — that\'s the whole point of 2xStudio. One of us leads design (Figma, UX, brand), the other leads engineering (front-end, back-end, infra). No hand-offs, no "that\'s not in scope," no separate vendors to coordinate.',
  },

  {
    q: "What if I just need a redesign or a small change?",
    a: "We take on small scoped engagements too — landing pages, redesigns, audits, or week-long sprints. Just tell us what you need on the contact page and we'll let you know honestly if we're the right fit.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. After launch you can keep us on a monthly retainer for new features, fixes, and improvements. No retainer, no problem — we'll always reply to bug reports for free in the first 14 days.",
  },
  {
    q: "Can you build AI agents and automation systems?",
    a: "That's our core expertise. We've shipped production AI agent systems including multi-agent orchestration, LLM-powered automation pipelines, RAG systems, and visual workflow builders with background job engines processing 250+ operations per hour. We integrate OpenAI, Claude, and Gemini APIs into real products — not wrapper demos.",
  },
  {
    q: "Where are you based and what timezones do you cover?",
    a: "We work fully remote and overlap with most timezones across the US, Europe, and Asia. Async-first by default — calls when they actually move things forward.",
  },
];

type Tier = {
  name: string;
  tagline: string;
  highlighted?: boolean;
  badge?: string;
  rows: { label: string; status: "yes" | "no" | "meh"; note: string; }[];
};

const tiers: Tier[] = [
  {
    name: "Freelancers",
    tagline: "Solo, scrappy, single-skill.",
    rows: [
      { label: "Design + Engineering", status: "no", note: "Usually one or the other" },
      { label: "AI / Agent expertise", status: "no", note: "Prompt wrappers at best" },
      { label: "End-to-end ownership", status: "meh", note: "Hits a wall outside their lane" },
      { label: "Reliability", status: "no", note: "Sick day = project paused" },
      { label: "Speed", status: "yes", note: "Fast, but bottlenecked solo" },
      { label: "Pricing", status: "yes", note: "Cheapest option" },
      { label: "Communication", status: "meh", note: "Direct — when they reply" },
    ],
  },
  {
    name: "2xStudio",
    tagline: "Two senior devs. One studio.",
    highlighted: true,
    badge: "Recommended",
    rows: [
      { label: "Design + Engineering", status: "yes", note: "Both, deeply, in-house" },
      { label: "AI / Agent expertise", status: "yes", note: "Production agent systems shipped" },
      { label: "End-to-end ownership", status: "yes", note: "Architecture → production, we own it all" },
      { label: "Reliability", status: "yes", note: "Two devs = built-in redundancy" },
      { label: "Speed", status: "yes", note: "Two senior brains, zero red tape" },
      { label: "Pricing", status: "yes", note: "Agency quality, freelancer rates" },
      { label: "Communication", status: "yes", note: "Talk directly to the makers" },
    ],
  },
  {
    name: "Agencies",
    tagline: "Big team, bigger overhead.",
    rows: [
      { label: "Design + Engineering", status: "yes", note: "Yes — separate departments" },
      { label: "AI / Agent expertise", status: "meh", note: "Outsource to contractors" },
      { label: "End-to-end ownership", status: "meh", note: "Hand-offs between specialists" },
      { label: "Reliability", status: "yes", note: "Reliable but slow" },
      { label: "Speed", status: "no", note: "Layers of approvals & PMs" },
      { label: "Pricing", status: "no", note: "3-5x markup for the overhead" },
      { label: "Communication", status: "no", note: "Through an account manager" },
    ],
  },
];

function StatusIcon({ status }: { status: "yes" | "no" | "meh"; }) {
  if (status === "yes")
    return (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/90 text-background">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
    );
  if (status === "no")
    return (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/30">
        <X className="h-3 w-3" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground/40">
      <span className="h-0.5 w-2 rounded-full bg-current" />
    </span>
  );
}

// FAQ JSON-LD structured data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
          <WhyUsMotion>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Why 2xStudio
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">What makes us</span>
              <br />
              <span className="text-foreground">different?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Most teams can&apos;t build complex systems or production AI. We ship both.
              See how we stack up — honestly.
            </p>
          </WhyUsMotion>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <ComparisonCardMotion key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${tier.highlighted
                    ? "glass-strong shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] ring-1 ring-foreground/20 lg:-my-4 lg:scale-[1.03]"
                    : "glass"
                    }`}
                >
                  {tier.highlighted && (
                    <>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.35 0 0) 0%, transparent 70%)",
                        }}
                      />
                      {tier.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                            <Sparkles className="h-3 w-3" />
                            {tier.badge}
                          </span>
                        </div>
                      )}
                    </>
                  )}

                  <div>
                    <h3
                      className={`font-heading text-2xl font-bold ${tier.highlighted ? "text-gradient" : "text-foreground/90"
                        }`}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {tier.rows.map((row) => (
                      <li key={row.label} className="flex items-start gap-3">
                        <div className="pt-0.5">
                          <StatusIcon status={row.status} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-foreground">{row.label}</div>
                          <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {row.note}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {tier.highlighted && (
                    <div className="mt-8 pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
                      >
                        Work with us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </ComparisonCardMotion>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              FAQ
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Questions,</span>{" "}
              <span className="text-foreground">answered.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pricing, timelines, and how we actually work — straight up.
            </p>
          </div>

          <FaqMotion>
            <div className="glass mt-14 rounded-3xl p-3 sm:p-5">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`item-${i}`}
                    className="border-b border-border/60 last:border-b-0"
                  >
                    <AccordionTrigger className="px-4 py-5 text-left font-heading text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FaqMotion>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still curious?{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Ask us anything →
            </Link>
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Sold? Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            Tell us about your project. We respond within 24 hours.
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
