import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogListJsonLd } from "@/lib/blog";
import { Navigation } from "@/features/Navigation";
import { SiteFooter } from "@/features/SiteFooter";

export const metadata: Metadata = {
  title: "Blog — AI Engineering Insights | 2xStudio",
  description:
    "Engineering insights on building production AI agents, full-stack applications, automation systems, and mobile apps. Written by the engineers at 2xStudio.",
  keywords: [
    "AI agent engineering",
    "production AI systems",
    "full-stack development blog",
    "LLM integration guide",
    "automation engineering",
    "Next.js tutorial",
    "software engineering blog",
    "AI architecture",
    "SaaS engineering",
    "TypeScript engineering",
    "multi-agent systems",
    "AI development insights",
  ],
  openGraph: {
    title: "Blog — AI Engineering Insights | 2xStudio",
    description:
      "Production AI agents, full-stack apps, and automation — engineering insights from the engineers at 2xStudio.",
    url: canonicalUrl("/blog"),
    type: "website",
    images: [
      {
        url: "https://www.2xstudio.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "2xStudio Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AI Engineering Insights | 2xStudio",
    description:
      "Engineering insights on building production AI agents, full-stack applications, and automation systems.",
    images: ["https://www.2xstudio.in/og-image.png"],
  },
  alternates: {
    canonical: canonicalUrl("/blog"),
    types: { "application/rss+xml": "https://www.2xstudio.in/feed.xml" },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ background: "#0C0C0C", minHeight: "100vh" }}>
      <JsonLd data={buildBlogListJsonLd(posts)} />
      <Navigation />

      <div className="px-6 md:px-12 lg:px-16 pt-28 pb-28 max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-[12px] tracking-[0.25em] uppercase mb-8 flex items-center gap-2" style={{ color: "#FF6B00" }}>
            <span>◆</span> Blog
          </div>
          <h1 className="font-display leading-[0.9]" style={{ fontSize: "clamp(40px, 7vw, 90px)", color: "#FAFAF8", letterSpacing: "-0.02em" }}>
            ENGINEERING
            <br />
            <span style={{ color: "#FF6B00", fontStyle: "italic" }}>INSIGHTS.</span>
          </h1>
          <p className="font-sans max-w-lg mt-6" style={{ fontSize: "clamp(13px, 1.1vw, 15px)", lineHeight: 1.7, color: "#777", fontWeight: 300 }}>
            Lessons from building production AI agents, full-stack apps, and automation systems. Written by the engineers who ship them.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-24 text-center font-sans" style={{ fontSize: "16px", color: "#555" }}>
            No posts yet. Check back soon.
          </div>
        ) : (
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-10 transition-all duration-200"
                style={{ borderTop: i === 0 ? "1px solid #1C1C1C" : "1px solid #1C1C1C" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-12">
                  <div>
                    <div className="font-sans" style={{ fontSize: "13px", color: "#555" }}>
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                    <div className="font-sans" style={{ fontSize: "12px", color: "#444", marginTop: 4 }}>
                      {post.readTime}
                    </div>
                  </div>
                  <div>
                    <h2
                      className="font-display leading-[1.2] transition-colors duration-200 group-hover:text-[#FF6B00]"
                      style={{ fontSize: "clamp(18px, 1.5vw, 22px)", color: "#FAFAF8" }}
                    >
                      {post.title}
                    </h2>
                    <p className="font-sans mt-3 leading-[1.7]" style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "#777", fontWeight: 300 }}>
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono px-3 py-1.5 uppercase transition-colors duration-200 group-hover:border-[#FF6B00] group-hover:text-[#FF6B00]"
                          style={{ border: "1px solid #2A2A2A", color: "#666", background: "#0A0A0A", fontSize: "10px", letterSpacing: "0.12em" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-20 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid #1C1C1C" }}>
          <span className="font-sans" style={{ fontSize: "14px", color: "#444" }}>
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
          <a
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans transition-colors duration-200 hover:text-[#FF6B00]"
            style={{ fontSize: "14px", color: "#555" }}
          >
            RSS Feed ↗
          </a>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
