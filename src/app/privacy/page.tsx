"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const sections = [
  {
    title: "What Information We Collect",
    content: [
      "We may collect the following information:",
      "• Company name and position",
      "• Demographic information including postcode",
      "• Contact information including telephone number, address and email",
      "• Other information relevant to customer surveys and/or offers",
    ],
  },
  {
    title: "What We Do With the Information",
    content: [
      "Any information you give will be available to Apex Consulting Engineers. We require this information to understand your needs and provide you with a better service.",
      "We may also use your information for the following reasons:",
      "• Internal record keeping",
      "• Improving our products and services",
      "• We may periodically send promotional emails about special offers or other information which we think you may find interesting using the email address which you have provided",
      "• We may use your information to contact you by telephone or email for market research purposes",
      "We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
    ],
  },
  {
    title: "Technical Information",
    content: [
      "Like most websites, our server gathers limited information about you during a session, including the IP address and domain name from which you are accessing the server and your browser configuration. This information is only used to help us improve the content, design and performance of the site, and is not linked to the identity of any individual user.",
    ],
  },
  {
    title: "Our Site Uses Cookies",
    content: [
      "Cookies are small pieces of information that are transferred to and stored by your browser on your computer.",
      "In no circumstances do we collect any data that is not directly related to the use of the website (for example, we do not record other sites that you have visited). The log files or any information they contain about your use of the site will not be made available to any third parties other than as anonymous usage statistics.",
    ],
  },
  {
    title: "Links to Other Websites",
    content: [
      "Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.",
    ],
  },
  {
    title: "Controlling Your Personal Information",
    content: [
      "You may choose to restrict the collection or use of your personal information in the following ways:",
      "• If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at contactus@apexconsulting.co.uk",
      "We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.",
      "You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to: Wayne Ballance, Unit 3 Acres Hill Business Park, Acres Hill Lane, Sheffield S9 4LR.",
      "If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.",
    ],
  },
  {
    title: "How We Use Cookies on Our Website",
    content: [
      "A cookie is a small file which asks permission to be placed on your computer\u2019s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Apex Consulting Engineers uses permanent cookies to enable basic web traffic analysis using Google Analytics.",
      "We use Google Analytics to analyse the use of this website. This analysis shows us which areas of the site are popular and those that are not often visited which helps us to use our website resources in the most effective way. The information generated relating to our website is used to create reports about the use of the website. Google will store this information. Google\u2019s privacy policy is available at: www.google.com/privacypolicy.html",
      "These will remain stored on your computer until deleted, or until they reach a specified expiry date.",
      "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
    ],
  },
  {
    title: "How We Use Cookies in Email Communications",
    content: [
      "We use code in our email communications to track whether that email has been opened and read, and whether the recipient has used the onward links contained in the email. This allows us to monitor and improve our email communications.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 geometric-grid opacity-20" />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel light>Legal</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-h1 lg:text-display font-heading font-bold text-white mt-4 max-w-3xl leading-[1.05]"
            >
              Privacy &amp;
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Cookies
              </span>
            </motion.h1>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Apex Consulting Engineers is committed to ensuring that your
                privacy is protected. This privacy policy sets out how Apex
                Consulting Engineers uses and protects any information that you
                give Apex Consulting Engineers when you use this website.
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section) => (
                <motion.div key={section.title} variants={fadeInUp}>
                  <h2 className="text-h3 font-heading font-semibold text-navy-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`text-body leading-relaxed ${
                          paragraph.startsWith("•")
                            ? "text-slate-500 pl-4"
                            : "text-slate-600"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-8 border-t border-slate-200"
            >
              <p className="text-body-sm text-slate-400">
                &copy; {new Date().getFullYear()} Apex Consulting Engineers. All
                rights reserved. This policy was last updated in 2024.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
