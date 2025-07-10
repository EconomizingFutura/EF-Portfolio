"use client";
import React, { useState } from "react";
import { Header, Footer } from "@/sections/index";
// import { contactAPI } from "@/api/ContactAPI";
import { toast, Toaster } from "sonner";
// import { ContactData } from "../api/ContactAPI";
import { ContactModal, EnqueryModal } from "@/modal/index";
import { termsAndConditionsSections } from "@/constants/FooterConstants";
import { terms } from "@/constants/TermsConstants";
import Head from "next/head";
import { ContactData } from "@/api/ContactAPI";
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
      //   const response = await contactAPI(data, setIsLoading);
      toast.success("Message sent successful");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Terms & Conditions | Economizing Futura</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using Economizing Futura’s website, services, and digital solutions. Learn about your rights and responsibilities."
        />
        <link
          rel="canonical"
          href="https://economizingfutura.com/termsandconditions"
        />
      </Head>
      <div className=" flex flex-col w-full min-h-screen ">
        <Header handleShowForms={handleToggle} background={backgroundColor} />
        <section className="flex-1 flex flex-col my-24 px-5 sm:px-7 md:px-8 lg:px-16 xl:w-[1246px] xl:mx-auto xl:px-11 gap-6 text-justify">
          <div className="flex flex-col gap-2">
            <h1 className="font-hellixBold text-lg md:text-2xl leading-5">
              Terms and Conditions for Economizing Futura
            </h1>
            <p>
              <span className="pe-2 font-hellixBold text-base md:text-lg leading-5">
                Last Updated:
              </span>
              24/12/2024
            </p>
          </div>

          <p className="text-sm md:text-base">
            Welcome to Economizing Futura! <br /> These Terms and Conditions
            (&quot;Terms&quot;) govern the use of our website and services
            provided by Economizing Futura (&quot;we&quot;, &quot;our&quot;,
            &quot;us&quot;). By accessing or using our website and services, you
            (&quot;user&quot;, &quot;you&quot;, or &quot;your&quot;) agree to
            comply with and be bound by these Terms. Please read them carefully
            before using our website.
          </p>

          <div className="flex flex-col gap-4">
            {termsAndConditionsSections.map((section, index) => (
              <div key={index} className="text-sm md:text-base">
                <p className="font-hellixBold">{section.title}</p>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.services.heading}</h2>
            <p>{terms.services.description}</p>
            {terms.services.lists.map((section, index) => (
              <div key={index} className="pl-4 list-item">
                <p>{section}</p>
              </div>
            ))}
            <p>{terms.services.end}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.use.heading}</h2>
            {terms.use.lists.map((section, index) => (
              <div key={index} className="pl-4 list-decimal">
                <p>
                  {index + 1}. {section}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.property.heading}</h2>
            <p>{terms.property.description}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.liability.heading}</h2>
            <p>{terms.liability.description}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">
              {terms.privacyPolicy.heading}
            </h2>
            <p>{terms.privacyPolicy.description}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.Changes.heading}</h2>
            <p>{terms.Changes.description}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.termination.heading}</h2>
            <p>{terms.termination.description}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.law.heading}</h2>
            <p>{terms.law.description}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base mt-4">
            <h2 className="font-hellixSemiBold">{terms.dispute.heading}</h2>
            <p>{terms.dispute.description}</p>
          </div>

          <div className="text-sm md:text-base space-y-4 mt-6">
            <h2 className="font-hellixBold">11. Contact Us</h2>
            <p>
              For any questions, concerns, or requests related to this Privacy
              Policy, please contact us:
            </p>
            <div className="space-y-2">
              <p className="font-hellixBold">
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

export default TermsAndConditions;
