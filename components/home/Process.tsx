"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, Palette, Code2, Rocket, Headphones } from "lucide-react";
import { SectionHeader } from "./Services";

const steps = [
  { icon: Search, title: "Discover", desc: "Deep dive into your business, users and goals." },
  { icon: ClipboardList, title: "Plan", desc: "Roadmap, architecture and delivery milestones." },
  { icon: Palette, title: "Design", desc: "Wireframes, prototypes and design systems." },
  { icon: Code2, title: "Develop", desc: "Iterative sprints with weekly demos." },
  { icon: Rocket, title: "Deploy", desc: "Production launch with monitoring in place." },
  { icon: Headphones, title: "Support", desc: "Ongoing maintenance, iteration and scale." },
];

export function Process() {
  return (
    <section className="bg-[color:var(--color-surface)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Process"
          title={
            <>
              A proven path from <span className="text-gradient-green">idea to impact</span>
            </>
          }
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-border bg-white text-primary-dark shadow-[var(--shadow-soft)] transition-transform hover:scale-105">
                  <s.icon className="h-6 w-6" strokeWidth={2.2} />
                  <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
