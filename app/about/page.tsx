import type { Metadata } from "next";
import { Compass, Target, HeartHandshake, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { About } from "@/components/home/About";
import { Statistics } from "@/components/home/Statistics";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About SSPL — SayTrees Solutions Private Limited",
  description:
    "Meet SSPL: engineers, designers and strategists building scalable software with an eco-inspired, craft-first culture.",
  openGraph: {
    title: "About SSPL",
    description: "Technology today, innovation forever — the team behind SSPL.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AboutPage() {
  return (
    <PageShell
      badge="Our story, vision and values"
      eyebrow="About SSPL"
      title={
        <>
          Technology today, <span className="text-gradient-green">innovation forever</span>
        </>
      }
      sub="SayTrees Solutions is a team of engineers, designers and strategists on a mission to build technology that lasts — sustainable, human and built to scale."
      primaryCta={{ label: "Work With Us", href: "/contact" }}
      secondaryCta={{ label: "See Our Work", href: "/projects" }}
      tiles={[
        { icon: <Compass className="h-5 w-5" strokeWidth={2.2} />, title: "Our Vision", subtitle: "Smarter digital futures" },
        { icon: <Target className="h-5 w-5" strokeWidth={2.2} />, title: "Our Mission", subtitle: "Craft that creates real value" },
        { icon: <HeartHandshake className="h-5 w-5" strokeWidth={2.2} />, title: "Our Values", subtitle: "Trust, clarity, ownership" },
        { icon: <Users className="h-5 w-5" strokeWidth={2.2} />, title: "Our Team", subtitle: "Senior, multidisciplinary talent" },
      ]}
    >
      <About />
      <Statistics />
      <WhyChoose />
      <CTA />
    </PageShell>
  );
}
