"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "Structural Engineering",
    description:
      "Comprehensive structural design for projects of all scales — from high-rise residential towers to complex refurbishments. We deliver safe, efficient, and innovative structural solutions.",
    features: ["High-Rise Design", "Steel & Concrete", "Refurbishment", "BIM Modelling"],
  },
  {
    number: "02",
    title: "Civil Engineering",
    description:
      "Full-scope civil engineering services including drainage design, highways, flood risk assessment, and infrastructure planning for developments across the UK.",
    features: ["Drainage Design", "Highways", "Flood Risk", "Infrastructure"],
  },
  {
    number: "03",
    title: "Geoenvironmental Engineering",
    description:
      "Expert ground investigation design, contamination assessment, and geotechnical analysis. Clear, robust advice on all ground-related matters for your development.",
    features: ["Site Investigation", "Contamination", "Geotechnical", "Remediation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white geometric-grid">
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionLabel>What We Do</SectionLabel>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-h2 lg:text-h1 font-heading font-bold text-navy-900 mt-4 max-w-lg"
          >
            Professional Engineering Services
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              variants={fadeInUp}
              className={`group relative p-8 lg:p-10 transition-all duration-500 hover:bg-navy-900 ${
                i < services.length - 1 ? "lg:border-r border-b lg:border-b-0 border-slate-200" : ""
              }`}
            >
              <span className="block text-h1 lg:text-display font-heading font-bold text-slate-100 group-hover:text-white/10 transition-colors duration-500 mb-6 leading-none">
                {service.number}
              </span>

              <h3 className="text-h3 font-heading font-semibold text-navy-900 group-hover:text-white transition-colors duration-500 mb-4">
                {service.title}
              </h3>

              <p className="text-body text-slate-500 group-hover:text-white/80 transition-colors duration-500 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-overline uppercase tracking-[0.1em] px-3 py-1.5 border border-slate-200 text-slate-400 group-hover:border-white/30 group-hover:text-white/70 transition-colors duration-500"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
