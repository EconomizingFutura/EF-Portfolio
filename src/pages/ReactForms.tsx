import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactInputField from "../components/ReactInputField";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";
import FormLabels from "../components/FormLabels";
import Proppers from "../assets/Proppers.json";
import projectHeader from "../assets/projectsHeader.svg";
import {
  mainSelectionOptions,
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
import FormSectionWrapper from "../components/FormSectionWrapper";
import FormError from "../components/FormError";
import { PricingData } from "../api/PricingAPI";
import FormOptions from "../components/FormOptions";
import {
  selectSections,
  NameAndEmailPricing,
} from "../constants/PricingConstants";
import ManiSelection from "../components/ManiSelection";
import FormCheckboxInput from "../components/FormCheckboxInput";
import FormRadioCheckbox from "../components/FormCheckboxInput";
import FormTextArea from "../components/FormTextArea";
// import FormFileUpload from "../components/FormFileUpload";

interface SubSectionLabel {
  label: string;
  dropval?: { id: number; label: string }[];
}

type InputField = {
  id: keyof PricingData;
  label: string;
  type: string;
  placeholder: string;
  validation: object;
};

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [subData, setSubData] = useState<SubSection[]>([]);
  const [dropBox, setDropBox] = useState<boolean>(false);
  const quoteType = watch("quoteType");
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);
  const file = watch("file")?.[0] as File | undefined;
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
            const formValues = getValues();
            const hasMarketing =
              formValues.services && formValues.services.length > 0;
            const hasMarketOthers =
              formValues.serviceothers &&
              formValues.serviceothers.trim() !== "";

            if (!hasMarketing && !hasMarketOthers) {
              setError("services", {
                type: "manual",
                message:
                  "Please either select a service type or specify other services",
              });
              isValid = false;
            } else {
              clearErrors("services");
              isValid = true;
            }
          }
          break;
        }
        case 4: {
          if (quoteType == "team_augmentation") {
            isValid = await trigger("companyType");
            break;
          } else {
            const formValues = getValues();
            const hasMarketing =
              formValues.platform && formValues.platform.length > 0;
            const hasMarketOthers =
              formValues.platforms && formValues.platforms.trim() !== "";

            if (!hasMarketing && !hasMarketOthers) {
              setError("platform", {
                type: "manual",
                message:
                  "Please either select a service type or specify other services",
              });
              isValid = false;
            } else {
              clearErrors("platform");
              isValid = true;
            }
          }
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

    if (selected === subData.length - 1) {
      onSubmit(getValues());

      setIsFormCompleted(true);
      return;
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

  const SoftwareDevelopment = () => {
    const currentSection = subData[selected];
    useEffect(() => {
      setDropBox(currentSection?.id === 8);
    }, [currentSection?.id]);

    switch (currentSection?.id) {
      case 1:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <FormCheckboxInput
                    type="radio"
                    key={index}
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="stage"
                    register={register("stage", {
                      required: "Please select a project stage",
                    })}
                    small={true}
                  />
                ))}
              </div>
              <FormError errorMessage={errors.stage?.message as string} />
            </div>
          </FormSectionWrapper>
        );
      case 2:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {currentSection?.labels?.map((option, index) => (
                  <FormRadioCheckbox
                    key={index}
                    type="checkbox"
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="marketing"
                    register={register("marketing", {
                      required: "Please select a marketing type",
                    })}
                    small={true}
                  />
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
              <FormError errorMessage={errors.marketing?.message as string} />
            </div>
          </FormSectionWrapper>
        );
      case 3:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {currentSection?.labels?.map((option, index) => (
                  <FormRadioCheckbox
                    key={index}
                    type="checkbox"
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="services"
                    register={register("services")}
                    small={true}
                  />
                ))}
                <ReactInputField
                  id="serviceothers"
                  label="others"
                  type="text"
                  placeholder="Enter your service others"
                  register={register("serviceothers")}
                  others={true}
                />
              </div>

              <FormError errorMessage={errors.services?.message as string} />
            </div>
          </FormSectionWrapper>
        );
      case 4:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <FormRadioCheckbox
                    key={index}
                    type="checkbox"
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="platform"
                    register={register("platform")}
                    small={true}
                  />
                ))}
                <ReactInputField
                  others={true}
                  id="platforms"
                  label="others"
                  type="text"
                  placeholder="Enter"
                  register={register("platforms")}
                  errorMessage={errors.platforms?.message}
                />
                {(errors.platform || errors.platforms) && (
                  <FormError
                    errorMessage={
                      (errors.platform?.message as string) ||
                      (errors.platforms?.message as string)
                    }
                  />
                )}
              </div>
            </div>
          </FormSectionWrapper>
        );
      case 5:
        return (
          <FormSectionWrapper isComment={true}>
            <FormTextArea
              register={register("comments", {
                required: "Please enter your comments",
              })}
              errorMessage={errors.comments?.message as string}
            />
          </FormSectionWrapper>
        );
      case 6:
        return (
          <FormSectionWrapper className="pe-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col w-full gap-4">
                {currentSection?.labels?.map((question, index) => (
                  <div
                    key={index}
                    className=" h-75px w-full flex flex-col justify-between gap-2"
                  >
                    <FormLabels label={question.label} dropDown={true} />
                    <select
                      {...register(`organizationalQuestions.${index}.value`, {
                        required: "This field is required",
                      })}
                      defaultValue=""
                      className="w-full bg-[#F9FBFC] cursor-pointer text-[#999999] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] lg:h-[48px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
                    >
                      <FormOptions value="" options="Select" disabled={true} />
                      {question.dropval?.map((option) => (
                        <FormOptions
                          key={option.id}
                          value={option.label}
                          options={option.label}
                        />
                      ))}
                    </select>
                    {errors.organizationalQuestions?.[index]?.value && (
                      <FormError
                        errorMessage={
                          errors.organizationalQuestions[index]?.value
                            ?.message as string
                        }
                      />
                    )}
                  </div>
                ))}
                <ReactInputField
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
          </FormSectionWrapper>
        );
      case 7:
        return (
          <FormSectionWrapper isComment={true}>
            <div className=" md:px-0 w-full flex flex-col gap-2">
              {NameAndEmailPricing.map((field: InputField, index) => (
                <ReactInputField
                  key={index}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  register={register(field.id, field.validation)}
                  errorMessage={errors[field.id]?.message}
                />
              ))}
            </div>
          </FormSectionWrapper>
        );
      case 8:
        return (
          <FormSectionWrapper isFile={true} isComment={true}>
            <div className="mx-auto md:h-[104px] flex justify-between items-center flex-col cursor-pointer">
              {watch("file")?.[0] ? (
                <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between gap-6 items-center">
                  <div className="flex bg-[#e6eaeb] h-[40px] lg:w-[379px] px-4 rounded gap-1 md:gap-3 items-center">
                    <img src={File} alt="" />
                    <h1 className="truncate max-w-48 inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
                      {file?.name as string}
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
              <FormError errorMessage={errors.file?.message as string} />
            </div>
          </FormSectionWrapper>
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
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {currentSection?.labels?.map((option, index) => (
                  <FormCheckboxInput
                    type="checkbox"
                    key={index}
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="experts"
                    register={register("experts", {
                      required: "Please select at least one expert",
                    })}
                    small={true}
                  />
                ))}
              </div>
              <FormError errorMessage={errors.experts?.message as string} />
            </div>
          </FormSectionWrapper>
        );
      case 2:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {currentSection?.labels?.map((option, index) => (
                  <FormCheckboxInput
                    type="checkbox"
                    key={index}
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="technology"
                    register={register("technology", {
                      required: "Please select at least one technology",
                    })}
                    small={true}
                  />
                ))}
              </div>
              <FormError errorMessage={errors.technology?.message as string} />
            </div>
          </FormSectionWrapper>
        );
      case 3:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <FormRadioCheckbox
                    type="radio"
                    key={index}
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="duration"
                    register={register("duration", {
                      required: "Please select a project duration",
                    })}
                    small={true}
                  />
                ))}
              </div>
              {errors.duration && (
                <FormError errorMessage={errors.duration?.message as string} />
              )}
            </div>
          </FormSectionWrapper>
        );
      case 4:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <FormRadioCheckbox
                    key={index}
                    type="radio"
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="companyType"
                    register={register("companyType", {
                      required: "Please select a company type",
                    })}
                    small={true}
                  />
                ))}
              </div>
              {errors.companyType && (
                <FormError
                  errorMessage={errors.companyType?.message as string}
                />
              )}
            </div>
          </FormSectionWrapper>
        );
      case 5:
        return (
          <FormSectionWrapper>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4">
                {currentSection?.labels?.map((option, index) => (
                  <FormRadioCheckbox
                    key={index}
                    type="radio"
                    id={option.label}
                    label={option.label}
                    value={option.label}
                    name="softwareType"
                    register={register("softwareType", {
                      required: "Please select a software type",
                    })}
                    small={true}
                  />
                ))}
              </div>
              {errors.softwareType && (
                <FormError
                  errorMessage={errors.softwareType?.message as string}
                />
              )}
            </div>
          </FormSectionWrapper>
        );
      case 6:
        return (
          <FormSectionWrapper isComment={true}>
            <FormTextArea
              register={register("comments", {
                required: "Please enter your comments",
              })}
              errorMessage={errors.comments?.message as string}
            />
          </FormSectionWrapper>
        );
      case 7:
        return (
          <FormSectionWrapper isComment={true}>
            <div className=" md:px-0 w-full flex flex-col gap-2">
              {NameAndEmailPricing.map((field: InputField, index) => (
                <ReactInputField
                  key={index}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  register={register(field.id, field.validation)}
                  errorMessage={errors[field.id]?.message}
                />
              ))}
            </div>
          </FormSectionWrapper>
        );
      case 8:
        return (
          <FormSectionWrapper isFile={true} isComment={true}>
            <div className="mx-auto md:h-[104px] flex justify-between items-center flex-col cursor-pointer">
              {watch("file")?.[0] ? (
                <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between gap-6 items-center">
                  <div className="flex bg-[#e6eaeb] h-[40px] lg:w-[379px] px-4 rounded gap-1 md:gap-3 items-center">
                    <img src={File} alt="" />
                    <h1 className="truncate max-w-48 inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
                      {file?.name as string}
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
                <FormError errorMessage={errors.file?.message || ""} />
              )}
            </div>
          </FormSectionWrapper>
        );
      default:
        return null;
    }
  };

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
        organizationalQuestions: softwareDevelopment
          .find((section) => section.id === 6)
          ?.labels?.map(() => ({ value: "" })),
      });

      setSelected(0);
      setSubData([]);
      setDropBox(false);

      const timer = setTimeout(() => {
        setIsFormCompleted(false);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [isFormCompleted, reset, setValue]);

  const onSubmit: SubmitHandler<PricingData> = (data) => {
    console.log("Form Data Submitted:", data);
    console.log(typeof data);
  };
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
        <div
          style={{
            backgroundImage: ` URL(${WavesPriceSection})`,
          }}
          className={` ${
            isFormCompleted ? "lg:h-[428px]" : "lg:h-min"
          } flex-grow flex justify-center sm:justify-center bg-[rgba(255,255,255,1)] sm:items-center flex-col md:flex-row gap-10 items-start md:items-start py-16 xl:w-[1136px] w-11/12 rounded-[30px] border-[#E0E0E0] border-[1px] md:px-10 relative`}
        >
          {!isFormCompleted ? (
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
                  <FormSectionWrapper>
                    <div className="flex flex-col gap-2">
                      {mainSelectionOptions.map((option) => (
                        <ManiSelection
                          key={option.id}
                          id={option.id}
                          label={option.label}
                          value={option.value}
                          name="quoteType"
                          register={register}
                        />
                      ))}
                      {errors.quoteType && (
                        <FormError
                          errorMessage={errors.quoteType?.message as string}
                        />
                      )}
                    </div>
                  </FormSectionWrapper>
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
          ) : (
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
          )}
        </div>
      </section>
      <div className="  md:right-8 md:bottom-8 right-4 bottom-4 z-50 fixed">
        <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default ReactForms;
