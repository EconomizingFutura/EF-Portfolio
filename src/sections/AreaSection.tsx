import React from "react";
import { AreasConstants } from "../constants/constants";

const AreaSection: React.FC = () => {
  const colorMap = {
    "1": "text-[#3FB950]",
    "2": "text-[#F778BA]",
    "3": "text-[#5FB6FF]",
    "4": "text-[#A465F1]",
  };
  return AreasConstants.map((a) => (
    <div
      className={`lg:h-[460px] h-auto lg:w-[1080px] md:w-11/12 w-full max-w-[1080px] flex flex-col md:flex-row justify-center items-center md:gap-28 gap-5 mx-auto `}
      key={a.id}
    >
      <div
        className={`w-11/12 lg:w-[527px] flex flex-col gap-7 justify-center items-center md:items-start`}
      >
        <h1
          className={`${
            colorMap[a.id as keyof typeof colorMap] || ""
          } font-bold text-[24px] md:text-[28px]  leading-[33.61px] `}
        >
          {a.heading}
        </h1>
        <p className="text-[18px]  md:text-start md:text-[24px] leading-[28.8px] font-semibold text-[#ffffff]">
          {a.info}
        </p>
        <ul className="text-[#FFFFFF] md:px-8 md:ms-3 ms-2 px-4 text-[16px] md:text-[18px] leading-[21.6px] font-normal list-disc flex flex-col gap-3 md:gap-5">
          <li>{a.li1}</li>
          <li>{a.li2}</li>
        </ul>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={a.logo}
          alt=""
          className="rounded-lg  w-[300px] md:w-[440px] h-[200px] md:h-[285px]"
        />
      </div>
    </div>
  ));
};

export default AreaSection;
