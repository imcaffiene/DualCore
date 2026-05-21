"use client";

import { useState, useEffect } from "react";
import { usePageTransition } from "@/components/PageTransition";

function getTimeRange() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const [timeRange, setTimeRange] = useState("09–19");
  const { navigateTo } = usePageTransition();

  function NavLink({ href, className, style, children }: { href: string; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
    return (
      <a
        href={href}
        className={className}
        style={{ cursor: "pointer", textDecoration: "none", ...style }}
        onClick={(e) => { e.preventDefault(); navigateTo(href); }}
      >
        {children}
      </a>
    );
  }

  useEffect(() => {
    setTimeRange(getTimeRange());
    const interval = setInterval(() => setTimeRange(getTimeRange()), 60000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: "hsl(var(--primary))" }}>
              Open for projects
            </div>
            <h2 className="mt-6 font-display leading-[0.95] tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)", color: "hsl(var(--foreground))" }}>
              Have something <em style={{ color: "hsl(var(--primary))" }}>hard</em>
              <br /> to build?
            </h2>
            <NavLink href="/#contact" className="mt-10 inline-block font-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "hsl(var(--foreground))", paddingBottom: 4, borderBottom: "1px solid hsl(var(--primary))" }}>
              Start a conversation →
            </NavLink>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-6 lg:grid-cols-3">
            <FooterCol label="Site">
              <li><NavLink href="/projects" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)", fontSize: "18px" }}>Work</NavLink></li>
              <li><NavLink href="/#services" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)", fontSize: "18px" }}>Services</NavLink></li>
              <li><NavLink href="/about" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)", fontSize: "18px" }}>Studio</NavLink></li>
              <li><NavLink href="/#contact" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)", fontSize: "18px" }}>Contact</NavLink></li>
            </FooterCol>
            <FooterCol label="Connect">
              <li><a href="mailto:imcaffiene@gmail.com" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))" }}>Email</a></li>
              <li><a href="https://www.linkedin.com/in/shubhamsingh2135/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))" }}>LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))" }}>GitHub</a></li>
              <li><a href="https://x.com/i_m_caffeine" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: "hsl(var(--foreground))" }}>X / Twitter</a></li>
            </FooterCol>
            <div className="col-span-2 lg:col-span-1">
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "hsl(var(--text3))" }}>Studio</div>
              <div className="mt-4 font-display text-lg leading-snug" style={{ color: "hsl(var(--foreground))" }}>
                Remote-first<br />
                India
              </div>
              <div className="mt-3 font-mono text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                UTC+05:30 · Now {timeRange}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <NavLink href="/" style={{ textDecoration: "none" }}>
              <span className="font-heading text-xl font-bold tracking-tight" style={{ color: "hsl(var(--foreground))" }}>
                2x<span style={{ color: "hsl(var(--muted-foreground))" }}>Studio</span>
              </span>
            </NavLink>
            <p className="font-mono text-[11px]" style={{ color: "hsl(var(--muted-foreground))" }}>
              © {year} · All systems operational
            </p>
          </div>
          <p className="flex items-center gap-2 font-mono text-[11px]" style={{ color: "hsl(var(--muted-foreground))" }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ background: "hsl(var(--green))" }} />
            v2.0 — Engineered, not assembled
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "hsl(var(--text3))" }}>{label}</div>
      <ul className="mt-4 space-y-2.5 font-display text-lg" style={{ color: "hsl(var(--foreground))" }}>{children}</ul>
    </div>
  );
}
