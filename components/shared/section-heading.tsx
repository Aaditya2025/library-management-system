import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary font-mono">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
