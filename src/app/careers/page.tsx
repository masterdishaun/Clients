"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const benefits = [
  {
    title: "Professional Development",
    description:
      "We invest in continued professional development and support our team on the path to Chartered Engineer status.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Varied Project Work",
    description:
      "From Yorkshire's tallest tower to award-winning museums, you'll work across a diverse range of exciting projects.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Supportive Team Culture",
    description:
      "Join a close-knit, collaborative team where knowledge sharing and mentorship are part of everyday life.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Competitive Rewards",
    description:
      "We offer competitive salaries, flexible working arrangements, and a benefits package that values your contribution.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0">
          <Image
            src="/images/misc/careers_5_541e6c65.jpg"
            alt="Apex team on site"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="absolute inset-0 geometric-grid opacity-20" />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel light>Join Our Team</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-h1 lg:text-display font-heading font-bold text-white mt-4 max-w-3xl leading-[1.05]"
            >
              Build Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Career With Us
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-white/80 mt-6 max-w-xl"
            >
              We are passionate about investing in our people at every stage of
              their career and helping them to achieve their full potential.
            </motion.p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
          >
            <motion.div variants={slideInLeft} className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
                  <Image
                    src="/images/misc/about-team-working.jpg"
                    alt="Apex team collaborating"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-cyan-500/20" />
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <SectionLabel>Why Apex?</SectionLabel>
              <h2 className="text-h2 font-heading font-bold text-navy-900 mt-4 mb-6">
                A Great Place to Grow
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed mb-6">
                We&apos;re always keen to hear from bright, new engineering
                talent here at Apex. Whether you&apos;re a graduate starting
                your career or an experienced engineer looking for a new
                challenge, we&apos;d love to hear from you.
              </p>
              <p className="text-body text-slate-500 leading-relaxed mb-6">
                At Apex Consulting Engineers, we believe our people are our
                greatest asset. We invest in training, mentorship, and
                professional development to help every team member reach their
                full potential. Our team works on some of Yorkshire&apos;s most
                exciting and prestigious projects.
              </p>
              <p className="text-body text-slate-500 leading-relaxed">
                We foster a collaborative, supportive culture where innovative
                thinking is encouraged and hard work is recognised. Our flexible
                working approach helps our team maintain a healthy work-life
                balance.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <SectionLabel>Benefits</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-h2 font-heading font-bold text-navy-900 mt-4"
            >
              Why Work With Us
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="group bg-white p-8 lg:p-10 relative overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,158,226,0.12)] transition-shadow duration-500"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-cyan-500 transition-colors duration-500" />
                <span className="text-display font-heading font-bold text-slate-100/80 absolute top-4 right-6 leading-none select-none">
                  0{i + 1}
                </span>
                <div className="w-12 h-12 flex items-center justify-center bg-slate-100 text-cyan-500 mb-6 relative">
                  {benefit.icon}
                </div>
                <h3 className="text-h3 font-heading font-semibold text-navy-900 mb-3 relative">
                  {benefit.title}
                </h3>
                <p className="text-body text-slate-500 leading-relaxed relative">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA — Send CV */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Get In Touch</SectionLabel>
              <h2 className="text-h2 font-heading font-bold text-navy-900 mt-4 mb-6">
                Interested in Joining Apex?
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed mb-4">
                Please feel free to send us your CV to{" "}
                <a
                  href="mailto:contactus@apexconsulting.co.uk"
                  className="text-cyan-500 hover:text-cyan-400 font-semibold transition-colors"
                >
                  contactus@apexconsulting.co.uk
                </a>{" "}
                and we&apos;ll keep it on record for any upcoming vacancies.
              </p>
              <p className="text-body text-slate-500 leading-relaxed mb-10">
                We&apos;re always on the lookout for talented structural, civil,
                and geo-environmental engineers at all levels — from graduate to
                senior roles. Even if we don&apos;t have a current vacancy that
                matches your experience, we&apos;d still love to hear from you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="mailto:contactus@apexconsulting.co.uk" variant="primary" size="lg">
                  Send Your CV
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
                <Button href="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
