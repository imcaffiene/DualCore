"use client";

import dynamic from "next/dynamic";

const ServicesBento = dynamic(
  () => import("@/components/ui/ServicesBento").then((m) => ({ default: m.ServicesBento })),
  {
    ssr: false,
    loading: () => (
      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-3xl bg-white/5" />
        ))}
      </div>
    ),
  }
);

export function ServicesBentoLazy() {
  return <ServicesBento />;
}