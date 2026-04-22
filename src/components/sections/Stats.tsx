"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import AnimatedCounter from "../ui/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: 14, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Company Directors" },
  { value: 3, suffix: "", label: "Core Disciplines" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-navy-900 relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute inset-0 diagonal-lines opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-cyan-500/5 blur-[100px]" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className={`text-center lg:text-left ${
                i < stats.length - 1 ? "lg:border-r border-white/20" : ""
              } lg:px-8 first:lg:pl-0 last:lg:pr-0`}
            >
              <div className="text-h1 lg:text-display font-heading font-bold text-white mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <div className="text-body-sm text-white/70 uppercase tracking-[0.1em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
