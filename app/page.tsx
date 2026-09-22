import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { About } from "@/components/home/About";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
