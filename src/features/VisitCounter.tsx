"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((r) => r.json())
      .then((d) => {
        if (d.count) setCount(d.count);
      })
      .catch(() => { }); // silently fail — never break the UI
  }, []);

  if (!count) return null;

  return (
    <div className="glass inline-flex items-center gap-3 rounded-full px-3 py-2 text-[11px] leading-none text-foreground/75">
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
        <Activity className="h-3.5 w-3.5 text-foreground/70" />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Visits
        </span>
        <span className="font-heading text-sm font-semibold tabular-nums text-foreground">
          {count.toLocaleString()}
        </span>
      </div>
      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]" />
    </div>
  );
}
