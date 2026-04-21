import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Selected Work — dualdev",
  description:
    "A curated portfolio of websites, mobile apps, and design work shipped end-to-end by the dualdev studio.",
  openGraph: {
    title: "Selected Work — dualdev",
    description: "Selected web, mobile, and design work by the dualdev studio.",
    url: canonicalUrl("/projects"),
  },
  alternates: { canonical: canonicalUrl("/projects") },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode; }) {
  return <>{children}</>;
}