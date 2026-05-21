"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CharButton } from "@/components/ui/CharButton";
import { usePageTransition } from "@/components/PageTransition";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      navigateTo(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Work", action: () => { setMenuOpen(false); navigateTo("/projects"); } },
    { label: "Studio", action: () => { setMenuOpen(false); navigateTo("/about"); } },
    // { label: "Why Us", action: () => window.location.href = "/why-us" },
    // { label: "Services", action: () => scrollToSection("services") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #1C1C1C" : "1px solid transparent",
        }}
      >
        <div className="px-6 md:px-10 lg:px-14 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-tight"
            style={{ color: "#FAFAF8", textDecoration: "none" }}
          >
            2x<span style={{ color: "#666" }}>Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={l.action}
                className="font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{ color: "#777", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FAFAF8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#777")}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <CharButton
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="hidden md:block"
          >
            Start a project
          </CharButton>

          <button
            className="md:hidden flex flex-col gap-1.25 p-1 z-50"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-[1.5px] transition-all duration-300 origin-center"
                style={{
                  background: "#FAFAF8",
                  transform:
                    i === 0 && menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 1 && menuOpen ? "scaleX(0)"
                    : i === 2 && menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ background: "#0C0C0C" }}
          >
            <div className="flex flex-col gap-2 mt-16">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={l.action}
                  className="font-display text-left tracking-wide py-2 transition-colors"
                  style={{ fontSize: "clamp(44px, 10vw, 72px)", color: "#FAFAF8", background: "none", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FF6B00")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#FAFAF8")}
                >
                  {l.label.toUpperCase()}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06, duration: 0.3 }}
                onClick={() => scrollToSection("contact")}
                className="font-display text-left tracking-wide py-2 mt-2"
                style={{ fontSize: "clamp(44px, 10vw, 72px)", color: "#FF6B00", background: "none", border: "none", cursor: "pointer" }}
              >
                HIRE US
              </motion.button>
            </div>
            <div className="mt-16 font-mono text-[10px] tracking-widest uppercase" style={{ color: "#333" }}>
              2×studio · Engineering Studio · Est. 2022
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}