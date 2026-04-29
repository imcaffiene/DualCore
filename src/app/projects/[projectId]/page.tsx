import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { projects } from "@/data/projectData";
import { Header } from "@/features/Header";
import { CaseStudyHeroMotion, MetricsMotion } from "@/components/CaseStudyMotion";
import { Footer } from "@/features/Footer";



function isValidUrl(url?: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Statically generate all project pages at build time
export function generateStaticParams() {
  return projects.map((p) => ({ projectId: p.id }));
}



// Per-page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string; }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) return {};

  const title = `${project.title} — Case Study | 2xStudio`;
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      images: [{ url: project.image }],
      url: canonicalUrl(`/projects/${project.id}`),
    },
    twitter: {
      card: "summary_large_image",
      images: [project.image],
    },
    alternates: { canonical: canonicalUrl(`/projects/${project.id}`) },
  };
}



function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
        {label}
      </div>
      <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
        {children}
      </p>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ projectId: string; }>;
}) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) notFound();

  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

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

      <Header />

      {/* Hero */}
      <section className="relative z-10 overflow-hidden pb-16 pt-32">
        <div className="mx-auto max-w-5xl px-6">
          <CaseStudyHeroMotion>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/50 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All work
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/70">
                {project.category}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/70">
                {project.year}
              </span>
            </div>

            <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">{project.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Meta strip */}
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-sm">
              {[
                { label: "Client", value: project.client },
                { label: "Duration", value: project.duration },
                { label: "Role", value: project.role },
                {
                  label: "Live",
                  value: isValidUrl(project.liveUrl) ? "Visit site" : "—",
                  href: isValidUrl(project.liveUrl) ? project.liveUrl : undefined,
                },
              ].map((item) => (
                <div key={item.label} className="bg-black/40 p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                    >
                      {item.value} <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <div className="mt-1.5 text-sm font-medium text-foreground">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CaseStudyHeroMotion>
        </div>
      </section>



      {/* Body sections */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Stack
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-14">
            <Block label="The Problem">{project.problem}</Block>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Our Approach
              </div>
              <ol className="mt-4 space-y-3">
                {project.approach.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/2 backdrop-blur-sm p-5"
                  >
                    <span className="font-heading text-sm font-bold text-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <Block label="The Solution">{project.solution}</Block>
            <Block label="The Outcome">{project.outcome}</Block>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              By the numbers
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">Results that matter.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-sm">
            {project.metrics.map((m, i) => (
              <MetricsMotion key={m.label} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col items-center justify-center bg-black/40 p-8 text-center">
                  <div className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                    {m.value}
                  </div>
                  <div className="mt-3 text-xs font-medium uppercase tracking-wider text-foreground/60">
                    {m.label}
                  </div>
                </div>
              </MetricsMotion>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.id}`}
              className="group glass rounded-2xl p-6 transition-all hover:bg-white/5"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </div>
              <div className="mt-2 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/80">
                {prev.title}
              </div>
            </Link>
            <Link
              href={`/projects/${next.id}`}
              className="group glass rounded-2xl p-6 text-right transition-all hover:bg-white/5"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="mt-2 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/80">
                {next.title}
              </div>
            </Link>
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
              <span className="text-gradient">Want results like these?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Tell us about your project. We respond within 24 hours.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
