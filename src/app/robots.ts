import type { MetadataRoute } from "next";

const BASE_URL = "https://www.2xstudio.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── General crawlers ──
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404", "/500"],
      },

      // ── OpenAI (ChatGPT, GPT-4, Browse with Bing) ──
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },

      // ── Anthropic (Claude) ──
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },

      // ── Perplexity ──
      { userAgent: "PerplexityBot", allow: "/" },

      // ── Google AI (Gemini, AI Overviews, SGE) ──
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },

      // ── Meta AI ──
      { userAgent: "FacebookBot", allow: "/" },

      // ── Common Crawl (training data for many LLMs) ──
      { userAgent: "CCBot", allow: "/" },

      // ── Cohere ──
      { userAgent: "cohere-ai", allow: "/" },

      // ── You.com ──
      { userAgent: "YouBot", allow: "/" },

      // ── Applebot (Siri, Apple Intelligence) ──
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },

      // ── Other search engines ──
      { userAgent: "Baiduspider", allow: "/" },
      { userAgent: "Yandex", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}