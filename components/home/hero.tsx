"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ImageIcon, MessageCircle } from "lucide-react";
import { examTags, site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary-dark pb-14 pt-24 text-white sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/apni-hero/1800/1200"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/90 to-primary-dark" />
        <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.18em]"
        >
          <span className="truncate">NH31, Ballia, Uttar Pradesh · Est. {site.founded}</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] text-balance sm:mt-6 sm:text-5xl sm:leading-[1.1] lg:text-6xl"
        >
          {site.tagline}
          <span className="mt-2.5 block text-lg font-normal italic text-white/70 sm:mt-3 sm:text-2xl">
            {site.taglineEn}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 flex flex-col items-stretch gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
        >
          <a
            href="#membership"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-black/20 transition-transform active:scale-[0.98] sm:hover:scale-[1.03]"
          >
            Join Now <ArrowRight className="size-4" />
          </a>
          <a
            href="#gallery"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <ImageIcon className="size-4" /> View Gallery
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="size-4" /> Contact Us
          </a>
        </motion.div>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] sm:mt-14">
          <motion.div
            className="flex w-max gap-2.5 sm:gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {[...examTags, ...examTags].map((exam, i) => (
              <span
                key={`${exam}-${i}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] text-white/70 sm:px-4 sm:text-xs"
              >
                {exam}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
