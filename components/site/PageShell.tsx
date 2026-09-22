"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

export type HeroTile = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export type HeroCta = { label: string; href: string };

function HeroTiles({ tiles }: { tiles: HeroTile[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      <div className="glass-card rounded-3xl p-2 sm:p-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.6 }}
              className="group rounded-2xl p-5 transition-all hover:bg-white"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-[var(--shadow-soft)]"
              >
                {t.icon}
              </motion.div>
              <div className="mt-4 text-sm font-semibold text-foreground">{t.title}</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {t.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PageShell({
  eyebrow,
  badge,
  title,
  sub,
  primaryCta,
  secondaryCta,
  tiles,
  children,
}: {
  eyebrow: string;
  badge?: string;
  title: ReactNode;
  sub?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  tiles?: HeroTile[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="bg-hero-mesh relative overflow-hidden px-6 pb-24 pt-32 sm:pt-40">
          <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="relative">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative mx-auto max-w-4xl text-center"
              >
                <motion.div variants={item} className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-medium text-primary-dark shadow-sm backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5" /> {badge ?? eyebrow}
                  </span>
                </motion.div>

                <motion.div
                  variants={item}
                  className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-primary-dark"
                >
                  {eyebrow}
                </motion.div>

                <motion.h1
                  variants={item}
                  className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
                >
                  {title}
                </motion.h1>

                {sub && (
                  <motion.p
                    variants={item}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
                  >
                    {sub}
                  </motion.p>
                )}

                {(primaryCta || secondaryCta) && (
                  <motion.div
                    variants={item}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3"
                  >
                    {primaryCta && (
                      <Link
                        href={primaryCta.href}
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary-dark to-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                        {primaryCta.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                    {secondaryCta && (
                      <Link
                        href={secondaryCta.href}
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white"
                      >
                        {secondaryCta.label}
                        <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>

            {tiles && tiles.length > 0 && <HeroTiles tiles={tiles} />}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
