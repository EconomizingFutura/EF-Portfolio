import React, { useState } from "react";
import { Header, Footer } from "../sections/index";
import { contactAPI } from "../api/ContactAPI";
import { toast, Toaster } from "sonner";
import { ContactData } from "../api/ContactAPI";
import { ContactModal, EnqueryModal } from "../modal";
import { termsAndConditionsSections } from "../constants/FooterConstants";
const backgroundColor = "#FFFFFF";

const TermsAndConditions: React.FC = () => {
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
      <section className="flex-1 flex flex-col my-24 font-hellix px-5 sm:px-7 md:px-8 lg:px-12 xl:w-[1246px] xl:mx-auto xl:px-10 gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg md:text-2xl leading-5">
            Terms and Conditions for Economizing Futura
          </h1>
          <p>
            <span className="pe-2 font-bold text-base md:text-lg leading-5">
              Effective Date:
            </span>
            1/07/2024
          </p>
        </div>

        <p className="text-sm md:text-base">
          Welcome to Economizing Futura! By accessing or using our website,
          applications, or services ("Services"), you agree to these Terms and
          Conditions ("Terms"). Please read them carefully before proceeding.
        </p>

        <div className="flex flex-col gap-3">
          {termsAndConditionsSections.map((section, index) => (
            <div key={index} className="text-sm md:text-base">
              <p className="font-bold">{section.title}</p>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm md:text-base mt-4">
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
            By using our Services, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions.
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

export default TermsAndConditions;
