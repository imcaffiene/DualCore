import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { AboutHeroMotion, PrincipleMotion, TeamCardMotion } from "@/components/AboutMotion";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer.tsx";

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

const team = [
  {
    name: "Your Name",
    initials: "YN",
    role: "Design & Front-End",
    bio: "Replace this with your bio. Designs interfaces, ships pixel-perfect React, lives inside Figma.",
    skills: ["UI / UX", "Figma", "React", "Framer Motion"],
  },
  {
    name: "Co-founder Name",
    initials: "CN",
    role: "Engineering & Back-End",
    bio: "Replace this with your bio. Builds the APIs, databases, and the boring-but-critical parts that make products work.",
    skills: ["Node.js", "TypeScript", "Postgres", "DevOps"],
  },
];

const principles = [
  {
    n: "01",
    t: "Two people, one mind",
    d: "No project managers, no hand-offs. You talk to the people building your product.",
  },
  {
    n: "02",
    t: "End-to-end ownership",
    d: "Design, code, deploy, iterate. We own the whole thing — from Figma to production.",
  },
  {
    n: "03",
    t: "Ship, don't stall",
    d: "We move fast on purpose. Tight feedback loops, weekly demos, real progress.",
  },
  {
    n: "04",
    t: "Craft over flash",
    d: "Premium feel, restrained design, great typography. The details matter — always.",
  },
];

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
              <span className="text-gradient">Two devs.</span>
              <br />
              <span className="text-foreground">One studio.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re a small studio of two — a designer-developer and a
              full-stack engineer — who design, build, and ship digital products
              end-to-end. No agencies, no middlemen, no fluff.
            </p>
          </AboutHeroMotion>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((m, i) => (
              <TeamCardMotion key={m.name} delay={i * 0.1}>
                <div className="glass group relative overflow-hidden rounded-3xl p-8 sm:p-10">
                  <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-foreground/15 to-foreground/5 ring-1 ring-foreground/10">
                    <span className="font-heading text-3xl font-bold text-gradient">
                      {m.initials}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">{m.role}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </TeamCardMotion>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground/60">
            Replace names, photos & bios in{" "}
            <code className="text-foreground/70">app/about/page.tsx</code>
          </p>
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
            We&apos;re taking on a small number of projects this quarter. Tell us
            about yours.
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
