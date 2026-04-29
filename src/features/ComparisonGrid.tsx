"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, X } from "lucide-react";
import { ComparisonCardMotion } from "@/components/WhyUsMotion";

type Tier = {
  name: string;
  tagline: string;
  highlighted?: boolean;
  badge?: string;
  rows: { label: string; status: "yes" | "no" | "meh"; note: string; }[];
};

function StatusIcon({ status }: { status: "yes" | "no" | "meh"; }) {
  if (status === "yes")
    return (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/90 text-background">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
    );
  if (status === "no")
    return (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/30">
        <X className="h-3 w-3" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground/40">
      <span className="h-0.5 w-2 rounded-full bg-current" />
    </span>
  );
}

export function ComparisonGrid({ tiers }: { tiers: Tier[]; }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {tiers.map((tier, i) => (
        <ComparisonCardMotion key={tier.name} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative flex h-full flex-col rounded-3xl p-6 transition-colors sm:p-8 lg:p-10 ${tier.highlighted
                ? "border border-white/20 bg-white/6 shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] backdrop-blur-xl lg:-my-4 lg:scale-[1.03]"
                : "border border-white/8 bg-white/3 backdrop-blur-xl hover:border-white/15"
              }`}
          >
            {/* Background elements wrapper to clip overflowing effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
              {/* Gradient wash */}
              <div
                className={`absolute inset-0 bg-linear-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${tier.highlighted
                    ? "from-white/8 via-transparent to-transparent"
                    : "from-white/4 via-transparent to-transparent"
                  }`}
              />

              {/* Glow blob */}
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top hairline */}
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Dot texture */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Highlighted top glow */}
              {tier.highlighted && (
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.35 0 0) 0%, transparent 70%)",
                  }}
                />
              )}

              {/* Bottom hairline */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-white/40 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Badge is now outside the overflow-hidden layer */}
            {tier.highlighted && tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                  <Sparkles className="h-3 w-3" />
                  {tier.badge}
                </span>
              </div>
            )}

            {/* Header */}
            <div>
              <h3
                className={`font-heading text-2xl font-bold ${tier.highlighted ? "text-gradient" : "text-foreground/90"
                  }`}
              >
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
            </div>

            {/* Rows */}
            <ul className="mb-8 mt-8 flex-1 space-y-4">
              {tier.rows.map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <StatusIcon status={row.status} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-foreground">{row.label}</div>
                    <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {row.note}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {tier.highlighted && (
              <div className="mt-auto pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
                >
                  Work with us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </ComparisonCardMotion>
      ))}
    </div>
  );
}