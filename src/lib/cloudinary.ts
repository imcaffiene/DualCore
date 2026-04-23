const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dzzuo1ivo";

export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    quality?: number | "auto";
    format?: "auto" | "webp" | "jpg";
  } = {}
) {
  const { width = 1200, quality = "auto", format = "auto" } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    `w_${width}`,
    "c_fill",
    "dpr_auto",
  ].join(",");

  return `https://res.cloudinary.com/${CLOUD}/image/upload/${transforms}/${publicId}`;
}