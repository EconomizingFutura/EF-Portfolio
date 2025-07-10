"use client";
import React, { useRef, useState } from "react";
import { Header, Footer } from "@/sections/index";
import { EnqueryModal, ContactModal } from "@/modal/index";
import Head from "next/head";
import {
  WaveRight,
  WaveLeft,
  greyCircles,
  AvailableIcon,
} from "@/assets/index";
import { Technologies, technologyColors } from "@/constants/constants";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import { useScrollBackground } from "@/hooks/useScrollBackground";
import { ContactData } from "@/api/ContactAPI";

const Technology: React.FC = () => {
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
      toast.success("Message sent successfull");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const [backgroundColor, setBackgroundColor] = useState<string>("#aee2ff");

  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  useScrollBackground({
    mainRef: mainSectionRef,
    otherRef: techSectionRef,
    sectionColors: technologyColors,
    setBackgroundColor: setBackgroundColor,
  });

  return (
    <>
      <Head>
        <title>Technologies We Use | Economizing Futura</title>
        <meta
          name="description"
          content="Explore the technologies Economizing Futura leverages — from React and Node.js to cloud solutions — to deliver cutting-edge digital products."
        />
        <link
          rel="canonical"
          href="https://economizingfutura.com/technologies"
        />
      </Head>
      <div className="mt-16 font-hellix sm:mt-0 overflow-x-hidden flex flex-col min-h-screen">
        <Header handleShowForms={handleToggle} background={backgroundColor} />
        <div
          ref={mainSectionRef}
          className="bg-[#BCE7FF]  h-48 w-full sm:h-60 md:h-72 lg:h-[322px] flex justify-between items-center"
          style={{
            // backgroundImage: `url(${new URL(wave, window.location.origin)})`,
            backgroundRepeat: "repeat",
            backgroundPositionY: 0,
            backgroundPositionX: "0",
            backgroundColor: "#C8EBFF",
            backgroundSize: "50% 50%",
          }}
        >
          <Image
            src={WaveLeft}
            alt=""
            className="w-12 md:w-auto"
            draggable={false}
          />
          <h1 className="text-[#24536E] font-hellixBold text-3xl sm:text-4xl md:text-5xl leading-tight text-center px-4">
            Technologies We Use
          </h1>
          <Image
            src={WaveRight}
            alt=""
            className="w-12 md:w-auto lg:pe-12"
            draggable={false}
          />
        </div>
        <div className=" bg-[#FFFFFF] flex justify-center items-center flex-1 h-full relative ">
          <Image
            src={greyCircles}
            alt=""
            className="absolute top-0 right-0 lg:h-auto lg:w-auto h-16 "
            draggable={false}
          />
          <section
            ref={techSectionRef}
            className="  flex flex-wrap relative justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto py-8 lg:px-4 sm:py-10 px-4 min-h-max"
          >
            {Technologies.map((tech) => (
              <div
                key={tech.id}
                className={`flex flex-col 
              ${tech.id >= 4 ? "h-min" : "h-min justify-between"}  
              w-full sm:w-[calc(50%-5rem)] md:h-[420px]  z-10 md:w-[calc(50%-1rem)]  lg:w-[358px] xl:w-[374px] rounded-xl sm:rounded-2xl border border-[#9CA4B580] relative`}
              >
                <div className="w-full h-[147px] bg-[#FFFFFF] rounded-t-xl  sm:rounded-t-2xl flex justify-center items-center">
                  <Image
                    src={tech.logo}
                    alt=""
                    className={`max-w-full ${
                      tech.id >= 5 && "h-[110px] aspect-video"
                    }`}
                    draggable={false}
                  />
                </div>
                <div
                  className={`w-full h-full py-1 rounded-b-xl  sm:rounded-b-2xl px-4 sm:px-6 md:px-8 flex-grow  
               bg-[#F4FAFF]`}
                >
                  <p className="text-sm  sm:text-base text-[#666666] font-hellixMedium leading-relaxed text-justify">
                    {tech.text}
                  </p>
                </div>
                <Image
                  src={AvailableIcon}
                  alt=""
                  className="absolute top-4 -right-2 sm:-right-3 md:-right-3.5 w-8 sm:w-10 md:w-auto"
                  draggable={false}
                />
              </div>
            ))}
          </section>
        </div>
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

export default Technology;
