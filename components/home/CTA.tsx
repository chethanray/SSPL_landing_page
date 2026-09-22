"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-dark via-primary to-primary-glow p-1 shadow-[var(--shadow-glass)]"
      >
        <div className="relative overflow-hidden rounded-[calc(2.5rem-4px)] bg-gradient-to-br from-primary-dark to-primary px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="grid-bg absolute inset-0 opacity-20" />
          <motion.div
            aria-hidden
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s build the <span className="italic text-primary-glow">future</span> together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Whether you&apos;re modernizing enterprise systems or launching a new product,
              our team is ready to help you ship faster and smarter.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:hello@sspl.dev"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
