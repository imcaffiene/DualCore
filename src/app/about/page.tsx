import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { AboutHeroMotion, PrincipleMotion, TeamCardMotion } from "@/components/AboutMotion";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — dualdev",
  description:
    "Two developers, one studio. Meet the team behind dualdev — the duo that designs and ships premium digital products end-to-end.",
  openGraph: {
    title: "About — dualdev",
    description: "Two developers, one studio. Meet the duo behind dualdev.",
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
    role: "Web Development & Design",
    bio: "Figma mockup to AI agent to production app — no hand-offs, no gaps. Owns design, full-stack engineering, and AI integration on every web project. If it runs in a browser or talks to an LLM, it's in scope.",
    skills: ["AI Agents", "Next.js", "TypeScript", "Node.js", "Figma"],
    socials: [
      { label: "Twitter", href: "https://x.com/i_m_caffeine", platform: "twitter" as const },
    ],
  },
  {
    name: "Shubham Singh",
    initials: "SS",
    photo: "/team/shubham.jpeg",
    role: "Mobile Engineering — iOS & Android",
    bio: "Builds and ships cross-platform mobile apps from scratch to App Store and Play Store. Owns the entire mobile stack — architecture, native integrations, and performance.",
    skills: ["Flutter", "Swift", "Kotlin", "iOS", "Android"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shubhamsingh2135/", platform: "linkedin" as const },
    ],
  },
];

const principles = [
  {
    n: "01",
    t: "Two people, one mind",
    d: "No project managers, no hand-offs. You talk directly to the person building your product.",
  },
  {
    n: "02",
    t: "End-to-end ownership",
    d: "Design, code, deploy, iterate. We own the whole thing — from Figma to production.",
  },
  {
    n: "03",
    t: "Ship, don't stall",
    d: "We move fast on purpose. Tight feedback loops, regular demos, real progress every week.",
  },
  {
    n: "04",
    t: "Craft over flash",
    d: "Premium feel, restrained design, great typography. The details matter — always.",
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-40">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.22 0 0) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AboutHeroMotion>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              About
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Two specialists.</span>
              <br />
              <span className="text-foreground">One studio.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re a two-person studio — one focused on web &amp; design,
              one on mobile — who design, build, and ship digital products
              end-to-end. No agencies, no middlemen, no fluff.
            </p>
          </AboutHeroMotion>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border py-24">
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
                <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">

                  {/* ── Top row: photo + name + socials all in one line ── */}
                  <div className="flex items-center gap-3">

                    {/* Photo — left */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-foreground/15 to-foreground/5 ring-1 ring-foreground/10">
                      {m.photo ? (
                        <Image
                          src={m.photo}
                          alt={m.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center font-heading text-lg font-bold text-gradient">
                          {m.initials}
                        </span>
                      )}
                    </div>

                    {/* Name + role — middle */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg font-bold text-foreground leading-tight truncate">
                        {m.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-foreground/55 truncate">{m.role}</p>
                    </div>

                    {/* Social icon buttons — right */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {m.socials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} on ${social.label}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/[0.02] text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground"
                        >
                          <SocialIcon platform={social.platform} />
                        </a>
                      ))}
                    </div>

                  </div>



                  {/* Bio */}
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
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

      {/* Principles */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              How we work
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Four principles.</span>
              <br />
              <span className="text-foreground">No exceptions.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {principles.map((p, i) => (
              <PrincipleMotion key={p.n} delay={i * 0.06}>
                <div className="bg-card p-10">
                  <div className="font-heading text-sm font-bold text-foreground/40">
                    {p.n}
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.d}
                  </p>
                </div>
              </PrincipleMotion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Want to work with us?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            We&apos;re taking on a small number of projects this quarter. Tell
            us about yours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}