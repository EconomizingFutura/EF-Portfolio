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
  lottie: object; // Adjust the type as necessary
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
      className="h-[540px]  w-[1136px] bg-[#F4FAFF] sticky top-5 flex justify-center items-center"
    >
      <motion.div
        className="flex py-10 justify-between px-10 items-center relative -top-[50%] h-full w-full rounded-[25px] origin-top"
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className=" w-full lg:w-[433px] sm:h-[300px] flex flex-col items-start mb-6 lg:mb-0">
          <Lottie
            animationData={project.lottie}
            loop={true}
            className="h-11 w-11"
          />
          <h1 className="text-[24px] sm:text-[28px] my-3">
            {project.projectName}
          </h1>
          <p className="text-[#999999] font-medium text-[15px] sm:text-[17px] leading-6 tracking-[0.002em] my-3">
            {project.description}
          </p>
          <button
            className="hover:underline flex gap-2 font-medium text-[15px] sm:text-[17px] leading-6 tracking-[0.002em] text-[#20B2FF]"
            onMouseEnter={handleRotate}
            onMouseLeave={handleRotate}
            onClick={() => handleClick(project.id)}
          >
            Read More
            <img
              src={ButtonArror}
              className={
                rotate
                  ? "rotate-45 transition-transform duration-75"
                  : "rotate-90"
              }
              alt=""
            />
          </button>
        </div>
        <div className="relative w-full flex gap-3 flex-col-reverse lg:w-auto">
          <img src={project.projectBanner} alt="" className="w-full" />
          <img
            src={project.image}
            alt=""
            className="lg:absolute lg:top-0 -left-5 lg:-left-24 lg:h-auto lg:w-[70px] h-[50px] w-[50px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
