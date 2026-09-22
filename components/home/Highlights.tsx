"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Rocket } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Building scalable web and enterprise applications with modern stacks.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Creating intelligent automation and decision-making systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Reliable cloud-native architecture, deployment and observability.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    desc: "Helping businesses modernize workflows through smart technology.",
  },
];

export function Highlights() {
  return (
    <section className="relative -mt-28 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card grid grid-cols-1 gap-2 rounded-3xl p-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative rounded-2xl p-6 transition-all hover:bg-white"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-white ring-1 ring-primary/15 transition-transform group-hover:scale-110">
                <it.icon className="h-5 w-5 text-primary-dark" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
