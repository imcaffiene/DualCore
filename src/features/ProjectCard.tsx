"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: "web" | "mobile" | "design" | "fullstack";
  year: string;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur-md transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4 text-foreground" />
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
