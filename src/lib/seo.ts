// export const SITE_URL = "https://dualdev.studio";
export const SITE_URL = "http://localhost:3000/";

export function canonicalUrl(path: string): string {
  const clean =
    path === "/" ? "/" : "/" + path.replace(/^\/+/, "").replace(/\/+$/, "");
  return `${SITE_URL}${clean}`;
}
