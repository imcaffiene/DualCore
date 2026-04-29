"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", exact: true },
  { href: "/projects", label: "Work" },
  { href: "/why-us", label: "Why Us" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && href !== "/";
  }

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(960px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="flex h-14 items-center justify-between rounded-full border border-white/8 bg-white/[0.03] px-2 pl-5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]">

        {/* ── Logo ── */}
        <Link href="/" aria-label="2xStudio home" className="flex items-center gap-2.5 group">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect
              x="9" y="2" width="16" height="16" rx="3.5"
              transform="rotate(12 9 2)"
              className="fill-foreground/20"
            />
            <rect x="5" y="10" width="16" height="16" rx="3.5" className="fill-foreground" />
            <rect x="9" y="10" width="8" height="6" rx="1.5" className="fill-foreground/8" />
          </svg>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:text-foreground ${isActive(item.href, item.exact)
                  ? "bg-white/12 text-foreground"
                  : "text-foreground/60"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:opacity-90 md:inline-flex"
          >
            Hire Us
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
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
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/8 bg-white/[0.03] p-3 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive(item.href, item.exact)
                    ? "bg-white/12 text-foreground"
                    : "text-foreground/70"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background"
            >
              Hire Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}