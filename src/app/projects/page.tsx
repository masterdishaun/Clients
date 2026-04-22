"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const categories = ["All", "Student Accommodation", "Residential", "Refurbishment", "Historical", "New Build"];

const projects = [
  {
    title: "Altus House, Leeds",
    category: "Student Accommodation",
    description:
      "Yorkshire\u2019s tallest building \u2014 a landmark 34-storey student accommodation tower in Leeds city centre, demonstrating our high-rise structural engineering expertise.",
    image: "/images/projects/altus-house.jpg",
    tags: ["Student Accommodation", "High-Rise", "New Build"],
    location: "Leeds, UK",
  },
  {
    title: "Danum Gallery, Library & Museum",
    category: "Refurbishment",
    description:
      "The new Doncaster Culture and Learning Centre consolidates four buildings, including the library, museum and art gallery, into one dynamic hub. Part new build, part refurbishment, incorporating the fa\u00e7ade of the former Doncaster High School for Girls, built in 1910.",
    image: "/images/projects/danum-gallery.jpg",
    tags: ["Heritage", "Refurbishment", "New Build"],
    location: "Doncaster, UK",
  },
  {
    title: "Kelaty House, Wembley",
    category: "Student Accommodation",
    description:
      "A 300-bed aparthotel and 699 beds of student accommodation arranged across five separate buildings, surrounding a central podium with extensive landscaped communal areas and basement car parking. Located within the Wembley Park regeneration area.",
    image: "/images/projects/kelaty-house.jpg",
    tags: ["Student Accommodation", "Residential", "New Build"],
    location: "Wembley, London",
  },
  {
    title: "Eleanor Rosa House, Stratford",
    category: "Residential",
    description:
      "A significant residential development in Stratford, East London, showcasing our capability in complex urban developments and high-quality living spaces.",
    image: "/images/projects/eleanor-rosa-house.jpg",
    tags: ["Residential", "New Build"],
    location: "Stratford, London",
  },
  {
    title: "Olympic Way, Wembley",
    category: "Student Accommodation",
    description:
      "A high-quality 19-storey student accommodation development neighbouring the world-famous Wembley Stadium, providing 699 student beds divided into 629 bedrooms and 70 studios, with commercial space and landscaped roof terraces.",
    image: "/images/projects/olympic-way.jpg",
    tags: ["Student Accommodation", "High-Rise", "New Build"],
    location: "Wembley, London",
  },
  {
    title: "Crown House, Sheffield",
    category: "Refurbishment",
    description:
      "A prestigious student accommodation scheme in the heart of Sheffield city centre providing 355 studio bedrooms across three blocks, ranging from six to nine storeys. The former office block was transformed by adding three storeys to the existing frame.",
    image: "/images/projects/crown-house.jpg",
    tags: ["Student Accommodation", "Refurbishment"],
    location: "Sheffield, UK",
  },
  {
    title: "The Wool Market, Doncaster",
    category: "Historical",
    description:
      "The Grade II-listed Victorian Wool Market was redeveloped to create a thriving hub for Doncaster\u2019s local community and businesses. Apex delivered civil and structural services on this \u00a33m refurbishment working with Doncaster Metropolitan Borough Council and Willmott Dixon.",
    image: "/images/projects/wool-market.jpg",
    tags: ["Historical", "Refurbishment", "Heritage"],
    location: "Doncaster, UK",
  },
  {
    title: "Laycock Studios, Sheffield",
    category: "Refurbishment",
    description:
      "A student accommodation development neighbouring Sheffield train station. The fa\u00e7ade and structure of the original W.W. Laycock & Sons Ltd building, dating back to 1853, was retained and converted, with a new 6-storey build providing 180 student beds in total.",
    image: "/images/projects/laycock-studios.jpg",
    tags: ["Student Accommodation", "Refurbishment", "Historical"],
    location: "Sheffield, UK",
  },
  {
    title: "White Rose View, Leeds",
    category: "Student Accommodation",
    description:
      "Located in the Arena Quarter of Leeds city centre, White Rose View provides 976 student beds in a mix of cluster and studio flats across two high-rise towers of 17 and 27 storeys, with commercial space and a 90-space basement car park.",
    image: "/images/projects/white-rose-view.jpg",
    tags: ["Student Accommodation", "High-Rise", "New Build"],
    location: "Leeds, UK",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 diagonal-lines opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel light>Our Portfolio</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-h1 lg:text-display font-heading font-bold text-white mt-4 max-w-3xl leading-[1.05]"
            >
              Projects That
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Define Skylines
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-white/80 mt-6 max-w-xl"
            >
              From Yorkshire&apos;s tallest tower to award-winning cultural venues,
              explore the breadth of our engineering expertise.
            </motion.p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mb-12 lg:mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-body-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.title}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  className="group relative overflow-hidden cursor-pointer bg-white border border-slate-200 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(0,158,226,0.12)] transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-overline uppercase tracking-[0.12em] text-white bg-navy-900/80 backdrop-blur-sm px-3 py-1.5 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-h4 font-heading font-semibold text-navy-900 mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-body-sm text-slate-500 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 border border-slate-200 text-slate-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
