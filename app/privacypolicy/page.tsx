"use client";
import React, { useState } from "react";
import { Header, Footer } from "@/sections/index";
import { toast, Toaster } from "sonner";
import { ContactData } from "@/api/ContactAPI";
import { ContactModal, EnqueryModal } from "@/modal/index";
import { privacyData } from "@/constants/PrivacyPolicy";
import Head from "next/head";
const backgroundColor = "#FFFFFF";

const PrivacyPolicy: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleToggle = () => {
    setShow(!show);
  };
  const handleFormSubmit = async (data: ContactData) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.comments === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      //   const response = await contactAPI(data, setIsLoading);
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Privacy Policy | Economizing Futura</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Economizing Futura to understand how we collect, use, and protect your personal information."
        />
        <link
          rel="canonical"
          href="https://economizingfutura.com/privacypolicy"
        />
      </Head>
      <div className=" flex flex-col w-full min-h-screen ">
        <Header handleShowForms={handleToggle} background={backgroundColor} />
        <section className="flex-1 flex flex-col my-24 px-5 sm:px-7 md:px-8 lg:px-16 xl:w-[1246px] xl:mx-auto xl:px-11 gap-6 text-justify">
          <div className="flex flex-col gap-4">
            <h1 className="font-hellixBold text-lg md:text-2xl">
              Privacy Policy for Economizing Futura
            </h1>
            <p className="text-base md:text-lg">
              <span className="font-hellixSemiBold">Effective Date:</span>{" "}
              01/07/2024
            </p>
          </div>

          <p className="text-sm md:text-base">
            At Economizing Futura, your privacy is our priority. This Privacy
            Policy outlines how we collect, use, share, and protect your
            personal information when you use our website, applications, or
            services (&quot;Services&quot;). By accessing or using our Services,
            you consent to the practices described herein.
          </p>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">1. Information We Collect</h2>
            <p>
              We collect information to provide and improve our Services
              effectively. The information we may collect includes:
            </p>
            {privacyData.information_we_collect.map((data, index) => (
              <div key={index} className="pl-4">
                <h3 className="font-hellixSemiBold">
                  {String.fromCharCode(97 + index)}) {data.heading}
                </h3>
                <p className="pl-6">{data.info}</p>
              </div>
            ))}
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">
              2. How We Use Your Information
            </h2>
            {privacyData.how_we_use_your_information.purposes.map(
              (data, index) => (
                <li key={index} className="ml-4">
                  {data}
                </li>
              )
            )}
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">3. Sharing Your Information</h2>
            <p>
              We do not sell your data. However, we may share your information
              under the following circumstances:
            </p>
            {privacyData.sharing_your_information.map((data, index) => (
              <div key={index} className="pl-4">
                <h3 className="font-hellixSemiBold">
                  {String.fromCharCode(97 + index)}) {data.heading}
                </h3>
                <p className="pl-6">{data.info}</p>
              </div>
            ))}
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">4. Data Retention</h2>
            <p>
              We retain your data only for as long as necessary to fulfill the
              purposes outlined in this policy or as required by law. Once the
              retention period expires, we securely delete or anonymize your
              information.
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data against unauthorized access, loss, misuse, or alteration.
              However, no method of electronic transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your
              personal information, including:
            </p>
            {privacyData.user_rights.rights_list.map((data, index) => (
              <li key={index} className="ml-4">
                {data}
              </li>
            ))}
            <p>{privacyData.user_rights.contact}</p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">
              7. Cookies and Tracking Technologies
            </h2>
            <p>We use cookies and similar technologies to:</p>
            {privacyData.cookies_and_tracking_technologies.usage.map(
              (data, index) => (
                <li key={index} className="ml-4">
                  {data}
                </li>
              )
            )}
            <h3 className="font-hellixSemiBold">Types of Cookies Used:</h3>
            {privacyData.cookies_and_tracking_technologies.types.map(
              (data, index) => (
                <li key={index} className="ml-4">
                  {data}
                </li>
              )
            )}
            <p>{privacyData.cookies_and_tracking_technologies.end}</p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">8. Third-Party Links</h2>
            <p>
              Our Services may include links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies before sharing any
              personal information.
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">9. Children&#39;s Privacy</h2>
            <p>
              Our Services are not intended for children under 13 years of age.
              We do not knowingly collect or process personal information from
              children. If we become aware of such data being collected, we will
              take steps to delete it promptly.
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">
              10. International Data Transfers
            </h2>
            <p>
              If you are accessing our Services from outside of India, your
              information may be transferred to, stored, and processed in India
              or other countries where our facilities or service providers are
              located. We ensure that appropriate safeguards are in place for
              such transfers, in compliance with applicable data protection
              laws. By using our Services, you consent to this transfer,
              storage, and processing.
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">11. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. Updates will be effective upon posting, with a revised
              &quot;Effective Date&quot; at the top of this document. We
              encourage you to review this policy periodically.
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixSemiBold">12. Additional Provisions</h2>
            <p>
              <span className="font-hellixSemiBold">a. Governing Law:</span>
              {privacyData.additional_provisions.governing_law}
            </p>
            <p>
              <span className="font-hellixSemiBold">
                b. Dispute Resolution:
              </span>
              {privacyData.additional_provisions.dispute_resolution}
            </p>
            <p>
              <span className="font-hellixSemiBold">
                c. Consent for Marketing:
              </span>
              {privacyData.additional_provisions.marketing_consent}
            </p>
            <p>
              <span className="font-hellixSemiBold">
                d. Data Breach Notification:
              </span>
              {privacyData.additional_provisions.data_breach_notification}
            </p>
          </div>

          <div className="text-sm md:text-base space-y-4">
            <h2 className="font-hellixBold">13. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please
              contact us at:
            </p>
            <div className="space-y-2">
              <p className=" font-hellixBold">
                Economizing Futura (OPC) Pvt. Ltd.
              </p>
              <p>Email: economizingfutura@gmail.com</p>
              <p>
                Address:
                <br />
                101, Unit 101, Oxford Towers, 139, HAL Old Airport Road,
                <br /> Hulsur Bazaar, Bangalore North, Bangalore - 560008,
                <br /> Karnataka, India
              </p>
            </div>
          </div>
        </section>

        <Toaster richColors />
        <div className="xl:right-8 xl:bottom-8 lg:right-8 right-5 bottom-5 z-50 fixed">
          <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
        </div>
        <Footer />
        {show && (
          <ContactModal
            isLoading={isLoading}
            onFormSubmit={handleFormSubmit}
            isModalOpen={show}
            handleToggle={handleToggle}
          />
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;
