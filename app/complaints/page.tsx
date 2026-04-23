import LegalPage from "@/components/ui/LegalPage";

export const metadata = {
  title: "Complaints — Bridges Solicitors",
  description:
    "Our complaints procedure and how to contact the Legal Ombudsman if you remain dissatisfied.",
};

export default function ComplaintsPage() {
  return (
    <LegalPage
      kicker="— Complaints Procedure"
      title="Our complaints policy"
      lede="We are committed to providing a high-quality legal service to all our clients. When something goes wrong, we need you to tell us about it so we can improve our standards."
      sections={[
        {
          heading: "How to raise a complaint",
          paragraphs: [
            "We trust that we would be able to resolve anything you are unhappy with between ourselves, but should you have cause to complain, you should contact us orally or in writing.",
            "We hope you will not have reason to complain as we take the interests of our clients seriously and we welcome ideas and suggestions aimed at improving our services. We pride ourselves on the quality of service we offer and in the many satisfied clients we have. We hope you will be another.",
          ],
        },
        {
          heading: "What will happen next",
          list: [
            "We aim to resolve your complaint within eight weeks of your notification. We will send you a letter acknowledging receipt of your complaint within three days of receiving it, enclosing a copy of this procedure.",
            "We will then investigate your complaint. This will normally involve passing your complaint to our client care Principal, Mr Ozzie Agho, who will review your matter file and speak to the member of staff who acted for you.",
            "Mr Victor Bobby Obasogie, a solicitor, will be responsible for handling complaints about Mr Ozzie Agho.",
            "Mr Ozzie Agho will then invite you to a meeting to discuss and hopefully resolve your complaint. He will do this within 14 days of sending you the acknowledgement letter.",
            "Within three days of the meeting, Mr Ozzie Agho will write to you to confirm what took place and any solutions he has agreed with you.",
            "If you do not want a meeting or it is not possible, Mr Ozzie Agho will send you a detailed written reply to your complaint, including his suggestions for resolving the matter, within 21 days of sending you the acknowledgement letter.",
            "At this stage, if you are still not satisfied, you should contact us again and we will arrange for someone unconnected with the matter at the firm to review the decision.",
            "We will write to you within 14 days of receiving your request for a review, confirming our final position on your complaint and explaining our reasons.",
          ],
        },
        {
          heading: "The Legal Ombudsman",
          paragraphs: [
            "If you would like more information about the Legal Ombudsman, or if you remain dissatisfied following our final written response, you may contact them directly.",
          ],
          listIntro: "Contact details:",
          list: [
            "Visit www.legalombudsman.org.uk",
            "Call 0300 555 0333 between 10am and 4pm.",
            "Relay UK: 18001 0300 555 0333",
            "Email enquiries@legalombudsman.org.uk",
            "Legal Ombudsman, PO BOX 6167, Slough, SL1 0EH",
          ],
        },
        {
          heading: "Time limits",
          paragraphs: [
            "Normally, you will need to bring a complaint to the Legal Ombudsman within six months of receiving a final written response from us about your complaint, or within six years of the act or omission about which you are complaining occurring, or \u2014 if outside of this period \u2014 within three years of when you should reasonably have been aware of it.",
          ],
        },
      ]}
    />
  );
}
