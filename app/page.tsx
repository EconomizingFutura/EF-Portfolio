"use client";

import React, { useEffect, useRef, useState } from "react";
import { ClientUnderline, Boxes, Area, FAQ } from "@/assets/index";
import { ContactModal, EnqueryModal } from "@/modal/index";
import { Toaster, toast } from "sonner";
import { sectionColors, projectsInfo, blogs } from "@/constants/constants";
import { useScroll } from "framer-motion";
import {
  TestimonialSlider,
  Projects,
  AreaSection,
  Footer,
  Clients,
  Faq,
  Header,
  HeroSection,
} from "@/sections/index";
import Head from "next/head";
import Image from "next/image";
import { useScrollBackground } from "@/hooks/useScrollBackground";
import { BlogsCard } from "@/components";
import { useRouter } from "next/navigation";
import { ContactData } from "@/api/ContactAPI";

interface ProjectItem {
  id: number;
  projectName: string;
  description: string;
  lottie: object;
  projectBanner: string;
  image: string;
  pathName: string;
}

const Page = () => {
  const [show, setShow] = useState(false);
  const handleToogleForms = () => {
    setShow((pre) => !pre);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const container = useRef(null);
  const router = useRouter();
  const [headerBg, setHeaderBg] = useState<string>("#aee2ff");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  const heroSection = useRef<HTMLElement | null>(null);
  const otherSections = useRef<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useScrollBackground({
    mainRef: heroSection,
    otherRef: otherSections,
    sectionColors,
    setBackgroundColor: setHeaderBg,
  });

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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Economizing Futura | Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Economizing Futura builds custom software, helping startups and businesses transform ideas into reality."
        />
        <link rel="canonical" href="https://economizingfutura.com/" />
      </Head>
      <div className="mt-16 overflow-x-clip flex flex-col justify-between">
        <Toaster richColors />
        {show && (
          <ContactModal
            isLoading={isLoading}
            isModalOpen={show}
            handleToggle={handleToogleForms}
            onFormSubmit={handleFormSubmit}
          />
        )}
        <div className="xl:right-8 xl:bottom-8 lg:right-8 right-5 bottom-5 z-50 fixed">
          <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
        </div>

        <Header
          handleShowForms={handleToogleForms}
          background={headerBg}
          home={true}
        />

        <section
          ref={heroSection}
          className="flex w-full lg:flex-row flex-col py-5 md:py-0  justify-center xl:justify-end heroSectionBackground backdrop-blur-304 bg-opacity-50 items-center  lg:h-[650px] "
        >
          <HeroSection onClickButton={handleToogleForms} />
        </section>

        <section
          ref={otherSections}
          className="testmonial font-hellix w-full h-auto xl:h-[580px] lg:py-20 flex flex-col justify-evenly bg-[#E0F3FF] space-y-10"
        >
          <div className="relative lg:max-w-[523px] mx-auto">
            <h1 className="text-center font-hellixBold sm:text-[38px] text-[20px] sm:leading-[45px] text-[#031924]">
              Testimonials for Happy Clients
            </h1>
            <Image
              src={ClientUnderline}
              alt=""
              className="absolute md:right-0 sm:right-16 md:translate-x-3 w-[135px] sm:w-auto right-11 md:top-12"
            />
          </div>
          <div className="flex h-full lg:py-0 w-screen overflow-x-auto relative">
            <TestimonialSlider />
          </div>
        </section>

        <section className="bodyBackground relative md:py-10 ">
          <Image
            src={Boxes}
            alt=""
            className="absolute w-2/3 md:w-auto right-0 top-1"
          />
          <div className="content-center md:pt-[90px] font-hellix transition-opacity duration-500 static lg:sticky flex justify-center items-center top-0">
            <h1 className="font-hellixBold text-[32px] sm:text-[38px] leading-[40px] sm:leading-[45.61px] text-[#031924]  md:text-center pageTitle">
              Projects
            </h1>
          </div>

          <div ref={container} className="relative px-2 sm:px-0">
            {projectsInfo.map((a: ProjectItem, i: number) => {
              const targetScale = 1 - (projectsInfo.length - i) * 0.05;
              return (
                <Projects
                  key={a.id}
                  project={a}
                  i={i}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </section>

        <section className="h-min py-8 xl:h-[2033px] flex flex-col justify-center sm:mt-40 md:mt-0 items-center bg-[#032435] w-full font-hellix lg:gap-16 xl:gap-20">
          <div className="relative my-10">
            <h1 className="font-hellixBold text-[30px] md:text-[38px] leading-[45.61px] text-[#ffffff] text-center">
              Area of <span className="text-[#20B2FF]"> Expertise</span>
            </h1>
            <Image
              src={Area}
              alt=""
              className="absolute lg:-top-5 md:h-20 md:-right-9 md:-top-5 lg:-right-6 -top-2 -right-5 h-[60px] lg:h-auto"
            />
          </div>
          <AreaSection />
        </section>

        <section className="h-auto font-hellix lg:h-[818px] py-6 md:py-0 bg-[#F4F8FB] flex flex-col justify-center lg:justify-evenly items-center w-full">
          <h1 className="text-[32px] lg:text-[38px] leading-tight lg:leading-[45.16px] font-hellixBold text-center text-[#032435] mb-10">
            Client Handling
          </h1>
          <Clients />
        </section>
        <section className=" flex flex-col xl:max-w-screen justify-evenly items-center py-6 md:py-0 md:h-[741px]  bg-[#FFFFFF] font-hellix">
          <h1 className="text-[32px] md:text-[38px] py-4 md:py-0 md:leading-[45.61px] font-hellixBold text-[#032435] leading-tight text-center">
            Blog
          </h1>

          <div
            className={`flex font-hellix flex-row xl:w-[1139px] justify-start ${
              blogs.length > 3 ? "md:justify-between" : "md:justify-start"
            } overflow-x-auto  gap-4 md:gap-6 items-center w-full sm:w-4/5 md:px-0 px-5 h-auto`}
          >
            {blogs.slice(0, 3).map((a) => (
              <BlogsCard card={a} key={a.id} />
            ))}
          </div>

          <button
            onClick={() => router.push("/blogs")}
            className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] lg:w-[202px] lg:h-[56px] font-hellixBold text-[14px] md:text-[16px] lg:text-[18px] leading-snug bg-[#F1FAFF] text-primary cursor-pointer  mt-6 xl:me-52 ml-auto"
          >
            View All
          </button>
        </section>

        <section className="bg-[#F4F8FB] min-h-[500px] sm:min-h-[600px] xl:h-[699px] w-full font-hellix py-8 sm:py-12 xl:py-16">
          <div className="container mx-auto max-w-[1130px] h-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-14 xl:px-0">
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:max-w-[360px]">
              <h1 className="text-[#032435] font-hellixBold text-2xl sm:text-3xl lg:text-[38px] leading-tight md:leading-[45.61px] max-w-[360px]">
                Frequently asked questions
              </h1>
              <Image
                src={FAQ}
                alt=""
                className="w-full max-w-[300px] lg:max-w-[360px] object-contain"
              />
            </div>
            <div className="flex-1 lg:max-w-[608px] bg-[#F4F8FB] flex justify-center">
              <Faq />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Page;
