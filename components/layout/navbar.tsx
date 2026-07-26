"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "glass border-border shadow-lg shadow-primary/5"
              : "border-transparent bg-transparent"
          )}
        >
          <a href="#home" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5">
            <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:size-10">
              <Image
                src="/images/apniLibrary-logo.png"
                alt={`${site.name} logo`}
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </span>
            <span
              className={cn(
                "min-w-0 truncate font-display text-base font-bold leading-none sm:text-lg transition-colors duration-300",
                scrolled ? "text-[#38649e]" : "text-white"
              )}
            >
              {site.name}
              <span className="mt-[5px] block truncate font-mono text-[9px] font-normal uppercase tracking-[0.15em] text-[#38649e] sm:text-[10px] sm:tracking-[0.2em]">
                {site.city}, {site.state}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-tint hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Phone className="size-3.5" />
              Join Now
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-border bg-surface p-4 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-primary-tint hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="size-3.5" />
                Join Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}