"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeader } from "./Services";

const items = [
  {
    name: "Ananya Rao",
    role: "CTO",
    company: "FinPulse",
    initials: "AR",
    quote:
      "SSPL rebuilt our trading platform from the ground up. Latency dropped 4x and our team's velocity has never been higher.",
  },
  {
    name: "Marcus Chen",
    role: "VP Engineering",
    company: "MerchOS",
    initials: "MC",
    quote:
      "The engineering craft is genuinely exceptional. They shipped a headless commerce platform in half the time we planned.",
  },
  {
    name: "Sofia Alvarez",
    role: "Product Director",
    company: "CareLoop Health",
    initials: "SA",
    quote:
      "Beyond technical excellence, SSPL felt like an extension of our team. HIPAA-ready in 12 weeks — remarkable.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);

  return (
    <section className="bg-[color:var(--color-surface)] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Trusted by teams <span className="text-gradient-green">worldwide</span>
            </>
          }
        />
        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-10 sm:p-14 text-center"
            >
              <Quote className="mx-auto h-10 w-10 text-primary/60" />
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-foreground sm:text-2xl">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-primary" : "w-1.5 bg-border"
                  }`}
                  aria-label={`Go to ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
