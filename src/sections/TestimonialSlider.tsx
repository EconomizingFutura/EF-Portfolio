import React, { useEffect, useState } from "react";
import GoldenQuation from "../assets/GoldenQuation.svg";
import { testimonials } from "../constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="relative  mx-auto sm:w-full w-11/12  xl:h-[300px]  min-h-min  xl:flex-row flex-col justify-between   overflow-hidden">
      <div className="flex xl:flex-row flex-col  justify-center gap-10 sm:gap-16 items-center h-full xl:py-0 py-16 xl:h-[225px]">
        {getVisibleTestimonials().map((index, i) => (
          <div
            key={index}
            className={`transition-all xl:h-[218.61px] duration-300 shrink-0 ${
              i === 1
                ? "w-[335.47px] sm:w-[651.26px]  z-20  opacity-100"
                : "w-[335.47px] sm:w-[651.26px]   opacity-50"
            }`}
          >
            <div className="h-full flex relative justify-center items-center  sm:px-2">
              {/* Background Shape */}
              <div className="absolute w-[314.67px] sm:w-[610px] h-[85.51px] sm:h-[166px] bg-[#A7DEFB] rounded-[10px] sm:rounded-3xl -rotate-[5deg] sm:-rotate-6"></div>

              {/* Main Card */}
              <div
                className={` relative rounded-[10px] w-[332.76px] sm:w-[646px] h-[83.45px] sm:h-[162px] bg-white border border-[#E0E0E0] sm:rounded-3xl -rotate-2 flex justify-between items-center z-10 shadow-md ${
                  i !== 1 ? "pointer-events-none" : ""
                }`}
              >
                <img
                  src={GoldenQuation}
                  alt=""
                  className="absolute z-50 left-5 -top-2    sm:-top-4 sm:left-12 sm:h-auto sm:w-auto w-[22.67px] h-[18.54px]"
                />
                {/* User Info */}
                <div className="flex items-center gap-3 md:gap-5 justify-start px-4 sm:px-10 h-3/4 w-5/12">
                  <img
                    className="h-[30.91px] sm:h-[60px] w-[30.91px] sm:w-[60px] rounded-full"
                    src={testimonials[index].image}
                    alt={`${testimonials[index].name}'s profile`}
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-[#031924] text-[12px] sm:text-base leading-5">
                      {testimonials[index].name}
                    </h1>
                    <p className="text-[8px] sm:text-sm font-semibold leading-4 text-[#999999]">
                      {testimonials[index].position}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="sm:h-[114px]  h-[58.72px] w-[1px] bg-[#032435] opacity-10"></div>

                {/* Feedback */}
                <div className="w-7/12 sm:w-[311.15px] flex justify-center items-center mx-auto px-2 sm:px-4 h-[114px]">
                  <p className="text-[9px] sm:text-[16px]  text-[#000000] font-normal leading-[10px] sm:leading-5">
                    {testimonials[index].feedback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-24  justify-between flex mt-20 right-0 xl:right-24 sm:right-5 bottom-0 absolute">
        <div className=" h-10 w-10 bg-[#FFFFFF] bg-opacity-[30%] flex justify-center items-center rounded-full border-[1px] border-[#03243533] border-opacity-20">
          <ChevronLeft className=" cursor-pointer" onClick={prevTestimonial} />
        </div>
        <div className=" h-10 w-10 bg-[#FFFFFF] bg-opacity-[30%] flex justify-center items-center rounded-full border-[1px] border-[#03243533] border-opacity-20">
          <ChevronRight className=" cursor-pointer" onClick={nextTestimonial} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
