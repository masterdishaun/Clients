import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutIntro from "@/components/sections/AboutIntro";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Values from "@/components/sections/Values";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutIntro />
      <Stats />
      <FeaturedProjects />
      <Values />
      <CTA />
    </>
  );
}
