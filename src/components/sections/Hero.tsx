"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Real hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="Apex Consulting Engineers"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy-950/70" />

      {/* Geometric accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] opacity-[0.06]"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path d="M400 0L800 700H0L400 0Z" stroke="white" strokeWidth="1" />
          <path d="M400 100L700 650H100L400 100Z" stroke="white" strokeWidth="0.5" />
          <path d="M400 200L600 600H200L400 200Z" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] animate-float" />

      <Container className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-3 text-overline font-semibold uppercase tracking-[0.15em] text-cyan-400">
              <span className="block w-8 h-px bg-cyan-400" />
              Structural &middot; Civil &middot; Geo-Environmental
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-h1 md:text-[4rem] lg:text-display font-heading font-bold text-white leading-[1.05] tracking-[-0.03em] mb-8"
          >
            <span>Engineering Solutions</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Built to Last
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-white/80 max-w-xl mb-12 leading-relaxed"
          >
            Apex Consulting Engineers is an experienced Yorkshire based
            structural, civil, and geo-environmental consultancy delivering
            innovative engineering solutions across the UK.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/projects" variant="primary" size="lg">
              View Our Projects
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
              href="/contact"
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 pt-10 border-t border-white/20 flex flex-wrap gap-10 lg:gap-16"
          >
            {[
              { value: "14+", label: "Years Experience" },
              { value: "500+", label: "Projects Delivered" },
              { value: "UK", label: "Nationwide Reach" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-h3 font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-body-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
