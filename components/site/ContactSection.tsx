"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const details = [
  { icon: Mail, label: "Email", value: "hello@sspl.dev" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Office", value: "Bengaluru, India" },
];

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-lg font-semibold">Reach us directly</h2>
            <div className="mt-6 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </div>
                    <div className="text-sm font-medium">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-white p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@company.com" />
              <div className="sm:col-span-2">
                <Field label="Company" placeholder="Company name" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Project details</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you're building..."
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-primary-dark to-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
