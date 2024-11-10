import React, { useEffect, useRef, useState } from "react";
import Footer from "../sections/Footer";
import ButtonWrapper from "../components/ButtonWrapper";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";
import "../style.css";
import InputFieldWrapper from "../components/InputFieldWrapper";
import Proppers from "../assets/Proppers.json";
import Lottie from "lottie-react";
import ContactModal from "../modal/ContactModal";
import EnqueryModal from "../modal/EnqueryModal";
import Header from "../sections/Header";
import projectHeader from "../assets/projectsHeader.svg";
const sectionColors = ["", "#FFFFFF"];
import WavesPriceSection from "../assets/WavesPriceSection.svg";
import CustomSun from "../assets/CustomSun";
const Pricing: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  const [selected, setSelected] = useState<number>(1);
  const [section1, setSection1] = useState<string>("");
  // const [checkedItems, setCheckedItems] = useState<string[]>([]);
  console.log(section1);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  console.log(backgroundColor);

  const handleNextSection = () => {
    setSelected((pre) => pre + 1);
    if (selected > 5) {
      setSelected(1);
    }
  };

  console.log(backgroundColor);

  useEffect(() => {
    const handleScroll = () => {
      const mainSectionTop =
        mainSectionRef.current?.getBoundingClientRect().top;
      const techSectionTop =
        techSectionRef.current?.getBoundingClientRect().top;

      console.log(mainSectionTop, techSectionTop);
      if (mainSectionTop !== undefined && techSectionTop !== undefined) {
        if (techSectionTop < 30) {
          setBackgroundColor(sectionColors[1]);
        } else if (mainSectionTop < 120) {
          setBackgroundColor(sectionColors[0]);
        } else {
          setBackgroundColor(sectionColors[0]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef<HTMLInputElement>(null);

  const handlePrevSection = () => {
    setSelected((pre) => pre - 1);
  };

  useEffect(() => {
    if (selected === 6) {
      const changeSelected = setTimeout(() => {
        setSelected(1);
      }, 20000);
      return () => clearTimeout(changeSelected);
    }
  }, [selected]);

  const selectSections = [
    {
      id: 1,
      label: "label",
      header: "What is Question What is Question ?",
      labels: [
        { label: "Label 1" },
        { label: "Label 2" },
        { label: "Label 3" },
        { label: "Label 4" },
        { label: "Label 5" },
        { label: "Label 6" },
        { label: "Label 7" },
        { label: "Label 8" },
        { label: "Label 9" },
      ],
    },
    {
      id: 2,
      label: "label",
      header: "What is Question What is Question ?",
      labels: [
        { label: "Hello 1" },
        { label: "Label 2" },
        { label: "Label 3" },
        { label: "Label 4" },
        { label: "Label 5" },
        { label: "Label 6" },
        { label: "Label 7" },
        { label: "Label 8" },
        { label: "Label 9" },
      ],
    },
    {
      id: 3,
      label: "label",
      header: "What is Question What is Question ?",
    },
    {
      id: 4,
      label: "label",
      header: "What is Question What is Question ?",
    },
    {
      id: 5,
      label: "labellabel",
      header: "What is Question What is Question ?",
    },
  ];
  console.log(selected);
  const MainSection = selectSections[selected - 1];

  return (
    <div className="Prizing-section flex min-h-screen md:min-h-0  flex-col font-hellix w-full overflow-hidden">
      {show && <ContactModal isModalOpen={show} handleToggle={handleToggle} />}
      <Header
        // transparent={true}
        width={"xl:w-[1136px] "}
        handleShowForms={handleToggle}
        background={backgroundColor}
      />
      <div ref={mainSectionRef}></div>

      <div
        style={{ backgroundImage: `url(${projectHeader})` }}
        className=" h-96 w-full absolute top-0 left-0 opacity-80"
      ></div>
      <div
        ref={mainSectionRef}
        className=" h-[225px] md:h-[200px] lg:h-[400px] xl:h-[300px] relative w-full flex justify-center items-center "
      >
        <div className=" absolute top-0 left-0 w-full h-full">
          <CustomSun />
        </div>
        <h1 className=" text-[#24536E] font-bold leading-[52.81px] text-center text-[44px]">
          Pricing
        </h1>
      </div>
      <section
        ref={techSectionRef}
        className="flex-grow w-full xl:w-[1136px] xl:mx-auto z-20  mb-10 flex-col justify-evenly items-center h-min  flex"
      >
        {selected < 6 ? (
          <div
            style={{
              backgroundImage: ` URL(${WavesPriceSection})`,
            }}
            className="lg:h-[428px] flex justify-center sm:justify-center bg-[rgba(255,255,255,1)] sm:items-center flex-col md:flex-row gap-10 items-start md:items-start py-16 xl:w-[1136px] w-11/12 rounded-[30px] border-[#E0E0E0] border-[1px] md:px-10 relative"
          >
            <div className="relative z-10  w-full flex justify-center  items-center  flex-col md:flex-row gap-10">
              <div className="flex w-full  sm:w-1/2 lg:h-[119px] mb-auto justify-between flex-col px-2 md:px-0 gap-6 my-2">
                <div className=" flex gap-1.5 lg:w-[239px]  w-[200px]">
                  {Array.from({ length: selectSections.length }, (_, index) => (
                    <div
                      key={index}
                      className={`w-[32px] h-[4px] rounded-[40px]  flex justify-center items-center ${
                        index < selected ? " bg-primary" : "bg-[#E0E0E0]"
                      }`}
                    >
                      <span
                        className={`${
                          index < selected ? "text-white" : "text-gray-400"
                        }`}
                      ></span>
                    </div>
                  ))}
                </div>

                <p className=" font-medium text-[17px] h-5 inline-block py-2  leading-4 tracking-[0.02em] text-[#999999]">
                  Label
                </p>
                <h1 className=" font-semibold lg:text-[28px] text-[20px]  leading-[39px] -tracting-[0.02em] text-[#032435]">
                  What is Question What is Question ?
                </h1>
              </div>
              <div className="md:w-[487px]  sm:w-[350px] sm:justify-center sm:items-end md:gap-10 gap-3 flex flex-col w-full h-full bg-[#FFFFFF]   justify-between px-2 md:px-0">
                <div
                  className={`lg:h-[228px] md:w-[423px] lg:w-[487px] w-full
                  ${
                    selected === 4
                      ? " border-dashed-spaced  items-center inline-block"
                      : "border-[1px]  border-[#E0E0E0]"
                  } flex lg:justify-center lg:items-center rounded-[16px] ${
                    selected === 5
                      ? "md:items-center  h-[180px] w-[423px] md:p-8"
                      : "h-min py-2"
                  } ${selected === 3 && " sm:w-full md:w-[423px]"}`}
                >
                  <div
                    className={`${
                      selected == 3
                        ? "md:h-[175px] md:w-[423px] py-0 md:p-5 lg:p-0 md:py-0 h-[164px] mx-auto  flex"
                        : "h-[180px] "
                    }  flex flex-wrap gap-0 items-center ${
                      selected <= 2
                        ? "sm:justify-between md:w-10/12 xl:w-[416px] items-center w-full mx-auto  gap-4 justify-center    md:h-[164px]"
                        : " w-[453px] "
                    } ${
                      selected === 5 &&
                      " justify-center h-[180px] mx-auto items-center flex pt-1"
                    }`}
                  >
                    {selected <= 2 &&
                      MainSection.labels?.map((a, index) => (
                        <div
                          key={index}
                          className="lg:w-[109px] md:py-2 lg:py-0 w-16  py-1 rounded-md  sm:py-0 sm:w-20 xl:w-auto bg-[rgba(244,250,255,1)]  justify-center items-center  md:rounded-lg gap-1 lg:h-[44px]  lg:p-3 flex lg:gap-[10px]"
                        >
                          <input
                            className=" lg:h-4 lg:w-4 h-3 w-3"
                            onChange={(e) =>
                              selected == 1 ? setSection1(e.target.value) : ""
                            }
                            name={selected == 1 ? "uniqueRadioGroup" : ""}
                            value={a.label}
                            type={selected == 1 ? "radio" : "checkbox"}
                          />
                          <label
                            htmlFor={a.label}
                            className=" text-[#031924] font-medium text-[14px] lg:text-[17px] lg:leading-[20.4px] tracking-[0.02em]"
                          >
                            {a.label}
                          </label>
                        </div>
                      ))}
                    {selected == 3 && (
                      <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
                        <h1 className=" text-[#031924] font-normal text-[16px] leading-[19.2px]">
                          Comments
                        </h1>
                        <textarea
                          className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                          style={{ height: "auto", width: "100%" }}
                          rows={5}
                          cols={30}
                          onChange={(e) => e.target.value}
                          draggable={false}
                          placeholder="Enter"
                        />
                      </div>
                    )}
                    {selected == 4 && (
                      <div className="md:w-[408.8px] mx-auto md:h-[104px] flex justify-between items-center  flex-col cursor-pointer">
                        {file ? (
                          <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between gap-6 items-center">
                            <div className=" flex  bg-[#e6eaeb] h-[40px] lg:w-[379px] px-4 rounded gap-1 md:gap-3 items-center">
                              <img src={File} alt="" />
                              <h1 className="truncate max-w-48  inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
                                {file.name}
                              </h1>
                            </div>
                            <div className="flex justify-center rounded-md  items-center w-[119px] bg-[rgba(241,250,255,1)] lg:h-[40px] h-7 ">
                              <button
                                onClick={() => ref.current?.click()}
                                className=" text-primary text-base  font-semibold leading-[19.2px]"
                              >
                                Change File
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div onClick={() => ref.current?.click()}>
                            <img
                              src={Dropbox}
                              alt=""
                              className=" h-[52px] w-[52px] mx-auto"
                            />
                            <p className="text-[#031924] font-medium text-center text-[16px] ">
                              Choose a file or drag & drop it here
                            </p>
                            <p className="text-[#999999] font-normal text-[14px] text-center ">
                              PDF and Doc up to 5MB
                            </p>
                          </div>
                        )}

                        <input
                          ref={ref}
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            setFile(e.target.files ? e.target.files[0] : null)
                          }
                        />
                      </div>
                    )}
                    {selected == 5 && (
                      <div className="px-2 md:px-0 w-full flex flex-col gap-0 p-2 md:gap-2">
                        <InputFieldWrapper
                          label={"Name"}
                          placeholder={"Full Name"}
                          onChange={setName}
                          value={name}
                          pricing={true}
                        />
                        <InputFieldWrapper
                          label="Email"
                          placeholder={"xyz@gmail.com"}
                          onChange={setEmail}
                          value={email}
                          pricing={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className=" flex gap-10 lg:gap-6 lg:w-[324px] justify-end md:mt-0 mt-4 ">
                  {selected > 1 && (
                    <ButtonWrapper
                      className="bg-[#F1FAFF] p-3 lg:p-0 lg:h-[56px]  text-[#20B2FF] rounded-lg font-semibold 
          text-sm lg:text-base h-[46px] w-[120px] lg:w-[150px] lg:mx-0"
                      label={"Prev"}
                      onClick={handlePrevSection}
                    />
                  )}

                  <ButtonWrapper
                    className="bg-[#20B2FF] p-3 lg:p-0 lg:h-[56px]  text-white font-hellix rounded-lg font-semibold 
          text-sm lg:text-base h-[46px] w-[120px] lg:w-[150px]  lg:mx-0"
                    label={selected === 4 ? (!file ? "Skip" : "Next") : "Next"}
                    onClick={handleNextSection}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:h-[428px] h-[250px] lg:w-[1136px] w-11/12  rounded-[30px] flex justify-center items-center bg-[#FFFFFF] border-[#E0E0E0] border-[1px] relative">
            {/* <div
              style={{
                backgroundImage: `url(${pricingWave})`,
                backgroundSize: "100% 8.33%",
                backgroundRepeat: "repeat-y",
                backgroundPosition: "top center",
              }}
              className="absolute inset-0 z-0"
            /> */}
            <div className=" w-full lg:h-[96px] justify-center relative items-center  flex flex-row gap-2">
              <Lottie
                animationData={Proppers}
                loop={true}
                className="lg:h-72 lg:w-72 h-56 w-56 absolute left-0 rounded-full"
              />
              <p className=" text-secondary text-center font-bold lg:text-[40px] text-[30px]  leading-[48.01px] -tracking-[0.02em]">
                <span className=" text-primary">
                  Thanks! <br />
                </span>
                Our team will be reach out you in 24hrs!
              </p>
              <Lottie
                animationData={Proppers}
                loop={true}
                className="lg:h-72 lg:w-72 h-56 w-56 absolute right-0 rounded-full"
              />
            </div>
          </div>
        )}
      </section>
      <div className="  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
