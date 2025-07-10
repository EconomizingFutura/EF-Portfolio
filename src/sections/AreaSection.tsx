"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // ✅ Use Next.js Image
import { AreasConstants } from "../constants/constants";

const AreaSection: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [passedSections, setPassedSections] = useState<Set<string>>(new Set());

  const colorMap = {
    "1": "text-[#3FB950]",
    "2": "text-[#F778BA]",
    "3": "text-[#5FB6FF]",
    "4": "text-[#A465F1]",
  };

  const bgColorMap = {
    "1": "bg-gradient-to-r from-[#503FB950] to-[#503FB950]",
    "2": "bg-gradient-to-r from-[#F778BA] to-[#F778BA]",
    "3": "bg-gradient-to-r from-[#505FB6FF] to-[#505FB6FF]",
    "4": "bg-gradient-to-r from-[#A465F1] to-[#A465F1]",
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

          if (progress < 0.33) {
            progressLine.style.backgroundImage =
              "linear-gradient(to bottom, #3FB950, #F778BA)";
          } else if (progress < 0.66) {
            progressLine.style.backgroundImage =
              "linear-gradient(to bottom, #F778BA, #5a8be8)";
          } else {
            progressLine.style.backgroundImage =
              "linear-gradient(to bottom, #F778BA, #A465F1)";
          }
        }

        const sections = element.querySelectorAll("[data-section-id]");
        const newPassedSections = new Set<string>();

        sections.forEach((section) => {
          const iconElement = section.querySelector(".z-30") as HTMLElement;
          if (iconElement) {
            const iconRect = iconElement.getBoundingClientRect();
            const iconPosition = iconRect.top - firstRect.top;
            const progressLineHeight = progress * maxProgressHeight;

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
        className="absolute left-7 sm:left-10 lg:left-[calc(50%-460px)] xl:left-[calc(50%-555px)] w-1 transition-all duration-300 top-0 h-[calc(100%-128px)] md:h-[calc(100%-90px)]"
        style={{ top: "15px" }}
      >
        <div
          className="progress-line absolute top-0 left-0 w-[2px] transition-height duration-100"
          style={{
            height: "0%",
            backgroundImage: "linear-gradient(to bottom, #3FB950, #F778BA)",
          }}
        />
      </div>

      {AreasConstants.map((a) => (
        <div
          key={a.id}
          data-section-id={a.id}
          className="w-full px-4 flex gap-3 relative sm:px-6 sm:gap-4 xl:max-h-[465px] xl:h-[405px] lg:max-h-[355px] lg:h-[355px] lg:px-0 lg:gap-10 xl:gap-y-0"
        >
          <div
            className={`z-30 flex justify-center h-8 items-center md:justify-start md:items-start
            ${
              passedSections.has(a.id)
                ? `relative overflow-hidden ${
                    glowMap[a.id as keyof typeof glowMap]
                  } transition-all duration-300 ${
                    bgColorMap[a.id as keyof typeof bgColorMap]
                  }`
                : "bg-transparent"
            }`}
          >
            {passedSections.has(a.id) && (
              <div className="absolute backdrop-blur-md bg-opacity-40" />
            )}
            <Image
              src={a.icons}
              alt={`${a.heading} icon`}
              width={32}
              height={32}
              className="relative z-20 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col gap-2 w-full sm:gap-4 md:max-h-[325px] md:h-[325px] lg:max-h-[465px] lg:h-[250px] xl:h-[285px] md:flex-row md:justify-start md:items-start lg:items-center lg:justify-between lg:max-w-7xl lg:mx-auto xl:gap-24">
            <div className="flex flex-col gap-7 sm:gap-4 md:w-2/3 md:h-min lg:h-[250px] xl:h-[285px] lg:w-1/2 lg:max-w-[527px]">
              <h1
                className={`${
                  colorMap[a.id as keyof typeof colorMap]
                } text-lg font-hellixBold leading-snug sm:text-xl lg:text-[24px] lg:leading-[30.6px] xl:text-[28px] xl:leading-[33.61px]`}
              >
                {a.heading}
              </h1>
              <p className="text-white text-base font-hellixSemiBold leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px] lg:leading-[24.6px] xl:text-[22px] xl:leading-[28.8px]">
                {a.info}
              </p>
              <div className="text-[#e5e9ea] space-y-2 ml-1 lg:ml-0 sm:space-y-6 lg:space-y-2 text-[14px] lg:text-[16px] lg:leading-[18.6px] xl:text-[17px] xl:leading-[21.6px] font-normal">
                <p className="list-item">{a.li1}</p>
                <p className="list-item">{a.li2}</p>
              </div>
            </div>

            <div className="flex justify-center items-center py-4 lg:w-1/2">
              <Image
                src={a.logo}
                alt={`${a.heading} logo`}
                width={440}
                height={285}
                className="rounded-lg w-full max-w-[310px] h-[200px] object-cover sm:max-w-[330px] sm:h-[220px] xl:max-w-[440px] xl:h-[285px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AreaSection;
