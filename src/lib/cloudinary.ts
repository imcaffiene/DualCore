const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dzzuo1ivo";

type CardType = "web" | "mobile" | "featured";

const PRESETS: Record<CardType, string> = {
  featured: "f_auto,q_auto,c_fill,g_north_west,w_1600,h_900",
  web: "f_auto,q_auto,c_fill,g_north_west,w_1200,h_675",
  mobile: "f_auto,q_auto,c_fill,g_north,w_400,h_844",
};

function extractPublicId(input: string): string {
  if (!input.includes("res.cloudinary.com")) return input;
  const match = input.match(/\/upload\/(?:(?:[^/,]+,)*[^/,]+\/)?(.+)/);
  return match ? match[1] : input;
}

export function cloudinaryImg(input: string, type: CardType = "web"): string {
  const publicId = extractPublicId(input);
  const transform = PRESETS[type];
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${transform}/${publicId}`;
}