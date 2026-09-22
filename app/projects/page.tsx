import type { Metadata } from "next";
import { Layers, Trophy, Users, Gauge } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Projects } from "@/components/home/Projects";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Projects — SSPL Case Studies & Client Work",
  description:
    "Selected SSPL projects across fintech, commerce, healthcare and education, plus what our clients say.",
  openGraph: {
    title: "Projects — SSPL",
    description: "Selected work across fintech, commerce, healthcare and education.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell
      badge="Case studies & success stories"
      eyebrow="Our Work"
      title={
        <>
          Products we&apos;ve <span className="text-gradient-green">shipped</span> and scaled
        </>
      }
      sub="Real platforms delivered for real businesses — from first prototype to production systems serving millions of requests."
      primaryCta={{ label: "Start Your Project", href: "/contact" }}
      secondaryCta={{ label: "Our Services", href: "/services" }}
      tiles={[
        { icon: <Layers className="h-5 w-5" strokeWidth={2.2} />, title: "40+ Projects", subtitle: "Delivered across industries" },
        { icon: <Trophy className="h-5 w-5" strokeWidth={2.2} />, title: "Award-winning", subtitle: "Design and engineering craft" },
        { icon: <Users className="h-5 w-5" strokeWidth={2.2} />, title: "Long-term Partners", subtitle: "Most clients stay 3+ years" },
        { icon: <Gauge className="h-5 w-5" strokeWidth={2.2} />, title: "Measurable Impact", subtitle: "Faster, leaner, more reliable" },
      ]}
    >
      <Projects />
      <Testimonials />
      <CTA />
    </PageShell>
  );
}
