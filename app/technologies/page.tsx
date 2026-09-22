import type { Metadata } from "next";
import { Code2, Server, Database, Container } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Technologies } from "@/components/home/Technologies";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Technologies — The SSPL Engineering Stack",
  description:
    "The tools SSPL builds with: React, Node.js, Python, AWS, Azure, GCP, Kubernetes, OpenAI and more.",
  openGraph: {
    title: "Technologies — SSPL",
    description: "Modern, proven technologies powering every SSPL product.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TechnologiesPage() {
  return (
    <PageShell
      badge="Modern engineering stack"
      eyebrow="Technologies"
      title={
        <>
          The tools behind our <span className="text-gradient-green">engineering</span>
        </>
      }
      sub="Proven frameworks, cloud infrastructure and developer tooling chosen for reliability, speed and long-term maintainability."
      primaryCta={{ label: "Discuss Your Stack", href: "/contact" }}
      secondaryCta={{ label: "View Projects", href: "/projects" }}
      tiles={[
        { icon: <Code2 className="h-5 w-5" strokeWidth={2.2} />, title: "Frontend", subtitle: "React, Next.js, TypeScript" },
        { icon: <Server className="h-5 w-5" strokeWidth={2.2} />, title: "Backend", subtitle: "Node, Python, Go, GraphQL" },
        { icon: <Database className="h-5 w-5" strokeWidth={2.2} />, title: "Data", subtitle: "Postgres, Redis, warehouses" },
        { icon: <Container className="h-5 w-5" strokeWidth={2.2} />, title: "Infrastructure", subtitle: "Docker, Kubernetes, CI/CD" },
      ]}
    >
      <Technologies />
      <CTA />
    </PageShell>
  );
}
