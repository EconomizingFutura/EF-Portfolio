// Projects component
import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonArror from "../assets/ButtonArror.svg";
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
}

const Projects: React.FC<ProjectsProps> = ({
  i,
  project,
  range,
  targetScale,
}) => {
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  const handleClick = (a: number) => navigate(`/projects/${a}`);
  const handleRotate = () => setRotate(!rotate);

  return (
    <div
      ref={container}
      className="h-[540px] md:h-[400px] lg:h-[540px] w-full max-w-[1136px] bg-[#F4FAFF] sticky top-5 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-5"
    >
      <motion.div
        className="flex flex-col lg:gap-5  md:flex-row py-10 justify-between items-center relative h-full w-full rounded-[25px] origin-top "
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="w-full  md:w-[733px] lg:w-[433px] flex flex-col items-start mb-6 md:mb-0">
          <Lottie
            animationData={project.lottie}
            loop={true}
            className="h-11 w-11"
          />
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] my-3">
            {project.projectName}
          </h1>
          <p className="text-[#999999] font-medium text-[14px] sm:text-[15px] md:text-[12px] lg:text-[17px] leading-6 tracking-[0.002em] my-3">
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
              src={ButtonArror}
              className={`transition-transform duration-75 ${
                rotate ? "rotate-45" : "rotate-90"
              }`}
              alt=""
            />
          </button>
        </div>
        <div className="relative w-full flex flex-col-reverse gap-3 md:flex-col lg:flex-row lg:gap-0 lg:w-auto">
          <img src={project.projectBanner} alt="" className="w-full" />
          <img
            src={project.image}
            alt=""
            className="md:absolute lg:top-0 lg:-left-24 h-[40px] sm:h-[50px] lg:h-auto w-[40px] sm:w-[50px] lg:w-[70px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
