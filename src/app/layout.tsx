import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieBanner } from "@/components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";


const sora = Sora({
  subsets: ["latin"],
  display: "swap",      // ← add this
  preload: true,
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",      // ← add this
  preload: true,
  variable: "--font-body",
});

// Root-level metadata — overridden by each page's own `export const metadata`
export const metadata: Metadata = {
  metadataBase: new URL("https://www.2xstudio.in/"),
  title: {
    default: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    // Each page sets its own title; this template wraps it if they don't
    template: "%s | 2xStudio",
  },
  description:
    "We build production AI agents, automation systems, and complex full-stack applications. See our work and hire us for your next project.",
  openGraph: {
    title: "2xStudio — AI Agents & Full-Stack Engineering Studio",
    description: "We build production AI agents, automation systems, and complex applications.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <PageTransition>
          {children}
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