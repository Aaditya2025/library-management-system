"use client";

import { stats } from "@/data/site";
import { useCountUp } from "@/hooks/use-count-up";
import { Reveal } from "@/components/shared/reveal";

function StatCard({ value, label, suffix, delay }: { value: number; label: string; suffix?: string; delay: number }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <Reveal delay={delay}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="rounded-2xl border border-border bg-surface px-3 py-5 text-center shadow-sm sm:px-6 sm:py-8"
      >
        <p className="font-display text-2xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
          {animated.toLocaleString("en-IN")}
          {suffix ?? ""}
        </p>
        <p className="mt-1.5 text-xs font-medium leading-snug text-muted sm:mt-2 sm:text-sm">{label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-8 pb-6 sm:-mt-10 sm:pb-8 lg:-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.id} value={s.value} label={s.label} suffix={s.suffix} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
