import React, { useMemo, useRef, useState } from "react";
import ButtonWrapper from "../components/ButtonWrapper";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";
import RadioButtonWrapper from "../components/RadioButtonWrapper";
import CheckBoxWrapper from "../components/CheckBoxWrapper";
import PricingInputWrapper from "../components/PricingInputWrapper";
import WavesPriceSection from "../assets/WavesPriceSection.svg";

import InputFieldWrapper from "../components/InputFieldWrapper";
import {
  softwareDevelopment,
  teamAugmentation,
} from "../constants/PricingConstants";
interface SubSectionLabel {
  label: string;
  dropval?: string[];
}

interface SubSection {
  id: number;
  header?: string;
  label?: string;
  labels?: SubSectionLabel[];
}

const Price: React.FC = () => {
  const [subSection, setSubSection] = useState<SubSection[]>([]);
  const [stage, setStage] = useState<string>("");
  const [marketOthers, setMarketOthers] = useState<string>("");
  const [serviceOthers, setServiceOthers] = useState<string>("");
  const [platformOthers, setPlatformOthers] = useState<string>("");
  const [platform, setPlatform] = useState<string[]>([]);
  const [service, setService] = useState<string[]>([]);
  const [market, setMarket] = useState<string[]>([]);
  const [comments, setComments] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [expert, setExpert] = useState<string[]>([]);
  const [technology, setTechnology] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>("");
  const [companyType, setCompanyType] = useState<string>("");
  const [softwareType, setSoftwareType] = useState<string>("");
  const [dropBox, setDropBox] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const ref = useRef<HTMLInputElement>(null);

  const selectSections = useMemo(
    () => [
      {
        id: 1,
        label: "Free analysis and estimation for your project",
        header: "What do you want to get a quote for?",
        labels: [
          { id: 1, label: "Software Development" },
          { id: 2, label: "Team Augmentation services" },
        ],
      },
    ],
    []
  );

  const handlePrevSection = () => {
    if (selected === 0) {
      setSubSection([]);
      return;
    }

    if (subSection.length > 1) {
      setSelected(selected - 1);
    }
  };
  const handleNextSection = () => {
    if (subSection.length === 0) {
      if (!selectedValue) {
        setErrors({ selection: "Please select an option" });
        return;
      }
      if (selectedValue === "Software Development") {
        setSubSection(softwareDevelopment);
      } else {
        setSubSection(teamAugmentation);
      }
      setErrors({});
    } else {
      const currentSection = subSection[selected];
      const validationErrors =
        selectedValue === "Software Development"
          ? validateSoftwareDevelopment(currentSection)
          : validateTeamAugmentation(currentSection);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      if (subSection.length > 1) {
        setSelected(selected + 1);
        setErrors({});
      }
    }
  };

  const handleCheckboxChange = (label: string) => {
    setMarket((prevMarket) =>
      prevMarket.includes(label)
        ? prevMarket.filter((item) => item !== label)
        : [...prevMarket, label]
    );
  };

  const handleServiceCheckboxChange = (label: string) => {
    setService((prevService) =>
      prevService.includes(label)
        ? prevService.filter((item) => item !== label)
        : [...prevService, label]
    );
  };

  const handleExpertCheckboxChange = (label: string) => {
    setExpert((prevExpert) =>
      prevExpert.includes(label)
        ? prevExpert.filter((item) => item !== label)
        : [...prevExpert, label]
    );
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleExperRadio = (value: string) => {
    setStage(value);
  };

  const handleMarketOthers = (value: string) => {
    setMarketOthers(value);
  };

  const handlePlatformOthers = (value: string) => {
    setPlatformOthers(value);
  };

  const handlePlatformCheckboxChange = (label: string) => {
    setPlatform((prevPlatform) =>
      prevPlatform.includes(label)
        ? prevPlatform.filter((item) => item !== label)
        : [...prevPlatform, label]
    );
  };

  const handleTechnologyCheckboxChange = (label: string) => {
    setTechnology((prevTechnology) =>
      prevTechnology.includes(label)
        ? prevTechnology.filter((item) => item !== label)
        : [...prevTechnology, label]
    );
  };

  const SelectingMainSection = () => {
    return (
      <div className="flex flex-col gap-2">
        {selectSections[0].labels.map((item) => (
          <RadioButtonWrapper
            key={item.id}
            label={item.label}
            value={item.label.toString()}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        ))}
        {errors && <p className="text-red-500 text-xs">{errors.selection}</p>}
      </div>
    );
  };

  const validateSoftwareDevelopment = (currentSection: SubSection) => {
    const newErrors: { [key: string]: string } = {};

    switch (currentSection?.id) {
      case 1:
        if (!stage) newErrors.stage = "Please select a project stage";
        break;
      case 2:
        if (market.length === 0 && !marketOthers)
          newErrors.market =
            "Please select at least one market or specify other";
        break;
      case 3:
        if (service.length === 0 && !serviceOthers)
          newErrors.service =
            "Please select at least one service or specify other";
        break;
      case 4:
        if (platform.length === 0 && !platformOthers)
          newErrors.platform =
            "Please select at least one platform or specify other";
        break;
      case 6:
        if (!companyType)
          newErrors.companyType = "Please select a company type";
        break;
      case 7:
        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email))
          newErrors.email = "Please enter a valid email";
        break;
    }
    return newErrors;
  };

  const validateTeamAugmentation = (currentSection: SubSection) => {
    const newErrors: { [key: string]: string } = {};

    switch (currentSection?.id) {
      case 1:
        if (expert.length === 0)
          newErrors.expert = "Please select at least one expert type";
        break;
      case 2:
        if (technology.length === 0)
          newErrors.technology = "Please select at least one technology";
        break;
      case 3:
        if (!duration) newErrors.duration = "Please select a duration";
        break;
      case 4:
        if (!companyType)
          newErrors.companyType = "Please select a company type";
        break;
      case 5:
        if (!softwareType)
          newErrors.softwareType = "Please select a software type";
        break;
      case 7:
        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email))
          newErrors.email = "Please enter a valid email";
        break;
    }
    return newErrors;
  };

  const SoftwareDevelopmentSection = () => {
    const currentSection = subSection[selected];

    switch (currentSection?.id) {
      case 1:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4">
              {currentSection?.labels?.map((item, index) => (
                <RadioButtonWrapper
                  key={index}
                  label={item.label}
                  value={item.label.toString()}
                  selectedValue={stage}
                  onChange={handleExperRadio}
                />
              ))}
            </div>
            {errors.stage && (
              <p className="text-red-500 text-xs">{errors.stage}</p>
            )}
          </div>
        );
      case 2:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {currentSection?.labels?.map((item, index) => (
                <CheckBoxWrapper
                  key={index}
                  label={item.label}
                  isChecked={market.includes(item.label)}
                  onChange={handleCheckboxChange}
                  value={item.label.toString()}
                />
              ))}
              <PricingInputWrapper
                label="others"
                onChangeFunction={handleMarketOthers}
                values={marketOthers}
              />
            </div>
            {errors.market && (
              <p className="text-red-500 text-xs">{errors.market}</p>
            )}
          </div>
        );
      case 3:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {currentSection?.labels?.map((item, index) => (
                <CheckBoxWrapper
                  key={index}
                  label={item.label}
                  isChecked={service.includes(item.label)}
                  onChange={handleServiceCheckboxChange}
                  value={item.label.toString()}
                />
              ))}
              <PricingInputWrapper
                label="others"
                onChangeFunction={setServiceOthers}
                values={serviceOthers}
              />
            </div>
            {errors.service && (
              <p className="text-red-500 text-xs">{errors.service}</p>
            )}
          </div>
        );
      case 4:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4">
              {currentSection?.labels?.map((item, index) => (
                <CheckBoxWrapper
                  key={index}
                  label={item.label}
                  isChecked={platform.includes(item.label)}
                  onChange={handlePlatformCheckboxChange}
                  value={item.label.toString()}
                />
              ))}
              <PricingInputWrapper
                label="others"
                onChangeFunction={handlePlatformOthers}
                values={platformOthers}
              />
            </div>
            {errors.platform && (
              <p className="text-red-500 text-xs">{errors.platform}</p>
            )}
          </div>
        );
      case 5:
        setDropBox(false);
        return (
          <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
            <h1 className=" text-[#031924] font-normal text-[16px] leading-[19.2px]">
              Comments
            </h1>
            <textarea
              className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
              style={{ height: "auto", width: "100%" }}
              rows={5}
              cols={30}
              onChange={(e) => setComments(e.target.value)}
              //   onChange={(e) => setComments(e.target.value)}
              draggable={false}
              placeholder="Enter"
              value={comments}
            />
          </div>
        );
      case 6:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4">
              {currentSection?.labels?.map((item, index) => (
                <RadioButtonWrapper
                  key={index}
                  label={item.label}
                  value={item.label.toString()}
                  selectedValue={companyType}
                  onChange={setCompanyType}
                />
              ))}
            </div>
            {errors.companyType && (
              <p className="text-red-500 text-xs">{errors.companyType}</p>
            )}
          </div>
        );
      case 7:
        setDropBox(false);
        return (
          <div className="px-2 md:px-0 w-full flex flex-col gap-2">
            <div className="flex flex-col gap-1.5">
              <InputFieldWrapper
                label={"Name"}
                placeholder={"Full Name"}
                onChange={setName}
                value={name}
                pricing={true}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <InputFieldWrapper
                label="Email"
                placeholder={"xyz@gmail.com"}
                onChange={setEmail}
                value={email}
                pricing={true}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
          </div>
        );

      case 8:
        setDropBox(true);
        return (
          <div className="md:w-[408.8px] mx-auto md:h-[104px] flex justify-between items-center  flex-col cursor-pointer font-hellix">
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
        );
    }
  };

  const TeamAugmentationSection = () => {
    const currentSection = subSection[selected];

    switch (currentSection?.id) {
      case 1:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4">
              {currentSection?.labels?.map((item, index) => (
                <CheckBoxWrapper
                  key={index}
                  label={item.label}
                  value={item.label.toString()}
                  isChecked={expert.includes(item.label)}
                  onChange={handleExpertCheckboxChange}
                />
              ))}
            </div>
            {errors.expert && (
              <p className="text-red-500 text-xs">{errors.expert}</p>
            )}
          </div>
        );
      case 2:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-6">
              {currentSection?.labels?.map((item, index) => (
                <CheckBoxWrapper
                  key={index}
                  label={item.label}
                  isChecked={technology.includes(item.label)}
                  onChange={handleTechnologyCheckboxChange}
                  value={item.label.toString()}
                />
              ))}
            </div>
            {errors.technology && (
              <p className="text-red-500 text-xs">{errors.technology}</p>
            )}
          </div>
        );
      case 3:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-5">
              {currentSection?.labels?.map((item, index) => (
                <RadioButtonWrapper
                  key={index}
                  label={item.label}
                  value={item.label.toString()}
                  selectedValue={duration}
                  onChange={setDuration}
                />
              ))}
            </div>
            {errors.duration && (
              <p className="text-red-500 text-xs">{errors.duration}</p>
            )}
          </div>
        );
      case 4:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4">
              {currentSection?.labels?.map((item, index) => (
                <RadioButtonWrapper
                  key={index}
                  label={item.label}
                  value={item.label.toString()}
                  selectedValue={companyType}
                  onChange={setCompanyType}
                />
              ))}
            </div>
            {errors.companyType && (
              <p className="text-red-500 text-xs">{errors.companyType}</p>
            )}
          </div>
        );
      case 5:
        setDropBox(false);
        return (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {currentSection?.labels?.map((item, index) => (
                <RadioButtonWrapper
                  key={index}
                  label={item.label}
                  value={item.label.toString()}
                  selectedValue={softwareType}
                  onChange={setSoftwareType}
                />
              ))}
            </div>
            {errors.softwareType && (
              <p className="text-red-500 text-xs">{errors.softwareType}</p>
            )}
          </div>
        );
      case 6:
        setDropBox(false);
        return (
          <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
            <h1 className=" text-[#031924] font-normal text-[16px] leading-[19.2px]">
              Comments
            </h1>
            <textarea
              className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
              style={{ height: "auto", width: "100%" }}
              rows={5}
              cols={30}
              onChange={(e) => setComments(e.target.value)}
              draggable={false}
              placeholder="Enter"
              value={comments}
            />
          </div>
        );
      case 7:
        setDropBox(false);
        return (
          <div className="px-2 md:px-0 w-full flex flex-col gap-2">
            <div className="flex flex-col gap-1.5">
              <InputFieldWrapper
                label={"Name"}
                placeholder={"Full Name"}
                onChange={setName}
                value={name}
                pricing={true}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <InputFieldWrapper
                label="Email"
                placeholder={"xyz@gmail.com"}
                onChange={setEmail}
                value={email}
                pricing={true}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
          </div>
        );
      case 8:
        setDropBox(true);
        return (
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
        );
    }
  };

  console.log(subSection[selected], selected, subSection);

  return (
    <div className=" bg-violet-300 h-dvh w-full flex justify-center font-hellix items-center">
      <div
        style={{
          backgroundImage: ` URL(${WavesPriceSection})`,
        }}
        className=" xl:w-[1136px] xl:h-[428px] rounded-[30px] bg-[#FFFFFF] border flex justify-between items-center"
      >
        <div className="lg:w-1/2 px-10 font-hellix">
          <div className=" flex gap-1.5 lg:w-[239px]  w-[200px]">
            {Array.from({ length: subSection.length }, (_, index) => (
              <div
                key={index}
                className={`w-[32px] h-[4px] rounded-[40px]  flex justify-center items-center ${
                  index < selected + 1 ? " bg-primary" : "bg-[#E0E0E0]"
                }`}
              >
                <span
                  className={`${
                    index < selected + 1 ? "text-white" : "text-gray-400"
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
        <div className="lg:w-1/2 flex justify-center items-center flex-col h-full gap-5">
          <div
            className={`${
              dropBox
                ? "border-dashed-spaced font-hellix items-center inline-block"
                : "rounded-[16px] border-[#E0E0E0] border-[1px]"
            } bg-[#FFFFFF] lg:h-[228px] lg:w-[487px]  flex justify-center items-center`}
          >
            <div className=" h-[164px] w-[416px] px-2 py-1 flex justify-center items-center">
              {subSection.length == 0 && <SelectingMainSection />}
              {selectedValue && selectedValue == "Software Development" ? (
                <SoftwareDevelopmentSection />
              ) : (
                <TeamAugmentationSection />
              )}
            </div>
          </div>

          <div className=" flex gap-10 lg:gap-6 lg:w-[487px] justify-end md:mt-0 mt-4 font-hellix">
            {subSection.length > 1 && (
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
              label={dropBox ? (!file ? "Skip" : "Next") : "Next"}
              onClick={handleNextSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
