import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Welcome from "@/components/sections/Welcome";
import Practices from "@/components/sections/Practices";
import Fees from "@/components/sections/Fees";
import WhyUs from "@/components/sections/WhyUs";
import Voices from "@/components/sections/Voices";
import ContactBlock from "@/components/sections/ContactBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Welcome />
      <Practices />
      <Fees />
      <WhyUs />
      <Voices />
      <ContactBlock />
    </>
  );
}
