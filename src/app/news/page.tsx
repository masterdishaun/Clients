"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const newsArticles = [
  {
    title: "Altus House: Yorkshire's Tallest Building Now Complete",
    date: "2024",
    category: "Project News",
    excerpt:
      "Apex Consulting Engineers is proud to have provided the structural engineering design for Altus House in Leeds — now the tallest building in Yorkshire at 34 storeys.",
    image: "/images/projects/altus-house.jpg",
  },
  {
    title: "Danum Gallery, Library & Museum Opens Its Doors",
    date: "2023",
    category: "Project News",
    excerpt:
      "The award-winning Danum Gallery, Library and Museum in Doncaster has officially opened. Apex delivered the full structural engineering package for this landmark cultural venue.",
    image: "/images/projects/danum-gallery.jpg",
  },
  {
    title: "Apex Expands with New Leeds Office",
    date: "2023",
    category: "Company News",
    excerpt:
      "To better serve our growing client base across West Yorkshire, we have opened a new office at Wira House, Ring Road, West Park, Leeds LS16 6EB.",
    image: "/images/misc/about-team-working.jpg",
  },
  {
    title: "Kelaty House, Wembley — Structural Design Complete",
    date: "2023",
    category: "Project News",
    excerpt:
      "Apex has completed the structural design for Kelaty House, a major residential development near Wembley Stadium delivering high-quality homes in North West London.",
    image: "/images/projects/kelaty-house.jpg",
  },
  {
    title: "Crown House Refurbishment Successfully Delivered",
    date: "2022",
    category: "Project News",
    excerpt:
      "Our team has completed the structural engineering works for the refurbishment of Crown House in Sheffield, breathing new life into this landmark city centre building.",
    image: "/images/projects/crown-house.jpg",
  },
  {
    title: "Investing in the Next Generation of Engineers",
    date: "2022",
    category: "Company News",
    excerpt:
      "Apex continues to invest in graduate talent, welcoming new team members and supporting their journey to Chartered Engineer status through our structured development programme.",
    image: "/images/hero/hero-banner.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0">
          <Image
            src="/images/projects/danum-gallery.jpg"
            alt="Danum Gallery, Library and Museum"
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
              <SectionLabel light>Latest Updates</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-h1 lg:text-display font-heading font-bold text-white mt-4 max-w-3xl leading-[1.05]"
            >
              News &amp;
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Insights
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-white/80 mt-6 max-w-xl"
            >
              Stay up to date with our latest projects, company milestones, and
              industry insights.
            </motion.p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* News Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsArticles.map((article) => (
              <motion.article
                key={article.title}
                variants={scaleIn}
                className="group relative overflow-hidden bg-white border border-slate-200 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(0,158,226,0.12)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-overline uppercase tracking-[0.12em] text-white bg-navy-900/80 backdrop-blur-sm px-3 py-1.5 font-medium">
                      {article.category}
                    </span>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-body-sm text-slate-400 mb-2 block">
                    {article.date}
                  </span>
                  <h3 className="text-h4 font-heading font-semibold text-navy-900 mb-3 group-hover:text-cyan-500 transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-body-sm text-slate-500 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
