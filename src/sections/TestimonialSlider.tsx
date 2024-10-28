import React, { useEffect, useState } from "react";
// import GoldenQuation from "../assets/GoldenQuation.svg";
import { testimonials } from "../constants/constants"; // Updated to testimonials
// import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // const nextTestimonial = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };

  // const prevTestimonial = () => {
  //   setActiveIndex(
  //     (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  const getVisibleTestimonials = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next];
  };

  return (
    <div className="relative w-full  mx-auto h-[250px] overflow-hidden">
      <div className="flex justify-center gap-14 items-center h-full">
        {getVisibleTestimonials().map((index, i) => (
          <div
            key={index}
            className={`transition-all duration-300 shrink-0 ${
              i === 1
                ? "w-1/2 z-20 scale-100 opacity-100"
                : "w-1/2 scale-95 opacity-50"
            }`}
          >
            <div className="relative h-[250px] flex justify-center items-center px-2">
              {/* Background shape */}
              <div
                className={`absolute w-[610px] h-[166px] bg-[#A7DEFB] rounded-3xl -rotate-6 transform ${
                  i === 1 ? "-translate-y-2" : "-translate-y-1"
                }`}
              ></div>

              {/* Main card */}
              <div
                className={`relative w-full h-[162px] bg-white border border-[#E0E0E0] rounded-3xl -rotate-2 flex justify-between items-center z-10 shadow-md ${
                  i !== 1 ? "pointer-events-none" : ""
                }`}
              >
                <div className="flex items-center gap-5 pl-6">
                  <img
                    className="h-[60px] w-[60px] rounded-full"
                    src={testimonials[index].image}
                    alt={`${testimonials[index].name}'s profile`}
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-[#031924] text-base leading-5">
                      {testimonials[index].name}
                    </h1>
                    <p className="text-sm font-semibold leading-4 text-[#999999]">
                      {testimonials[index].position}
                    </p>
                  </div>
                </div>
                <div className="h-[114px] w-[1px] bg-[#032435] opacity-10 mx-4"></div>
                <div className="flex-1 pr-5">
                  <p className="text-base font-normal leading-6">
                    {testimonials[index].feedback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
