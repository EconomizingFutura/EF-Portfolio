"use client";
import React, { useEffect, useState } from "react";
import GoldenQuation from "../assets/GoldenQuation.svg";
import { testimonials } from "../constants/constants";
import { Next, Previous } from "../assets/index";
import Image from "next/image";

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next];
  };

  return (
    <div className=" mx-auto sm:w-full w-11/12 lg:h-[340px] xl:h-[600px] flex flex-col  overflow-x-hidden max-w-[1640px] gap-10">
      <div className="flex lg:flex-row flex-col pointer-events-none justify-center gap-10 sm:gap-16 items-center h-full xl:py-0 py-8 lg:h-[225px]">
        {getVisibleTestimonials().map((index, i) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ease-in-out xl:h-[218.61px] shrink-0 ${
              i === 1
                ? "w-[335.47px] sm:w-[651.26px] z-20 opacity-100 scale-100 translate-y-0"
                : "w-[335.47px] sm:w-[651.26px] opacity-40 scale-95 translate-y-4"
            }`}
          >
            <div className="h-full flex relative justify-center items-center sm:px-2">
              {/* Background Shape */}
              <div
                className="absolute w-[314.67px] sm:w-[610px] h-[85.51px] sm:h-[166px] 
                bg-[#A7DEFB] rounded-[10px] sm:rounded-3xl -rotate-[5deg] sm:-rotate-6
                transition-all duration-500 ease-in-out transform"
              ></div>

              {/* Main Card */}
              <div
                className={`relative rounded-[10px] w-[332.76px] sm:w-[646px] h-[83.45px] 
                sm:h-[162px] bg-white border border-[#E0E0E0] sm:rounded-3xl -rotate-2 
                flex justify-between items-center z-10 
                transition-all duration-500 ease-in-out transform
                hover:shadow-lg ${
                  i !== 1 ? "pointer-events-none" : "hover:-translate-y-1"
                }`}
              >
                <Image
                  src={GoldenQuation}
                  alt=""
                  className="absolute z-50 left-5 -top-2 sm:-top-4 sm:left-12 sm:h-auto sm:w-auto w-[22.67px] h-[18.54px]
                  transition-transform duration-300 group-hover:scale-110"
                />

                {/* User Info */}
                <div className="flex items-center gap-3 md:gap-5 justify-start px-4 sm:px-10 h-3/4 w-5/12">
                  <Image
                    src={testimonials[index].image}
                    alt={`${testimonials[index].name}'s profile`}
                    width={60}
                    height={60}
                    className="h-[30.91px] sm:h-[60px] w-[30.91px] sm:w-[60px] rounded-full transition-transform duration-300 hover:scale-105"
                  />
                  <div className="flex flex-col">
                    <h1
                      className="font-hellixSemiBold text-[#031924] text-[12px] sm:text-base leading-5
                    transition-colors duration-300"
                    >
                      {testimonials[index].name}
                    </h1>
                    <p
                      className="text-[8px] sm:text-sm font-hellixSemiBold leading-4 text-[#999999]
                    transition-colors duration-300"
                    >
                      {testimonials[index].position}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="sm:h-[114px] h-[58.72px] w-[1px] bg-[#032435]/10
                transition-opacity duration-300"
                ></div>

                {/* Feedback */}
                <div className="w-7/12 sm:w-[311.15px] flex justify-center items-center mx-auto px-2 sm:px-4 h-[114px]">
                  <p
                    className="text-[9px] sm:text-[16px] text-[#000000] font-normal leading-[10px] sm:leading-5
                  transition-opacity duration-300"
                  >
                    {testimonials[index].feedback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className=" w-11/12   mx-auto ">
        <div className="w-24 justify-between lg:flex ml-auto hidden">
          <Image
            src={Previous}
            alt=""
            className="h-10 w-10 rounded-full border border-[#03243533]
          flex justify-center items-center  cursor-pointer"
            onClick={prevTestimonial}
          />
          <Image
            src={Next}
            alt=""
            className="h-10 w-10 rounded-full border border-[#03243533]
          flex justify-center items-center outline-none cursor-pointer"
            onClick={nextTestimonial}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
