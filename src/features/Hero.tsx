"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CharButton } from "@/components/ui/CharButton";
import { usePageTransition } from "@/components/PageTransition";

function StatCounter({ val, label, delay = 0 }: { val: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  const match = val.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : val;
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 60;
    const step = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(target, parseFloat((eased * target).toFixed(isDecimal ? 1 : 0))));
      if (current >= steps) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  const display = isDecimal ? count.toFixed(1) : Math.round(count).toString();

  return (
    <div ref={ref} style={{ textAlign: "right" }}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay }}
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2vw, 32px)", lineHeight: 1, color: "#FAFAF8" }}
      >
        {display}{suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#333", marginTop: 3 }}
      >
        {label}
      </motion.div>
    </div>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

const tags = ["Complex Apps", "AI Agents", "Automation", "Mobile Apps", "DevOps"];
const stats = [
  { val: "8+", label: "Products" },
  { val: "200K+", label: "Users" },
  { val: "99.9%", label: "Uptime" },
  { val: "4.4★", label: "App Store" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { navigateTo } = usePageTransition();

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const px = "clamp(24px, 4vw, 56px)";

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      <div style={{ height: 64, flexShrink: 0 }} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          zIndex: 1,
          paddingBottom: "clamp(24px, 3vw, 44px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="flex items-center gap-2.5"
          style={{ padding: `0 ${px}`, marginBottom: "clamp(20px, 2.5vw, 36px)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "hsl(var(--primary))", flexShrink: 0 }}
          />
          <span
            className="font-mono text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Engineering Studio · Est. 2025
          </span>
          <span style={{ flex: 1 }} />
          <span
            className="w-1.5 h-1.5 rounded-full hidden md:inline-block"
            style={{ background: "hsl(var(--green))", flexShrink: 0 }}
          />
          <span
            className="hidden md:inline font-mono text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Available for projects
          </span>
        </motion.div>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            padding: `0 ${px}`,
            gap: 32,
          }}
        >
          <h1 style={{ flex: 1 }}>
            {["WE ENGINEER", "WHAT OTHERS"].map((line, li) => (
              <div key={li} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "106%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, ease, delay: 0.08 + li * 0.1 }}
                  className="font-display"
                  style={{
                    display: "block",
                    fontSize: "clamp(54px, 11vw, 178px)",
                    lineHeight: 0.88,
                    letterSpacing: "-0.01em",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
            <div style={{ overflow: "hidden" }}>
              <motion.span
                initial={{ y: "106%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, ease, delay: 0.28 }}
                className="font-display"
                style={{
                  display: "block",
                  fontSize: "clamp(54px, 11vw, 178px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.01em",
                  color: "hsl(var(--primary))",
                  fontStyle: "italic",
                }}
              >
                CAN'T.
              </motion.span>
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="hidden lg:flex"
            style={{
              width: 230,
              flexDirection: "column",
              justifyContent: "space-between",
              paddingLeft: 28,
              borderLeft: "1px solid hsl(var(--border))",
              paddingBottom: 2,
            }}
          >
            <p className="font-sans text-[13px] leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}>
              A small studio of senior engineers. Complex apps, AI agents, automation — production-grade, always.
            </p>

            <div className="flex flex-col gap-2.5 my-auto">
              {tags.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-2.5"
                >
                  <span style={{ color: "hsl(var(--primary))", fontSize: 6 }}>◆</span>
                  <span
                    className="font-mono text-[11px] tracking-[0.16em] uppercase"
                    style={{ color: "hsl(var(--text2))" }}
                  >
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(var(--text3))" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                style={{ background: "hsl(var(--green))", flexShrink: 0 }}
              />
              Est. 2025 · India
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
        className="border-t border-border shrink-0 relative z-10"
      >
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          style={{ padding: `18px ${px}` }}
        >
          <p className="lg:hidden font-sans text-[13px] leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300, maxWidth: 320 }}>
            Complex full-stack apps, AI agents, automation. Production-grade, always.
          </p>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <CharButton variant="filled" onClick={() => navigateTo("/projects")}>
              See our work →
            </CharButton>
            <CharButton
              variant="outline"
              onClick={() => go("contact")}
              className="lg:hidden"
              style={{ borderColor: "#222", color: "#666" }}
            >
              Hire us
            </CharButton>
          </div>

          <div className="hidden md:flex" style={{ alignItems: "center", gap: 0 }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: `0 ${i === 0 ? 0 : "clamp(14px, 1.8vw, 24px)"}`,
                  paddingRight: "clamp(14px, 1.8vw, 24px)",
                  borderRight: i < stats.length - 1 ? "1px solid #1C1C1C" : "none",
                }}
              >
                <StatCounter val={s.val} label={s.label} delay={i * 0.08} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}