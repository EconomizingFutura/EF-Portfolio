import React, { useEffect, useRef, useState } from "react";
import { AreasConstants } from "../constants/constants";
import "../style.css";
const AreaSection: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [passedSections, setPassedSections] = useState<Set<string>>(new Set());

  const colorMap = {
    "1": "text-[#3FB950]",
    "2": "text-[#F778BA]",
    "3": "text-[#5FB6FF]",
    "4": "text-[#A465F1]",
  };

  const glowMap = {
    "1": "shadow-[0_0_40px_15px_rgba(63,185,80,0.45)]",
    "2": "shadow-[0_0_40px_15px_rgba(247,120,186,0.45)]",
    "3": "shadow-[0_0_40px_15px_rgba(95,182,255,0.45)]",
    "4": "shadow-[0_0_40px_15px_rgba(164,101,241,0.45)]",
  };

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!lineRef.current) return;

        const element = lineRef.current;
        const firstHeading = element.querySelector("[data-section-id='1']");
        const lastHeading = element.querySelector("[data-section-id='4']");

        if (!firstHeading || !lastHeading) return;

        const firstRect = firstHeading.getBoundingClientRect();
        const lastRect = lastHeading.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startPosition = firstRect.top;
        const maxProgressHeight = lastRect.bottom - firstRect.top;

        let progress =
          (windowHeight - startPosition) / (windowHeight + maxProgressHeight);
        progress = Math.min(Math.max(progress, 0), 1);

        const progressLine = element.querySelector(
          ".progress-line"
        ) as HTMLElement;
        if (progressLine) {
          progressLine.style.height = `${progress * 100}%`;

          // Change gradient color based on scroll progress
          if (progress < 0.33) {
            // Initial: green to pink
            progressLine.style.backgroundImage =
              "linear-gradient(to bottom, #3FB950, #F778BA)";
          } else if (progress < 0.66) {
            // Midway: pink to blue
            progressLine.style.backgroundImage =
              "linear-gradient(to bottom, #F778BA, #5a8be8)";
          } else {
            // Final: pink to violet
            progressLine.style.backgroundImage =
              "linear-gradient(to bottom, #F778BA, #A465F1)";
          }
        }

        const sections = element.querySelectorAll("[data-section-id]");
        const newPassedSections = new Set<string>();

        sections.forEach((section) => {
          const iconElement = section.querySelector(".z-50") as HTMLElement;
          if (iconElement) {
            const iconRect = iconElement.getBoundingClientRect();
            const progressLineHeight = progress * maxProgressHeight;
            const iconPosition = iconRect.top - firstRect.top;

            if (progressLineHeight >= iconPosition) {
              newPassedSections.add(
                section.getAttribute("data-section-id") || ""
              );
            }
          }
        });

        setPassedSections(newPassedSections);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative font-hellix" ref={lineRef}>
      <div
        className="absolute left-7 sm:left-10 lg:left-[calc(50%-520px)] w-1 transition-all duration-300"
        style={{
          top: "33px",
          height: "calc(100% - 103px)",
        }}
      >
        <div
          className="progress-line absolute top-0 left-0 w-full transition-height duration-100"
          style={{
            height: "0%",
            backgroundImage: "linear-gradient(to bottom, #3FB950, #F778BA)",
          }}
        />
      </div>

      {AreasConstants.map((a) => (
        <div
          className="w-full px-4 flex  gap-3 relative
                     sm:px-6 sm:gap-4
                    lg:max-h-[465px] lg:h-[465px] lg:px-8 lg:gap-5"
          key={a.id}
          data-section-id={a.id}
        >
          <div
            className={`z-50 flex justify-center  h-8  items-center md:justify-start md:items-start
                       ${
                         passedSections.has(a.id)
                           ? `relative overflow-hidden ${
                               glowMap[a.id as keyof typeof glowMap]
                             } transition-all duration-300 ease-in-out  bg-transparent backdrop-blur-md`
                           : ""
                       }`}
          >
            {passedSections.has(a.id) && (
              <div className="absolute inset-0 backdrop-blur-md bg-opacity-40" />
            )}
            <img
              src={a.icons}
              alt=""
              className="  relative z-10 transition-transform duration-300"
            />
          </div>

          <div
            className="flex flex-col gap-2 w-full
                         sm:gap-4
                         lg:max-h-[465px] lg:h-[285px] 
                         lg:flex-row lg:items-center lg:justify-between lg:max-w-7xl lg:mx-auto
                         xl:gap-12"
          >
            <div
              className="flex flex-col gap-7
                           sm:gap-6
                  
                           lg:h-[285px]
                           lg:w-1/2 lg:max-w-[527px]"
            >
              <h1
                className={`${colorMap[a.id as keyof typeof colorMap] || ""}
                           text-lg font-bold leading-snug
                           sm:text-xl
                           lg:text-[28px] lg:leading-[33.61px]`}
              >
                {a.heading}
              </h1>
              <p
                className="text-white text-base font-semibold leading-relaxed
                text-[14px]
                           sm:text-[16px]
                           lg:text-[22px] lg:leading-[28.8px]"
              >
                {a.info}
              </p>
              <div
                className="text-[#e5e9ea] space-y-5 ml-6 lg:ml-0
                             sm:space-y-6
                             lg:space-y-2 text-[14px] lg:text-[17px] lg:leading-[21.6px] font-normal"
              >
                <p className="list-item ">{a.li1}</p>
                <p className="list-item">{a.li2}</p>
              </div>
            </div>

            <div
              className="flex justify-center items-center py-4
                           lg:w-1/2"
            >
              <img
                src={a.logo}
                alt=""
                className="rounded-lg w-full max-w-[310px] h-[200px] object-cover
                           sm:max-w-[380px] sm:h-[240px]
                           lg:max-w-[440px] lg:h-[285px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AreaSection;
