import PageHero from "@/components/ui/PageHero";
import ContactBlock from "@/components/sections/ContactBlock";

export const metadata = { title: "Contact — Bridges Solicitors" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Do not hesitate to get in touch."
        lede="Every enquiry is reviewed by a qualified solicitor. We will reply within one working day."
      />
      <ContactBlock />
    </>
  );
}
