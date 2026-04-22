"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const team = [
  {
    name: "Wayne Ballance",
    role: "Executive Director",
    qualifications: "BEng (Hons) CEng MIStructE SER Approved FICE",
    bio: "Wayne started his career with Capita and has over twenty years of industry experience. He has been leading a team of civil, structural, and geo-environmental engineers for over ten years. Wayne consistently delivers excellence through his designs, commercial ability, and understanding of each client\u2019s individual drivers and needs.",
    image: "/images/team/wayne-ballance.jpg",
  },
  {
    name: "Mary Fisher",
    role: "Managing Director",
    qualifications: "BEng (Hons) MSc CEng MIStructE",
    bio: "Mary joined the original Apex Consulting business as a Graduate Engineer in 2011, working her way up to Director over the ten years that followed. Mary is a Chartered Structural Engineer and has worked on many high-quality student and residential projects, notably Altus House, Leeds and Eleanor Rosa House, Stratford.",
    image: "/images/team/mary-fisher.jpg",
  },
  {
    name: "Jack Shepherd",
    role: "Director",
    qualifications: "BEng (Hons) MSc (Eng) CEng MICE MIStructE",
    bio: "Jack has over fifteen years of experience working in consultancy environments both in the UK and overseas. A Chartered Civil and Structural Engineer, Jack has led teams for developments typically ranging in value of between \u00a350\u2013200m. Specialist areas include the analysis and design of high-rise buildings, concrete and steel design. Jack is also responsible for the training, development and mentoring of graduate engineers.",
    image: "/images/team/jack-shepherd.jpg",
  },
  {
    name: "Danny Gartside",
    role: "Director",
    qualifications: "",
    bio: "Danny is an experienced structural technician with 25 years\u2019 experience in a wide range of major building structures projects. Danny has special expertise in BIM modelling, and is responsible for implementation, managing, and directing the team in accordance with BIM Level 2 compliance.",
    image: "/images/team/danny-gartside.jpg",
  },
  {
    name: "Dian Coleman",
    role: "Director",
    qualifications: "MEng (Hons) CEng MIStructE",
    bio: "Dian is an effective and client-focused Director with over 20 years\u2019 design and delivery experience within building structures and civil engineering consultancy. Having held multidisciplinary design and management roles for both large and SME consultancies.",
    image: "/images/team/dian-coleman.jpg",
  },
  {
    name: "Matthew Thompson",
    role: "Director",
    qualifications: "BSc (Hons), CGeol, ILM (Level 7), FGS",
    bio: "Matt joined Apex to head up our newly formed Geo-environmental team. He has over 10 years\u2019 experience in designing and project-managing ground investigations for a variety of end-uses across the UK. Matt prides himself in providing robust and clear-cut advice to clients when it comes to ground related issues.",
    image: "/images/team/matthew-thompson.jpg",
  },
];

const values = [
  {
    title: "Consistent",
    description: "We consistently provide the highest standards of innovation, efficiency, quality, and safety in our solutions.",
  },
  {
    title: "Exceed Expectations",
    description: "We have a can-do attitude and always exceed our clients\u2019 expectations to offer innovative, efficient, quality, and safe solutions to challenges.",
  },
  {
    title: "Customer Focused",
    description: "We provide a personal and accountable service; we understand that our client\u2019s needs change and are always on hand to respond and adapt projects.",
  },
  {
    title: "Always Learning",
    description: "We believe in the importance of continued professional development and invest in ourselves through consistently learning and diversifying our skills.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0">
          <Image
            src="/images/misc/about_0_0acd8be0.jpg"
            alt="Apex Consulting Engineers team"
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
              <SectionLabel light>Our Company</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-h1 lg:text-display font-heading font-bold text-white mt-4 max-w-3xl leading-[1.05]"
            >
              Engineering Excellence
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Since 2011
              </span>
            </motion.h1>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story Section */}
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
                    alt="Apex team reviewing structural designs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-cyan-500/20" />
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:col-span-7 flex flex-col justify-center">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-h2 font-heading font-bold text-navy-900 mt-4 mb-6">
                Born from a desire to enhance the built environment
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed mb-6">
                Apex Consulting Engineers are an experienced Yorkshire based
                structural, civil, and geo-environmental consultancy delivering
                innovative engineering solutions across the UK. Originally
                founded by Wayne Ballance and Mary Fisher in 2011, we have
                delivered a vast number of projects over the years, including
                the tallest building in Yorkshire, Altus House, and the
                impressive Danum Museum and Gallery in Doncaster.
              </p>
              <p className="text-body text-slate-500 leading-relaxed mb-6">
                Apex was born out of a desire to fulfil the societal need
                for infrastructure and enhance the built environment, and
                through our dedicated team&apos;s knowledge and skillset we are
                consistently living up to this mission through the creative
                designs we deliver for our clients daily.
              </p>
              <p className="text-body text-slate-500 leading-relaxed">
                Our services span structural engineering, civil engineering,
                and geo-environmental consultancy. We work across a range of
                sectors including residential, student accommodation,
                commercial, heritage, and public buildings.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <SectionLabel>Our Values</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-h2 font-heading font-bold text-navy-900 mt-4"
            >
              What We Stand For
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="group bg-white p-8 lg:p-10 relative overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,158,226,0.12)] transition-shadow duration-500"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-cyan-500 transition-colors duration-500" />
                <span className="text-display font-heading font-bold text-slate-100/80 absolute top-4 right-6 leading-none select-none">
                  0{i + 1}
                </span>
                <h3 className="text-h3 font-heading font-semibold text-navy-900 mb-3 relative">
                  {value.title}
                </h3>
                <p className="text-body text-slate-500 leading-relaxed relative">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Team */}
      <section id="team" className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="text-center mb-16 lg:mb-20">
            <SectionLabel>Leadership</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-h2 font-heading font-bold text-navy-900 mt-4"
            >
              Meet the Team
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative overflow-hidden bg-white border border-slate-200 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(0,158,226,0.1)] transition-all duration-500"
              >
                {/* Large photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-overline uppercase tracking-[0.12em] text-cyan-500 font-semibold block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-h4 font-heading font-semibold text-navy-900 mb-1">
                    {member.name}
                  </h3>
                  {member.qualifications && (
                    <p className="text-body-sm text-slate-400 mb-3">
                      {member.qualifications}
                    </p>
                  )}
                  <p className="text-body-sm text-slate-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-900">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={slideInLeft}>
              <h2 className="text-h2 font-heading font-bold text-white">
                Ready to work with us?
              </h2>
              <p className="text-body-lg text-white/80 mt-2">
                Let&apos;s discuss your next engineering project.
              </p>
            </motion.div>
            <motion.div variants={slideInRight}>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
