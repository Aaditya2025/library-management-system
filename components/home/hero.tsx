"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ImageIcon, MessageCircle } from "lucide-react";
import { examTags, shifts, site } from "@/data/site";
import { cn } from "@/lib/utils";

function seatTone(pct: number) {
  if (pct <= 15) return { dot: "bg-red-500", text: "text-red-600 dark:text-red-400" };
  if (pct <= 40) return { dot: "bg-accent", text: "text-accent" };
  return { dot: "bg-secondary", text: "text-secondary" };
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary-dark pb-24 pt-32 text-white sm:pt-40"
    >
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/apni-hero/1800/1200"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/85 to-primary-dark" />
        <div className="bg-grid absolute inset-0 opacity-[0.08]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-white/80"
            >
              Ballia, Uttar Pradesh · Est. {site.founded}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl"
            >
              {site.tagline}
              <span className="mt-3 block text-2xl font-normal italic text-white/70 sm:text-3xl">
                {site.taglineEn}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/70"
            >
              {site.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#membership"
                className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-secondary/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Join Now <ArrowRight className="size-4" />
              </a>
              <a
                href="#gallery"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ImageIcon className="size-4" /> View Gallery
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="size-4" /> Contact Us
              </a>
            </motion.div>

            <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex w-max gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {[...examTags, ...examTags].map((exam, i) => (
                  <span
                    key={`${exam}-${i}`}
                    className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-white/70"
                  >
                    {exam}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Signature element: the seat register — the real, physical decision
              point for anyone choosing a competitive-exam library in Ballia */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass rounded-3xl border-white/10 p-6 shadow-2xl sm:p-7"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Seat Register
                </p>
                <p className="font-display text-lg font-semibold text-white">Today&apos;s Availability</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-white/70">
                <span className="size-1.5 animate-pulse rounded-full bg-secondary" />
                Live
              </span>
            </div>

            <ul className="mt-5 space-y-4">
              {shifts.map((shift, idx) => {
                const pct = Math.round((shift.seatsLeft / shift.seatsTotal) * 100);
                const tone = seatTone(pct);
                return (
                  <li key={shift.id}>
                    <div className="flex items-baseline justify-between">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                        {shift.label}
                        <span className="font-mono text-xs font-normal text-white/45">{shift.time}</span>
                      </p>
                      <p className={cn("font-mono text-sm font-semibold", tone.text)}>
                        {shift.seatsLeft} left
                      </p>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className={cn("h-full rounded-full", tone.dot)}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-white/45">
              Seats update at the reception register through the day — call ahead to hold one before you visit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
