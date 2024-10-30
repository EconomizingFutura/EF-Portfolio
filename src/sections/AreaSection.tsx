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
      className="w-full h-auto md:h-[460px] px-2 flex gap-5 md:justify-center md:items-start"
      key={a.id}
    >
      <div className="  z-50 w-7 lg:w-8 h-auto ">
        <img src={a.icons} alt="" className=" w-full h-7 md:h-8" />
      </div>
      <div className=" flex flex-col md:w-[1080px] md:h-[285px] lg:items-center xl:items-start lg:justify-between md:flex-row md:justify-evenly">
        <div className=" flex xl:justify-between md:w-1/2 xl:w-[527px] flex-col gap-4">
          <h1
            className={`${
              colorMap[a.id as keyof typeof colorMap] || ""
            } font-bold text-[18px] lg:text-[28px] leading-[21.6px]  lg:leading-[33.61px] `}
          >
            {a.heading}
          </h1>
          <p className="text-[16px]  md:text-start lg:text-[24px]  leading-[19.2px] lg:leading-[28.8px] font-semibold text-[#ffffff]">
            {a.info}
          </p>
          <div className="text-[#FFFFFF] lg:px-8 md:ms-3 ms-2 px-4 text-[14px] lg:text-[18px] leading-[16.8px] lg:leading-[21.6px] font-normal  items-end  flex flex-col gap-5 lg:gap-7">
            <p className="list-item">{a.li1}</p>
            <p className=" list-item">{a.li2}</p>
          </div>
        </div>
        <div className=" flex py-2 justify-center items-center">
          <img
            src={a.logo}
            alt=""
            className="rounded-lg  w-[310px] lg:w-[440px] h-[200px] lg:h-[285px]"
          />
        </div>
      </div>
    </div>
  ));
};

export default AreaSection;
