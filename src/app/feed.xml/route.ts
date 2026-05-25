import { buildRssXml } from "@/lib/blog";

export async function GET() {
  const xml = buildRssXml();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
