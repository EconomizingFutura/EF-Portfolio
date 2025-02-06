import React from "react";
import { ButtonWrapper } from "../components";
import Images from "../assets/Images.png";
import { CurlArrows, HeroMini, YellowSquare } from "../assets/index.ts";
interface onClickProps {
  onClickButton: () => void;
}
const HeroSection: React.FC<onClickProps> = ({ onClickButton }) => {
  return (
    <div className="font-hellix lg:flex lg:justify-between lg:h-full mx-auto  lg:max-w-[1520px] w-full">
      <div className="w-full lg:my-auto  xl:w-full p-2 sm:p-4 lg:p-0 lg:ms-6 lg:mx-5 xl:mx-14  lg:flex-row lg:justify-end  lg:items-end flex h-min gap-10 ">
        <div className="h-min gap-6 xl:justify-items-end flex flex-col lg:ml-auto lg:px-10  lg:w-[485px] ">
          <h1 className=" font-hellixBold text-[32px] leading-[38.41px] lg:text-[40px] lg:leading-[48.81px] text-[#24536E]">
            Creative Solutions for a Brighter Future
          </h1>
          <p className=" font-hellixMedium text-[#000000] opacity-80 text-base lg:text-[20px] lg:leading-[28px]">
            Embrace a brighter future with our technology-driven solutions that
            enhance your business capabilities. We empower your success through
            innovation, helping you unlock new opportunities and stay ahead in a
            competitive landscape.
          </p>
          <ButtonWrapper
            onClick={onClickButton}
            className="bg-[#20B2FF] p-3 lg:p-[10px] text-white rounded-lg  text-sm lg:text-base h-[46px] w-[120px] font-hellixBold lg:w-[139px]"
            label="Contact Us"
          />
        </div>
      </div>
      <div className="shrink-0 lg:flex-2 flex-grow  lg:h-full ">
        <img
          src={HeroMini}
          alt=""
          className="w-full sm:w-full md:hidden sm:h-auto "
        />

        <div className=" relative  w-full">
          <img src={Images} alt="" className="z-50 w-full hidden md:block " />

          <img
            src={CurlArrows}
            alt=""
            className="absolute hidden lg:block h-[24px] w-[28px] top-5 right-1/2 sm:h-auto sm:w-auto sm:right-20 lg:right-80  sm:top-10 lg:top-24 "
          />
          <img
            src={YellowSquare}
            alt=""
            className="absolute hidden lg:block z-20 md:hidden  lg:bottom-24 lg:right-72 xl:bottom-5 xl:right-96 xl:translate-x-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
