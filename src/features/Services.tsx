"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, accessible, and scalable web applications built with modern frameworks.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to convert and provide an exceptional user experience.",
    icon: <Palette className="w-8 h-8 text-accent" />,
  },
  {
    title: "Mobile First",
    description: "Fully responsive layouts that look perfect on any device, from massive monitors to mobile phones.",
    icon: <Smartphone className="w-8 h-8 text-primary-hover" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto text-lg"
          >
            We specialize in crafting premium digital experiences from end to end, perfectly combining web and mobile expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/50 transition-colors relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-background border border-surface-border">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
