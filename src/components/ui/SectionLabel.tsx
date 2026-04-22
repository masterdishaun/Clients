"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex items-center gap-3 text-overline font-semibold uppercase tracking-[0.15em] ${
        light ? "text-cyan-300" : "text-cyan-500"
      }`}
    >
      <span className={`block w-8 h-px ${light ? "bg-cyan-300" : "bg-cyan-500"}`} />
      {children}
    </motion.span>
  );
}
