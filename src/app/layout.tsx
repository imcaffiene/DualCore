import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

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
    default: "dualdev — Web & App Development Studio",
    // Each page sets its own title; this template wraps it if they don't
    template: "%s | dualdev",
  },
  description:
    "Two developers building end-to-end websites and apps. See our work and hire us for your next project.",
  openGraph: {
    title: "dualdev — Web & App Development Studio",
    description: "Two developers building end-to-end websites and apps.",
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
      <body>{children}</body>
    </html>
  );
}