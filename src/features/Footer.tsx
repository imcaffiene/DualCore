import Link from "next/link";
import { VisitCounter } from "./VisitCounter";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8">
      {/* subtle nebula tint behind footer */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 120% 100% at 50% 100%, rgba(147, 51, 234, 0.06), transparent 70%)mo`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight text-foreground"
            >
              2x<span className="text-foreground/40">Studio</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A two-person studio building AI agents, automation systems, and
              complex applications end-to-end. Available for engagements.
            </p>
            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://x.com/i_m_caffeine"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-foreground/50 transition-colors hover:border-white/20 hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="mailto:imcaffiene@gmail.com"
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-foreground/50 transition-colors hover:border-white/20 hover:text-foreground"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/shubhamsingh2135/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-foreground/50 transition-colors hover:border-white/20 hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground/30">
              Navigate
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground/30">
              Get in touch
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:imcaffiene@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  imcaffiene@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Start a project →
                </Link>
              </li>
            </ul>

            {/* Availability badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 2xStudio. All rights reserved.
          </p>
          <VisitCounter />
          <p className="text-xs text-muted-foreground">
            Designed & built by us. Of course.
          </p>
        </div>
      </div>
    </footer>
  );
}