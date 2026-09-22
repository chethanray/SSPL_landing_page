"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Scaling,
  ShieldCheck,
  Rocket,
  Users,
  Cpu,
  Gauge,
  Lock,
} from "lucide-react";
import { SectionHeader } from "./Services";

const features = [
  { icon: Building2, title: "Modern Architecture", desc: "Composable, event-driven systems designed for change." },
  { icon: Scaling, title: "Scalable Applications", desc: "Built to grow with your users — from thousands to millions." },
  { icon: ShieldCheck, title: "Secure Development", desc: "Security baked in from day one — SOC2, GDPR ready." },
  { icon: Rocket, title: "Agile Delivery", desc: "Weekly demos and transparent progress you can trust." },
  { icon: Users, title: "Experienced Engineers", desc: "Senior teams with deep domain expertise." },
  { icon: Cpu, title: "Latest Technologies", desc: "Modern stacks, tested frameworks and best practices." },
  { icon: Gauge, title: "High Performance", desc: "Optimized for speed, reliability and low latency." },
  { icon: Lock, title: "Enterprise Security", desc: "Encryption, audit trails and role-based access." },
];

export function WhyChoose() {
  return (
    <section id="solutions" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why SSPL"
          title={
            <>
              Engineered for the <span className="text-gradient-green">enterprise</span>
            </>
          }
          sub="A team, a process and a stack designed to make ambitious products ship."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.55 }}
              className="group relative rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-dark transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
