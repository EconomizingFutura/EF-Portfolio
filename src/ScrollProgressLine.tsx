import React, { useRef, useEffect, useMemo, useState } from "react";
import { AreasConstants } from "../src/constants/constants";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const AreaSection: React.FC = () => {
  const colorMap = {
    "1": "text-[#3FB950]",
    "2": "text-[#F778BA]",
    "3": "text-[#5FB6FF]",
    "4": "text-[#A465F1]",
  };

  const webdevelopmentRef = useRef<HTMLDivElement>(null);
  const mobiledevelopmentRef = useRef<HTMLDivElement>(null);
  const devopsdevelopmentRef = useRef<HTMLDivElement>(null);
  const uidevelopmentRef = useRef<HTMLDivElement>(null);

  const refsArray = useMemo(
    () => [
      { ref: webdevelopmentRef, name: "Web Development" },
      { ref: mobiledevelopmentRef, name: "Mobile Development" },
      { ref: devopsdevelopmentRef, name: "DevOps" },
      { ref: uidevelopmentRef, name: "UI Development" },
    ],
    []
  );

  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // State to store section offsets after DOM is loaded
  const [sectionOffsets, setSectionOffsets] = useState<number[]>([]);
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  useEffect(() => {
    // Calculate the offsets once the DOM is loaded
    const offsets = refsArray.map((refObj) => {
      const offsetTop = refObj.ref.current?.offsetTop || 0;
      return offsetTop / document.body.scrollHeight;
    });
    setSectionOffsets(offsets);
  }, [refsArray]);

  useMotionValueEvent(scrollYProgress, "change", (latestScrollYProgress) => {
    if (!sectionOffsets.length) return; // Ensure offsets are calculated first

    for (let i = 0; i < sectionOffsets.length; i++) {
      if (
        latestScrollYProgress >= sectionOffsets[i] &&
        (i === sectionOffsets.length - 1 ||
          latestScrollYProgress < sectionOffsets[i + 1])
      ) {
        if (currentSection !== i) {
          console.log(`Entering section: ${refsArray[i].name}`);
          setCurrentSection(i);
        }
        break;
      }
    }
  });

  return (
    <div className="relative bg-black w-full">
      <motion.div
        style={{
          position: "fixed",
          left: "50px",
          top: "0",
          width: "4px",
          height: lineHeight,
          backgroundColor: "blue",
          originY: 0,
        }}
      />

      {AreasConstants.map((a, index) => (
        <div
          className="w-full py-10 h-auto min-h-[400px] md:h-[460px] px-2 flex gap-5 md:justify-center md:items-start relative"
          key={a.id}
        >
          <div
            ref={refsArray[index].ref}
            className="z-50 w-7 lg:w-8 h-auto relative flex flex-col items-center"
          >
            <img
              src={a.icons}
              alt=""
              className="w-full h-7 md:h-8 relative z-10"
            />
          </div>
          <div className="flex flex-col md:w-[1080px] md:h-[285px] lg:items-center xl:items-start lg:justify-between md:flex-row md:justify-evenly">
            <div className="flex xl:justify-between md:w-1/2 xl:w-[527px] flex-col gap-4">
              <h1
                className={`${
                  colorMap[a.id as keyof typeof colorMap] || ""
                } font-bold text-[18px] lg:text-[28px] leading-[21.6px] lg:leading-[33.61px]`}
              >
                {a.heading}
              </h1>
              <p className="text-[16px] md:text-start lg:text-[24px] leading-[19.2px] lg:leading-[28.8px] font-semibold text-[#ffffff]">
                {a.info}
              </p>
              <div className="text-[#FFFFFF] lg:px-8 md:ms-3 ms-2 px-4 text-[14px] lg:text-[18px] leading-[16.8px] lg:leading-[21.6px] font-normal items-end flex flex-col gap-5 lg:gap-7">
                <p className="list-item">{a.li1}</p>
                <p className="list-item">{a.li2}</p>
              </div>
            </div>
            <div className="flex py-2 justify-center items-center">
              <img
                src={a.logo}
                alt=""
                className="rounded-lg w-[310px] lg:w-[440px] h-[200px] lg:h-[285px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AreaSection;
