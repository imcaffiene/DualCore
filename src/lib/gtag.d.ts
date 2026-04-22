// src/types/gtag.d.ts
declare function gtag(
  command: "config" | "event" | "js",
  targetId: string | Date,
  config?: Record<string, unknown>,
): void;

interface Window {
  gtag: typeof gtag;
  dataLayer: unknown[];
}
