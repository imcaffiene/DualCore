import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { SITE_URL } from "./seo";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  keywords: string[];
  author: string;
  authorRole: string;
  image: string | undefined;
  readTime: string;
  content: string;
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const readTime = readingTime(content);
    const tags: string[] = data.tags || [];

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags,
      keywords: data.keywords || tags,
      author: data.author || "2xStudio",
      authorRole: data.authorRole || "",
      image: data.image || undefined,
      readTime: readTime.text,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const readTime = readingTime(content);
  const tags: string[] = data.tags || [];

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: new Date(data.date).toISOString(),
    tags,
    keywords: data.keywords || tags,
    author: data.author || "2xStudio",
    authorRole: data.authorRole || "",
    image: data.image || undefined,
    readTime: readTime.text,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** Returns up to `limit` posts that share at least one tag with the given slug, excluding itself. */
export function getRelatedPosts(
  slug: string,
  tags: string[],
  limit = 3
): Omit<BlogPost, "content">[] {
  const all = getAllPosts();
  const tagSet = new Set(tags.map((t) => t.toLowerCase()));

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => tagSet.has(t.toLowerCase())).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime());

  return scored.slice(0, limit).map((s) => s.post);
}

export function buildArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: post.image ?? "https://www.2xstudio.in/og-image.png",
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    keywords: post.keywords.join(", "),
    articleSection: "Engineering",
    wordCount: post.content.split(/\s+/).length,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/about`,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "2xStudio",
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "2xStudio",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog`,
      name: "2xStudio Engineering Blog",
      publisher: {
        "@type": "Organization",
        name: "2xStudio",
        url: SITE_URL,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    },
  };
}

export function buildBlogListJsonLd(posts?: Omit<BlogPost, "content">[]) {
  const allPosts = posts ?? getAllPosts();
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: "2xStudio Engineering Blog",
    url: `${SITE_URL}/blog`,
    description:
      "Engineering insights on building production AI agents, full-stack applications, and automation systems.",
    publisher: {
      "@type": "Organization",
      name: "2xStudio",
      url: SITE_URL,
    },
    blogPost: allPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      image: p.image ?? "https://www.2xstudio.in/og-image.png",
      keywords: p.keywords.join(", "),
      author: {
        "@type": "Person",
        name: p.author,
        url: `${SITE_URL}/about`,
      },
    })),
  };
}

export function buildRssXml(): string {
  const posts = getAllPosts();
  const items = posts
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <description><![CDATA[${p.description}]]></description>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>${p.author}</author>
      ${p.keywords.map((k) => `<category>${k}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>2xStudio Engineering Blog</title>
    <description>Engineering insights on building production AI agents, full-stack applications, and automation systems.</description>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${SITE_URL}/og-image.png</url>
      <title>2xStudio Engineering Blog</title>
      <link>${SITE_URL}/blog</link>
    </image>
    ${items}
  </channel>
</rss>`;
}
