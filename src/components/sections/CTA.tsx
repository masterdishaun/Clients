"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path d="M300 0L600 520H0L300 0Z" stroke="#009EE2" strokeWidth="1" />
          <path d="M300 80L520 470H80L300 80Z" stroke="#009EE2" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px]" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-3 text-overline font-semibold uppercase tracking-[0.15em] text-cyan-400 mb-4"
          >
            <span className="block w-8 h-px bg-cyan-400" />
            Start Your Project
            <span className="block w-8 h-px bg-cyan-400" />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-h1 lg:text-display font-heading font-bold text-white leading-[1.1] tracking-[-0.025em] mb-6"
          >
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-white/80 mb-10 max-w-xl mx-auto"
          >
            Whether you&apos;re planning a new development, refurbishment, or
            need expert engineering consultation, we&apos;re ready to help.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 8h14M9 2l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              href="/projects"
              variant="ghost"
              size="lg"
              className="!text-white/80 hover:!text-white"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
