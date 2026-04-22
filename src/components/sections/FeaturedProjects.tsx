"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "Altus House, Leeds",
    category: "Student Accommodation",
    description: "Yorkshire\u2019s tallest building \u2014 a landmark 34-storey student accommodation tower in Leeds city centre.",
    image: "/images/projects/altus-house.jpg",
    span: "lg:col-span-7 lg:row-span-2",
    height: "h-[400px] lg:h-full",
  },
  {
    title: "Danum Gallery, Library & Museum",
    category: "Refurbishment / New Build",
    description: "A dynamic cultural hub consolidating four buildings in Doncaster, incorporating the fa\u00e7ade of the former High School for Girls.",
    image: "/images/projects/danum-gallery.jpg",
    span: "lg:col-span-5",
    height: "h-[300px] lg:h-[280px]",
  },
  {
    title: "Kelaty House, Wembley",
    category: "Student Accommodation",
    description: "A 300-bed aparthotel and 699 beds of student accommodation across five buildings in the Wembley Park regeneration area.",
    image: "/images/projects/kelaty-house.jpg",
    span: "lg:col-span-5",
    height: "h-[300px] lg:h-[280px]",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-h2 lg:text-h1 font-heading font-bold text-navy-900 mt-4"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Button href="/projects" variant="outline" size="md">
              View All Projects
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
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[280px_280px] gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              className={`${project.span} group relative overflow-hidden cursor-pointer`}
            >
              <div className={`relative ${project.height} min-h-[280px] w-full`}>
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                {/* Cyan accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-overline uppercase tracking-[0.15em] text-cyan-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-h3 font-heading font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-white/80 max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
