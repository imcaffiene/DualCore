import type { Metadata, Viewport } from "next";
import "./globals.css";
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
    "full-stack development",
    "automation systems",
    "SaaS development",
    "Next.js development",
    "mobile app development",
    "React Native",
    "production AI",
    "workflow automation",
    "engineering studio",
    "freelance developers",
    "hire developers",
  ],
  authors: [
    { name: "Sumit Kumar" },
    { name: "Shubham Singh" },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0C0C0C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body>
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