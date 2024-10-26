import React, { useState } from "react";
import Lottie from "lottie-react";
import ButtonArror from "../assets/ButtonArror.svg";

import { useNavigate } from "react-router";
interface ProjectItem {
  id: number;
  projectName: string;
  description: string;
  lottie: object; // Adjust the type as necessary
  projectBanner: string;
  image: string;
}
interface ProjectsProps {
  project: ProjectItem; // Ensure the prop type is defined
}
const Projects: React.FC<ProjectsProps> = ({ project }) => {
  console.log(project.id);

  const [rotate, setRotate] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClick = (a: number) => {
    navigate(`/projects/${a}`);
  };

  const handleRotate = () => {
    setRotate(!rotate);
  };
  // F4FAFF
  return (
    <div className="h-auto lg:h-[512px] w-full xl:w-[1136px] max-w-[1136px] py-5 xl:py-2 flex flex-col lg:flex-row justify-evenly items-center bg-[#F4FAFF] rounded-3xl p-6 lg:p-0 lg:mx-auto">
      <div className="w-full lg:w-[433px] sm:h-[300px] flex flex-col items-start mb-6 lg:mb-0">
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
          Read More{" "}
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
      <div className="relative w-full flex gap-3  flex-col-reverse lg:w-auto">
        <img src={project.projectBanner} alt="" className="w-full" />
        <img
          src={project.image}
          alt=""
          className=" lg:absolute lg:top-0 -left-5 lg:-left-24 lg:h-auto lg:w-[70px] h-[50px] w-[50px]"
        />
      </div>
    </div>
  );
};
export default Projects;
