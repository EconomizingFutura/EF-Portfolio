import React, { useEffect, useState, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import arrows from "../assets/arrows.svg";

interface ContentItem {
  heading: string;
  info: string;
}

interface Section {
  id: number;
  title: string;
  content: ContentItem[];
}

interface Header {
  id: number;
  section: string;
}

const SECTIONS: Section[] = [
  {
    id: 1,
    title: "How we start",
    content: [
      {
        heading: "Arrange a Meeting",
        info: "Let's explore how we can help you. Book a consultation to discuss your project needs and discover tailored solutions.",
      },
      {
        heading: "Partner with Us",
        info: "We'll work closely with you to understand your vision, target audience, and desired outcomes, ensuring our approach aligns with your goals.",
      },
      {
        heading: "Maximize Technology's Value",
        info: "Leverage your insights and our expertise to develop smart, scalable solutions that drive business success.",
      },
    ],
  },
  {
    id: 2,
    title: "How we work",
    content: [
      {
        heading: "Delivering Excellence Through Project-Based Outsourcing",
        info: "We are committed to delivering high-quality results by following a structured, project-based outsourcing model. This ensures efficiency, focus on your objectives, and precise execution from start to finish.",
      },
      {
        heading: "Focused and Flexible Approach",
        info: "Our project-based model combines flexibility with a focus on your project's goals. We handle every phase of development, adhering to timelines and budgets, while delivering solutions tailored to your needs.",
      },
      {
        heading: "End-to-End Project Management",
        info: "From planning to final delivery, our comprehensive project outsourcing services manage the entire lifecycle, ensuring a smooth, efficient process with regular updates and rigorous quality control for successful outcomes.",
      },
    ],
  },
];

const HEADERS: Header[] = [
  { id: 1, section: "How We Start" },
  { id: 2, section: "How We Work" },
];

const ANIMATION_INTERVAL = 20000;
const PROGRESS_BAR_DURATION = 5;

const arrowStyles = {
  backgroundImage: `url(${arrows})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
};

const ToggleSection = React.memo(
  ({
    toggle,
    setToggle,
  }: {
    toggle: number;
    setToggle: (index: number) => void;
  }) => (
    <div className="flex flex-col w-full px-3.5 max-w-sm lg:my-8 font-hellix">
      {HEADERS.map((header, index) => (
        <React.Fragment key={header.id}>
          <div
            onClick={() => setToggle(header.id - 1)}
            className="relative h-[72px] w-full rounded-lg cursor-pointer shadow-clientCustom shadow-md flex justify-between items-center bg-white"
          >
            {toggle === header.id - 1 && (
              <motion.div
                className="absolute -top-[0px] h-[8px] border-b-4 rounded-lg border-b-white bg-[#20B2FF]"
                animate={{ width: "75%" }}
                transition={{ duration: PROGRESS_BAR_DURATION }}
              />
            )}
            <p
              className={`font-semibold text-xl px-6 ${
                toggle === header.id - 1
                  ? "text-secondary"
                  : "text-[rgba(153,153,153,1)]"
              }`}
            >
              {header.section}
            </p>
            {toggle === header.id - 1 && (
              <ChevronRight className="text-[#666666] me-6" />
            )}
          </div>
          {index < HEADERS.length - 1 && (
            <div className="w-full border-[2px] bg-[rgba(222,229,241,1)] my-2.5" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
);

ToggleSection.displayName = "ToggleSection";

const Clients: React.FC = () => {
  const [toggle, setToggle] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggle((prevToggle) => (prevToggle === 0 ? 1 : 0));
    }, ANIMATION_INTERVAL);
    return () => clearInterval(intervalId);
  }, [toggle]);

  const handleToggle = useCallback((index: number) => {
    setToggle(index);
  }, []);

  const activeSection = SECTIONS[toggle];

  return (
    <div className="flex flex-col lg:flex-row xl:space-x-2 w-11/12 xl:w-[1137px] justify-center">
      <ToggleSection toggle={toggle} setToggle={handleToggle} />
      <div className="flex flex-col w-full lg:max-w-[701px]">
        {activeSection.content.map((section, index) => (
          <div key={index} className="my-2 p-5 lg:h-40">
            <div className="flex md:items-center flex-col md:flex-row gap-4 md:gap-4">
              <div
                className="h-12 w-[120px] rounded-2xl pe-5 text-white font-bold text-lg flex justify-center items-center"
                style={{ position: "relative" }}
              >
                <span style={arrowStyles} />
                <p className="z-20">Step {index + 1}</p>
              </div>
              <h2 className="font-bold lg:text-xl px-2 text-[17px]">
                {section.heading}
              </h2>
            </div>
            <p className="lg:text-[16px] text-[14px]  text-[#999999] font-medium px-2 mt-4">
              {section.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
