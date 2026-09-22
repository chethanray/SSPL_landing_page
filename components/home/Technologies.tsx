"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "NestJS", "Python", "Java", ".NET", "PHP"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "Jenkins"],
  },
  { title: "AI & Data", items: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Pandas", "NumPy"] },
  { title: "Tools", items: ["Git", "GitHub", "Figma", "Postman", "VS Code", "Linux"] },
];

export function Technologies() {
  return (
    <section id="technologies" className="bg-[color:var(--color-surface)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technologies"
          title={
            <>
              A modern stack, <span className="text-gradient-green">battle-tested</span>
            </>
          }
          sub="We stay fluent across the tools that ship the world's best products."
        />
        <div className="mt-14 space-y-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {g.title}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {g.items.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    className="group rounded-2xl border border-border bg-white px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-primary-dark hover:shadow-[var(--shadow-soft)]"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                    <span className="ml-2.5">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
