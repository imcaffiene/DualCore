"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const DURATION = 4000;

const items = [
  {
    num: "01",
    heading: "Discovery",
    body: "We get inside your head, your users' heads, and the problem itself. No code, no Figma — just clarity about what we're building and why.",
    tag: "Phase 01",
    stat: "Clarity",
    deliverables: ["Stakeholder interviews + workflow mapping", "Scope definition and shared project board", "Fixed-price quote and signed SOW"],
  },
  {
    num: "02",
    heading: "Design",
    body: "Information architecture first, then high-fidelity screens. You see real designs early and sign off before a single line of code is written.",
    tag: "Phase 02",
    stat: "Figma",
    deliverables: ["IA, user flows & wireframes", "High-fidelity Figma + design system tokens", "Clickable prototype for sign-off"],
  },
  {
    num: "03",
    heading: "Build",
    body: "We build in parallel — web and mobile developed simultaneously where needed. Regular demos, a live staging URL, and full visibility into progress.",
    tag: "Phase 03",
    stat: "Ship",
    deliverables: ["Production-grade web app (Next.js + TypeScript)", "AI agent architecture + LLM integration", "Regular demos + staging deploys throughout"],
  },
  {
    num: "04",
    heading: "Launch",
    body: "QA, accessibility audit, performance pass, and a clean cutover. We sweat the details so launch day is boring — the way it should be.",
    tag: "Phase 04",
    stat: "Live",
    deliverables: ["Cross-browser, cross-device QA", "App Store + Play Store submission (if mobile)", "Hand-off docs + recorded walkthroughs"],
  },
  {
    num: "05",
    heading: "Support",
    body: "14 days of free post-launch support included. After that, optional retainer for new features, fixes, and ongoing iteration.",
    tag: "Phase 05",
    stat: "Always",
    deliverables: ["14-day free bug-fix window", "Optional monthly retainer", "Async-first communication, always"],
  },
];

export function WhyUs() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!inView || paused) return;
    const t = setTimeout(() => {
      setPrev(active);
      setActive((a) => (a + 1) % items.length);
    }, DURATION);
    return () => clearTimeout(t);
  }, [active, inView, paused]);

  const go = (i: number) => {
    if (i === active) return;
    setPrev(active);
    setActive(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };

  const dir = prev === null ? 1 : active > prev ? 1 : active < prev ? -1 : 1;

  return (
    <section
      className="bg-background py-10 px-5"
    >
      <div
        ref={ref}
        className="bg-bg2"
        style={{
          border: "1px solid hsl(var(--border2))",
          boxShadow: "0 0 0 1px hsl(var(--background)), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.03)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div className="px-6 md:px-10 lg:px-14 pt-16 md:pt-24 pb-16 md:pb-24">

          <div className="flex items-center justify-between mb-14">
            <div className="flex items-center gap-2.5">
              <span style={{ color: "hsl(var(--primary))", fontSize: 8 }}>◆</span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: "hsl(var(--primary))" }}>
                Our Process
              </span>
            </div>
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="relative overflow-hidden transition-all duration-300"
                  style={{
                    width: active === i ? 32 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: active === i ? "transparent" : "hsl(var(--surface))",
                    border: active === i ? `1px solid hsl(var(--primary))` : "none",
                  }}
                >
                  {active === i && (
                    <motion.div
                      key={active}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                      className="absolute inset-y-0 left-0"
                      style={{ background: "hsl(var(--primary))" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <div>
              <h2
                className="font-display leading-[0.86] mb-6"
                style={{ fontSize: "clamp(52px, 7vw, 100px)", color: "hsl(var(--foreground))" }}
              >
                FROM KICKOFF
                <br />
                <span style={{ color: "hsl(var(--primary))", fontStyle: "italic" }}>TO LAUNCH.</span>
              </h2>
              <p
                className="font-sans text-sm leading-[1.85] mb-10"
                style={{ color: "hsl(var(--text3))", fontWeight: 300, maxWidth: 360 }}
              >
                Five phases. Regular demos. Zero surprises.
              </p>

              <div className="border-t border-border">
                {items.map((item, i) => (
                  <button
                    key={item.num}
                    onClick={() => go(i)}
                    className="w-full text-left flex items-center gap-5 py-4 transition-all"
                    style={{ borderBottom: "1px solid hsl(var(--border))" }}
                  >
                    <span
                      className="font-mono text-[10px] tracking-widest flex-shrink-0 transition-colors duration-300"
                      style={{ color: active === i ? "hsl(var(--primary))" : "hsl(var(--surface))", width: 24 }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="font-display leading-none transition-colors duration-300"
                      style={{
                        fontSize: "clamp(18px, 2vw, 28px)",
                        color: active === i ? "hsl(var(--foreground))" : "hsl(var(--text3))",
                      }}
                    >
                      {item.heading.toUpperCase()}
                    </span>
                    {active === i && (
                      <motion.div
                        layoutId="activeBar"
                        className="ml-auto flex-shrink-0"
                        style={{ width: 16, height: 2, background: "hsl(var(--primary))" }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative" style={{ paddingRight: 12, paddingBottom: 12 }}>
              <div
                className="absolute"
                style={{
                  inset: 0,
                  bottom: -12,
                  right: -12,
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  zIndex: 0,
                }}
              />
              <div
                className="absolute"
                style={{
                  inset: 0,
                  bottom: -6,
                  right: -6,
                  background: "hsl(var(--bg2))",
                  border: "1px solid hsl(var(--border2))",
                  zIndex: 1,
                }}
              />

              <div className="relative overflow-hidden" style={{ zIndex: 2, minHeight: 360 }}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    initial={{ y: dir > 0 ? 60 : -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: dir > 0 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.42, ease }}
                    className="flex flex-col gap-7 p-8 md:p-10"
                    style={{ background: "hsl(var(--bg3))", border: "1px solid hsl(var(--border2))" }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-[9px] tracking-[0.22em] uppercase"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        {items[active].tag}
                      </span>
                      <span className="font-mono text-[9px]" style={{ color: "hsl(var(--surface))" }}>
                        {items[active].num} / 05
                      </span>
                    </div>

                    <div>
                      <div
                        className="font-display leading-none mb-3"
                        style={{ fontSize: "clamp(52px, 7vw, 88px)", color: "hsl(var(--primary))" }}
                      >
                        {items[active].stat.toUpperCase()}
                      </div>
                      <div style={{ width: 28, height: 2, background: "hsl(var(--primary))", margin: "14px 0" }} />
                      <h3
                        className="font-display leading-[0.88]"
                        style={{ fontSize: "clamp(24px, 2.6vw, 36px)", color: "hsl(var(--foreground))" }}
                      >
                        {items[active].heading.toUpperCase()}
                      </h3>
                    </div>

                    <p
                      className="font-sans text-sm leading-[1.85]"
                      style={{ color: "hsl(var(--text2))", fontWeight: 300 }}
                    >
                      {items[active].body}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {items[active].deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span style={{ color: "hsl(var(--primary))", fontSize: 8, marginTop: 5, flexShrink: 0 }}>◆</span>
                          <span
                            className="font-mono text-[10px] tracking-wide leading-[1.7]"
                            style={{ color: "hsl(var(--text3))" }}
                          >
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <span
                      className="absolute bottom-2 right-3 font-display select-none leading-none pointer-events-none"
                      style={{ fontSize: "clamp(80px, 12vw, 140px)", color: "hsl(var(--primary) / 0.04)" }}
                    >
                      {items[active].num}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}