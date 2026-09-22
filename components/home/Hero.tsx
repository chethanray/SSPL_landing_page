"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  Cloud,
  Cpu,
  BarChart3,
  Code2,
  Database,
  Zap,
  Activity,
} from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const words = ["Building", "Smarter", "Digital", "Solutions"];

export function Hero() {
  return (
    <section
      id="home"
      className="bg-hero-mesh relative overflow-hidden pb-40 pt-32 sm:pt-40"
    >
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative mx-auto max-w-4xl text-center"
          >
            <motion.div variants={item} className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-medium text-primary-dark shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Innovative Technology Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 text-balance text-5xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-3 inline-block"
                >
                  {w === "Digital" || w === "Solutions" ? (
                    <span className="text-gradient-green">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.7 }}
                className="text-foreground/85"
              >
                for a Better Tomorrow
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              SSPL builds scalable software, enterprise applications, AI-powered platforms,
              cloud architectures, and digital transformation products that help businesses
              innovate and grow.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary-dark to-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                Explore Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white"
              >
                <Play className="h-4 w-4 text-primary" />
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero visual — outside the aurora-scoped wrapper, no animated background behind it */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-20 max-w-5xl"
    >
      <div className="glass-card relative rounded-3xl p-4 sm:p-6">
        {/* main dashboard */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-primary-dark to-primary p-5 text-primary-foreground shadow-lg md:col-span-2">
            <div className="flex items-center justify-between text-xs opacity-90">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" /> Platform Analytics
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" /> Live
              </div>
            </div>
            <div className="mt-4 text-4xl font-semibold tracking-tight">2.4M+</div>
            <div className="text-xs opacity-80">API requests processed today</div>
            <div className="mt-5 flex h-24 items-end gap-1.5">
              {[40, 55, 42, 65, 58, 78, 62, 85, 72, 92, 80, 96, 88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1 + i * 0.04, duration: 0.5 }}
                  style={{ height: `${h}%` }}
                  className="w-full origin-bottom rounded-t-md bg-white/25"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <StatTile icon={<Cloud className="h-4 w-4" />} label="Cloud Uptime" value="99.99%" />
            <StatTile icon={<Cpu className="h-4 w-4" />} label="AI Models Active" value="128" />
            <StatTile icon={<Activity className="h-4 w-4" />} label="Latency" value="42ms" />
          </div>
        </div>

        {/* floating chips */}
        <FloatingCard
          className="left-4 top-24 hidden sm:flex"
          icon={<Code2 className="h-4 w-4 text-primary-dark" />}
          title="Deploy"
          subtitle="main → prod · 12s"
          delay={0}
        />
        <FloatingCard
          className="-right-2 top-16 hidden md:flex"
          icon={<Database className="h-4 w-4 text-primary-dark" />}
          title="Postgres"
          subtitle="24 queries · 3ms"
          delay={0.5}
        />
        <FloatingCard
          className="-bottom-6 left-16 hidden md:flex"
          icon={<Zap className="h-4 w-4 text-primary-dark" />}
          title="Automation"
          subtitle="47 workflows running"
          delay={1}
        />
      </div>
    </motion.div>
  );
}

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex-1 rounded-2xl border border-border/60 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-primary-dark">
          {icon}
        </span>
        {label}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  subtitle,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay: 1.2 + delay, duration: 0.6 },
        scale: { delay: 1.2 + delay, duration: 0.6 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-border bg-white/90 p-3 pr-5 shadow-lg backdrop-blur ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent">{icon}</span>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-foreground">{title}</div>
        <div className="text-[11px] text-muted-foreground">{subtitle}</div>
      </div>
    </motion.div>
  );
}
