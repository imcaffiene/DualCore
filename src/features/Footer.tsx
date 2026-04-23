import Link from "next/link";
import { VisitCounter } from "./VisitCounter";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight text-foreground"
            >
              dual<span className="text-foreground/50">/</span>dev
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A two-person studio building AI agents, automation systems, and
              complex applications end-to-end. Available for engagements.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
              Navigate
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
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
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
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
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Start a project →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} dualdev. All rights reserved.
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
