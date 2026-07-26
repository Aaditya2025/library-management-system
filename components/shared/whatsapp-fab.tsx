"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function WhatsappFab() {
  return (
    <motion.a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `Hi, I'd like to know more about ${site.name}.`
      )}`}
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl shadow-secondary/40"
    >
      <MessageCircle className="size-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-secondary/50" />
    </motion.a>
  );
}
