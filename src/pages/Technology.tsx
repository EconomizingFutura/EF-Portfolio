import React, { useState } from "react";
import Header from "../sections/Header";
import WaveRight from "../assets/WaveRight.svg";
import WaveLeft from "../assets/WaveLeft.svg";
import { Technologies } from "../constants/constants";
import AvailableIcon from "../assets/AvailableIcon.svg";
import Footer from "../sections/Footer";
import ContactModal from "../modal/ContactModal";

const Technology: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="overflow-x-hidden">
      <Header background="bg-[#c5eaff] " handleShowForms={handleToggle} />
      <div
        className="bg-sky-200 h-48   sm:h-60 md:h-72 lg:h-[248px] flex justify-between items-center"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(173, 216, 230, 0.2) 0%, rgba(173, 216, 230, 0) 50%, rgba(173, 216, 230, 0.2) 100%),
            linear-gradient(to right, rgba(135, 206, 235, 0.1) 15%, rgba(135, 206, 235, 0) 50%, rgba(135, 206, 235, 0.1) 100%),
            linear-gradient(to right, rgba(100, 149, 237, 0.05) 0%, rgba(100, 149, 237, 0) 50%, rgba(100, 149, 237, 0.05) 100%)
          `,
          backgroundSize: "100% 30px, 100% 20px, 100% 10px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 20%, 0 40%, 0 60%",
        }}
      >
        <img
          src={WaveLeft}
          alt=""
          className="w-12 md:w-auto"
          draggable={false}
        />
        <h1 className="text-[#24536E] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-center px-4">
          Technologies We Use
        </h1>
        <img
          src={WaveRight}
          alt=""
          className="w-12 md:w-auto lg:pe-12"
          draggable={false}
        />
      </div>
      <section className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto py-8 sm:py-10 px-4">
        {Technologies.map((tech) => (
          <div
            key={tech.id}
            className={`bg-[#F4FAFF] flex flex-col p-4 sm:p-6 md:p-8 items-center 
              ${
                tech.id >= 4
                  ? "h-min  lg:h-[540px]"
                  : "h-min  lg:h-[540px] justify-between"
              }  
              w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:w-[394px] rounded-xl sm:rounded-2xl border border-[#9CA4B580] relative`}
          >
            <div className="w-full h-36 flex justify-center items-center">
              <img
                src={tech.logo}
                alt=""
                className="max-w-full max-h-full"
                draggable={false}
              />
            </div>
            <div className="w-full mt-2 md:mt-4">
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                {tech.text}
              </p>
            </div>
            <img
              src={AvailableIcon}
              alt=""
              className="absolute -right-2 sm:-right-3 md:-right-3.5 w-8 sm:w-10 md:w-auto"
              draggable={false}
            />
          </div>
        ))}
      </section>
      <Footer />
      {show && <ContactModal isModalOpen={show} handleToggle={handleToggle} />}
    </div>
  );
};

export default Technology;
