import React, { useEffect, useRef, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ButtonWrapper from "../components/ButtonWrapper";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";
import "../style.css";
import InputFieldWrapper from "../components/InputFieldWrapper";

const Pricing: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  const [selected, setSelected] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNextSection = () => {
    setSelected((pre) => pre + 1);
    if (selected > 5) {
      setSelected(1);
    }
  };

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
      label: "label",
      header: "What is Question What is Question ?",
    },
  ];

  const MainSection = selectSections[selected - 1];

  console.log(MainSection);

  return (
    <div className="Prizing-section flex  flex-col w-full overflow-hidden">
      <Header background="bg-[#ddf3ff] " handleShowForms={handleToggle} />
      <div className=" h-[250px] bg-gradient-to-b from-[#d6f1ff] via-[#ddf3ff] to-[#ecf8ff] w-full flex justify-center items-center ">
        <h1 className=" text-[#24536E] font-bold leading-[52.81px] text-center text-[44px]">
          Pricing
        </h1>
      </div>
      <div className=" w-full  mb-10 flex-col justify-evenly items-center h-auto  flex">
        {selected < 6 ? (
          <div className="lg:h-[428px] flex justify-center flex-col md:flex-row gap-10 items-start py-16 lg:w-[1136px] w-11/12 rounded-[30px] bg-[#ffffff] border-[#E0E0E0] border-[1px] md:px-10 ">
            <div className="flex w-full md:w-1/2 flex-col px-2 md:px-0 gap-6 my-2">
              <div className=" flex justify-between md:w-[239px] w-[200px]">
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

              <p className=" font-medium text-[17px] leading-4 tracking-[0.02em] text-[#999999]">
                Label
              </p>
              <h1 className=" font-semibold text-[28px] leading-[39px]-tracting-[0.02em] text-[#032435]">
                What is Question What is Question ?
              </h1>
            </div>
            <div className="md:w-[487px] flex flex-col w-full h-full  justify-between px-2 md:px-0">
              <div
                className={`lg:h-[228px]  lg:w-[487px] w-full ${
                  selected === 4
                    ? "border-dashed-spaced items-center inline-block"
                    : "border-[1px]  border-[#E0E0E0]"
                } flex lg:justify-center lg:items-center rounded-[16px] ${
                  selected === 5 ? "md:items-center h-[200px]" : "h-min py-2"
                }`}
              >
                <div
                  className={`${
                    selected == 3 ? "md:h-[180px] py-5 md:py-0" : "h-[164px] "
                  }  flex flex-wrap gap-4 items-center ${
                    selected <= 2
                      ? "md:justify-between md:w-[416px]"
                      : " w-[453px]"
                  }`}
                >
                  {selected <= 2 &&
                    MainSection.labels?.map((a, index) => (
                      <div
                        key={index}
                        className="md:w-[109px] w-20 justify-center items-center px-1 gap-1 h-[44px] md:p-3 flex md:gap-[10px]"
                      >
                        <input type={selected == 1 ? "radio" : "checkbox"} />
                        <label htmlFor={a.label} className=" text-re">
                          {a.label}
                        </label>
                      </div>
                    ))}
                  {selected == 3 && (
                    <div className=" flex flex-col mx-5 w-full ">
                      <h1 className=" text-[#031924] mb-2 font-normal text-[16px] leading-[19.2px]">
                        Comments
                      </h1>
                      <textarea
                        className="w-full placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
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
                        <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between items-center">
                          <div className=" flex  bg-[#e6eaeb] p-2 md:px-4 rounded gap-1 md:gap-3 items-center">
                            <img src={File} alt="" />
                            <h1 className="truncate inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
                              {file.name}
                            </h1>
                          </div>

                          <button
                            onClick={() => ref.current?.click()}
                            className=" text-primary text-base font-semibold leading-[19.2px]"
                          >
                            Change File
                          </button>
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
                    <div className="px-2 md:px-0 w-full flex flex-col gap-5 p-2 md:gap-2">
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
              <div className=" flex gap-10 lg:w-[487px]  justify-end md:mt-0 mt-4 ">
                {selected > 1 && (
                  <ButtonWrapper
                    className="bg-[#F1FAFF] p-3 lg:p-0 lg:h-[56px]  text-[#20B2FF] rounded-lg font-semibold 
          text-sm lg:text-base h-[46px] w-[120px] lg:w-[139px] lg:mx-0"
                    label={"Prev"}
                    onClick={handlePrevSection}
                  />
                )}

                <ButtonWrapper
                  className="bg-[#20B2FF] p-3 lg:p-0 lg:h-[56px]  text-white rounded-lg font-semibold 
          text-sm lg:text-base h-[46px] w-[120px] lg:w-[139px]  lg:mx-0"
                  label={selected === 4 ? (!file ? "Skip" : "Next") : "Next"}
                  onClick={handleNextSection}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="md:h-[428px] h-[250px] md:w-[1136px] w-11/12  rounded-[30px] flex justify-center items-center bg-[#FFFFFF] border-[#E0E0E0] border-[1px]">
            <div className=" w-full lg:h-[96px] justify-center items-center  flex flex-col gap-2">
              {/* <Lottie animationData={un} loop={true} className="h-11 w-11" /> */}
              <p className=" text-secondary text-center font-bold lg:text-[40px] text-[30px]  leading-[48.01px] -tracking-[0.02em]">
                <span className=" text-primary">
                  Thanks! <br />
                </span>
                Our team will be reach out you in 24hrs!
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
