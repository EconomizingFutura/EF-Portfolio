"use client";
import { Footer, Header } from "@/sections/index";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { ContactData } from "@/api/ContactAPI";

const PrivacyPolicyClient = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => setShowModal(!showModal);
  const [backgroundColor] = useState("#aee2ff");
  const mainSectionRef = useRef<HTMLDivElement | null>(null);

  const handleFormSubmit = async (data: ContactData) => {
    if (!data.firstName || !data.lastName || !data.email || !data.comments) {
      toast.error("All fields are required");
      return;
    }
    try {
      // await contactAPI(data, setIsLoading);
      // toast.success("Message sent successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  void handleFormSubmit;
  void showModal;
  void isLoading;

  return (
    <div className="font-hellix relative flex flex-col min-h-screen bg-white overflow-hidden">
      <div className="h-[32px]" ref={mainSectionRef}>
        <Header handleShowForms={handleToggle} background={backgroundColor} />
      </div>
      <main className="flex-grow w-11/12 max-w-4xl mx-auto py-10 text-[#031924]">
        <h1 className="text-[32px] md:text-[44px] font-hellixBold text-[#24536E] mb-8">
          Privacy Policy
        </h1>
        <p className="font-hellixMedium leading-7">
          Your privacy is important to us. This page explains how we handle your
          data.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyClient;
