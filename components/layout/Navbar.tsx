"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technologies", href: "/technologies" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
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
          <div className="min-w-0 leading-tight">
            <div className="text-base font-bold tracking-tight text-foreground">SSPL</div>
            <div className="hidden text-[11px] font-medium text-muted-foreground sm:block">
              SayTrees Solutions Pvt Ltd
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.label}
                href={n.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  active ? "bg-accent text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary-dark to-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] sm:inline-flex"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/60 backdrop-blur lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-nav mx-4 mt-3 rounded-2xl p-3 lg:hidden"
          >
            <div className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-dark to-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
