"use client";

import { useEffect, useState } from "react";

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

  // Format count to 1k, 1.2k style
  const formattedCount = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(count)
    .toLowerCase();

  return (
    <div className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 py-1.5 pl-2 pr-4 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/5">
      <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black/20">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/40 opacity-75 duration-1000" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
      </div>
      
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading text-sm font-bold tabular-nums tracking-tight text-foreground">
          {formattedCount}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40">
          Visits
        </span>
      </div>
    </div>
  );
}
