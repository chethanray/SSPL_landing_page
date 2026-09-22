"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  GitBranch,
  Building2,
  Plug,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Software Development", desc: "Custom-built products, engineered to scale from MVP to enterprise." },
  { icon: Smartphone, title: "Web & Mobile Apps", desc: "Responsive web and native mobile experiences users love." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent systems, LLM integrations and predictive models." },
  { icon: Cloud, title: "Cloud Engineering", desc: "Cloud-native architectures on AWS, Azure and GCP." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces backed by user research." },
  { icon: GitBranch, title: "DevOps & Automation", desc: "CI/CD, IaC and observability for reliable delivery." },
  { icon: Building2, title: "Enterprise Solutions", desc: "Secure, compliant platforms for regulated industries." },
  { icon: Plug, title: "API Development", desc: "Robust REST & GraphQL APIs with first-class DX." },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              End-to-end <span className="text-gradient-green">engineering</span> capabilities
            </>
          }
          sub="From strategy to deployment — a single partner for every layer of your product stack."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="/contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.55 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glass)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-accent/0 transition-all duration-500 group-hover:from-accent/40 group-hover:to-white" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-[var(--shadow-soft)] transition-transform group-hover:rotate-[-6deg]">
                <s.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-dark"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
