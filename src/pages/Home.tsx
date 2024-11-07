import React, { useRef, useState } from "react";
import Hero1 from "../assets/Hero1.svg";
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
import { useScroll } from "framer-motion";
import {Header} from "../components/Header";

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
  console.log(show);
  const blogsSection = blogs.slice(0, 3);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const navigate = useNavigate();
  return (
    <div className=" overflow-x-clip flex flex-col justify-between ">
      {show && (
        <ContactModal isModalOpen={show} handleToggle={handleToogleForms} />
      )}
      <div className="  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
       <Header show_props = {handleToogleForms} />
      {/* ceedff */}
      <section className="flex  bg-[#ceedff] backdrop-blur-304 bg-opacity-50 justify-end items-center px-4 lg:pe-0 py-8 lg:py-12">
        <div className="w-full lg:w-[520px] flex flex-col h-auto lg:h-[378px] gap-6 lg:gap-9 justify-between">
          <h1 className="text-[#24536E] leading-[52.81px] font-bold text-3xl lg:text-[44px] text-center lg:text-left">
            Creative Solutions for a Brighter Future
          </h1>
          <p className="text-base lg:text-[20px] leading-6 lg:leading-7 text-[#000000] text-center lg:text-left">
            Embrace a brighter future with our technology-driven solutions that
            enhance your business capabilities. We empower your success through
            innovation, helping you unlock new opportunities and stay ahead in a
            competitive landscape.
          </p>
          <ButtonWrapper
            onClick={handleToogleForms}
            label={"Contact Us"}
            className="bg-[#20B2FF] p-3 lg:p-[10px] text-white rounded-lg font-semibold text-sm lg:text-base h-[46px] w-[120px] lg:w-[139px] mx-auto lg:mx-0"
          />
        </div>
        <div className="relative hidden lg:block">
          <img
            src={CurlArrows}
            alt="arrows"
            className="absolute right-20 lg:right-80 top-10 lg:top-24"
          />
          <img src={Hero1} alt="hero" className="relative" />
          <img
            src={YelloSquare}
            alt="yellow square"
            className="absolute bottom-4 lg:bottom-8 right-16 lg:right-80 z-10"
          />
        </div>
      </section>

      <section className=" testmonial w-full h-[520px] flex flex-col justify-around bg-[#E0F3FF]">
        <div className=" relative">
          <h1 className=" text-center font-bold text-[38px] leading-[45px] text-[#031924]">
            Testimonials for Happy Clients
          </h1>
          <img
            src={ClientUnderline}
            alt=""
            className="absolute right-1/3 translate-x-3 top-12"
          />
        </div>
        <div className=" flex gap-10 w-screen overflow-x-auto ">
          <TestimonialSlider />
        </div>
      </section>
      {/* projects */}
      <section className="h-auto py-10 w-11/12 mx-auto bg-[#FFFFFF] relative flex flex-col justify-evenly items-center ">
        <h1 className="font-bold text-[32px] sm:text-[38px] leading-[40px] sm:leading-[45.61px] text-[#031924] text-center ">
          Projects
        </h1>
        <img
          src={Boxes}
          alt=""
          className="absolute right-0 top-1 w-[80px] sm:w-auto"
        />
        <div ref={container} className=" mt-20 relative">
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
      {/* Area of expertise */}
      <section className="h-min py-8 lg:py-0 lg:h-[2033px] flex flex-col justify-center items-center bg-[#032435] w-full  gap-10 lg:gap-0">
        <div className="relative">
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
      <section className="h-auto lg:h-[818px] bg-[#F4F8FB] flex flex-col justify-center items-center w-full py-10">
        <h1 className="text-[32px] lg:text-[38px] leading-tight lg:leading-[45.16px] font-bold text-center text-[#032435] mb-10">
          Client Handling
        </h1>
        <Clients />
      </section>
      {/* Blogs */}
      <section className="min-h-screen xl:overflow-x-hidden flex flex-col justify-evenly items-center p-4 md:p-6  md:h-[741px] bg-white">
        <h1 className="text-[32px] md:text-[38px] font-bold text-[#032435] leading-tight text-center">
          Blog
        </h1>

        {/* Blog Card Container */}
        <div className="flex flex-row xl:w-[1139px] justify-start md:justify-between overflow-x-auto  gap-4 md:gap-6 items-center w-full sm:w-4/5 md:w-11/12 h-auto">
          {blogsSection.map((a) => (
            <BlogsCard card={a} key={a.id} />
          ))}
        </div>

        {/* View All Button */}
        <button
          onClick={() => navigate("/blogs")}
          className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] lg:w-[202px] lg:h-[56px] font-bold text-[14px] md:text-[16px] lg:text-[18px] leading-snug bg-[#F1FAFF] text-primary hover:underline mt-6 xl:me-28 ml-auto"
        >
          View All
        </button>
      </section>
      {/* F4F8FB */}
      {/* FAQ */}
      <section className="bg-[#F4F8FB]  w-11/12 lg:w-[1120px] mx-auto h-auto flex flex-col md:flex-row justify-center py-10 md:px-5 lg:px-0 md:h-[799px]">
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
        <div className="w-full lg:w-[608px] flex justify-center items-start mt-10 md:mt-0">
          <Faq />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
