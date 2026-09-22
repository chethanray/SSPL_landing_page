import type { Metadata } from "next";
import { Building2, LayoutGrid, ShieldCheck, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Highlights } from "@/components/home/Highlights";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Statistics } from "@/components/home/Statistics";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Solutions — SSPL Enterprise & Digital Transformation",
  description:
    "SSPL solutions for enterprise modernization, intelligent automation, cloud-native platforms and digital transformation.",
  openGraph: {
    title: "Solutions — SSPL",
    description: "Enterprise modernization, AI automation and cloud-native platforms.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SolutionsPage() {
  return (
    <PageShell
      badge="Enterprise-ready platforms"
      eyebrow="Our Solutions"
      title={
        <>
          Business solutions built for <span className="text-gradient-green">real outcomes</span>
        </>
      }
      sub="Scalable enterprise platforms, secure integrations and data-driven products — designed around the way your business actually operates."
      primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      secondaryCta={{ label: "Explore Services", href: "/services" }}
      tiles={[
        { icon: <Building2 className="h-5 w-5" strokeWidth={2.2} />, title: "Enterprise Platforms", subtitle: "Secure, compliant, audit-ready" },
        { icon: <LayoutGrid className="h-5 w-5" strokeWidth={2.2} />, title: "Product Suites", subtitle: "Multi-tenant SaaS foundations" },
        { icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />, title: "Security & Governance", subtitle: "Role-based access and controls" },
        { icon: <TrendingUp className="h-5 w-5" strokeWidth={2.2} />, title: "Scale & Performance", subtitle: "Built to grow with demand" },
      ]}
    >
      <div className="pt-28">
        <Highlights />
      </div>
      <WhyChoose />
      <Statistics />
      <CTA />
    </PageShell>
  );
}
