import type { Metadata } from "next";
import { Code2, Brain, Cloud, Rocket } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services — SSPL Software, AI & Cloud Engineering",
  description:
    "Explore SSPL services: custom software, web & mobile apps, AI/ML, cloud engineering, UI/UX design, DevOps and API development.",
  openGraph: {
    title: "Services — SSPL",
    description: "End-to-end engineering capabilities from strategy to deployment.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ServicesPage() {
  return (
    <PageShell
      badge="Full-stack engineering partner"
      eyebrow="Our Services"
      title={
        <>
          Software, AI and cloud that <span className="text-gradient-green">scales</span>
        </>
      }
      sub="A single partner for every layer of your product stack — custom development, intelligent automation, cloud engineering and digital transformation."
      primaryCta={{ label: "Start a Project", href: "/contact" }}
      secondaryCta={{ label: "See Our Work", href: "/projects" }}
      tiles={[
        { icon: <Code2 className="h-5 w-5" strokeWidth={2.2} />, title: "Software Development", subtitle: "MVP to enterprise-grade platforms" },
        { icon: <Brain className="h-5 w-5" strokeWidth={2.2} />, title: "AI & Machine Learning", subtitle: "LLMs, automation, predictive models" },
        { icon: <Cloud className="h-5 w-5" strokeWidth={2.2} />, title: "Cloud Engineering", subtitle: "AWS, Azure and GCP architectures" },
        { icon: <Rocket className="h-5 w-5" strokeWidth={2.2} />, title: "Digital Transformation", subtitle: "Modernised workflows and systems" },
      ]}
    >
      <Services />
      <Process />
      <CTA />
    </PageShell>
  );
}
