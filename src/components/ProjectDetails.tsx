"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { EnqueryModal, ContactModal } from "@/modal/index";
import { projectsInfo } from "@/constants/constants";
import { ButtonArrow, PH, Boxes } from "@/assets/index";
import Lottie from "lottie-react";
import { Header, Footer } from "@/sections/index";
// import { contactAPI, ContactData } from "@/api/ContactAPI";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { ContactData } from "@/api/ContactAPI";
import { notFound } from "next/navigation";

const sectionColors = ["#e3f5ff", "#FFFFFF"];

const ProjectDetails = ({ slug }: { slug: string }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [rotate, setRotate] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleToggle = () => {
    setShowModal(!showModal);
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
      // toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);
  const router = useRouter();
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const filterSectionRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (a: string) => router.push(`/projects/${a}`);
  const handleRotate = () => setRotate(!rotate);
  const projectDetails = projectsInfo.find(
    (project) => project.pathName === slug
  );

  if (!projectDetails) {
    notFound(); // Return 404 for unknown slugs
  }

  const nextProject = useMemo(() => {
    const filteredProjects = projectsInfo.filter((a) => a.pathName !== slug);
    const randomIndex = Math.floor(Math.random() * filteredProjects.length);
    return filteredProjects[randomIndex];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, projectsInfo]);

  const Contents = ({
    detail,
    detailsContent,
  }: {
    detail: string;
    detailsContent: string;
  }) => {
    return (
      <div className=" flex justify-between font-hellix md:gap-7 gap-4 md:flex-row flex-col">
        <h1 className=" lg:w-[130px] sm:w-1/4 font-hellixBold inline-block text-[#20B2FF] text-[18px]  xl:text-[24px]">
          {detail + ":"}
        </h1>
        <p className=" list-item sm:w-2/3 lg:w-[947px] text-[#000000] font-hellixMedium text-[12px] sm:text-[16px]  lg:text-[20px] leading-5 md:leading-7 text-justify">
          {detailsContent}
        </p>{" "}
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainSectionTop =
        mainSectionRef.current?.getBoundingClientRect().top;
      const filterSectionTop =
        filterSectionRef.current?.getBoundingClientRect().top;

      if (mainSectionTop !== undefined && filterSectionTop !== undefined) {
        if (filterSectionTop < -90) {
          setBackgroundColor(sectionColors[1]);
        } else {
          setBackgroundColor(sectionColors[0]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          {projectDetails.projectName} | Projects | Economizing Futura
        </title>
        <meta name="description" content={projectDetails.description} />
        <link
          rel="canonical"
          href={`https://economizingfutura.com/projects/${projectDetails.pathName}`}
        />
      </Head>
      <div className=" font-hellix min-h-screen justify-center relative  w-full flex flex-col overflow-x-hidden">
        <div ref={mainSectionRef}>
          <Header handleShowForms={handleToggle} background={backgroundColor} />
        </div>
        <div className="xl:right-8 xl:bottom-8 lg:right-8 right-5 bottom-5 z-50 fixed">
          <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
        </div>
        {showModal && (
          <ContactModal
            isLoading={isLoading}
            isModalOpen={showModal}
            handleToggle={handleToggle}
            onFormSubmit={handleFormSubmit}
          />
        )}
        <div
          ref={filterSectionRef}
          className=" flex-1 py-24 lg:py-24 lg:px-12 xl:px-0 px-7 h-min justify-center items-center xl:mx-auto xl:w-[1107px]"
        >
          {/* glows */}
          <div
            style={{ backgroundImage: `url(${PH.src})` }}
            className=" h-32 md:h-60 w-full rounded-[40%] blur-lg bg-opacity-65  absolute top-0 left-0 opacity-80"
          ></div>

          <div
            style={{ backgroundImage: `url(${PH.src})` }}
            className=" md:h-[400px] md:w-[400px] h-[200px] w-32 rounded-full absolute blur-xl -translate-x-2/3 md:top-1/3 hidden md:block pointer-events-none left-0 rotate-90 opacity-80"
          ></div>
          <div
            style={{ backgroundImage: `url(${PH.src})` }}
            className=" h-[350px] w-[350px] rounded-full absolute blur-xl translate-x-2/3 pointer-events-none top-1/4 right-0 -rotate-90 opacity-80"
          ></div>
          <Toaster richColors />
          {/* project details */}
          <div className="">
            <div className=" border-l-8 border-l-[#20B2FF] ps-6 flex flex-col gap-6">
              <h1 className=" text-[#24536E] font-hellixBold leading-[40px] xl:leading-[52.81px] text-[24px] xl:text-[44px]">
                {projectDetails.projectName}
              </h1>
              <p className=" text-[#000000] font-hellixMedium text-[12px] sm:text-[16px] xl:text-[20px] leading-5 md:leading-7 text-justify">
                {projectDetails.briefNote}
              </p>
            </div>
            <div className="w-full lg:h-[640px]  py-10 relative">
              <Image
                src={projectDetails.projectBanner}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Contents
              detail={"Brief Note"}
              detailsContent={projectDetails.briefNote}
            />
            <Contents
              detail={" Problem Statement"}
              detailsContent={projectDetails.problemStatement}
            />
            <Contents
              detail={" Services"}
              detailsContent={projectDetails.services}
            />
          </div>
        </div>
        <div className=" md:h-[672px] relative flex justify-center items-center w-full px-5 bg-[#F4FAFF] lg:px-12 xl:px-0">
          <Image src={Boxes} alt="" className="absolute right-0 top-1 " />
          <div className="h-min bg-[#ffffff] z-10  lg:h-[512px] w-full max-w-[1136px] rounded-sm md:rounded-3xl flex justify-center items-center p-0 sm:p-6 md:p-8 lg:p-5">
            <div className="flex flex-col  md:flex-row py-5 justify-between items-center relative h-full w-full rounded-[25px] origin-top">
              <div className="w-full relative  md:w-[733px] lg:w-[433px] md:h-[348px] flex flex-col items-start gap-10 ">
                <Image
                  src={nextProject.image}
                  alt=""
                  className=" hidden md:block md:absolute md:top-0 md:right-4 xl:-top-[20%] xl:-right-16 h-[40px] sm:h-[50px] lg:h-auto w-[40px] sm:w-[50px] lg:w-[70px]"
                />
                <Lottie
                  animationData={nextProject.lottie}
                  loop={true}
                  className="h-11 w-11 "
                />
                <div className=" lg:h-[264px] w-full flex flex-col gap-4">
                  <h1 className="text-[20px] text-[#032435] font-hellixBold sm:text-[24px] md:text-[28px] -tracking-[0.002em] ">
                    {nextProject.projectName}
                  </h1>
                  <p className="text-[#999999] font-hellixMedium text-[14px] sm:text-[15px] md:text-[12px] lg:text-[17px] leading-6 tracking-[0.2%] ">
                    {nextProject.description}
                  </p>
                  <button
                    className="hover:underline flex gap-2 font-hellixMedium text-[14px] sm:text-[15px] md:text-[17px] cursor-pointer leading-6 tracking-[0.002em] text-[#20B2FF]"
                    onMouseEnter={handleRotate}
                    onMouseLeave={handleRotate}
                    onClick={() => handleClick(nextProject.pathName)}
                  >
                    Read More
                    <Image
                      src={ButtonArrow}
                      className={`transition-transform duration-75 ${
                        rotate ? "rotate-45" : "rotate-90"
                      }`}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className=" w-full flex flex-col-reverse gap-3 md:flex-col lg:flex-row lg:gap-0 lg:w-auto">
                <Image
                  src={nextProject.projectBanner}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails;
