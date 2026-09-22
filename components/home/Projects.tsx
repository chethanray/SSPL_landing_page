"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ShoppingBag, HeartPulse, GraduationCap } from "lucide-react";
import { SectionHeader } from "./Services";

const projects = [
  {
    icon: BarChart3,
    title: "FinPulse Analytics",
    desc: "Real-time trading analytics platform serving 40k+ daily users.",
    tags: ["Next.js", "AWS", "Kafka"],
    gradient: "from-emerald-100 via-white to-teal-50",
  },
  {
    icon: ShoppingBag,
    title: "MerchOS Commerce",
    desc: "Headless commerce platform powering multi-region retailers.",
    tags: ["React", "GraphQL", "Node"],
    gradient: "from-green-100 via-white to-emerald-50",
  },
  {
    icon: HeartPulse,
    title: "CareLoop Health",
    desc: "HIPAA-compliant patient engagement suite for hospital networks.",
    tags: ["Vue", "Azure", "AI"],
    gradient: "from-lime-100 via-white to-green-50",
  },
  {
    icon: GraduationCap,
    title: "LearnLift EdTech",
    desc: "AI-powered adaptive learning platform for K-12 institutions.",
    tags: ["Next.js", "OpenAI", "GCP"],
    gradient: "from-teal-100 via-white to-emerald-50",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Work"
          title={
            <>
              Products we&apos;re <span className="text-gradient-green">proud of</span>
            </>
          }
          sub="A snapshot of the platforms we&apos;ve designed, built and scaled."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glass)]"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="grid-bg absolute inset-0 opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-card rounded-2xl p-8 transition-transform duration-500 group-hover:scale-105">
                    <p.icon className="h-14 w-14 text-primary-dark" strokeWidth={1.6} />
                  </div>
                </div>
                <div className="absolute right-4 top-4 flex gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-primary-dark backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <button className="shrink-0 grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
