import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Layers, Rocket, Code2, Smartphone } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { Header } from "@/features/Header";
import { Marquee3D } from "@/components/ui/Marquee3D";
import { ProjectCard } from "@/features/ProjectCard";
import { Footer } from "@/features/Footer.tsx";
import { CtaMotion, HeroMotion, ServicesMotion } from "@/features/HomeMotion";
import { projects } from "@/data/projectData";

export const metadata: Metadata = {
  title: "dualdev — Premium Web, App & Design Studio",
  description:
    "A two-person studio designing and shipping websites, mobile apps, and digital products end-to-end. Available for freelance engagements.",
  openGraph: {
    title: "dualdev — Premium Web, App & Design Studio",
    description:
      "Two developers, one obsession with craft. End-to-end websites, mobile apps, and design.",
    url: canonicalUrl("/"),
  },
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

const services = [
  { icon: Code2, title: "Web Development", desc: "Pixel-perfect websites and web apps built on modern stacks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS and Android apps that feel native." },
  { icon: Sparkles, title: "UI / UX Design", desc: "Figma-first design systems, prototypes, and brand identity." },
  { icon: Layers, title: "Backend & APIs", desc: "Scalable APIs, databases, and auth — designed to last." },
  { icon: Rocket, title: "Launch & DevOps", desc: "CI/CD, cloud hosting, and a smooth path to production." },
  { icon: Zap, title: "Maintenance", desc: "Ongoing support, iteration, and feature work post-launch." },
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Marquee3D />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <HeroMotion>
            <span className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for new freelance projects
            </span>

            <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Two devs.</span>
              <br />
              <span className="text-foreground">Endless craft.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design and ship premium websites, mobile apps, and digital
              products end-to-end. Browse our work — if it speaks to you, hire
              us for your next launch.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
              >
                Hire Us
              </Link>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-xs uppercase tracking-wider text-foreground/40">
              <span>50+ Projects</span>
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
              <span>2 Founders</span>
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
              <span>End-to-End</span>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ServicesMotion>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Services
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Everything you need</span>
              <br />
              to ship a product.
            </h2>
          </ServicesMotion>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServicesMotion key={s.title} delay={i * 0.06}>
                <div className="group relative bg-card p-8 transition-colors hover:bg-accent">
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

      {/* FEATURED WORK */}
      <section className="relative border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Featured Work
              </span>
              <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
                <span className="text-gradient">Recent projects.</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground md:inline-flex"
            >
              All work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                <span className="text-gradient">Like what you see?</span>
                <br />
                <span className="text-foreground">Let&apos;s build yours.</span>
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
