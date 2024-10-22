import React, { useState } from "react";
import Boxes from "../assets/Boxes.svg";
import Thunder from "../assets/Thunder.json";
import Lottie from "lottie-react";
import ButtonArror from "../assets/ButtonArror.svg";
import AeniniBanner from "../assets/AeniniBanner.svg";
import Aenini from "../assets/Aenini.svg";
const Projects: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };
  return (
    <section className="lg:h-[802px] h-auto  bg-[#ffffff] relative flex flex-col justify-evenly items-center ">
      <h1 className="font-bold text-[32px] sm:text-[38px] leading-[40px] sm:leading-[45.61px] text-[#031924] text-center ">
        Projects
      </h1>
      <img
        src={Boxes}
        alt=""
        className="absolute right-0 top-1 w-[80px] sm:w-auto"
      />
      <div className="h-auto lg:h-[512px] w-full lg:w-[1136px] max-w-[1136px] flex flex-col lg:flex-row justify-evenly items-center bg-[#F4FAFF] rounded-3xl p-6 lg:p-0 lg:mx-auto">
        <div className="w-full lg:w-[433px] h-[300px] flex flex-col items-start mb-6 lg:mb-0">
          <Lottie animationData={Thunder} loop={true} className="h-11 w-11" />
          <h1 className="text-[24px] sm:text-[28px] my-3">Aenini</h1>
          <p className="text-[#999999] font-medium text-[15px] sm:text-[17px] leading-6 tracking-[0.002em] my-3">
            Aeinini is an offline tool for counting warp and weft threads in
            fabric, with data stored locally. It ensures real-time thread count
            analysis for fabric quality in textile manufacturing. The
            user-friendly interface allows seamless operation without internet
            access.
          </p>
          <button
            className="hover:underline flex gap-2 font-medium text-[15px] sm:text-[17px] leading-6 tracking-[0.002em] text-[#20B2FF]"
            onMouseEnter={handleRotate}
            onMouseLeave={handleRotate}
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
        <div className="relative w-full lg:w-auto">
          <img src={AeniniBanner} alt="" className="w-full" />
          <img
            src={Aenini}
            alt=""
            className="absolute top-0 -left-5 lg:-left-20 "
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
