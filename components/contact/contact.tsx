"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { faqs, site } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.id ?? null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder submit handler — wire this up to your form endpoint
    // (e.g. Formspree, a Next.js route handler, or an email API) before going live.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="bg-primary-tint/50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Come see the seat before you book it"
          description="Walk in during any shift, or reach out first — we'll hold a seat for a same-day trial visit."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-display text-base font-semibold text-foreground">Visit us</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted">{site.fullAddress}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="size-4 shrink-0 text-primary" />
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-muted hover:text-primary">
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="size-4 shrink-0 text-primary" />
                    <a href={`mailto:${site.email}`} className="text-muted hover:text-primary">
                      {site.email}
                    </a>
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hi, I'd like to visit ${site.name} for a trial — is a seat available today?`
                  )}`}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="size-4" /> Chat on WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                <iframe
                  title={`${site.name} location map`}
                  src={site.mapsEmbedSrc}
                  className="h-56 w-full grayscale-[10%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-t border-border bg-surface py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-tint"
                >
                  <MapPin className="size-4" /> Get Directions on Google Maps
                </a>
              </div>

              <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-display text-base font-semibold text-foreground">Common questions</h3>
                <div className="mt-3 divide-y divide-border">
                  {faqs.map((f) => (
                    <div key={f.id}>
                      <button
                        onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}
                        className="w-full py-3 text-left text-sm font-medium text-foreground"
                      >
                        {f.question}
                      </button>
                      {openFaq === f.id && (
                        <p className="pb-3 text-sm leading-relaxed text-muted">{f.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-9"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">Send us a message</h3>
              <p className="mt-1 text-sm text-muted">
                We usually reply within a few hours during library hours.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Which exam are you preparing for, and which shift works for you?"
                    className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80"
              >
                {status === "idle" && (
                  <>
                    <Send className="size-4" /> Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 className="size-4" /> Message received
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}