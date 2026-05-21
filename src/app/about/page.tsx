import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildAboutPageJsonLd } from "@/lib/jsonld";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About 2xStudio — Two Senior Engineers, One Studio",
  description:
    "Two senior engineers, zero fluff, all shipped. We build production AI agents, full-stack applications, and mobile apps. Meet the team behind 2xStudio.",
  openGraph: {
    title: "About 2xStudio — Two Senior Engineers, One Studio",
    description:
      "Two senior engineers building production AI agents, full-stack apps, and mobile apps — no agencies, no middlemen.",
    url: canonicalUrl("/about"),
  },
  twitter: {
    card: "summary_large_image",
    title: "About 2xStudio — Two Senior Engineers, One Studio",
    description:
      "Two senior engineers building production AI agents, full-stack apps, and mobile apps.",
  },
  alternates: { canonical: canonicalUrl("/about") },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildAboutPageJsonLd()} />
      <AboutPageClient />
    </>
  );
}
