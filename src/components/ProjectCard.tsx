import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonArrow } from "@/assets/index";

interface ProjectCardProps {
  project: {
    id: number;
    projectName: string;
    description: string;
    projectBanner: string;
    pathName: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.pathName}`}
      prefetch
      className="group flex flex-col bg-[#F4F8FB] rounded-2xl overflow-hidden border border-[#DDE4EE] transition-shadow duration-300 hover:shadow-[0px_18px_36px_-18px_#0000001A]"
    >
      <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden bg-white">
        <Image
          src={project.projectBanner}
          alt={`${project.projectName} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-grow">
        <h3 className="text-[20px] md:text-[24px] font-hellixBold text-[#032435]">
          {project.projectName}
        </h3>
        <p className="text-[#666666] font-hellixMedium text-[14px] md:text-[15px] leading-6 line-clamp-3">
          {project.description}
        </p>
        <span className="mt-auto pt-2 flex items-center gap-2 text-[#20B2FF] font-hellixSemiBold text-[15px]">
          View Project
          <Image
            src={ButtonArrow}
            alt=""
            width={16}
            height={16}
            className="rotate-90 transition-transform duration-200 group-hover:rotate-45"
          />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
