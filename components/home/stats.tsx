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
        className="rounded-2xl border border-border bg-surface px-6 py-8 text-center shadow-sm"
      >
        <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
          {animated.toLocaleString("en-IN")}
          {suffix ?? ""}
        </p>
        <p className="mt-2 text-sm font-medium text-muted">{label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-12 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.id} value={s.value} label={s.label} suffix={s.suffix} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
