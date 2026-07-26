"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryCategories, galleryImages } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

export function Gallery() {
  const [active, setActive] = useState<GalleryImage["category"] | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active)),
    [active]
  );

  const openImage = filtered[openIndex ?? -1];

  const goTo = (dir: 1 | -1) => {
    if (openIndex === null) return;
    const next = (openIndex + dir + filtered.length) % filtered.length;
    setOpenIndex(next);
  };

  return (
    <section id="gallery" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look inside Apni Library"
          description="Every hall, cabin and corner — photographed so you know exactly what you're walking into before your first visit."
        />

        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
            {(["All", ...galleryCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === cat
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-muted hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface text-left"
                style={{ breakInside: "avoid" }}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={img.width}
                  height={img.height}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{img.title}</p>
                  <p className="font-mono text-xs text-white/70">{img.category}</p>
                </div>
                <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="size-4" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setOpenIndex(null)}
          >
            <button
              aria-label="Close preview"
              onClick={() => setOpenIndex(null)}
              className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.div
              key={openImage.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={openImage.src}
                alt={openImage.title}
                width={openImage.width}
                height={openImage.height}
                className="max-h-[85vh] w-auto object-contain"
              />
              <div className="bg-black/60 p-4 text-center">
                <p className="text-sm font-semibold text-white">{openImage.title}</p>
                <p className="font-mono text-xs text-white/60">{openImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}