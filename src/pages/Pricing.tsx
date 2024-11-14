import React, { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../sections/Footer";
import ButtonWrapper from "../components/ButtonWrapper";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";
import "../style.css";
import Proppers from "../assets/Proppers.json";
import Lottie from "lottie-react";
import ContactModal from "../modal/ContactModal";
import EnqueryModal from "../modal/EnqueryModal";
import Header from "../sections/Header";
import projectHeader from "../assets/projectsHeader.svg";
const sectionColors = ["", "#FFFFFF"];
import WavesPriceSection from "../assets/WavesPriceSection.svg";
import CustomSun from "../assets/CustomSun";
import { ContactData } from "../api/ContactAPI";
import { toast, Toaster } from "sonner";
import { contactAPI } from "../api/ContactAPI";
import {
  softwareDevelopment,
  teamAugmentation,
} from "../constants/PricingConstants";
import RadioButtonWrapper from "../components/RadioButtonWrapper";
import CheckBoxWrapper from "../components/CheckBoxWrapper";
import PricingInputWrapper from "../components/PricingInputWrapper";
import DropDownWrapper from "../components/DropDownWrapper";
interface SubSectionLabel {
  label: string;
  dropval?: { id: number; label: string }[];
}

interface SubSection {
  id: number;
  header?: string;
  label?: string;
  labels?: SubSectionLabel[];
}
const Pricing: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  const handleFormSubmit = async (data: ContactData) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.comments === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await contactAPI(data, setIsLoading);
      toast.success(response.message);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const mainSection = mainSectionRef.current;
      const techSection = techSectionRef.current;

      if (mainSection && techSection) {
        const techRect = techSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (techRect.top <= windowHeight * 0.3) {
          setBackgroundColor(sectionColors[1]);
        } else {
          setBackgroundColor(sectionColors[0]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [subSection, setSubSection] = useState<SubSection[]>([]);
  const [stage, setStage] = useState<string>("");
  const [marketOthers, setMarketOthers] = useState<string>("");
  const [serviceOthers, setServiceOthers] = useState<string>("");
  const [platformOthers, setPlatformOthers] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [platform, setPlatform] = useState<string[]>([]);
  const [service, setService] = useState<string[]>([]);
  const [market, setMarket] = useState<string[]>([]);
  const [comments1, setComments1] = useState<string>("");
  const [comments2, setComments2] = useState<string>("");
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  console.log(companyType);

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
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const handleNextSection = () => {
    if (subSection.length === 0) {
      if (!selectedValue) {
        setErrors({ selection: "Please select an option" });
        return;
      }
      if (selectedValue === "Software Development") {
        setSubSection(softwareDevelopment as SubSection[]);
      } else {
        setSubSection(teamAugmentation as SubSection[]);
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

      if (selected === subSection.length - 1) {
        setIsFormCompleted(true);
      } else {
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
      <div
        className="bg-[#FFFFFF] font-hellix 
lg:w-[487px] w-full justify-center rounded-[16px] flex border-[#E0E0E0] border-[1px]"
      >
        <div className=" flex w-full lg:pt-8 ps-4 pt-4  lg:ps-8 pb-8">
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
            {errors && (
              <p className="text-red-500 text-xs">{errors.selection}</p>
            )}
          </div>
        </div>
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
        currentSection.labels?.forEach((item) => {
          if (!dropdownValues[item.label]) {
            newErrors[item.label] = `Please select ${item.label}`;
          }
        });

        if (!budget.trim()) {
          newErrors.budget = "Please specify your budget range";
        }
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

  const [dropdownValues, setDropdownValues] = useState<{
    [key: string]: string;
  }>({});

  console.log(dropdownValues);

  const handleDropdownChange = (label: string, value: string) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  };

  const SoftwareDevelopmentSection = () => {
    const currentSection = subSection[selected];

    switch (currentSection?.id) {
      case 1:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
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
            </div>
          </div>
        );
      case 2:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2 ">
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
            </div>
          </div>
        );
      case 3:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
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
            </div>
          </div>
        );
      case 4:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
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
            </div>
          </div>
        );
      case 5:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
        lg:h-[228px] xl:w-[487px] justify-center rounded-[12px] w-full  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full py-2 sm:p-4 md:p-8">
              <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
                <h1 className=" text-[#031924] font-normal text-[16px] leading-[19.2px]">
                  Comments
                </h1>
                <textarea
                  className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] px-1 lg:p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                  style={{ height: "auto", width: "100%" }}
                  rows={5}
                  cols={30}
                  onChange={(e) => setComments1(e.target.value)}
                  draggable={false}
                  placeholder="Enter"
                  value={comments1}
                />
              </div>
            </div>
          </div>
        );
      case 6:
        setDropBox(false);
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[16px] flex border-[#E0E0E0] border-[1px] items-center">
            <div className="flex w-full p-4 md:p-8">
              <div className="flex flex-col w-full gap-4">
                {currentSection?.labels?.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <DropDownWrapper
                      label={item.label}
                      option={item.dropval?.map((opt) => opt.label) || []}
                      onChange={(value) =>
                        handleDropdownChange(item.label, value)
                      }
                      selectedValue={dropdownValues[item.label] || ""}
                    />
                    {errors[item.label] && (
                      <p className="text-red-500 text-xs">
                        {errors[item.label]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
                    Do you have any budget limits? If yes, please, specify the
                    range.
                  </label>
                  <input
                    type="text"
                    value={budget}
                    placeholder="Enter budget range"
                    className="w-full text-[#999999] font-normal leading-5 text-[16px] border-b border-[#DDE4EE] focus:outline-none p-2"
                    onChange={(e) => setBudget(e.target.value)}
                  />
                  {errors.budget && (
                    <p className="text-red-500 text-xs">{errors.budget}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 7:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
     xl:w-[487px] justify-center rounded-[12px] w-full   lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full p-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className=" md:px-0 w-full flex flex-col gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                    value={name}
                    onChange={(e) => {
                      console.log("Name input event:", e.target.value);
                      setName(e.target.value);
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="xyz@gmail.com"
                    className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                    value={email}
                    onChange={(e) => {
                      console.log("Email input event:", e.target.value);
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        setDropBox(true);
        return (
          <div
            className="border-dashed-spaced font-hellix items-center 
             bg-[#FFFFFF] lg:h-[228px] w-full md:w-[380px] lg:w-[420px] xl:w-[487px] justify-center flex "
          >
            <div className=" flex justify-center items-center p-8 ">
              <div className=" mx-auto md:h-[104px] flex justify-between items-center  flex-col cursor-pointer">
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
            </div>
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
          <div
            className="bg-[#FFFFFF]  font-hellix 
     xl:w-[487px]   justify-center  rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
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
            </div>
          </div>
        );
      case 2:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
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
            </div>
          </div>
        );
      case 3:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4">
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
            </div>
          </div>
        );
      case 4:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
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
            </div>
          </div>
        );
      case 5:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
       xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4">
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
            </div>
          </div>
        );
      case 6:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
          lg:h-[228px] xl:w-[487px] justify-center rounded-[12px]  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full p-0 lg:p-8">
              <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
                <h1 className=" text-[#031924] font-normal text-[16px] leading-[19.2px]">
                  Comments
                </h1>
                <textarea
                  className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] px-1 lg:p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                  style={{ height: "auto", width: "100%" }}
                  rows={5}
                  cols={30}
                  onChange={(e) => setComments2(e.target.value)}
                  draggable={false}
                  placeholder="Enter"
                  value={comments2}
                />
              </div>
            </div>
          </div>
        );
      case 7:
        setDropBox(false);
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
     xl:w-[487px] justify-center rounded-[12px] w-full   lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full p-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className=" md:px-0 w-full flex flex-col gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                    value={name}
                    onChange={(e) => {
                      console.log("Name input event:", e.target.value);
                      setName(e.target.value);
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="xyz@gmail.com"
                    className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                    value={email}
                    onChange={(e) => {
                      console.log("Email input event:", e.target.value);
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 8:
        setDropBox(true);
        return (
          <div
            className="border-dashed-spaced font-hellix items-center 
             bg-[#FFFFFF] lg:h-[228px] w-full md:w-[380px] lg:w-[420px] xl:w-[487px] justify-center flex "
          >
            <div className=" flex justify-center items-center p-8 ">
              <div className=" mx-auto md:h-[104px] flex justify-between items-center  flex-col cursor-pointer">
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
            </div>
          </div>
        );
    }
  };
  console.log(selected, subSection?.length);

  console.log(isFormCompleted);

  useEffect(() => {
    if (isFormCompleted) {
      const resetTimer = setTimeout(() => {
        setDropBox(false);
        setSubSection([]);
        setSelected(0);
        setIsFormCompleted(false);
        setSelectedValue("");
        setStage("");
        setMarketOthers("");
        setServiceOthers("");
        setPlatformOthers("");
        setPlatform([]);
        setService([]);
        setMarket([]);
        setComments1("");
        setComments2("");
        setName("");
        setEmail("");
        setFile(null);
        setExpert([]);
        setTechnology([]);
        setDuration("");
        setCompanyType("");
        setSoftwareType("");
        setErrors({});
      }, 20000);

      return () => clearTimeout(resetTimer);
    }
  }, [isFormCompleted]);

  return (
    <div className="Prizing-section flex min-h-screen md:min-h-0  flex-col font-hellix w-full overflow-hidden">
      {show && (
        <ContactModal
          isLoading={isLoading}
          onFormSubmit={handleFormSubmit}
          isModalOpen={show}
          handleToggle={handleToggle}
        />
      )}
      <Toaster richColors />
      <Header
        width={"xl:w-[1136px] "}
        handleShowForms={handleToggle}
        background={backgroundColor}
      />
      <div ref={mainSectionRef}></div>
      <Toaster richColors />
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
        className="flex-grow w-full xl:w-[1136px] xl:mx-auto z-20 mb-10 flex-col justify-evenly items-center h-min  flex"
      >
        {!isFormCompleted ? (
          <div
            style={{
              backgroundImage: ` URL(${WavesPriceSection})`,
            }}
            className="lg:h-min flex-grow flex justify-center sm:justify-center bg-[rgba(255,255,255,1)] sm:items-center flex-col md:flex-row gap-10 items-start md:items-start py-8 md:py-16 xl:w-[1136px] w-11/12 rounded-xl md:rounded-[30px] border-[#E0E0E0] border-[1px] md:px-10 relative"
          >
            <div className="relative z-10  w-full flex justify-center  items-center  flex-col md:flex-row gap-10">
              <div className="flex w-full   sm:w-1/2  lg:w-1/2 lg:h-[119px] mb-auto justify-between flex-col px-2 md:px-0 gap-3 lg:gap-6 my-2">
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

                <p className=" font-medium lg:text-[17px] text-[15px] h-min inline-block py-2  leading-4 tracking-[0.02em] text-[#999999]">
                  {subSection.length === 0
                    ? selectSections[0]?.label
                    : subSection[selected]?.label}
                </p>
                <h1 className=" font-bold lg:text-[28px] text-[18px]  lg:leading-[39px] lg:-tracting-[0.02em] text-[#032435]">
                  {subSection.length === 0
                    ? selectSections[0]?.header
                    : subSection[selected]?.header}
                </h1>
              </div>
              <div className="lg:w-1/2  w-full px-2 flex justify-center items-center flex-col h-full gap-5">
                {subSection.length == 0 && <SelectingMainSection />}
                {selectedValue && selectedValue == "Software Development" ? (
                  <SoftwareDevelopmentSection />
                ) : (
                  <TeamAugmentationSection />
                )}

                <div className=" flex gap-10 lg:gap-6 ml-auto xl:w-[487px] justify-end md:mt-0 mt-4 font-hellix">
                  {subSection.length > 1 && (
                    <ButtonWrapper
                      className="bg-[#F1FAFF] p-3 xl:p-0 xl:h-[56px]  text-[#20B2FF] rounded-lg font-semibold 
          text-sm lg:text-base h-[46px] w-[120px] lg:w-[150px] lg:mx-0"
                      label={"Prev"}
                      onClick={handlePrevSection}
                    />
                  )}

                  <ButtonWrapper
                    className="bg-[#20B2FF] p-3 xl:p-0 xl:h-[56px]  text-white font-hellix rounded-lg font-semibold 
          text-sm lg:text-base h-[46px] w-[120px] lg:w-[150px]  lg:mx-0"
                    label={dropBox ? (!file ? "Skip" : "Next") : "Next"}
                    onClick={handleNextSection}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundImage: ` URL(${WavesPriceSection})`,
            }}
            className="lg:h-[428px] flex-grow flex justify-center sm:justify-center bg-[rgba(255,255,255,1)] sm:items-center flex-col md:flex-row gap-10 items-start md:items-start py-16 xl:w-[1136px] w-11/12 rounded-[30px] border-[#E0E0E0] border-[1px] md:px-10 relative"
          >
            <div className="  w-full h-full justify-center relative items-center  flex flex-row gap-2">
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
      <div className="  md:right-8 md:bottom-8 right-4 bottom-4 z-50 fixed">
        <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
