import React, { useEffect, useRef, useState } from "react";
import Hero1 from "../assets/Hero1.svg";
import HeroMini from "../assets/HeroMini.svg";
import ButtonWrapper from "../components/ButtonWrapper";
import CurlArrows from "../assets/CurlArrows.svg";
import YelloSquare from "../assets/YellowSquare.svg";
import ClientUnderline from "../assets/ClientUnderline.svg";
import TestimonialSlider from "../sections/TestimonialSlider";
import ContactModal from "../modal/ContactModal";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import Boxes from "../assets/Boxes.svg";
import Area from "../assets/Area.svg";
import AreaSection from "../sections/AreaSection";
import Clients from "../sections/Clients";
import FAQ from "../assets/FAQ.svg";
import Faq from "../sections/Faq";
import BlogsCard from "../components/BlogsCard";
import { useNavigate } from "react-router";
import { blogs, projectsInfo } from "../constants/constants";
import EnqueryModal from "../modal/EnqueryModal";
import Header from "../sections/Header";
import { Toaster, toast } from "sonner";
import { sectionColors } from "../constants/constants";
import { contactAPI, ContactData } from "../api/ContactAPI";

interface ProjectItem {
  id: number;
  projectName: string;
  description: string;
  lottie: object;
  projectBanner: string;
  image: string;
}

const Home: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleToogleForms = () => {
    setShow((pre) => !pre);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const blog = blogs.slice(0, 3);
  const container = useRef(null);

  const [headerBg, setHeaderBg] = useState<string>(sectionColors.hero);

  useEffect(() => {
    setHeaderBg(sectionColors.hero);
  }, []);

  const heroSection = useRef<HTMLElement | null>(null);
  const testimonialsSection = useRef<HTMLElement | null>(null);
  const projectsSection = useRef<HTMLElement | null>(null);
  const expertiseSection = useRef<HTMLElement | null>(null);
  const clientsSection = useRef<HTMLElement | null>(null);
  const blogsSection = useRef<HTMLElement | null>(null);
  const faqSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target) {
              case heroSection.current:
                setHeaderBg(sectionColors.hero);
                break;
              case testimonialsSection.current:
                setHeaderBg(sectionColors.testimonials);
                break;
              case projectsSection.current:
                setHeaderBg(sectionColors.projects);
                break;
              case expertiseSection.current:
                setHeaderBg(sectionColors.expertise);
                break;
              case clientsSection.current:
                setHeaderBg(sectionColors.clients);
                break;
              case blogsSection.current:
                setHeaderBg(sectionColors.blogs);
                break;
              case faqSection.current:
                setHeaderBg(sectionColors.faq);
                break;
              default:
                break;
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = [
      heroSection,
      testimonialsSection,
      projectsSection,
      expertiseSection,
      clientsSection,
      blogsSection,
      faqSection,
    ];
    sections.forEach((section) => {
      if (section.current) observer.observe(section.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) observer.unobserve(section.current);
      });
    };
  }, []);

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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();
  return (
    <div className=" mt-16 overflow-x-clip flex flex-col justify-between ">
      <Toaster richColors />
      {show && (
        <ContactModal
          isLoading={isLoading}
          isModalOpen={show}
          handleToggle={handleToogleForms}
          onFormSubmit={handleFormSubmit}
        />
      )}
      <div className="  md:right-10 md:bottom-5 right-5 bottom-5 z-40 fixed">
        <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
      </div>
      <Header
        width={"xl:w-[1167px]"}
        handleShowForms={handleToogleForms}
        background={headerBg}
        home={true}
      />
      {/* ceedff #DAF1FF */}
      <section
        ref={heroSection}
        className="flex  lg:flex-row flex-col bg-[#aee2ff]   justify-center xl:justify-end  backdrop-blur-304 bg-opacity-50 items-center py-8 lg:py-12 "
        style={{
          background: "linear-gradient(180deg, #AEE2FF 0%, #E0F3FF 100%)",
        }}
      >
        <div className="w-full font-hellix px-5  xl:px-0 lg:w-[505px] flex flex-col h-auto lg:h-[380px] gap-8 xl:gap-10 justify-between">
          <h1 className="text-[#24536E] lg:leading-[48.61px] xl:leading-[52.81px] font-bold text-3xl xl:text-[44px] leading-[38.5px] text-start lg:text-left ">
            Creative Solutions for a Brighter Future
          </h1>
          <p className="text-base lg:text-[20px] text-[16px] leading-6 lg:leading-7 text-[#000000] ">
            Embrace a brighter future with our technology-driven solutions that
            enhance your business capabilities. We empower your success through
            innovation, helping you unlock new opportunities and stay ahead in a
            competitive landscape.
          </p>
          <ButtonWrapper
            onClick={handleToogleForms}
            label={"Contact Us"}
            className="bg-[#20B2FF] p-3 lg:p-[10px] text-white rounded-lg font-semibold text-sm lg:text-base h-[46px] w-[120px] lg:w-[139px]  "
          />
        </div>
        <div className="relative ">
          <img
            src={CurlArrows}
            alt="arrows"
            className="absolute h-[24px] w-[28px] top-5 right-1/2 sm:h-auto sm:w-auto sm:right-20 lg:right-80  sm:top-10 lg:top-24"
          />
          <img
            src={HeroMini}
            alt="hero"
            className="relative w-full sm:w-full md:hidden sm:h-auto "
          />
          <img
            src={Hero1}
            alt="hero"
            className="relative hidden md:block w-full  sm:h-auto "
          />
          <img
            src={YelloSquare}
            alt="yellow square"
            className="absolute hidden md:block bottom-4 lg:bottom-8 right-16 lg:right-80 z-10"
          />
        </div>
      </section>
      {/* Testimonials */}
      <section
        ref={testimonialsSection}
        className="testmonial font-hellix w-full h-auto xl:h-[520px] flex flex-col justify-around bg-[#E0F3FF]"
      >
        <div className=" relative">
          <h1 className=" text-center font-bold sm:text-[38px] text-[20px] sm:leading-[45px] text-[#031924]">
            Testimonials for Happy Clients
          </h1>
          <img
            src={ClientUnderline}
            alt=""
            className="absolute md:right-1/3 sm:right-16 md:translate-x-3 w-[135px] sm:w-auto right-11 md:top-12"
          />
        </div>
        <div className=" flex gap-10 my-10 h-auto w-screen overflow-x-auto ">
          <TestimonialSlider />
        </div>
      </section>
      {/* projects */}
      <section
        ref={projectsSection}
        className=" font-hellix min-h-svh py-10 w-11/12 mx-auto  bg-[#FFFFFF] relative flex flex-col justify-evenly items-center  md:mb-0"
      >
        <h1 className="font-bold text-[32px] sm:text-[38px] leading-[40px] sm:leading-[45.61px] text-[#031924] text-center ">
          Projects
        </h1>
        <img
          src={Boxes}
          alt=""
          className="absolute right-0 top-1 w-[80px] sm:w-auto"
        />
        <div ref={container} className=" relative">
          {projectsInfo.map((a: ProjectItem, i: number) => {
            const targetScale = 1 - (projectsInfo.length - i) * 0.05;
            return (
              <Projects
                key={a.id}
                project={a}
                i={i}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
      {/* Area of expertise */}
      <section
        ref={expertiseSection}
        className="h-min py-8 lg:h-[2233px] flex flex-col justify-center  sm:mt-40 md:mt-0 items-center bg-[#032435] w-full font-hellix  lg:gap-20"
      >
        <div className="relative my-10">
          <h1 className="font-bold text-[30px] md:text-[38px] leading-[45.61px] text-[#ffffff] text-center">
            Area of <span className="text-[#20B2FF]">Expertise</span>
          </h1>
          <img
            src={Area}
            alt=""
            className="absolute lg:-top-5 md:h-20 md:-right-7 md:-top-5 lg:-right-5 -top-2 -right-3  h-[60px] lg:h-auto"
          />
        </div>
        <AreaSection />
      </section>
      {/* section Client handling */}
      <section
        ref={clientsSection}
        className="h-auto font-hellix lg:h-[818px] py-6 md:py-0 bg-[#F4F8FB] flex flex-col justify-center lg:justify-evenly items-center w-full "
      >
        <h1 className="text-[32px] lg:text-[38px] leading-tight lg:leading-[45.16px] font-bold text-center text-[#032435] mb-10">
          Client Handling
        </h1>
        <Clients />
      </section>
      {/* Blogs */}
      <section
        ref={blogsSection}
        className=" flex flex-col xl:max-w-screen justify-evenly items-center py-6 md:py-0 md:h-[741px]  bg-[#FFFFFF] font-hellix"
      >
        <h1 className="text-[32px] md:text-[38px] py-4 md:py-0 md:leading-[45.61px] font-bold text-[#032435] leading-tight text-center">
          Blog
        </h1>

        {/* Blog Card Container */}
        <div className="flex font-hellix flex-row xl:w-[1139px] justify-start md:justify-between overflow-x-auto  gap-4 md:gap-6 items-center w-full sm:w-4/5 md:px-0 px-5 h-auto">
          {blog.map((a) => (
            <BlogsCard card={a} key={a.id} />
          ))}
        </div>

        {/* View All Button */}
        <button
          onClick={() => navigate("/blogs")}
          className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] lg:w-[202px] lg:h-[56px] font-bold text-[14px] md:text-[16px] lg:text-[18px] leading-snug bg-[#F1FAFF] text-primary  mt-6 xl:me-52 ml-auto"
        >
          View All
        </button>
      </section>
      {/* F4F8FB */}
      {/* FAQ */}
      <section
        ref={faqSection}
        className="bg-[#F4F8FB] h-auto  w-full font-hellix py-6 md:py-0"
      >
        <div className="xl:w-[1120px] mx-auto h-auto flex flex-col lg:flex-row justify-between px-2  md:px-10 lg:px-5 lg:h-[799px] items-center">
          <div className="text-center md:text-left">
            <h1 className="text-[#032435] font-bold text-3xl lg:text-[38px] md:leading-[45.61px] w-full lg:w-[360px] mx-auto md:mx-0">
              Frequently asked questions
            </h1>
            <img
              src={FAQ}
              alt="FAQ illustration"
              className="mt-4 md:mt-0 mx-auto md:mx-0"
            />
          </div>
          <div className="w-full lg:w-[608px] bg-[#F4F8FB] lg:h-[639px]  flex justify-center items-center  ">
            <Faq />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
