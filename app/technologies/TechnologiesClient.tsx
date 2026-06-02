"use client";
import { Header, Footer } from "@/sections/index";
import React, { useRef, useState } from "react";
import { Technologies } from "@/constants/constants";
import Image from "next/image";
import { toast } from "sonner";
import { ContactData } from "@/api/ContactAPI";

const TechnologiesClient = () => {
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
      <main className="flex-grow w-11/12 max-w-7xl mx-auto py-10">
        <h1 className="text-[32px] md:text-[44px] font-hellixBold text-[#24536E] mb-8">
          Technologies We Use
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col gap-4 p-6 border border-[#DDE4EE] rounded-xl"
            >
              <div className="h-[120px] flex items-center justify-center">
                <Image src={tech.logo} alt="" className="max-h-full w-auto" />
              </div>
              <p className="font-hellixMedium text-[#666666] leading-relaxed text-justify">
                {tech.text}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologiesClient;
