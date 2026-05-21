"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    num: "01",
    title: "Complex Apps",
    desc: "Multi-tenant platforms, real-time systems, and architectures that don't crumble at scale.",
    tags: ["SaaS", "Real-time", "Multi-tenant"],
  },
  {
    num: "02",
    title: "AI Agents",
    desc: "Multi-agent orchestration, tool-calling, RAG pipelines — production, not prototype.",
    tags: ["LangGraph", "RAG", "Orchestration"],
  },
  {
    num: "03",
    title: "Automation",
    desc: "Internal tools, workflow engines, and integrations that do the work of ten people.",
    tags: ["Workflows", "Integrations", "Triggers"],
  },
  {
    num: "04",
    title: "Mobile Apps",
    desc: "React Native + Expo apps that ship to both stores. Performance-first, always.",
    tags: ["React Native", "Expo", "iOS & Android"],
  },
  {
    num: "05",
    title: "DevOps & Infra",
    desc: "CI/CD, observability, cloud infrastructure. We own the full stack, not just the code.",
    tags: ["AWS", "Terraform", "k8s"],
  },
];

function Row({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease, delay: i * 0.06 }}
      className="relative overflow-hidden cursor-default"
      style={{ borderBottom: "1px solid hsl(var(--border))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 origin-left"
        style={{
          background: "hsl(var(--foreground))",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.42s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      <div className="relative z-10 flex items-center gap-6 px-6 md:px-10 lg:px-14 py-6 md:py-7">
        <span
          className="font-mono text-[11px] tracking-[0.18em] w-8 shrink-0 transition-colors duration-300"
          style={{ color: hovered ? "hsl(var(--primary))" : "hsl(var(--text2))" }}
        >
          {s.num}
        </span>

        <span
          className="font-display text-3xl md:text-5xl lg:text-6xl leading-none tracking-wide flex-1 transition-colors duration-300"
          style={{ color: hovered ? "hsl(var(--background))" : "hsl(var(--foreground))" }}
        >
          {s.title.toUpperCase()}
        </span>

        <span
          className="hidden lg:block max-w-[260px] text-sm leading-relaxed font-sans text-right transition-colors duration-300"
          style={{ color: hovered ? "hsl(var(--text2))" : "hsl(var(--text3))", fontWeight: 300 }}
        >
          {s.desc}
        </span>

        <div className="hidden md:flex gap-2 ml-4 shrink-0">
          {s.tags.map(t => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 transition-colors duration-300"
              style={{
                border: `1px solid ${hovered ? "hsl(var(--border2))" : "hsl(var(--border))"}`,
                color: hovered ? "hsl(var(--text2))" : "hsl(var(--text3))",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <span
          className="font-mono text-base ml-4 shrink-0 transition-all duration-300"
          style={{
            color: hovered ? "hsl(var(--primary))" : "hsl(var(--border))",
            transform: hovered ? "translateX(6px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </div>
    </motion.div>
  );
}

export function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-background border-t border-border">
      <div className="px-6 md:px-10 lg:px-14 pt-24 md:pt-32 pb-16 max-w-[1400px] mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div
            className="font-mono text-[11px] tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
            style={{ color: "hsl(var(--primary))" }}
          >
            <span>◆</span> Capabilities
          </div>
          <h2
            className="font-display leading-[0.88]"
            style={{ fontSize: "clamp(52px, 8vw, 120px)", color: "hsl(var(--foreground))" }}
          >
            FIVE THINGS.<br />DONE RIGHT.
          </h2>
        </motion.div>
      </div>

      <div className="border-t border-border">
        {services.map((s, i) => <Row key={s.num} s={s} i={i} />)}
      </div>
    </section>
  );
}