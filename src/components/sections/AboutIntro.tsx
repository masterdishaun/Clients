"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left column — large typography */}
          <motion.div variants={slideInLeft} className="lg:col-span-5">
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="text-h2 lg:text-h1 font-heading font-bold text-navy-900 mt-4 leading-[1.1]">
              We are Apex
              <br />
              <span className="text-cyan-500">Consulting Engineers</span>
            </h2>
          </motion.div>

          {/* Right column — body text */}
          <motion.div variants={slideInRight} className="lg:col-span-7">
            <div className="lg:pl-8 lg:border-l-2 border-cyan-500/20">
              <p className="text-body-lg text-slate-600 leading-relaxed mb-6">
                Apex Consulting Engineers is an experienced Yorkshire based
                structural, civil, and geo-environmental consultancy delivering
                innovative engineering solutions across the UK. Originally
                founded by Wayne Ballance and Mary Fisher in 2011.
              </p>
              <p className="text-body text-slate-500 leading-relaxed mb-8">
                We have delivered a vast number of projects over the years,
                including the tallest building in Yorkshire, Altus House, and
                the impressive Danum Museum and Gallery in Doncaster. Apex was
                born out of a desire to fulfil the societal need for
                infrastructure and enhance the built environment.
              </p>
              <Button href="/about" variant="secondary" size="md">
                Learn More About Us
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
