"use client";
import Image from "next/image";

import { Leaf, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// lucide-react dropped brand/logo icons; small inline SVGs instead
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.68L23.4 22h-7.2l-5.6-7.32L4.1 22H1l8.2-9.36L.9 2h7.4l5.06 6.7L18.9 2Zm-1.26 18h2L6.5 3.9h-2.1L17.64 20Z" />
    </svg>
  );
}

const cols = [
  { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
  { title: "Services", links: ["Software Development", "AI & ML", "Cloud", "UI/UX Design"] },
  { title: "Technologies", links: ["React", "Node.js", "AWS", "OpenAI"] },
  { title: "Projects", links: ["FinPulse", "MerchOS", "CareLoop", "LearnLift"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--color-surface)] px-6 pb-8 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 shrink-0 items-center transition-transform group-hover:scale-105">
  <Image
    src="/images/saytrees-new-logo.png"
    alt="SayTrees Logo"
    width={160}
    height={40}
    className="h-10 w-auto object-contain"
    priority
  />
</div>
              <div>
                <div className="text-base font-bold">SSPL</div>
                <div className="text-xs text-muted-foreground">SayTrees Solutions Pvt Ltd</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We craft scalable software, AI systems and cloud platforms for teams
              building the next generation of digital products.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a href="mailto:hello@sspl.dev" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary-dark">
                <Mail className="h-4 w-4" /> hello@sspl.dev
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary-dark">
                <Phone className="h-4 w-4" /> +91 12345 67890
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Bengaluru, India
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[GithubIcon, LinkedinIcon, TwitterIcon].map((I, k) => (
                <a
                  key={k}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary-dark"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-5">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary-dark">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest">Newsletter</div>
            <p className="mt-4 text-sm text-muted-foreground">
              Get product insights and engineering notes, monthly.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center rounded-full border border-border bg-white p-1 focus-within:border-primary"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary-dark to-primary text-primary-foreground transition-transform hover:scale-105">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} SayTrees Solutions Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary-dark">Privacy</a>
            <a href="#" className="hover:text-primary-dark">Terms</a>
            <a href="#" className="hover:text-primary-dark">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
