"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-dark"
        >
          About SSPL
        </motion.div>
        <motion.h2

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"   
        >
          Technology Today, <br />
          <span className="text-gradient-green">Innovation Forever</span>
        </motion.h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-primary/40" />
          <Sparkle className="h-4 w-4 text-primary" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-primary/40" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          We&apos;re a team of engineers, designers and strategists building products
          that scale — combining craftsmanship with intelligent systems to help
          modern businesses move faster.
        </motion.p>
      </div>
    </section>
  );
}
