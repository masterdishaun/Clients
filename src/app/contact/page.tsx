"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your enquiry. We will be in touch shortly.");
  };

  const inputClasses =
    "w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-navy-900 text-body placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-body";

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 geometric-grid opacity-20" />
        <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel light>Get in Touch</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-h1 lg:text-display font-heading font-bold text-white mt-4 max-w-3xl leading-[1.05]"
            >
              Let&apos;s Start Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Next Project
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-white/80 mt-6 max-w-xl"
            >
              Whether you need structural, civil, or geo-environmental engineering
              expertise, we&apos;re here to help.
            </motion.p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
          >
            {/* Left — Contact Info */}
            <motion.div variants={slideInLeft} className="lg:col-span-4">
              <h2 className="text-h3 font-heading font-semibold text-navy-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Sheffield Office */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-navy-900 mb-1">Sheffield Office</h4>
                      <p className="text-body-sm text-slate-500">
                        Unit 3, Acres Hill Business Park,<br />
                        Acres Hill Ln,<br />
                        Sheffield S9 4LR
                      </p>
                    </div>
                  </div>
                </div>

                {/* Leeds Office */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-navy-900 mb-1">Leeds Office</h4>
                      <p className="text-body-sm text-slate-500">
                        Suite 1, 3rd Floor Wira House,<br />
                        Ring Road, West Park,<br />
                        Leeds LS16 6EB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-navy-900 mb-1">Email</h4>
                      <a
                        href="mailto:contactus@apexconsulting.co.uk"
                        className="text-body-sm text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        contactus@apexconsulting.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-navy-900 mb-1">Telephone</h4>
                      <a
                        href="tel:01142419360"
                        className="text-body-sm text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        0114 241 9360
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-navy-900 mb-1">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/company/apexconsultingengineers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accreditations */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h4 className="text-overline font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
                  Accreditations
                </h4>
                <div className="flex flex-wrap items-center gap-6">
                  <img
                    src="/images/accreditations/istructe-ser.png"
                    alt="IStructE / SER Approved"
                    className="h-10 w-auto invert opacity-40"
                  />
                  <img
                    src="/images/accreditations/chas.png"
                    alt="CHAS Accredited Contractor"
                    className="h-10 w-auto invert opacity-40"
                  />
                  <img
                    src="/images/accreditations/iso-9001.png"
                    alt="QMS ISO 9001:2015 Registered"
                    className="h-10 w-auto opacity-70"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={slideInRight} className="lg:col-span-8">
              <div className="bg-slate-50 p-8 lg:p-12">
                <h2 className="text-h3 font-heading font-semibold text-navy-900 mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-body text-slate-500 mb-10">
                  Fill in the form below and a member of our team will be in touch.
                </p>

                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formState.company}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="mt-0">
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="">Service Required</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="geo">Geo-Environmental</option>
                      <option value="other">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="mt-0">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project *"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white font-heading font-semibold px-9 py-4 text-body hover:bg-cyan-400 active:bg-cyan-500 transition-all duration-300 group"
                    >
                      Send Enquiry
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
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
