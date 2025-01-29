import React from "react";
import EFLogo from "../assets/EFLogo.svg";
import { navLinks } from "../constants/constants";
import { Link } from "react-router-dom";
// import { socialMedia } from "../constants/FooterConstants";
const Footer: React.FC = () => {
  return (
    <div className=" min-w-full bg-[#011520] h-max">
      <section className=" max-w-[1640px] mx-auto flex flex-col justify-center px-4 md:py-6 md:px-12 font-hellix xl:px-44 xl:max-h-[405px] lg:h-[404px] h-[450px] ">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          <div className="flex flex-col gap-4">
            <div className="bg-white flex justify-center items-center h-16 w-20 rounded-md">
              <img
                src={EFLogo}
                alt=""
                draggable={false}
                className="h-12 w-12"
              />
            </div>
            <div className="font-semibold text-sm lg:text-[14px] text-white leading-5  font-overpass">
              <p>ECONOMIZING FUTURA (OPC) PRIVATE LIMITED,</p>
              <p>
                {" "}
                101, Unit 101, Oxford Towers, 139, HAL Old Airport Road, Hulsur
                Bazaar,
              </p>
              <p> Bangalore North, Bangalore - 560008,</p>
              <p> Karnataka, India </p>
            </div>
          </div>
          <div className="flex justify-between lg:w-[227px]">
            <div className="flex flex-col gap-2">
              {navLinks.map((a) => (
                <p
                  key={a.id}
                  className="text-white opacity-70 text-xs lg:text-[13px] font-hellixSemiBold"
                >
                  <Link to={a.link}>{a.name}</Link>
                </p>
              ))}
              <div className="text-white opacity-70 text-xs py-2 lg:text-[13px] font-hellixSemiBold cursor-pointer">
                <p>
                  <Link to={"/privacypolicy"}>Privacy Policy</Link>
                </p>
                <p className="py-2 lg:py-3">
                  <Link to={"/termsandconditions"}>Terms & Condition</Link>
                </p>
              </div>
            </div>
            {/* <div className="text-white opacity-70 text-xs lg:text-[13px] font-hellixSemiBold cursor-pointer">
            <p>
              <Link to={"/privacypolicy"}>Privacy Policy</Link>
            </p>
            <p className="py-2 lg:py-3">
              <Link to={"/termsandconditions"}>Terms & Condition</Link>
            </p>
          </div> */}
          </div>
        </div>
        <div className="h-px w-full bg-[#4d5b62] rounded my-6 lg:my-7"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center lg:items-start lg:justify-between">
          <p className="text-white text-xs font-overpass lg:text-sm leading-5 font-normal text-center lg:text-left">
            © Economizingfutura. All rights reserved 2024.
          </p>
          {/* <div className="flex justify-between w-full max-w-[168px]">
          {socialMedia.map((a) => (
            <img
              onClick={() => window.open(a.link, "_blank")}
              draggable={false}
              src={a.icon}
              key={a.id}
              className="h-6 w-6"
            />
          ))}
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default Footer;
