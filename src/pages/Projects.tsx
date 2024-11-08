import React, { useEffect, useRef, useState } from "react";
import Footer from "../sections/Footer";
import EnqueryModal from "../modal/EnqueryModal";
import ContactModal from "../modal/ContactModal";
import { useNavigate, useParams } from "react-router";
import { projectsInfo } from "../constants/constants";
import ButtonArror from "../assets/ButtonArror.svg";
import projectHeader from "../assets/projectsHeader.svg";
import Boxes from "../assets/Boxes.svg";
import Lottie from "lottie-react";
import Header from "../sections/Header";

const sectionColors = ["#e3f5ff", "#FFFFFF"];

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);

  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const filterSectionRef = useRef<HTMLDivElement | null>(null);

  console.log(backgroundColor);

  useEffect(() => {
    const handleScroll = () => {
      const mainSectionTop =
        mainSectionRef.current?.getBoundingClientRect().top;
      const filterSectionTop =
        filterSectionRef.current?.getBoundingClientRect().top;

      if (mainSectionTop !== undefined && filterSectionTop !== undefined) {
        if (filterSectionTop < -90) {
          setBackgroundColor(sectionColors[1]);
        } else if (mainSectionTop < -120) {
          setBackgroundColor(sectionColors[0]);
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

  const handleClick = (a: number) => navigate(`/projects/${a}`);
  const handleRotate = () => setRotate(!rotate);
  const params = useParams();
  const projectDetails = projectsInfo.filter(
    (a) => a.id === Number(params.id)
  )[0];

  const nextProject = projectsInfo.filter((a) => a.id !== Number(params.id))[0];

  const Contents = ({
    detail,
    detailsContent,
  }: {
    detail: string;
    detailsContent: string;
  }) => {
    return (
      <div className=" flex justify-between font-hellix md:gap-7 gap-4 md:flex-row flex-col">
        <h1 className=" lg:w-[130px] sm:w-1/4 font-bold inline-block text-primary text-[18px]  xl:text-[24px]">
          {detail + ":"}
        </h1>
        <p className=" list-item sm:w-2/3 lg:w-[947px] text-[#000000] font-medium text-[12px] sm:text-[16px] xl:text-[20px] leading-5 md:leading-7">
          {detailsContent}
        </p>{" "}
      </div>
    );
  };

  return (
    <div className=" font-hellix min-h-screen justify-center relative  w-full flex flex-col overflow-x-hidden">
      <div ref={mainSectionRef}>
        <Header
          width={"xl:w-[1107px]"}
          handleShowForms={handleToggle}
          background={backgroundColor}
        />
      </div>
      <div className="  md:right-10 md:bottom-10  right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      {showModal && (
        <ContactModal isModalOpen={showModal} handleToggle={handleToggle} />
      )}
      <div
        ref={filterSectionRef}
        className=" flex-1 py-24 lg:py-24 xl:px-0 px-7 h-min justify-center items-center xl:mx-auto xl:w-[1107px]"
      >
        {/* glows */}
        <div
          style={{ backgroundImage: `url(${projectHeader})` }}
          className=" h-32 md:h-60 w-full rounded-[40%] blur-lg bg-opacity-65  absolute top-0 left-0 opacity-80"
        ></div>

        <div
          style={{ backgroundImage: `url(${projectHeader})` }}
          className=" md:h-[400px] md:w-[400px] h-[200px] w-32 rounded-full absolute blur-xl -translate-x-2/3 md:top-1/3 hidden md:block pointer-events-none left-0 rotate-90 opacity-80"
        ></div>
        <div
          style={{ backgroundImage: `url(${projectHeader})` }}
          className=" h-[350px] w-[350px] rounded-full absolute blur-xl translate-x-2/3 pointer-events-none top-1/4 right-0 -rotate-90 opacity-80"
        ></div>
        {/* project details */}
        <div className="">
          <div className=" border-l-8 border-l-primary ps-6">
            <h1 className=" text-[#24536E] font-bold leading-[40px] xl:leading-[52.81px] text-[24px] xl:text-[44px]">
              {projectDetails.projectName}
            </h1>
            <p className=" text-[#000000] font-medium text-[12px] sm:text-[16px] xl:text-[20px] leading-5 md:leading-7">
              {projectDetails.briefNote}
            </p>
          </div>
          <div className="w-full lg:h-[430px] py-10 relative">
            <img
              src={projectDetails.projectBanner}
              alt=""
              className="w-full h-full object-cover"
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
      <div className=" md:h-[672px] relative flex justify-center items-center w-full px-5 bg-[#F4FAFF] md:px-0">
        {" "}
        <img src={Boxes} alt="" className="absolute right-0 top-1 " />
        <div className="h-min  lg:h-[512px] w-full max-w-[1136px] rounded-sm md:rounded-3xl flex justify-center items-center p-0 sm:p-6 md:p-8 lg:p-5">
          <div className="flex flex-col  md:flex-row py-5 justify-between items-center relative h-full w-full rounded-[25px] origin-top">
            <div className="w-full relative  md:w-[733px] lg:w-[433px] md:h-[348px] flex flex-col items-start gap-10 ">
              <img
                src={projectDetails.image}
                alt=""
                className=" hidden md:block md:absolute md:top-0 md:right-4 xl:-top-[20%] xl:-right-16 h-[40px] sm:h-[50px] lg:h-auto w-[40px] sm:w-[50px] lg:w-[70px]"
              />
              <Lottie
                animationData={nextProject.lottie}
                loop={true}
                className="h-11 w-11 "
              />
              <div className=" lg:h-[264px] w-full flex flex-col gap-4">
                <h1 className="text-[20px] text-[#032435] font-bold sm:text-[24px] md:text-[28px] -tracking-[0.002em] ">
                  {nextProject.projectName}
                </h1>
                <p className="text-[#999999] font-medium text-[14px] sm:text-[15px] md:text-[12px] lg:text-[17px] leading-6 tracking-[0.2%] ">
                  {nextProject.description}
                </p>
                <button
                  className="hover:underline flex gap-2 font-medium text-[14px] sm:text-[15px] md:text-[17px] leading-6 tracking-[0.002em] text-[#20B2FF]"
                  onMouseEnter={handleRotate}
                  onMouseLeave={handleRotate}
                  onClick={() => handleClick(nextProject.id)}
                >
                  Read More
                  <img
                    src={ButtonArror}
                    className={`transition-transform duration-75 ${
                      rotate ? "rotate-45" : "rotate-90"
                    }`}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className=" w-full flex flex-col-reverse gap-3 md:flex-col lg:flex-row lg:gap-0 lg:w-auto">
              <img
                src={projectDetails.projectBanner}
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
