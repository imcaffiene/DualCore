"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projectData";
import type { CaseStudy } from "@/data/projectData";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

type Filter = "all" | "web" | "android" | "ios";

const FILTERS: { label: string; value: Filter; }[] = [
  { label: "All work", value: "all" },
  { label: "Web", value: "web" },
  { label: "Android", value: "android" },
  { label: "iOS", value: "ios" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "web") return p.category !== "mobile";
    return p.category === "mobile" && p.platforms?.includes(filter);
  });

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

      {/* ── Hero ── */}
      <section className="relative z-10 overflow-hidden pt-40 pb-20">

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Selected work
            </span>

            {/* Large index number — decorative */}
            <div className="relative mt-4">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 left-0 select-none font-heading text-[120px] font-bold leading-none text-foreground/4 sm:text-[180px]"
              >
                {filtered.length.toString().padStart(2, "0")}
              </span>
              <h1 className="relative font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                <span className="text-gradient">Projects we've</span>
                <br />
                <span className="text-foreground">shipped end-to-end.</span>
              </h1>
            </div>

            <p className="mt-6 max-w-md text-muted-foreground">
              Every project was designed, built, and launched by the two of us.
              If something resonates, let's talk.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${filter === f.value
                    ? "bg-foreground text-background"
                    : "glass text-foreground/60 hover:text-foreground"
                  }`}
              >
                {f.label}
                {f.value === "all" && (
                  <span className="ml-2 text-xs opacity-50">
                    {projects.length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Editorial rows ── */}
      <section className="relative z-10 pb-24">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            No projects in this category yet.
          </div>
        ) : (
          <div>
            {filtered.map((project, i) => (
              <EditorialRow
                key={project.id}
                project={project}
                index={i}
                flip={i % 2 !== 0}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <CtaBanner />

      <Footer />
    </div>
  );
}

// ─── Editorial row ─────────────────────────────────────────────────────────

function EditorialRow({
  project,
  index,
  flip,
}: {
  project: CaseStudy;
  index: number;
  flip: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const imgVariants: Variants = {
    hidden: { opacity: 0, x: flip ? 60 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const copyVariants: Variants = {
    hidden: { opacity: 0, x: flip ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className="relative border-t border-border"
    >
      {/* Full-width inner grid */}
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 ${
          flip ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Image column */}
        <motion.div
          className="relative overflow-hidden lg:[direction:ltr]"
          variants={imgVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Link href={`/projects/${project.id}`} className="group block">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-white/2 p-6 sm:aspect-4/3 sm:p-10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Colour tint on hover */}
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />

              {/* Category badge */}
              <div className="absolute bottom-5 left-5">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur">
                  {project.category}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Copy column */}
        <motion.div
          className="flex flex-col justify-center py-12 lg:[direction:ltr] lg:px-14"
          variants={copyVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Row number */}
          <span
            aria-hidden
            className="font-heading text-6xl font-bold leading-none text-foreground/6 sm:text-8xl"
          >
            {num}
          </span>

          <div className="-mt-3 sm:-mt-5">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                {project.year}
              </span>
              <span className="text-foreground/20">·</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                {project.role}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              <Link
                href={`/projects/${project.id}`}
                className="transition-opacity hover:opacity-70"
              >
                {project.title}
              </Link>
            </h2>

            {/* Description */}
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-foreground/60"
                >
                  {t}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-foreground/40">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            {/* Metrics strip (first 2) */}
            {project.metrics?.length > 0 && (
              <div className="mt-8 flex gap-8">
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <div className="font-heading text-2xl font-bold text-gradient">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/40">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={`/projects/${project.id}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                View case study
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/40 transition-colors hover:text-foreground/70"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed bottom border accent — only on even rows */}
      {!flip && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      )}
    </div>
  );
}

// ─── CTA banner ───────────────────────────────────────────────────────────────

function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="relative z-10 border-t border-border py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative large ampersand */}
          <span
            aria-hidden
            className="pointer-events-none select-none font-heading text-[100px] font-bold leading-none text-foreground/4"
          >
            &amp;
          </span>

          <h2 className="-mt-4 font-heading text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Many more.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            These are highlights. Reach out to see the full portfolio or
            discuss your project — we respond within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              See full portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}