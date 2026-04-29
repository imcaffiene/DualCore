import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { AboutHeroMotion, PrincipleMotion, TeamCardMotion } from "@/components/AboutMotion";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { buildAboutPageJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About 2xStudio — Meet the AI Engineers & Full-Stack Developers Behind the Studio",
  description:
    "Two senior engineers who ship production AI agents, SaaS platforms, and mobile apps. Meet Sumit Kumar (AI & full-stack) and Shubham Singh (mobile & cross-platform) — hire us for your next complex project.",
  keywords: [
    "AI engineers for hire",
    "freelance full-stack developers",
    "software development team India",
    "Next.js developer portfolio",
    "Flutter developer for hire",
    "AI agent engineer",
  ],
  openGraph: {
    title: "About 2xStudio — Senior AI & Full-Stack Engineers",
    description: "Two engineers who ship production AI agents, SaaS platforms, and mobile apps. No agencies, no middlemen.",
    url: canonicalUrl("/about"),
  },
  alternates: { canonical: canonicalUrl("/about") },
};

type SocialPlatform = "twitter" | "linkedin";

interface TeamMember {
  name: string;
  initials: string;
  photo: string | null;
  role: string;
  bio: string;
  skills: string[];
  socials: { label: string; href: string; platform: SocialPlatform; }[];
}

const team: TeamMember[] = [
  {
    name: "Sumit Kumar",
    initials: "SK",
    photo: "/team/sumit.jpg",
    role: "Full-Stack Engineering & AI",
    bio: "Builds complex full-stack applications and production AI agent systems — multi-tenant platforms, automation engines, LLM pipelines, and everything in between. Owns everything from system design to deployment.",
    skills: ["AI Agents", "LLMs", "Next.js", "TypeScript", "Node.js"],
    socials: [
      { label: "Twitter", href: "https://x.com/i_m_caffeine", platform: "twitter" as const },
    ],
  },
  {
    name: "Shubham Singh",
    initials: "SS",
    photo: "/team/shubham.jpeg",
    role: "Mobile Engineering — iOS & Android",
    bio: "Ships cross-platform mobile apps from zero to App Store and Play Store. Owns the full mobile stack — architecture, native APIs, performance, and on-device AI integration.",
    skills: ["Flutter", "Swift", "Kotlin", "iOS", "Android"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shubhamsingh2135/", platform: "linkedin" as const },
    ],
  },
];

const principles = [
  {
    n: "01",
    t: "AI-native thinking",
    d: "Every system we build starts with the question: where does intelligence add value? Not AI for AI's sake — AI where it matters.",
  },
  {
    n: "02",
    t: "End-to-end ownership",
    d: "Architecture, code, AI integration, deploy, iterate. We own the whole thing — from system design to production monitoring.",
  },
  {
    n: "03",
    t: "Ship, don't stall",
    d: "We move fast on purpose. Tight feedback loops, regular demos, real progress every week.",
  },
  {
    n: "04",
    t: "Production over prototypes",
    d: "Anyone can build a demo. We build systems that handle real traffic, real edge cases, and real users.",
  },
];

function SocialIcon({ platform }: { platform: SocialPlatform; }) {
  if (platform === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  // X (Twitter)
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export default function AboutPage() {
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

      <JsonLd data={buildAboutPageJsonLd()} />
      <Header />

      {/* Hero */}
      <section className="relative z-10 overflow-hidden pb-24 pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AboutHeroMotion>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              About
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Engineers</span>
              <br />
              <span className="text-foreground">who ship.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re a two-person studio — one building complex web
              systems &amp; AI agents, one shipping cross-platform mobile apps — engineering
              production-grade products end-to-end. No agencies, no middlemen, no fluff.
            </p>
          </AboutHeroMotion>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              The team
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">Meet the duo.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((m, i) => (
              <TeamCardMotion key={m.name} delay={i * 0.1}>
                <div className="glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">

                  {/* ── Top row: photo + name + socials ── */}
                  <div className="flex items-start gap-4">

                    {/* Photo */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-foreground/15 to-foreground/5 ring-1 ring-foreground/10">
                      {m.photo ? (
                        <Image
                          src={m.photo}
                          alt={m.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center font-heading text-2xl font-bold text-gradient">
                          {m.initials}
                        </span>
                      )}
                    </div>

                    {/* Name + role */}
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="font-heading text-xl font-bold text-foreground leading-tight">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/55">{m.role}</p>

                      {/* Social icon buttons */}
                      <div className="mt-3 flex items-center gap-2">
                        {m.socials.map((social) => (
                          <a
                            key={social.platform}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${m.name} on ${social.label}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/2 text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground"
                          >
                            <SocialIcon platform={social.platform} />
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bio */}
                  <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              </TeamCardMotion>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="relative z-10 border-t border-border py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass relative overflow-hidden rounded-3xl p-12 text-center sm:p-16">
            <div
              className="absolute inset-0 -z-10 opacity-60"
              style={{
                background: "radial-gradient(ellipse at center, oklch(0.25 0 0) 0%, transparent 70%)",
              }}
            />
            <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Want to work with us?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              We&apos;re taking on a small number of projects this quarter. Tell
              us about yours.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}