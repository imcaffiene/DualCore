import { cloudinaryImg } from "@/lib/cloudinary";

export type MarqueeImageType = "web" | "mobile";

export interface MarqueeImage {
  id: string;
  url: string;
  type?: MarqueeImageType;
  title?: string;
  category?: string;
}

export const marqueeImages: MarqueeImage[] = [
  {
    id: "web-1",
    url: cloudinaryImg("v1776946807/07.jpg", "web"),
    type: "web",
  },
  {
    id: "web-2",
    url: cloudinaryImg("v1776935738/01.jpg", "web"),
    type: "web",
  },
  {
    id: "web-3",
    url: cloudinaryImg("v1776946806/06.jpg", "web"),
    type: "web",
  },
  {
    id: "web-4",
    url: cloudinaryImg("v1776955159/11.jpg", "web"),
    type: "web",
  },
  {
    id: "web-5",
    url: cloudinaryImg("v1776953735/09.jpg", "web"),
    type: "web",
  },
  {
    id: "web-6",
    url: cloudinaryImg("v1777452634/Pi7-Image-Cropper_1_d4hck8.jpg", "web"),
    type: "web",
  },
  {
    id: "web-7",
    url: cloudinaryImg("v1777452887/Pi7-Image-Cropper_5_oevyse.jpg", "web"), ///
    type: "web",
  },
  {
    id: "web-8",
    url: cloudinaryImg("v1777453121/Pi7-Image-Cropper_6_w5nmaf.jpg", "web"),
    type: "web",
  },
  {
    id: "web-9",
    url: cloudinaryImg("v1777569827/Pi7-Image-Cropper_k8lepp.png", "web"),
    type: "web",
  },
  // {
  //   id: "web-10",
  //   url: cloudinaryImg("v1776946807/07.jpg", "web"),
  //   type: "web",
  // },
  // {
  //   id: "web-11",
  //   url: cloudinaryImg("v1776946807/07.jpg", "web"),
  //   type: "web",
  // },

  {
    id: "mobile-1",
    url: cloudinaryImg("v1777454398/Onboarding_-_17_qov5wc.png", "mobile"),
    type: "mobile",
  },
  {
    id: "mobile-2",
    url: cloudinaryImg("v1777454395/Payment_jtpjjl.png", "mobile"),
    type: "mobile",
  },
  {
    id: "mobile-3",
    url: cloudinaryImg("v1777454391/Onboarding_-_41_opaw0t.png", "mobile"),
    type: "mobile",
  },
  {
    id: "mobile-4",
    url: cloudinaryImg("v1777454387/Onboarding_-_40_kaharm.png", "mobile"),
    type: "mobile",
  },
  {
    id: "mobile-5",
    url: cloudinaryImg("v1777454380/Onboarding_-_19_sfmrlu.png", "mobile"),
    type: "mobile",
  },
  {
    id: "mobile-6",
    url: cloudinaryImg("v1777454341/Onboarding_-_18_qed6y8.png", "mobile"),
    type: "mobile",
  },
  {
    id: "mobile-7",
    url: cloudinaryImg("v1777570247/Pi7-Image-Cropper_qkhxck.png", "mobile"),
    type: "mobile",
  },
];
