import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Bebas_Neue, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieBanner } from "@/components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import { Cursor } from "@/components/Cursor";
import { GlobalGlow } from "@/components/GlobalGlow";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-custom",
  display: "swap",
  preload: true,
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-custom",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-custom",
  display: "swap",
  preload: false,
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-custom",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0C0C0C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.2xstudio.in/"),
  title: {
    default: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    template: "%s | 2xStudio",
  },
  description:
    "We build production AI agents, automation systems, and complex full-stack applications. Two senior engineers shipping complex apps, AI agents, automation, and mobile apps. Available for new projects.",
  keywords: [
    "AI agents",
    "AI agent development",
    "hire AI developers",
    "full-stack development",
    "automation systems",
    "SaaS development",
    "Next.js development",
    "mobile app development",
    "React Native",
    "Flutter",
    "production AI",
    "workflow automation",
    "engineering studio",
    "freelance developers",
    "hire developers",
    "LLM integration",
    "OpenAI",
    "software agency India",
  ],
  authors: [
    { name: "Sumit Kumar", url: `${SITE_URL}/about` },
    { name: "Shubham Singh", url: `${SITE_URL}/about` },
  ],
  creator: "2xStudio",
  publisher: "2xStudio",
  openGraph: {
    title: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    description:
      "Two senior engineers building production AI agents, automation systems, and complex full-stack applications. Available for new projects.",
    url: "https://www.2xstudio.in/",
    siteName: "2xStudio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.2xstudio.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "2xStudio — AI Agents & Full-Stack Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    description:
      "Two senior engineers building production AI agents, automation systems, and complex full-stack applications.",
    creator: "@i_m_caffeine",
    site: "@i_m_caffeine",
    images: ["https://www.2xstudio.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Replace with your actual Google Search Console verification code
  // verification: { google: "YOUR_ACTUAL_CODE_HERE" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0C0C0C" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href={`${SITE_URL}/sitemap.xml`} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* RSS Autodiscovery — tells feed readers and Google about your RSS feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="2xStudio Engineering Blog"
          href={`${SITE_URL}/feed.xml`}
        />
        {/* LLM/AI Crawler Discovery — llms.txt standard */}
        <link rel="llms" type="text/plain" href={`${SITE_URL}/llms.txt`} title="LLM-readable site index" />
        <link rel="llms-full" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="Full content for AI indexing" />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body suppressHydrationWarning>
        <Cursor />
        <GlobalGlow />
        <PageTransition>
          <main>{children}</main>
          <Suspense fallback={null}>
            <Analytics />
            <GoogleAnalytics />
            <CookieBanner />
            <SpeedInsights />
          </Suspense>
        </PageTransition>
      </body>
    </html>
  );
}