"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 2L2 30h28L16 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10v10M16 24v1" strokeLinecap="round" />
      </svg>
    ),
    title: "Consistent",
    description:
      "We consistently provide the highest standards of innovation, efficiency, quality, and safety in our solutions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 2v28M2 16h28" strokeLinecap="round" />
        <path d="M6 6l20 20M26 6L6 26" strokeLinecap="round" />
      </svg>
    ),
    title: "Exceed Expectations",
    description:
      "We have a can-do attitude and always exceed our clients' expectations with innovative, efficient solutions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="12" r="5" />
        <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" strokeLinecap="round" />
      </svg>
    ),
    title: "Customer Focused",
    description:
      "We provide a personal and accountable service, always adapting to our client's changing needs.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28V12l12-8 12 8v16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 28v-8h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Always Learning",
    description:
      "We believe in continued professional development, consistently learning and diversifying our skills.",
  },
];

export default function Values() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <SectionLabel>Our Values</SectionLabel>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-h2 lg:text-h1 font-heading font-bold text-navy-900 mt-4 mx-auto max-w-lg"
          >
            What Drives Us Forward
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="group relative bg-white p-8 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,158,226,0.15)]"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-slate-200 group-hover:bg-cyan-500 transition-colors duration-500" />

              <div className="text-slate-400 group-hover:text-cyan-500 transition-colors duration-500 mb-6">
                {value.icon}
              </div>

              <h3 className="text-h4 font-heading font-semibold text-navy-900 mb-3">
                {value.title}
              </h3>

              <p className="text-body-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
