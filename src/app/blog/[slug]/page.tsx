import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ArrowLeft } from "lucide-react";
import { canonicalUrl } from "@/lib/seo";
import { getPost, getAllSlugs, buildArticleJsonLd, getRelatedPosts } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { useMdxComponents } from "@/components/MdxComponents";
import { Navigation } from "@/features/Navigation";
import { SiteFooter } from "@/features/SiteFooter";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — 2xStudio Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: canonicalUrl("/about") }],
    openGraph: {
      title: `${post.title} — 2xStudio Blog`,
      description: post.description,
      images: [{ url: post.image ?? "https://www.2xstudio.in/og-image.png", width: 1200, height: 630, alt: post.title }],
      url: canonicalUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [canonicalUrl("/about")],
      tags: post.tags,
      siteName: "2xStudio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — 2xStudio Blog`,
      description: post.description,
      images: [post.image ?? "https://www.2xstudio.in/og-image.png"],
      creator: "@i_m_caffeine",
      site: "@i_m_caffeine",
    },
    alternates: {
      canonical: canonicalUrl(`/blog/${post.slug}`),
      types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
    },
  };
}

// Breadcrumb JSON-LD (separate from article schema for clarity)
function buildBreadcrumbJsonLd(post: { slug: string; title: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.tags, 3);
  const mdxComponents = useMdxComponents();

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${post.title}" — via @i_m_caffeine`)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`;

  return (
    <div style={{ background: "#0C0C0C", minHeight: "100vh" }}>
      <JsonLd data={buildArticleJsonLd(post)} />
      <JsonLd data={buildBreadcrumbJsonLd(post)} />
      <Navigation />

      <div className="px-6 md:px-12 lg:px-16 pt-28 pb-32 max-w-4xl mx-auto">
        {/* Breadcrumb — visible navigation + SEO */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-10 font-sans" style={{ fontSize: "12px", color: "#444" }}>
          <Link href="/" className="transition-colors hover:text-[#FF6B00]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-[#FF6B00]">Blog</Link>
          <span>/</span>
          <span style={{ color: "#666" }} className="truncate max-w-[200px]">{post.title}</span>
        </nav>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-sans transition-colors duration-200 hover:text-[#FF6B00] mb-12"
          style={{ fontSize: "13px", color: "#555" }}
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All posts
        </Link>

        <header className="mb-12">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono px-2.5 py-1 uppercase"
                  style={{ border: "1px solid #2A2A2A", color: "#666", background: "#0A0A0A", fontSize: "9px", letterSpacing: "0.14em" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display leading-[1.1] mb-4" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#FAFAF8" }}>
            {post.title}
          </h1>

          <p className="font-sans leading-[1.7] mb-6" style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "#777", fontWeight: 300 }}>
            {post.description}
          </p>

          <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid #1C1C1C" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-sans font-semibold text-xs" style={{ background: "#FF6B00", color: "#fff", flexShrink: 0 }}>
              {post.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <div className="font-sans font-medium" style={{ fontSize: "14px", color: "#FAFAF8" }}>
                {post.author}
              </div>
              <div className="font-sans" style={{ fontSize: "12px", color: "#555", marginTop: 1 }}>
                {post.authorRole}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="font-sans" style={{ fontSize: "13px", color: "#555" }}>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
              <div className="font-sans" style={{ fontSize: "12px", color: "#444", marginTop: 1 }}>
                {post.readTime}
              </div>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mb-12 overflow-hidden rounded-xl" style={{ border: "1px solid #1C1C1C" }}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover"
              style={{ aspectRatio: "1200 / 630" }}
            />
          </div>
        )}

        <article>
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["heading-anchor"] } }],
                ],
              },
            }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ borderTop: "1px solid #1C1C1C" }}>
          <div className="font-sans" style={{ fontSize: "13px", color: "#555" }}>
            Found this useful? Share it.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{ background: "#111", border: "1px solid #222", color: "#FAFAF8", fontSize: "13px" }}
              aria-label="Share on Twitter"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share on X
            </a>
            <a
              href={linkedInShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{ background: "#111", border: "1px solid #222", color: "#FAFAF8", fontSize: "13px" }}
              aria-label="Share on LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid #1C1C1C" }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans transition-colors duration-200 hover:text-[#FF6B00]"
            style={{ fontSize: "14px", color: "#555" }}
          >
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: "#FF6B00" }}>
              Related Reading
            </div>
            <div className="flex flex-col gap-0">
              {relatedPosts.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group py-6 flex items-start justify-between gap-6 transition-all duration-200"
                  style={{ borderTop: "1px solid #1C1C1C", borderBottom: i === relatedPosts.length - 1 ? "1px solid #1C1C1C" : "none" }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-display leading-[1.2] mb-1 transition-colors duration-200 group-hover:text-[#FF6B00]" style={{ fontSize: "15px", color: "#FAFAF8" }}>
                      {related.title}
                    </div>
                    <div className="font-sans truncate" style={{ fontSize: "13px", color: "#666" }}>
                      {related.description}
                    </div>
                  </div>
                  <div className="flex-shrink-0 font-sans" style={{ fontSize: "12px", color: "#444" }}>
                    {related.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-16 p-10 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ border: "1px solid #1C1C1C", background: "#080808" }}
        >
          <div>
            <div className="font-display" style={{ fontSize: "clamp(20px, 1.5vw, 24px)", color: "#FAFAF8" }}>
              Build something ambitious?
            </div>
            <p className="font-sans mt-3 leading-relaxed" style={{ fontSize: "15px", color: "#777", fontWeight: 300 }}>
              We ship production AI agents, full-stack apps, and automation systems. Available for new projects.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all hover:opacity-90 flex-shrink-0"
            style={{ background: "#FF6B00", color: "#fff", fontSize: "14px" }}
          >
            Start a project →
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
