"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Experience",
    category: "Web App",
    description: "A high-performance headless commerce storefront built with Next.js and Shopify.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#contact",
  },
  {
    title: "SaaS Dashboard UI",
    category: "Product Design",
    description: "A dark-themed analytics dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#contact",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Design",
    description: "A sleek and secure mobile application for managing personal finances.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#contact",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground/70 text-lg"
            >
              A collection of projects showcasing our expertise in design and development.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <Link href="https://github.com" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <GithubIcon className="w-5 h-5" />
              <span>View Github</span>
            </Link> */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={project.link} className="block">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-16 w-16 translate-y-4 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
                      <ArrowUpRight className="h-8 w-8" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-2 text-sm font-medium text-accent">{project.category}</p>
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/70">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
