export const SITE_URL = "https://dual-devs.vercel.app/";

export function canonicalUrl(path: string): string {
  const clean =
    path === "/" ? "/" : "/" + path.replace(/^\/+/, "").replace(/\/+$/, "");
  return `${SITE_URL}${clean}`;
}
