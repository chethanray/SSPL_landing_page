"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Layers, Smile, Clock } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 50, suffix: "+", label: "Enterprise Clients" },
  { icon: Layers, value: 15, suffix: "+", label: "Technology Solutions" },
  { icon: Smile, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, value: 10, suffix: "+", label: "Years of Innovation" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="bg-[color:var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group rounded-3xl border border-border/60 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-white ring-1 ring-primary/15">
                <s.icon className="h-5 w-5 text-primary-dark" />
              </div>
              <div className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
