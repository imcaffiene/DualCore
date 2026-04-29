"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, Code2, Smartphone, Sparkles,
  Layers, Rocket, Zap, Bot, Workflow, BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web & Full-Stack Apps",
    desc: "High-performance applications built on bleeding-edge stacks. Specializing in server components, real-time sync, and edge computing.",
    tag: "Flagship",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Prisma", "Framer Motion"],
    span: "md:col-span-2 md:row-span-2",
    accent: "from-indigo-500/10 via-blue-500/5 to-transparent",
    glow: "bg-indigo-500/20",
  },
  {
    icon: BrainCircuit,
    title: "Agentic AI",
    desc: "Autonomous agents that reason, plan, and execute multi-step tasks across your stack.",
    tag: "New",
    span: "md:col-span-2",
    accent: "from-fuchsia-500/10 via-purple-500/5 to-transparent",
    glow: "bg-fuchsia-500/20",
  },
  {
    icon: Smartphone,
    title: "iOS & Android Apps",
    desc: "Complex native and cross-platform mobile apps — offline-first, real-time, store-ready.",
    tag: "Native · Flutter · Swift",
    span: "md:col-span-2",
    accent: "from-violet-500/10 to-transparent",
    glow: "bg-violet-500/15",
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Custom chatbots, copilots & RAG systems wired to your data.",
    tag: "LLM",
    span: "",
    accent: "from-cyan-500/10 to-transparent",
    glow: "bg-cyan-500/15",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "n8n, Zapier, Make & custom pipelines that remove busywork.",
    tag: "Ops",
    span: "",
    accent: "from-teal-500/10 to-transparent",
    glow: "bg-teal-500/15",
  },
  {
    icon: Sparkles,
    title: "UI / UX Design",
    desc: "Figma-first systems, prototypes & brand identity.",
    tag: "Design",
    span: "",
    accent: "from-pink-500/10 to-transparent",
    glow: "bg-pink-500/15",
  },
  {
    icon: Layers,
    title: "Backend & APIs",
    desc: "Scalable APIs, databases & auth built to last.",
    tag: "Infra",
    span: "",
    accent: "from-emerald-500/10 to-transparent",
    glow: "bg-emerald-500/15",
  },
  {
    icon: Rocket,
    title: "Launch & DevOps",
    desc: "CI/CD, cloud hosting, smooth path to production.",
    tag: "Ship",
    span: "md:col-span-2",
    accent: "from-orange-500/10 to-transparent",
    glow: "bg-orange-500/15",
  },
  {
    icon: Zap,
    title: "Maintenance",
    desc: "Ongoing support, iteration & feature work post-launch.",
    tag: "Always-on",
    span: "md:col-span-2",
    accent: "from-yellow-500/10 to-transparent",
    glow: "bg-yellow-500/15",
  },
];

const stats = [
  { value: "8+", label: "Complex products shipped" },
  { value: "200K+", label: "Users across our apps" },
  { value: "99.9%", label: "Background job reliability" },
  { value: "4.4★", label: "App Store rating" },
];

function BentoCard({
  icon: Icon,
  title,
  desc,
  tag,
  span,
  accent,
  glow,
  large,
  stack,
  index = 0,
}: {
  icon: typeof Code2;
  title: string;
  desc: string;
  tag: string;
  span: string;
  accent: string;
  glow: string;
  large?: boolean;
  stack?: string[];
  index?: number;
}) {
  return (
    <div className={span}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/5 sm:p-6"
      >
        {/* Subtle gradient wash — only tints on hover */}
        <div
          className={`pointer-events-none absolute inset-0 -z-10 bg-linear-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
        {/* Glow blob — hover only */}
        <div
          aria-hidden
          className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full ${glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />
        {/* Top hairline */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`relative inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur ${
              large ? "h-12 w-12" : "h-9 w-9"
            }`}
          >
            <Icon className={large ? "h-6 w-6" : "h-4 w-4"} />
          </motion.div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground/50 backdrop-blur sm:inline-flex">
              {tag}
            </span>
            <ArrowUpRight className="h-4 w-4 text-foreground/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground/70" />
          </div>
        </div>

        <div className="mt-4">
          <h3
            className={`font-heading font-semibold text-foreground ${
              large ? "text-xl sm:text-2xl" : "text-base"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-1.5 leading-relaxed text-muted-foreground ${
              large ? "max-w-md text-sm" : "text-xs"
            }`}
          >
            {desc}
          </p>

          {large && stack && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-foreground/60 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom progress hairline on hover */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-white/30 to-transparent transition-all duration-500 group-hover:w-full" />
      </motion.div>
    </div>
  );
}

export function ServicesBento() {
  return (
    <div className="grid auto-rows-[160px] grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
      {/* Hero card — Web Development (2×2) */}
      <BentoCard {...services[0]} large />

      {/* Stats card (2×2) */}
      <div className="md:col-span-2 md:row-span-2">
        <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm sm:p-6">
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/2 via-transparent to-transparent" />
          {/* Static soft orb — no animation */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/2 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
              Track record
            </span>
          </div>

          <h3 className="mt-3 font-heading text-xl font-bold leading-tight sm:text-2xl">
            <span className="text-gradient">Numbers don&apos;t lie.</span>
          </h3>
          <p className="mt-1.5 max-w-xs text-xs text-muted-foreground">
            Every project shipped, measured, and supported.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -2 }}
                className="group/stat relative overflow-hidden rounded-xl border border-white/8 bg-white/3 p-3 backdrop-blur transition-colors hover:border-white/15"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover/stat:opacity-100" />
                <div className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Remaining cards */}
      {services.slice(1).map((s, i) => (
        <BentoCard key={s.title} {...s} index={i + 1} />
      ))}
    </div>
  );
}