"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What students who studied here say"
        />

        <Reveal delay={0.1}>
          <div
            className="relative mt-14 rounded-3xl border border-border bg-surface p-8 shadow-lg sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote className="size-9 text-primary-tint" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-4 text-balance font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  “{t.review}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="size-14 rounded-full border border-border object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted">{t.exam}</p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < t.rating
                              ? "size-3.5 fill-accent text-accent"
                              : "size-3.5 text-border"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted hover:border-primary hover:text-primary"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted hover:border-primary hover:text-primary"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
