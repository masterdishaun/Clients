import LegalPage from "@/components/ui/LegalPage";

export const metadata = {
  title: "Privacy Policy — Bridges Solicitors",
  description:
    "How Bridges Solicitors collects, processes, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="— Privacy Policy"
      title="Privacy and Transparency Notice"
      lede="How we process personal data, the legal basis for doing so, and the rights available to you."
      sections={[
        {
          heading: "Data Controller",
          paragraphs: [
            "Mr Ozzie Agho is the data controller for Bridges Solicitors.",
          ],
        },
        {
          heading: "Purposes of Processing",
          listIntro: "Your data will be processed in order to:",
          list: [
            "Market Bridges Solicitors services to you;",
            "Provide services under contract to you and others;",
            "Comply with regulatory and other legal obligations; and",
            "Protect Bridges Solicitors against potential claims.",
          ],
        },
        {
          heading: "Legal Basis",
          paragraphs: [
            "Your data will be processed on the basis that Bridges Solicitors has a legitimate interest in being able to achieve the aims of processing set out above. Where special category data is provided, the provider of the data warrants that they consent to Bridges Solicitors processing that data or that they have obtained written consent from the data subject.",
          ],
        },
        {
          heading: "Personal Data Held",
          paragraphs: [
            "As a minimum, Bridges Solicitors is required to positively identify its clients. This also includes positively identifying a director in the case of a corporate client. In addition, Bridges Solicitors holds whatever information is provided to it by its clients and others. This will rarely include special category data.",
          ],
        },
        {
          heading: "Failure to Provide Data",
          paragraphs: [
            "If you fail to provide Bridges Solicitors with the data required you will not receive services or marketing.",
          ],
        },
        {
          heading: "Data Sources",
          paragraphs: [
            "Bridges Solicitors obtains most personal data from its clients and those who have indicated that they have an interest in Bridges Solicitors services. Bridges Solicitors also obtains some personal data from other correspondents. Bridges Solicitors also collects some data from publicly available sources (e.g. Companies House).",
          ],
        },
        {
          heading: "Recipients",
          paragraphs: [
            "Any data provided by a client is treated as confidential to that client and will only be shared with others in so far as this is necessary in order to provide the services contracted for by the client, to comply with regulatory and other legal obligations and to protect Bridges Solicitors against a potential claim.",
            "In order to provide its services, Bridges Solicitors relies on the services of certain data processors. These include secure cloud storage for files and emails. In each case, Bridges Solicitors ensures that data is processed in compliance with this policy.",
          ],
        },
        {
          heading: "Third Countries and Safeguards",
          paragraphs: [
            "Other than where required in order to provide services as required in individual client matters, data is rarely sent to third countries. Where it is, the relevant devices are password protected and equipped with tracking and remote wipe software. The devices are personally accompanied.",
          ],
        },
        {
          heading: "Retention Period",
          paragraphs: [
            "Data is held for six years from the end of the relevant matter or for six years where not associated with a particular matter.",
          ],
        },
        {
          heading: "Data Subject\u2019s Rights",
          listIntro: "Where relevant, you have the right (subject to client confidentiality) to:",
          list: [
            "Withdraw consent to the processing of your data;",
            "Complain to a supervisory authority regarding the processing of your data (see https://ico.org.uk/); and",
            "Obtain a copy of the data held on you and to correction of any errors in that data.",
          ],
        },
        {
          heading: "Automated Decision Making",
          paragraphs: ["None."],
        },
        {
          heading: "Responsibility",
          paragraphs: [
            "Responsibility for this policy, including an annual documented review, is that of Mr Ozzie Agho.",
          ],
        },
      ]}
    />
  );
}
