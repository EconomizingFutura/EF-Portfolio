import React, { useState } from "react";
import Header from "../sections/Header";
import Hero1 from "../assets/Hero1.svg";
import ButtonWrapper from "../components/ButtonWrapper";
import CurlArrows from "../assets/CurlArrows.svg";
import YelloSquare from "../assets/YellowSquare.svg";
import ClientUnderline from "../assets/ClientUnderline.svg";
import TestimonialSlider from "../sections/TestimonialSlider";
import ContactModal from "../modal/ContactModal";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import Area from "../assets/Area.svg";
import AreaSection from "../sections/AreaSection";
import Clients from "../sections/Clients";
import FAQ from "../assets/FAQ.svg";
import Faq from "../sections/Faq";

const Home: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleToogleForms = () => {
    setShow(!show);
  };

  return (
    <div className=" overflow-x-clip flex flex-col justify-between">
      <Header background={""} handleShowForms={handleToogleForms} />
      {show && (
        <ContactModal isModalOpen={show} handleToggle={handleToogleForms} />
      )}
      <section className=" flex justify-between items-center">
        <div className=" w-[485px] flex flex-col h-[378px] mx-auto gap-9 justify-between">
          <h1 className=" text-[#24536E] font-bold text-[44px]">
            Creative Solutions for a Brighter Future
          </h1>
          <p className=" text-[20px] leading-7 text-[#000000]">
            Embrace a brighter future with our technology-driven solutions that
            enhance your business capabilities. We empower your success through
            innovation, helping you unlock new opportunities and stay ahead in a
            competitive landscape.
          </p>
          <ButtonWrapper
            onClick={handleToogleForms}
            label={"Contact Us"}
            className={
              "bg-[#20B2FF] p-[10px] text-[#FFFFFF] rounded-lg font-semibold text-base h-[46px] w-[139px]"
            }
          />
        </div>
        <div className="relative">
          <img src={CurlArrows} alt="" className=" absolute right-80 top-24" />
          <img src={Hero1} alt="" className="" />
          <div>
            <img
              src={YelloSquare}
              alt=""
              className=" absolute bottom-8 z-100 right-80"
            />
          </div>
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
      <Projects />
      {/* Area of expertise */}
      <section className="h-min py-8 lg:py-0 lg:h-[2033px] flex flex-col justify-center items-center bg-[#032435] w-full gap-10 lg:gap-0">
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
      {/* FAQ */}
      <section className="bg-[#F4F8FB] w-full h-auto flex flex-col md:flex-row justify-center py-10 md:px-5 lg:px-0 md:h-[799px]">
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
