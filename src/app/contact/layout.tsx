import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Hire dualdev",
  description: "Tell us about your web, app, or design project. We respond within 24 hours.",
  openGraph: {
    title: "Contact — Hire dualdev",
    description: "Tell us about your project. We respond within 24 hours.",
    url: canonicalUrl("/contact"),
  },
  alternates: { canonical: canonicalUrl("/contact") },
};

export default function ContactLayout({ children }: { children: React.ReactNode; }) {
  return <>{children}</>;
}