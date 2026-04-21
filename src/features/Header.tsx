"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", exact: true },
  { href: "/projects", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/why-us", label: "Why Us" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && href !== "/";
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-1/2 top-4 z-50 w-[min(960px,calc(100%-1.5rem))] -translate-x-1/2"
    >
      <div className="glass-strong flex h-14 items-center justify-between rounded-full px-2 pl-5 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
        <Link
          href="/"
          className="font-heading text-base font-bold tracking-tight text-foreground"
        >
          dual<span className="text-foreground/50">/</span>dev
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:text-foreground ${isActive(item.href, item.exact)
                  ? "bg-white/10 text-foreground"
                  : "text-foreground/60"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:opacity-90 md:inline-flex"
          >
            Hire Us
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive(item.href, item.exact)
                    ? "bg-white/10 text-foreground"
                    : "text-foreground/70"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background"
            >
              Hire Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}