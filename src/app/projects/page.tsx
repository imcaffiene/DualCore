"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projectData";
import { Header } from "@/features/Header";
import { ProjectCard } from "@/features/ProjectCard";
import { Footer } from "@/features/Footer.tsx";

type Filter = "all" | "web" | "mobile" | "design" | "fullstack";

const filters: { label: string; value: Filter; }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Design", value: "design" },
  { label: "Full-Stack", value: "fullstack" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden pb-24 pt-40">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.2 0 0) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Selected Work
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold sm:text-6xl">
              <span className="text-gradient">Projects we&apos;ve</span>
              <br />
              <span className="text-foreground">shipped end-to-end.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Every project here was designed, built, and launched by the two of
              us. If something resonates, let&apos;s talk.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === f.value
                    ? "bg-foreground text-background"
                    : "glass text-foreground/70 hover:text-foreground"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          )}

          {/* CTA */}
          <div className="mt-24 rounded-3xl border border-border bg-card p-12 text-center sm:p-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">Like what you see?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              We&apos;d love to design and build something just as good for you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Hire Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
