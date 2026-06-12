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
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div style={{ background: "#0C0C0C", minHeight: "100vh" }}>
      <JsonLd data={buildBlogListJsonLd(posts)} />
      <Navigation />

      <div className="px-6 md:px-12 lg:px-16 pt-28 pb-28 max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div
            className="font-mono text-[12px] tracking-[0.2em] mb-6 flex items-center gap-2"
            style={{ color: "#FF6B00" }}
          >
            <span>◆</span> Journal
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-sans font-bold leading-[1.02]"
              style={{
                fontSize: "clamp(34px, 5vw, 64px)",
                color: "#FAFAF8",
                letterSpacing: "-0.03em",
              }}
            >
              Engineering insights for ambitious products.
            </h1>

            <p
              className="font-sans mt-6 max-w-2xl"
              style={{
                fontSize: "clamp(14px, 1.2vw, 16px)",
                lineHeight: 1.8,
                color: "#7A7A74",
                fontWeight: 300,
              }}
            >
              Essays, breakdowns, and lessons from building production AI agents,
              modern full-stack applications, and automation systems.
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div
            className="py-24 text-center font-sans rounded-2xl"
            style={{
              fontSize: "16px",
              color: "#555",
              border: "1px solid #1C1C1C",
              background: "#0A0A0A",
            }}
          >
            No posts yet. Check back soon.
          </div>
        ) : (
          <>
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block mb-10 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid #1C1C1C",
                  background:
                    "linear-gradient(180deg, rgba(255,107,0,0.05) 0%, rgba(10,10,10,1) 28%)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.6fr]">
                  <div
                    className="min-h-[220px] lg:min-h-full"
                    style={{
                      background:
                        "radial-gradient(circle at top left, rgba(255,107,0,0.22), transparent 45%), #111111",
                      borderRight: "1px solid #1C1C1C",
                    }}
                  />

                  <div className="p-8 md:p-10">
                    <div
                      className="font-mono text-[11px] tracking-[0.18em] mb-5"
                      style={{ color: "#FF6B00" }}
                    >
                      Featured post
                    </div>

                    <h2
                      className="font-sans font-semibold leading-[1.08] transition-colors duration-300 group-hover:text-[#FF6B00]"
                      style={{
                        fontSize: "clamp(28px, 3vw, 42px)",
                        color: "#FAFAF8",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {featuredPost.title}
                    </h2>

                    <p
                      className="font-sans mt-5 max-w-2xl leading-[1.8]"
                      style={{
                        fontSize: "15px",
                        color: "#8A8A84",
                        fontWeight: 300,
                      }}
                    >
                      {featuredPost.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-8">
                      <span
                        className="font-sans"
                        style={{ fontSize: "13px", color: "#666" }}
                      >
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>

                      <span
                        className="font-sans"
                        style={{ fontSize: "13px", color: "#444" }}
                      >
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono px-3 py-1.5"
                          style={{
                            border: "1px solid #2A2A2A",
                            color: "#7A7A74",
                            background: "#0A0A0A",
                            fontSize: "10px",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {remainingPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      border: "1px solid #1C1C1C",
                      background: "#0A0A0A",
                    }}
                  >
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div
                        className="font-sans"
                        style={{ fontSize: "12px", color: "#666" }}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                      <div
                        className="font-sans"
                        style={{ fontSize: "12px", color: "#444" }}
                      >
                        {post.readTime}
                      </div>
                    </div>

                    <h3
                      className="font-sans font-semibold leading-[1.2] transition-colors duration-300 group-hover:text-[#FF6B00]"
                      style={{
                        fontSize: "clamp(20px, 1.8vw, 24px)",
                        color: "#F5F5F3",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="font-sans mt-4 leading-[1.75]"
                      style={{
                        fontSize: "14px",
                        color: "#7A7A74",
                        fontWeight: 300,
                      }}
                    >
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono px-2.5 py-1"
                          style={{
                            border: "1px solid #242424",
                            color: "#666",
                            background: "#0E0E0E",
                            fontSize: "10px",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="mt-8 pt-4 flex items-center justify-between"
                      style={{ borderTop: "1px solid #181818" }}
                    >
                      <span
                        className="font-sans transition-colors duration-300 group-hover:text-[#FF6B00]"
                        style={{ fontSize: "13px", color: "#8E8E88" }}
                      >
                        Read article
                      </span>
                      <span
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: "#FF6B00" }}
                      >
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        <div
          className="mt-20 pt-8 flex items-center justify-between"
          style={{ borderTop: "1px solid #1C1C1C" }}
        >
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