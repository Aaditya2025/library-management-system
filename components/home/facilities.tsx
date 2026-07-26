"use client";

import { motion } from "framer-motion";
import {
  Armchair,
  BatteryCharging,
  BookOpen,
  GlassWater,
  ShieldCheck,
  Snowflake,
  Sparkles,
  VolumeX,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { facilities } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const iconMap: Record<string, LucideIcon> = {
  Snowflake,
  Wifi,
  ShieldCheck,
  Armchair,
  BookOpen,
  BatteryCharging,
  GlassWater,
  Sparkles,
  Zap,
  VolumeX,
};

export function Facilities() {
  return (
    <section id="facilities" className="bg-primary-tint/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything a full study day actually needs"
          description="No frills that don't help a revision session — just the ten things that keep an eight-hour seat comfortable, safe and uninterrupted."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal key={f.id} delay={(i % 5) * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary-tint text-primary transition-colors group-hover:bg-secondary group-hover:text-white">
                    {Icon && <Icon className="size-6" />}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
