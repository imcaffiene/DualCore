export const SITE_URL = "https://www.2xstudio.in";

export function canonicalUrl(path: string): string {
  const clean =
    path === "/" ? "/" : "/" + path.replace(/^\/+/, "").replace(/\/+$/, "");
  return `${SITE_URL}${clean}`;
}
