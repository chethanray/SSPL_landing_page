import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ContactSection } from "@/components/site/ContactSection";

export const metadata: Metadata = {
  title: "Contact SSPL — Start Your Project",
  description:
    "Get in touch with SSPL to discuss software development, AI, cloud engineering or digital transformation projects.",
  openGraph: {
    title: "Contact SSPL",
    description: "Tell us about your project — our team replies within one business day.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <PageShell
      badge="We reply within one business day"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build the <span className="text-gradient-green">future</span> together
        </>
      }
      sub="Tell us about your product, timeline and goals — our team will come back with a clear plan, not a sales pitch."
      primaryCta={{ label: "Explore Services", href: "/services" }}
      secondaryCta={{ label: "View Our Work", href: "/projects" }}
      tiles={[
        { icon: <Mail className="h-5 w-5" strokeWidth={2.2} />, title: "Email Us", subtitle: "hello@sspl.dev" },
        { icon: <Phone className="h-5 w-5" strokeWidth={2.2} />, title: "Call Us", subtitle: "+91 98765 43210" },
        { icon: <MapPin className="h-5 w-5" strokeWidth={2.2} />, title: "Visit Us", subtitle: "Bengaluru, India" },
        { icon: <MessageSquare className="h-5 w-5" strokeWidth={2.2} />, title: "Fast Response", subtitle: "Within one business day" },
      ]}
    >
      <ContactSection />
    </PageShell>
  );
}
