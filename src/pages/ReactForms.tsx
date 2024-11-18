import React, { useEffect, useMemo, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactInputField from "./ReactInputField";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";

interface OrganizationalQuestion {
  label: string;
  value: string;
}
import Proppers from "../assets/Proppers.json";
import projectHeader from "../assets/projectsHeader.svg";
import {
  softwareDevelopment,
  teamAugmentation,
} from "../constants/PricingConstants";
import ButtonWrapper from "../components/ButtonWrapper";
import WavesPriceSection from "../assets/WavesPriceSection.svg";
import Lottie from "lottie-react";
import CustomSun from "../assets/CustomSun";
import { toast, Toaster } from "sonner";
import Header from "../sections/Header";
import ContactModal from "../modal/ContactModal";
import { contactAPI, ContactData } from "../api/ContactAPI";
import Footer from "../sections/Footer";
import EnqueryModal from "../modal/EnqueryModal";

export interface PricingData {
  name: string;
  email: string;
  comments?: string;
  softwareDevelopment?: boolean;
  teamAugumentation?: boolean;
  experts?: string[];
  marketOthers?: string;
  technology?: string[];
  marketing?: string[];
  services?: string[];
  duration?: string;
  companyType?: string;
  softwareType?: string;
  stage?: string;
  organizationalQuestions?: OrganizationalQuestion[];
  platform?: string[];
  budget?: string;
  file?: string;
  quoteType: string;
  platforms?: string;
  serviceothers: string;
}

interface SubSectionLabel {
  label: string;
  dropval?: { id: number; label: string }[];
}

const sectionColors = ["", "#FFFFFF"];

interface SubSection {
  id: number;
  header?: string;
  label?: string;
  labels?: SubSectionLabel[];
}

const ReactForms: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    setValue,
    setError,
    clearErrors,
    getValues,
  } = useForm<PricingData>();

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

  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  const [backgroundColor, setBackgroundColor] = useState<string>(
    sectionColors[0]
  );
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleBeforeUnload = () => {
      reset();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [reset]);
  const [selected, setSelected] = useState<number>(0);
  const [subData, setSubData] = useState<SubSection[]>([]);
  const [dropBox, setDropBox] = useState<boolean>(false);
  const quoteType = watch("quoteType");
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const handleNext = async () => {
    let isValid;

    if (subData.length === 0) {
      isValid = await trigger("quoteType");
    } else {
      switch (subData[selected].id) {
        case 1:
          if (quoteType == "team_augmentation") {
            isValid = await trigger("experts");
            break;
          } else {
            isValid = await trigger("stage");
            break;
          }

        case 2:
          if (quoteType == "team_augmentation") {
            isValid = await trigger("technology");
            break;
          } else {
            const formValues = getValues();
            const hasMarketing =
              formValues.marketing && formValues.marketing.length > 0;
            const hasMarketOthers =
              formValues.marketOthers && formValues.marketOthers.trim() !== "";

            if (!hasMarketing && !hasMarketOthers) {
              setError("marketing", {
                type: "manual",
                message:
                  "Please either select a market type or specify other markets",
              });
              isValid = false;
            } else {
              clearErrors("marketing");
              isValid = true;
            }
            break;
          }

        case 3: {
          if (quoteType == "team_augmentation") {
            isValid = await trigger("duration");
            break;
          } else {
            isValid = await trigger(["services", "serviceothers"]);
            break;
          }
        }
        case 4:
          if (quoteType == "team_augmentation") {
            isValid = await trigger("companyType");
            break;
          } else {
            isValid = await trigger(["platform", "platforms"]);
            break;
          }

        case 5:
          if (quoteType == "team_augmentation") {
            isValid = await trigger("softwareType");
            break;
          } else {
            isValid = await trigger("comments");
            break;
          }

        case 7:
          isValid = await trigger("name");
          isValid = await trigger("email");
          break;
        case 6: {
          if (quoteType == "team_augmentation") {
            isValid = await trigger("comments");
            break;
          } else {
            const currentSection = subData[selected];
            const organizationalFields =
              currentSection?.labels?.map(
                (_, index) => `organizationalQuestions.${index}.value`
              ) || [];

            const results = await Promise.all([
              ...organizationalFields.map((field) =>
                trigger(field as keyof PricingData)
              ),
              trigger("budget"),
            ]);

            isValid = results.every((result) => result === true);
            break;
          }
        }
        case 8:
          setIsFormCompleted(true);
          isValid = true;
          break;
        default:
          isValid = true;
      }
    }

    if (!isValid) return;

    if (quoteType === "software_development") {
      setSubData(softwareDevelopment as SubSection[]);
    } else if (quoteType === "team_augmentation") {
      setSubData(teamAugmentation as SubSection[]);
    }

    if (subData.length > 0) setSelected((prev) => prev + 1);
  };

  const handlePrevSection = () => {
    if (selected === 0) {
      setSubData([]);
      return;
    }

    if (subData.length > 0) {
      setSelected(selected - 1);
    }
  };

  const file = watch("file")?.[0] as File[] | undefined;

  const SoftwareDevelopment = () => {
    const currentSection = subData[selected];
    useEffect(() => {
      setDropBox(currentSection?.id === 8);
    }, [currentSection?.id]);

    switch (currentSection?.id) {
      case 1:
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
      xl:w-[487px]   justify-center  rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex flex-col w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <div
                    key={index}
                    className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                  >
                    <input
                      type="radio"
                      id={option.label}
                      value={option.label.toLowerCase().replace(/\s+/g, "_")}
                      {...register("stage", {
                        required: "Please select a project stage",
                      })}
                      className=" h-4 w-4 border-[#999999] rounded-full border-2"
                    />
                    <label
                      htmlFor={option.label}
                      className="cursor-pointer text-[#031924] lg:text-base font-medium text-sm leading-5 w-auto"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.stage && (
                <span className="text-red-500 text-xs">
                  {errors.stage.message}
                </span>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[12px] lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]">
            <div className="flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {currentSection?.labels?.map((option, index) => (
                    <div
                      key={index}
                      className=" lg:h-[32px] rounded-lg w-auto gap-4 bg-[#F4FAFF] p-2 justify-between md:px-2 flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={option.label}
                        value={option.label.toLowerCase().replace(/\s+/g, "_")}
                        {...register("marketing")}
                        className=" lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]"
                      />
                      <label
                        className="text-[#031924] lg:text-[17px] font-medium tracking-[0.02em] text-sm leading-5"
                        htmlFor={option.label}
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                  <ReactInputField
                    id="marketOthers"
                    label="others"
                    type="text"
                    placeholder="Enter"
                    register={register("marketOthers")}
                    others={true}
                  />
                </div>
                {errors.marketing && (
                  <span className="text-red-500 text-xs">
                    {errors.marketing.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[12px] lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]">
            <div className="flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {currentSection?.labels?.map((option, index) => (
                    <div
                      key={index}
                      className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                    >
                      <input
                        type="checkbox"
                        className=" lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]  "
                        id={option.label}
                        value={option.label}
                        {...register("services", {
                          validate: (value) => {
                            console.log("Validating services:", value);
                            return true;
                          },
                        })}
                      />

                      <label className="text-[#031924] lg:text-[17px] font-medium tracking-[0.02em] text-sm leading-5">
                        {option.label}
                      </label>
                    </div>
                  ))}
                  <ReactInputField
                    id="serviceothers"
                    label="others"
                    type="text"
                    placeholder="Enter your serviceothers"
                    register={register("serviceothers", {
                      validate: (value, formValues) => {
                        const hasServices =
                          formValues.services &&
                          (Array.isArray(formValues.services)
                            ? formValues.services.length > 0
                            : formValues.services !== "");

                        if (hasServices) {
                          return true;
                        }

                        return (
                          value?.trim() !== "" ||
                          "Please either select a service or specify other services"
                        );
                      },
                    })}
                    others={true}
                  />
                </div>

                {(errors.services || errors.serviceothers) && (
                  <span className="text-red-500 text-xs">
                    {errors.services?.message || errors.serviceothers?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[12px] lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]">
            <div className="flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4">
                  {currentSection?.labels?.map((option, index) => (
                    <div
                      key={index}
                      className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={option.label}
                        value={option.label.toLowerCase().replace(/\s+/g, "_")}
                        {...register("platform", {
                          validate: (value) => {
                            console.log("Validating platforms:", value);
                            return true;
                          },
                        })}
                        className=" lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]  "
                      />
                      <label className="text-[#031924] lg:text-[17px] font-medium tracking-[0.02em] text-sm leading-5">
                        {" "}
                        {option.label}
                      </label>
                    </div>
                  ))}
                  <ReactInputField
                    others={true}
                    id="platforms"
                    label="others"
                    type="text"
                    placeholder="Enter"
                    register={register("platforms", {
                      validate: (value, formValues) => {
                        const hasPlatforms =
                          formValues.platform &&
                          (Array.isArray(formValues.platform)
                            ? formValues.platform.length > 0
                            : formValues.platform !== "");

                        if (hasPlatforms) {
                          return true;
                        }

                        return (
                          value?.trim() !== "" ||
                          "Please either select a platform or specify other platforms"
                        );
                      },
                    })}
                    errorMessage={errors.platforms?.message}
                  />
                  {(errors.platform || errors.platforms) && (
                    <span className="text-red-500 text-xs">
                      {errors.platform?.message || errors.platforms?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
      lg:h-[228px] xl:w-[487px] justify-center rounded-[12px] w-full  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full py-5 sm:p-4 md:p-8">
              <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
                <h1 className="text-[#031924] font-normal text-[16px] leading-[19.2px]">
                  Comments
                </h1>
                <textarea
                  className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal min-h-[120px] p-3 border-[1px] rounded-lg border-[#DDE4EE] resize-y"
                  style={{ height: "auto", width: "100%" }}
                  rows={5}
                  cols={30}
                  {...register("comments", {
                    required: "Please enter your comments",
                  })}
                  placeholder="Enter"
                />
                {errors.comments && (
                  <span className="text-red-500 text-xs">
                    {errors.comments.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[16px] flex border-[#E0E0E0] border-[1px] items-center">
            <div className="flex w-full p-4 md:p-8">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col w-full gap-4">
                  {currentSection?.labels?.map((question, index) => (
                    <div
                      key={index}
                      className=" h-75px w-full flex flex-col justify-between gap-2"
                    >
                      <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
                        {question.label}
                      </label>
                      <select
                        {...register(`organizationalQuestions.${index}.value`, {
                          required: "This field is required",
                        })}
                        className="w-full bg-[#F9FBFC] cursor-pointer text-[#999999] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] lg:h-[48px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                      >
                        <option
                          value=""
                          className="text-[#999999] font-normal leading-5"
                          disabled
                        >
                          Select
                        </option>
                        {question.dropval?.map((option) => (
                          <option
                            key={option.id}
                            className="text-[#999999] font-normal leading-5"
                            value={option.label}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.organizationalQuestions?.[index]?.value && (
                        <span className="text-red-500 text-xs">
                          {
                            errors.organizationalQuestions[index]?.value
                              ?.message
                          }
                        </span>
                      )}
                    </div>
                  ))}
                  <ReactInputField
                    // others={true}
                    id="budget"
                    label=" Do you have any budget limits? If yes, please, specify the
                        range."
                    type="text"
                    placeholder="Enter your budget"
                    register={register("budget", {
                      required: "Budget is required",
                    })}
                    errorMessage={errors.budget?.message}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
   xl:w-[487px] justify-center rounded-[12px] w-full   lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full p-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className=" md:px-0 w-full flex flex-col gap-2">
                <ReactInputField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  register={register("name", {
                    required: "Name is required",
                  })}
                  errorMessage={errors.name?.message}
                />

                <ReactInputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  register={register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  errorMessage={errors.email?.message}
                />
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="border-dashed-spaced font-hellix items-center bg-[#FFFFFF] lg:h-[228px] w-full md:w-[380px] lg:w-[420px] xl:w-[487px] justify-center flex">
            <div className="flex justify-center items-center p-8">
              <div className="mx-auto md:h-[104px] flex justify-between items-center flex-col cursor-pointer">
                {watch("file")?.[0] ? (
                  <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between gap-6 items-center">
                    <div className="flex bg-[#e6eaeb] h-[40px] lg:w-[379px] px-4 rounded gap-1 md:gap-3 items-center">
                      <img src={File} alt="" />
                      <h1 className="truncate max-w-48 inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
                        {file?.[0]?.name as string}
                      </h1>
                    </div>
                    <div className="flex justify-center rounded-md items-center w-[119px] bg-[rgba(241,250,255,1)] lg:h-[40px] h-7">
                      <label
                        htmlFor="file"
                        className="text-primary text-base font-semibold leading-[19.2px] cursor-pointer"
                      >
                        Change File
                      </label>
                    </div>
                  </div>
                ) : (
                  <label htmlFor="file" className="cursor-pointer">
                    <img
                      src={Dropbox}
                      alt=""
                      className="h-[52px] w-[52px] mx-auto"
                    />
                    <p className="text-[#031924] font-medium text-center text-[16px]">
                      Choose a file or drag & drop it here
                    </p>
                    <p className="text-[#999999] font-normal text-[14px] text-center">
                      PDF and Doc up to 5MB
                    </p>
                  </label>
                )}

                <input
                  id="file"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  {...register("file", {
                    validate: (value) => {
                      if (value?.[0]) {
                        const file = value[0] as unknown as File;
                        const validTypes = [
                          "application/pdf",
                          "application/msword",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ];
                        const maxSize = 5 * 1024 * 1024;

                        if (!validTypes.includes(file.type)) {
                          return "Only PDF and Word documents are allowed";
                        }
                        if (file.size > maxSize) {
                          return "File must be less than 5MB";
                        }
                      }
                      return true;
                    },
                  })}
                />
                {errors.file && (
                  <span className="text-red-500 text-xs block mt-2">
                    {errors.file.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const TeamAugmentation = () => {
    const currentSection = subData[selected];
    useEffect(() => {
      setDropBox(currentSection?.id === 8);
    }, [currentSection?.id]);
    switch (currentSection?.id) {
      case 1:
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[12px] lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]">
            <div className="flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {currentSection?.labels?.map((option, index) => (
                    <div
                      key={index}
                      className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                    >
                      <input
                        type="checkbox"
                        className=" lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]  "
                        id={option.label}
                        value={option.label}
                        {...register("experts", {
                          validate: (value) => {
                            return Array.isArray(value) && value.length > 0
                              ? true
                              : "Please select at least one expert";
                          },
                        })}
                      />

                      <label className="text-[#031924] lg:text-[17px] font-medium tracking-[0.02em] text-sm leading-5">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.experts && (
                  <span className="text-red-500 text-xs">
                    {errors.experts?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[12px] lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]">
            <div className="flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {currentSection?.labels?.map((option, index) => (
                    <div
                      key={index}
                      className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                    >
                      <input
                        type="checkbox"
                        className=" lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]  "
                        id={option.label}
                        value={option.label}
                        {...register("technology", {
                          validate: (value) => {
                            return Array.isArray(value) && value.length > 0
                              ? true
                              : "Please select at least one technology";
                          },
                        })}
                      />

                      <label className="text-[#031924] lg:text-[17px] font-medium tracking-[0.02em] text-sm leading-5">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.technology && (
                  <span className="text-red-500 text-xs">
                    {errors.technology?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
        xl:w-[487px]   justify-center  rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex flex-col w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <div
                    key={index}
                    className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                  >
                    <input
                      type="radio"
                      id={option.label}
                      value={option.label.toLowerCase().replace(/\s+/g, "_")}
                      {...register("duration", {
                        required: "Please select a project duration",
                      })}
                      className=" h-4 w-4 border-[#999999] rounded-full border-2"
                    />
                    <label
                      htmlFor={option.label}
                      className="cursor-pointer text-[#031924] lg:text-base font-medium text-sm leading-5 w-auto"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.duration && (
                <span className="text-red-500 text-xs">
                  {errors.duration.message}
                </span>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
    xl:w-[487px]   justify-center  rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex flex-col w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <div
                    key={index}
                    className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                  >
                    <input
                      type="radio"
                      id={option.label}
                      value={option.label.toLowerCase().replace(/\s+/g, "_")}
                      {...register("companyType", {
                        required: "Please select a company type",
                      })}
                      className=" h-4 w-4 border-[#999999] rounded-full border-2"
                    />
                    <label
                      htmlFor={option.label}
                      className="cursor-pointer text-[#031924] lg:text-base font-medium text-sm leading-5 w-auto"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.companyType && (
                <span className="text-red-500 text-xs">
                  {errors.companyType.message}
                </span>
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix
      xl:w-[487px]   justify-center  rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex flex-col w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <div
                    key={index}
                    className=" lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center"
                  >
                    <input
                      type="radio"
                      id={option.label}
                      value={option.label.toLowerCase().replace(/\s+/g, "_")}
                      {...register("softwareType", {
                        required: "Please select a software type",
                      })}
                      className=" h-4 w-4 border-[#999999] rounded-full border-2"
                    />
                    <label
                      htmlFor={option.label}
                      className="cursor-pointer text-[#031924] lg:text-base font-medium text-sm leading-5 w-auto"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.softwareType && (
                <span className="text-red-500 text-xs">
                  {errors.softwareType.message}
                </span>
              )}
            </div>
          </div>
        );
      case 6:
        return (
          <div
            className="bg-[#FFFFFF] font-hellix 
      lg:h-[228px] xl:w-[487px] justify-center rounded-[12px] w-full  lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full py-5 sm:p-4 md:p-8">
              <div className=" flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full ">
                <h1 className="text-[#031924] font-normal text-[16px] leading-[19.2px]">
                  Comments
                </h1>
                <textarea
                  className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal min-h-[120px] p-3 border-[1px] rounded-lg text-[#999999] border-[#DDE4EE] resize-y"
                  style={{ height: "auto", width: "100%" }}
                  rows={5}
                  cols={30}
                  {...register("comments", {
                    required: "Please enter your comments",
                  })}
                  placeholder="Enter"
                />
                {errors.comments && (
                  <span className="text-red-500 text-xs">
                    {errors.comments.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div
            className="bg-[#FFFFFF]  font-hellix 
   xl:w-[487px] justify-center rounded-[12px] w-full   lg:rounded-[16px] flex border-[#E0E0E0] border-[1px]"
          >
            <div className=" flex w-full p-4 lg:pt-8 lg:ps-8 lg:pb-8">
              <div className=" md:px-0 w-full flex flex-col gap-2">
                <ReactInputField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  register={register("name", {
                    required: "Name is required",
                  })}
                  errorMessage={errors.name?.message}
                />

                <ReactInputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  register={register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  errorMessage={errors.email?.message}
                />
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="border-dashed-spaced font-hellix items-center bg-[#FFFFFF] lg:h-[228px] w-full md:w-[380px] lg:w-[420px] xl:w-[487px] justify-center flex">
            <div className="flex justify-center items-center p-8">
              <div className="mx-auto md:h-[104px] flex justify-between items-center flex-col cursor-pointer">
                {watch("file")?.[0] ? (
                  <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between gap-6 items-center">
                    <div className="flex bg-[#e6eaeb] h-[40px] lg:w-[379px] px-4 rounded gap-1 md:gap-3 items-center">
                      <img src={File} alt="" />
                      <h1 className="truncate max-w-48 inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
                        {file?.[0]?.name as string}
                      </h1>
                    </div>
                    <div className="flex justify-center rounded-md items-center w-[119px] bg-[rgba(241,250,255,1)] lg:h-[40px] h-7">
                      <label
                        htmlFor="file"
                        className="text-primary text-base font-semibold leading-[19.2px] cursor-pointer"
                      >
                        Change File
                      </label>
                    </div>
                  </div>
                ) : (
                  <label htmlFor="file" className="cursor-pointer">
                    <img
                      src={Dropbox}
                      alt=""
                      className="h-[52px] w-[52px] mx-auto"
                    />
                    <p className="text-[#031924] font-medium text-center text-[16px]">
                      Choose a file or drag & drop it here
                    </p>
                    <p className="text-[#999999] font-normal text-[14px] text-center">
                      PDF and Doc up to 5MB
                    </p>
                  </label>
                )}

                <input
                  id="file"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  {...register("file", {
                    validate: (value) => {
                      if (value?.[0]) {
                        const file = value[0] as unknown as File;
                        const validTypes = [
                          "application/pdf",
                          "application/msword",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ];
                        const maxSize = 5 * 1024 * 1024;

                        if (!validTypes.includes(file.type)) {
                          return "Only PDF and Word documents are allowed";
                        }
                        if (file.size > maxSize) {
                          return "File must be less than 5MB";
                        }
                      }
                      return true;
                    },
                  })}
                />
                {errors.file && (
                  <span className="text-red-500 text-xs block mt-2">
                    {errors.file.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    if (isFormCompleted) {
      reset({
        name: "",
        email: "",
        comments: "",
        quoteType: undefined,
        stage: undefined,
        companyType: undefined,
        services: undefined,
        platform: undefined,
        budget: "",
        file: undefined,
        organizationalQuestions: softwareDevelopment
          .find((section) => section.id === 6)
          ?.labels?.map(() => ({ value: "" })),
      });

      setSelected(0);
      setSubData([]);
      setDropBox(false);

      setValue("quoteType", "");

      const timer = setTimeout(() => {
        setIsFormCompleted(false);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [isFormCompleted, reset, setValue]);

  console.log(subData, quoteType);

  const onSubmit: SubmitHandler<PricingData> = (data) => {
    console.log("Form Data Submitted:", data);
  };
  console.log(selected >= 8 ? "submit" : "button");
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
                  {Array.from({ length: subData.length }, (_, index) => (
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
                  {subData.length === 0
                    ? selectSections[0]?.label
                    : subData[selected]?.label}
                </p>
                <h1 className=" font-bold lg:text-[28px] text-[18px]  lg:leading-[39px] lg:-tracting-[0.02em] text-[#032435]">
                  {subData.length === 0
                    ? selectSections[0]?.header
                    : subData[selected]?.header}
                </h1>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="lg:w-1/2  w-full px-2 flex justify-center items-center flex-col h-full gap-5"
              >
                {subData.length === 0 && (
                  <div
                    className="bg-[#FFFFFF] font-hellix 
             lg:w-[487px] w-full justify-center rounded-[16px] flex border-[#E0E0E0] border-[1px]"
                  >
                    <div className=" flex w-full lg:pt-8 ps-4 pt-4  lg:ps-8 pb-8">
                      <div className="flex flex-col gap-2">
                        <div className=" lg:h-[44px] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center">
                          <input
                            id="software_development"
                            type="radio"
                            className=" h-4 w-4 border-[#999999] rounded-full border-2"
                            value="software_development"
                            {...register("quoteType", {
                              required: "Please select a quote type",
                            })}
                          />
                          <label
                            htmlFor="software_development"
                            className="text-[#031924] lg:text-base font-medium text-sm leading-5"
                          >
                            Custom software development{" "}
                          </label>
                        </div>

                        <div className=" lg:h-[44px] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center">
                          <input
                            id="team_augmentation"
                            type="radio"
                            className=" h-4 w-4 border-[#999999] rounded-full border-2"
                            value="team_augmentation"
                            {...register("quoteType", {
                              required: "Please select a quote type",
                            })}
                          />
                          <label
                            htmlFor="team_augmentation"
                            className="text-[#031924] lg:text-base font-medium text-sm leading-5"
                          >
                            Team augmentation services
                          </label>
                        </div>

                        {errors.quoteType && (
                          <span className="text-red-500 text-xs block">
                            {errors.quoteType.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {quoteType === "software_development" && (
                  <SoftwareDevelopment />
                )}
                {quoteType === "team_augmentation" && <TeamAugmentation />}

                <div className=" flex gap-10 lg:gap-6 ml-auto xl:w-[487px] justify-end md:mt-0 mt-4 font-hellix">
                  {subData.length > 1 && (
                    <ButtonWrapper
                      className="bg-[#20B2FF] p-3 xl:p-0 xl:h-[56px]  text-white font-hellix rounded-lg font-semibold 
              text-sm lg:text-base h-[46px] w-[120px] lg:w-[150px]  lg:mx-0"
                      label={"Prev"}
                      onClick={handlePrevSection}
                    />
                  )}
                  <ButtonWrapper
                    className="bg-[#20B2FF] p-3 xl:p-0 xl:h-[56px]  text-white font-hellix rounded-lg font-semibold 
            text-sm lg:text-base h-[46px] w-[120px] lg:w-[150px]  lg:mx-0"
                    label={
                      dropBox ? (!watch("file")?.[0] ? "Skip" : "Next") : "Next"
                    }
                    onClick={handleNext}
                  />
                </div>
              </form>
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

export default ReactForms;
