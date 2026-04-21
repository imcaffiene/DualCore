"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { ThreeDMarquee } from "@/components/ui/Marquee3D";

const images = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
        {/* Light overlay just to ensure text contrast, mostly transparent */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-foreground/80 font-medium">Available for freelance opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-8"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Experiences</span>
          <br /> That Convert.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 mb-10"
        >
          We are a duo of creative developers specializing in high-performance web applications, stunning user interfaces, and seamless mobile experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden transition-all hover:bg-primary-hover hover:scale-105 active:scale-95"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface hover:bg-surface-hover text-foreground rounded-full font-medium transition-all hover:scale-105 active:scale-95 border border-surface-border"
          >
            <Terminal className="w-4 h-4" />
            <span>Hire Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
