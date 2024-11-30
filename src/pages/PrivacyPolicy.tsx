import React, { useState } from "react";
import { Header, Footer } from "../sections/index";
import { contactAPI } from "../api/ContactAPI";
import { toast, Toaster } from "sonner";
import { ContactData } from "../api/ContactAPI";
import { ContactModal, EnqueryModal } from "../modal";
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
      const response = await contactAPI(data, setIsLoading);
      toast.success(response.message);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" flex flex-col w-full min-h-screen ">
      <Header handleShowForms={handleToggle} background={backgroundColor} />
      <section className="flex-1 flex flex-col my-24 font-hellix px-5 sm:px-7 md:px-8 lg:px-12 xl:w-[1246px] xl:mx-auto xl:px-9 gap-3">
        <div className=" flex flex-col gap-2">
          <h1 className=" font-bold text-lg md:text-2xl leading-5 ">
            Privacy Policy for Economizing Futura
          </h1>
          <p>
            <span className="pe-2 font-bold text-base md:text-lg leading-5">
              Effective Date :
            </span>
            1/07/2024
          </p>
        </div>
        <p className=" text-sm md:text-base">
          {" "}
          At Economizing Futura, your privacy is a priority. This Privacy Policy
          explains how we collect, use, share, and protect your information when
          you use our website, applications, or services ("Services"). By using
          our Services, you agree to the practices described below.
        </p>
        <p className=" text-sm md:text-base">
          1. Information We Collect We may collect personal information (e.g.,
          name, email, phone, payment details) and non-personal information
          (e.g., IP address, browser type, usage data). Additionally, we may
          receive data from third-party services like social media platforms.
        </p>
        <p className=" text-sm md:text-base">
          {" "}
          2. How We Use Your Information We use your information to provide and
          improve Services, process transactions, personalize user experiences,
          ensure security, and comply with legal obligations.
        </p>
        <p className=" text-sm md:text-base">
          3. Sharing Your Information We do not sell your data. We may share it
          with service providers (e.g., payment processors), comply with legal
          requirements, or during business transfers (e.g., mergers or
          acquisitions).
        </p>
        <p className=" text-sm md:text-base">
          4. Data Retention We retain data only as long as necessary to fulfill
          the purposes described in this policy or as required by law.
        </p>
        <p className=" text-sm md:text-base">
          5. Data Security We use industry-standard measures to protect your
          information but cannot guarantee absolute security.
        </p>
        <p className=" text-sm md:text-base">
          6. Your Rights Depending on your location, you may have rights to
          access, update, delete, or withdraw consent regarding your data.
          Contact us at [Insert Email] to exercise your rights.
        </p>
        <p className=" text-sm md:text-base">
          7. Cookies and Tracking We use cookies to enhance functionality and
          analyze usage. You can manage cookie preferences via browser settings.
        </p>
        <p className=" text-sm md:text-base">
          8. Third-Party Links We are not responsible for the privacy practices
          of third-party websites linked through our Services.
        </p>
        <p className=" text-sm md:text-base">
          9. Children's Privacy Our Services are not intended for children under
          13, and we do not knowingly collect their data.
        </p>
        <p className=" text-sm md:text-base">
          10. Changes to This Policy We may update this policy periodically.
          Updates will be posted with a revised effective date.
        </p>
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <h2 className="font-bold">Contact Us</h2>
          <p>For questions or concerns, contact:</p>
          <div className="flex flex-col gap-1">
            <p>Economizing Futura</p>
            <p>Email: economizing@gmail.com</p>
            <p>Phone: 7014968787</p>
            <p>
              Address: WeWork, Embassy TechVillage,
              <br /> Bellandur, Bengaluru, 560103
            </p>
          </div>
          <p className="mt-2">
            This Privacy Policy reflects our commitment to protecting your
            privacy and maintaining transparency.
          </p>
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
  );
};

export default PrivacyPolicy;
