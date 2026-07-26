import Image from "next/image";
import { Compass, Target, Users } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: `To give every serious aspirant in ${site.city} a seat, a silence, and a good environment — the things a self-study rented room rarely offers.`,
  },
  {
    icon: Compass,
    title: "Our Vision",
    text: "To reach village students who otherwise get far fewer opportunities — bringing serious exam preparation within reach, not just to those who can afford city coaching.",
  },
  {
    icon: Users,
    title: "Why Choose Us",
    text: `Proper guidance in every field, directly from the founder ${site.ownerName} — not a franchise run from another city, and not a seat rented out with no support.`,
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the library"
          title={`A study hall built for ${site.city}'s toughest exam years`}
          description={`${site.name} was started by ${site.ownerName} in ${site.founded} as a reading hall on NH31, known for its good study environment and honest guidance. It has since grown into a full-day study space that aspirants from across the district rely on.`}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/amit-nishad-profile.png"
                alt={`Students studying inside ${site.name}, ${site.city}`}
                width={1200}
                height={1000}
                className="aspect-[6/5] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-primary-dark/80 p-4 text-white backdrop-blur">
                <p className="font-display text-sm font-semibold">{site.ownerName}</p>
                <p className="font-mono text-xs text-white/60">Founder, {site.name}</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="text-base leading-relaxed text-muted">
                Most students preparing for a competitive exam in a small district town face the same three
                problems: a home too full of interruptions, a cyber-café too noisy for concentration, and a
                city library that closes long before a Railway or Banking aspirant&apos;s revision hours end.
                {" "}{site.name} was opened to solve exactly that — a quiet, secured hall open across three
                daily shifts, from 8 in the morning to 10 at night.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-1">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary-tint text-secondary-dark">
                      <p.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
