import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieBanner } from "@/components/CookieBanner";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Root-level metadata — overridden by each page's own `export const metadata`
export const metadata: Metadata = {
  metadataBase: new URL("https://dual-devs.vercel.app/"),
  title: {
    default: "dualdev — AI Agents & Full-Stack Engineering Studio",
    // Each page sets its own title; this template wraps it if they don't
    template: "%s | dualdev",
  },
  description:
    "We build production AI agents, automation systems, and complex full-stack applications. See our work and hire us for your next project.",
  openGraph: {
    title: "dualdev — AI Agents & Full-Stack Engineering Studio",
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
      // `dark` class activates your @custom-variant dark (&:is(.dark *)) in globals.css
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
          <Analytics /> {/* ← add this */}
          <GoogleAnalytics />
          <CookieBanner />
        </PageTransition>
      </body>
    </html>
  );
}