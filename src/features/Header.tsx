"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", exact: true },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && href !== "/";
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(16px, 4vw, 40px)",
        background: "rgba(12, 12, 12, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #1A1A1A",
        zIndex: 50,
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#FAFAF8", letterSpacing: "0.02em" }}>
          2X<span style={{ color: "#FF6B00" }}>STUDIO</span>
        </span>
      </Link>

      <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: isActive(item.href, item.exact) ? "#FF6B00" : "#555",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link
          href="/#contact"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#FAFAF8",
            background: "#FF6B00",
            padding: "8px 16px",
            borderRadius: 2,
            textDecoration: "none",
          }}
          className="hidden md:inline-block"
        >
          Start a project
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            background: "transparent",
            border: "1px solid #222",
            borderRadius: 2,
            color: "#555",
            cursor: "pointer",
          }}
          className="md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 64,
              left: 0,
              right: 0,
              background: "#0C0C0C",
              borderBottom: "1px solid #1A1A1A",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            className="md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isActive(item.href, item.exact) ? "#FF6B00" : "#666",
                  padding: "12px 16px",
                  textDecoration: "none",
                  background: isActive(item.href, item.exact) ? "#111" : "transparent",
                  borderRadius: 2,
                }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}