"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/features/Navigation";
import { SiteFooter } from "@/features/SiteFooter";
import { CharButton } from "@/components/ui/CharButton";
import { usePageTransition } from "@/components/PageTransition";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { num: "50+",  label: "Projects shipped" },
  { num: "4+",   label: "Years building"   },
  { num: "3",    label: "Platforms"        },
  { num: "24h",  label: "Response time"    },
];

const team = [
  {
    initials: "SK",
    photo: "/team/sumit.jpg",
    firstName: "SUMIT",
    lastName: "KUMAR",
    role: "Full-Stack Engineering & AI",
    bio: "Builds complex full-stack applications and production AI agent systems — multi-tenant platforms, automation engines, LLM pipelines, and everything in between. Owns everything from system design to deployment.",
    skills: ["AI Agents", "LLMs", "Next.js", "TypeScript", "Node.js", "System Design"],
    social: { label: "@i_m_caffeine", href: "https://x.com/i_m_caffeine", platform: "X / Twitter" },
  },
  {
    initials: "SS",
    photo: "/team/shubham.jpeg",
    firstName: "SHUBHAM",
    lastName: "SINGH",
    role: "Mobile Engineering — iOS & Android",
    bio: "Ships cross-platform mobile apps from zero to App Store and Play Store. Owns the full mobile stack — architecture, native APIs, performance, and on-device AI integration.",
    skills: ["Flutter", "Swift", "Kotlin", "iOS", "Android", "On-device AI"],
    social: { label: "shubhamsingh2135", href: "https://www.linkedin.com/in/shubhamsingh2135/", platform: "LinkedIn" },
  },
];

const faqs = [
  { q: "How much does a project cost?",              a: "Every project is scoped individually based on your goals, timeline, and requirements. We'd first discuss the details with you, understand the full scope, and then share a tailored quote." },
  { q: "How long until my project ships?",           a: "Timelines depend on scope, but most projects wrap up within 2–6 weeks. After our initial discussion, you'll receive a clear timeline with milestones." },
  { q: "Why not just hire a full-time developer?",   a: "Hiring in-house is costly — experienced designers can exceed $100k and developers $120k annually, not including benefits. We deliver senior-level expertise at a fraction of the cost." },
  { q: "Do you handle both design AND development?", a: "Yes — that's the whole point of 2xStudio. One of us leads design (Figma, UX, brand), the other leads engineering (front-end, back-end, infra). No hand-offs, no 'that's not in scope', no separate vendors." },
  { q: "What if I just need a redesign or a small change?", a: "We take on small scoped engagements too — landing pages, redesigns, audits, or week-long sprints. Tell us what you need and we'll be honest about fit." },
  { q: "Do you offer ongoing maintenance?",          a: "Yes. After launch you can keep us on a monthly retainer for new features, fixes, and improvements. We always reply to bug reports for free in the first 14 days." },
  { q: "Can you build AI agents and automation systems?", a: "That's our core expertise. We've shipped production AI agent systems — multi-agent orchestration, LLM pipelines, RAG systems, and workflow builders processing 250+ operations/hour. Real products, not demos." },
  { q: "Where are you based and what timezones do you cover?", a: "Fully remote. We overlap with most timezones across the US, Europe, and Asia. Async-first by default — calls when they actually move things forward." },
];

function FaqItem({ item, index, inView }: { item: { q: string; a: string }; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease, delay: 0.04 + index * 0.045 }}
      style={{ borderBottom: "1px solid #141414" }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <span
          className="font-display leading-[0.92] transition-colors duration-200"
          style={{ fontSize: "clamp(15px, 1.5vw, 21px)", color: open ? "#FF6B00" : "#FAFAF8" }}
        >
          {item.q.toUpperCase()}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease }}
          className="shrink-0 mt-0.5 font-display"
              style={{ color: open ? "#FF6B00" : "#666", fontSize: 22, lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-sans text-[13px] leading-[1.85] pb-6" style={{ color: "#888", fontWeight: 300, maxWidth: 680 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TeamSection({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const nameX = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ borderBottom: "1px solid #141414", minHeight: "80vh" }}
    >
      <motion.div
        style={{ x: nameX }}
        className="absolute inset-0 flex items-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-display leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(120px, 22vw, 340px)",
            color: "rgba(255,107,0,0.035)",
            letterSpacing: "-0.03em",
            paddingLeft: "2vw",
          }}
        >
          {member.firstName}
        </span>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        style={{ height: 2, background: "#FF6B00", transformOrigin: "left" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="flex flex-col justify-between px-6 md:px-10 lg:px-14 pt-16 pb-12"
          style={{ borderRight: "1px solid #141414" }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "#FF6B00" }}
          >
            0{index + 1} / 02
          </span>

          <div className="mt-auto pt-12">
            <h3
              className="font-display leading-[0.82]"
              style={{ fontSize: "clamp(64px, 9vw, 136px)", color: "#FAFAF8", letterSpacing: "-0.01em" }}
            >
              {member.firstName}
              <br />
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>{member.lastName}</span>
            </h3>
            <p
              className="font-mono text-[10px] tracking-[0.22em] uppercase mt-5"
              style={{ color: "#777" }}
            >
              {member.role}
            </p>
          </div>

          <div className="mt-8">
            <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-2xl" style={{ border: "1px solid #2A2A2A" }}>
              <Image
                src={member.photo}
                alt={member.firstName}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <p className="font-display text-sm tracking-wide mt-3" style={{ color: "#888" }}>
              {member.firstName} {member.lastName}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="flex flex-col justify-center gap-10 px-6 md:px-10 lg:px-14 py-16"
        >
          <p
            className="font-sans leading-[1.9]"
            style={{ fontSize: "clamp(13px, 1.2vw, 16px)", color: "#888", fontWeight: 300, maxWidth: 520 }}
          >
            {member.bio}
          </p>

          <div>
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase mb-4" style={{ color: "#666" }}>
              Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {member.skills.map(s => (
                <span
                  key={s}
                  className="font-mono text-[9px] tracking-[0.14em] uppercase px-3 py-2"
                  style={{ border: "1px solid #2A2A2A", color: "#777", background: "#0A0A0A" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <a
            href={member.social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 self-start"
          >
            <span
              className="font-mono text-[9px] tracking-[0.22em] uppercase transition-colors duration-200 group-hover:text-[#FF6B00]"
              style={{ color: "#666" }}
            >
              {member.social.platform}
            </span>
            <span
              className="font-mono text-[9px] tracking-[0.14em] transition-colors duration-200 group-hover:text-[#FF6B00]"
              style={{ color: "#555" }}
            >
              {member.social.label} ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPageClient() {
  const heroRef  = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const faqRef   = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const faqInView   = useInView(faqRef,   { once: true, margin: "-60px" });
  const { navigateTo } = usePageTransition();

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);

  return (
    <div style={{ background: "#0C0C0C", minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO — full viewport, parallax bg text ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden flex flex-col justify-end"
        style={{ position: "relative", minHeight: "100vh", borderBottom: "1px solid #141414" }}
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="font-display leading-none"
            style={{
              fontSize: "clamp(160px, 28vw, 500px)",
              color: "rgba(255,107,0,0.028)",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
            }}
          >
            2×STUDIO
          </span>
        </motion.div>

        <div className="relative z-10 px-6 md:px-10 lg:px-14 pb-16 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase mb-10 flex items-center gap-2"
            style={{ color: "#FF6B00" }}
          >
            <span>◆</span> About 2×Studio
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease, delay: 0.2 }}
              className="font-display leading-[0.82]"
              style={{ fontSize: "clamp(72px, 13vw, 200px)", color: "#FAFAF8" }}
            >
              About 2xStudio
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease, delay: 0.32 }}
              className="font-display leading-[0.82]"
              style={{ fontSize: "clamp(72px, 13vw, 200px)", color: "#FF6B00", fontStyle: "italic" }}
            >
              ZERO FLUFF.
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease, delay: 0.44 }}
              className="font-display leading-[0.82]"
              style={{ fontSize: "clamp(72px, 13vw, 200px)", color: "#FAFAF8" }}
            >
              ALL SHIPPED.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-14 pt-8"
            style={{ borderTop: "1px solid #141414" }}
          >
            <p
              className="font-sans leading-[1.85] max-w-sm"
              style={{ fontSize: "clamp(12px, 1.1vw, 15px)", color: "#777", fontWeight: 300 }}
            >
              A two-person studio that builds production-grade software — web, mobile, and AI. No agencies, no middlemen, no hand-offs. You talk directly to the people writing the code.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "#555" }}>
                Est. 2025
              </span>
              <span style={{ width: 1, height: 28, background: "#2A2A2A", display: "block" }} />
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "#555" }}>
                Remote-first
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div ref={statsRef} style={{ borderBottom: "1px solid #141414" }}>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
          style={{ borderLeft: "1px solid #141414" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-8 py-10 lg:py-14"
              style={{ borderRight: "1px solid #141414", borderBottom: "1px solid #141414" }}
            >
              <span
                className="font-display leading-none block mb-4"
                style={{ fontSize: "clamp(56px, 7vw, 100px)", color: "#FAFAF8" }}
              >
                {s.num}
              </span>
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "#666" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MANIFESTO ── */}
      <section
        className="px-6 md:px-10 lg:px-14 py-20 lg:py-28"
        style={{ borderBottom: "1px solid #141414", background: "#080808" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p
            className="font-mono text-[10px] tracking-[0.25em] uppercase mb-8"
            style={{ color: "#FF6B00" }}
          >
            ◆ What we believe
          </p>
          <blockquote
            className="font-display leading-[0.88]"
            style={{ fontSize: "clamp(32px, 4.5vw, 68px)", color: "#FAFAF8", maxWidth: "900px" }}
          >
            "The best software comes from people who care about what they're building — not from bloated teams optimising for billable hours."
          </blockquote>
        </motion.div>
      </section>

      {/* ── TEAM ── */}
      {team.map((m, i) => (
        <TeamSection key={m.initials} member={m} index={i} />
      ))}

      {/* ── FAQ ── */}
      <section ref={faqRef} style={{ borderBottom: "1px solid #141414" }}>
        <div
          className="px-6 md:px-10 lg:px-14 py-16"
          style={{ borderBottom: "1px solid #141414" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <h2
              className="font-display leading-[0.82]"
              style={{ fontSize: "clamp(56px, 9vw, 140px)", color: "#FAFAF8" }}
            >
              QUESTIONS,
              <br />
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>ANSWERED.</span>
            </h2>
            <p
              className="font-sans text-[13px] leading-[1.85] max-w-xs lg:text-right pb-2"
              style={{ color: "#777", fontWeight: 300 }}
            >
              Pricing, timelines, how we work — no fluff.
            </p>
          </motion.div>
        </div>

        <div className="px-6 md:px-10 lg:px-14 pb-16" style={{ borderTop: "1px solid #141414" }}>
          {faqs.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} inView={faqInView} />
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.55 }}
            className="font-sans text-[12px] mt-8"
            style={{ color: "#666" }}
          >
            Still curious?{" "}
            <button
              onClick={() => navigateTo("/#contact")}
              className="transition-colors duration-200"
              style={{ color: "#333" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF6B00")}
              onMouseLeave={e => (e.currentTarget.style.color = "#333")}
            >
              Ask us anything →
            </button>
          </motion.p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="px-6 md:px-10 lg:px-14 py-24 lg:py-36"
        style={{ background: "#080808" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-8" style={{ color: "#FF6B00" }}>
              ◆ Work with us
            </p>
            <h2
              className="font-display leading-[0.82]"
              style={{ fontSize: "clamp(56px, 9vw, 140px)", color: "#FAFAF8" }}
            >
              READY TO
              <br />
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>SHIP SOMETHING?</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 items-start md:items-end shrink-0">
            <p
              className="font-sans text-[13px] leading-[1.85] max-w-65 md:text-right"
              style={{ color: "#777", fontWeight: 300 }}
            >
              We're taking on a small number of projects this quarter. Tell us about yours.
            </p>
            <CharButton variant="filled" size="lg" onClick={() => navigateTo("/#contact")}>
              Start a project
            </CharButton>
          </div>
        </motion.div>
      </section>
      <SiteFooter />
    </div>
  );
}
