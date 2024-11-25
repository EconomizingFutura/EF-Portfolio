// Projects component
import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ButtonArrow } from "../assets/index";
import "./../card.css";
interface ProjectItem {
  id: number;
  projectName: string;
  description: string;
  lottie: object;
  projectBanner: string;
  image: string;
}

interface ProjectsProps {
  project: ProjectItem;
  i: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}

const Projects: React.FC<ProjectsProps> = ({
  i,
  project,
  range,
  targetScale,
  progress,
}) => {
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();

  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  const handleClick = (a: number) => navigate(`/projects/${a}`);
  const handleRotate = () => setRotate(!rotate);

  return (
    <div ref={container} className="cardContainer font-hellix">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          boxShadow: "0px 18px 36px -18px #0000001A",
        }}
        // className="h-min lg:h-[512px] w-full max-w-[1136px] rounded-sm md:rounded-3xl sm:p-6 md:p-8 lg:p-5  bg-[#F4FAFF] sticky top-5 flex justify-center items-center "
        className="card card1 lg:h-[512px]"
      >
        <div className="flex flex-col lg:gap-5 md:flex-row  justify-evenly items-center relative h-full w-full ">
          <div className="w-full gap-10 md:w-[733px] lg:w-[433px] md:h-[348px] flex flex-col items-start relative">
            <Lottie
              animationData={project.lottie}
              loop={true}
              className="h-11 w-11"
            />
            <div className=" w-full lg:h-[264px] flex flex-col gap-4">
              <h1 className="text-[20px] sm:text-[24px] font-bold md:text-[28px]  leading-[39px] -tracking-[0.002em] text-[#032435]">
                {project.projectName}
              </h1>
              <p className="text-[#999999] font-medium text-[14px] sm:text-[15px] md:text-[12px] lg:text-[17px] leading-6 tracking-[0.002em] ">
                {project.description}
              </p>
              <button
                className="hover:underline flex gap-2 font-medium text-[14px] sm:text-[15px] md:text-[17px] leading-6 tracking-[0.002em] text-[#20B2FF]"
                onMouseEnter={handleRotate}
                onMouseLeave={handleRotate}
                onClick={() => handleClick(project.id)}
              >
                Read More
                <img
                  src={ButtonArrow}
                  className={`transition-transform duration-75 ${
                    rotate ? "rotate-45" : "rotate-90"
                  }`}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className=" w-full flex flex-col-reverse gap-3 md:flex-col lg:flex-row lg:gap-0 lg:w-auto">
            <img src={project.projectBanner} alt="" className="w-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
