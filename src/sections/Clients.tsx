import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "../style.css";
import { MySvgComponent, Arrows } from "../components/index";
import { useInView } from "react-intersection-observer";

interface ContentItem {
  heading: string;
  info: string;
  id: number;
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
        id: 1,
        heading: "Arrange a Meeting",
        info: "Let's explore how we can help you. Book a consultation to discuss your project needs and discover tailored solutions.",
      },
      {
        id: 2,
        heading: "Partner with Us",
        info: "We'll work closely with you to understand your vision, target audience, and desired outcomes, ensuring our approach aligns with your goals.",
      },
      {
        id: 3,
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
        id: 1,
        heading: "Project-Based Outsourcing",
        info: "We are committed to delivering high-quality results by following a structured, project-based outsourcing model. This ensures efficiency, focus on your objectives, and precise execution from start to finish.",
      },
      {
        id: 2,
        heading: "Focused and Flexible Approach",
        info: "Our project-based model combines flexibility with a focus on your project's goals. We handle every phase of development, adhering to timelines and budgets, while delivering solutions tailored to your needs.",
      },
      {
        id: 3,
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

const ANIMATION_INTERVAL = 15000;
const PROGRESS_BAR_DURATION = 5;

const ToggleSection = React.memo(
  ({
    toggle,
    setToggle,
    inView,
  }: {
    toggle: number;
    setToggle: (index: number) => void;
    inView: boolean;
  }) => (
    <div className="flex flex-col w-full px-3.5 max-w-sm lg:my-8 font-hellix">
      {HEADERS.map((header, index) => (
        <React.Fragment key={header.id}>
          <div
            onClick={() => setToggle(header.id - 1)}
            className="relative h-16 md:h-[72px] w-full rounded-lg cursor-pointer shadow-clientCustom shadow-md flex justify-between items-center bg-white"
          >
            {toggle === header.id - 1 && inView && (
              <motion.div
                className="absolute -top-[0px] h-[8px] border-b-4 rounded-lg border-b-white bg-[#20B2FF]"
                animate={{ width: "75%" }}
                transition={{ duration: PROGRESS_BAR_DURATION, ease: "linear" }}
              />
            )}
            <p
              className={`font-hellixSemiBold text-xl px-6 ${
                toggle === header.id - 1
                  ? "text-[#031924]"
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
  const [resetCounter, setResetCounter] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const intervalRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (inView) {
      intervalRef.current = setInterval(() => {
        setToggle((prev) => (prev === 0 ? 1 : 0));
      }, ANIMATION_INTERVAL);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, resetCounter]);

  const handleToggle = useCallback((index: number) => {
    setToggle(index);
  }, []);

  const activeSection = SECTIONS[toggle];
  const handleMouseEnter = () => {
    setToggle(0);
    setResetCounter((prev) => prev + 1);
  };
  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="flex flex-col lg:flex-row  xl:space-x-2 w-11/12 xl:w-[1137px] justify-center"
    >
      <ToggleSection toggle={toggle} setToggle={handleToggle} inView={inView} />
      <div className="flex flex-col w-full md:max-w-[701px]">
        {activeSection.content.map((section, index) => (
          <div
            key={index}
            className="my-4 relative min-h-[160px] rounded-lg  p-4"
          >
            <div className="w-full absolute top-6 left-0 z-0 hidden md:block">
              <MySvgComponent />
            </div>
            <div className="relative z-10 pt-2">
              <div className="flex md:items-center flex-col md:flex-row gap-4">
                <div className="w-32 h-12 flex justify-center relative">
                  <div className="w-32 h-12 inset-0 absolute">
                    <Arrows />
                  </div>
                  <p
                    className={`relative z-10 pr-5 text-center m-auto text-white font-hellixSemiBold text-xl`}
                  >
                    Step {index + 1}
                  </p>
                </div>
                <h2
                  className={` font-hellixSemiBold text-[17px]  lg:text-2xl text-[#031924] md:max-w-[80%]`}
                >
                  {section.heading}
                </h2>
              </div>
              <p
                className={`text-[14px] lg:text-[15px] flex-grow-0 text-[#999999] font-hellixMedium mt-3 `}
              >
                {section.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
