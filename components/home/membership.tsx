"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { membershipPlans, site } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function Membership() {
  return (
    <section id="membership" className="bg-primary-tint/50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="A plan for every stage of preparation"
          description="From a single trial day to a full exam cycle — pick the plan that matches how long you're staying, not how long you're guessing."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {membershipPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 shadow-sm",
                  plan.popular
                    ? "border-secondary bg-primary-dark text-white shadow-xl shadow-secondary/20"
                    : "border-border bg-surface"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-secondary px-3 py-1 font-mono text-[11px] font-semibold text-primary-dark">
                    <Star className="size-3 fill-current" /> Most Popular
                  </span>
                )}

                <h3 className={cn("font-display text-lg font-semibold", plan.popular ? "text-white" : "text-foreground")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-1 text-sm", plan.popular ? "text-white/60" : "text-muted")}>
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className={cn("font-display text-3xl font-semibold", plan.popular ? "text-white" : "text-primary")}>
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className={cn("font-mono text-xs", plan.popular ? "text-white/50" : "text-muted")}>
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className={cn("mt-0.5 size-4 shrink-0", plan.popular ? "text-secondary" : "text-secondary-dark")} />
                      <span className={plan.popular ? "text-white/80" : "text-muted"}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hi, I'd like to enquire about the ${plan.name} plan at ${site.name}.`
                  )}`}
                  className={cn(
                    "mt-7 flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]",
                    plan.popular ? "bg-secondary text-primary-dark" : "bg-primary text-white"
                  )}
                >
                  Choose {plan.name}
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
