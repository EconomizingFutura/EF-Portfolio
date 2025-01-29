import React, { useEffect, useState } from "react";
import { un } from "../assets/index";
import Lottie from "lottie-react";
import { ButtonWrapper } from "../components/index";
import { X } from "lucide-react";
import { ContactData } from "../api/ContactAPI";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { MdOutlineInfo } from "react-icons/md";

interface PropsTypes {
  isLoading: boolean;
  onFormSubmit: (data: ContactData) => void;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
    .email("Invalid email address")
    .required("Email is required"),
  comments: Yup.string().required("Message is required"),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
}

const EnqueryModal: React.FC<PropsTypes> = ({ isLoading, onFormSubmit }) => {
  const [showForms, setShowForms] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleEmail = (values: FormValues) => {
    const email = "economizingfutura@gmail.com";
    const subject = "Initiating a Conversation";

    const body = `Hi,

I wanted to reach out regarding the following:

${values.comments}

Looking forward to your response.

Thank you,
${values.firstName} ${values.lastName}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      await onFormSubmit(values);
      handleEmail(values);
      resetForm();
      setShowForms(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setShowForms(false);
  }, []);

  return (
    <div
      className={`${
        !showForms
          ? "h-[56px] w-[56px]"
          : "h-[495px]   z-[9999] lg:h-[490px] xl:h-[540px] w-[275px] md:w-[290px] lg:w-[350px]"
      } flex flex-col justify-between items-end font-hellix`}
    >
      {showForms && (
        <div className="rounded-xl p-2.5 lg:px-5 lg:py-2 shadow-enquery flex flex-col justify-start items-start w-full bg-[#ffffff]">
          <div
            className="relative flex items-center cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <h1 className="text-[18px] flex xl:text-[20px] font-hellixBold leading-[1.2] text-[#24536E] mb-1.5 xl:mb-2.5">
              Contact Us
              <MdOutlineInfo className=" lg:mt-1 ms-1" />
            </h1>
            {showTooltip && (
              <div className="absolute top-full mt-1 left-0 bg-white p-3 border border-gray-200 shadow-lg rounded-md text-sm z-10">
                <p className="font-hellixMedium text-xs lg:text-base leading-[19.2px] lg:leading-[19.2px] text-[#031924]">
                  Please provide your email address so our team can get in touch
                  with you. For any issues, email us at{" "}
                  <span className=" text-primary cursor-pointer hover:underline">
                    economizingfutura@gmail.com
                  </span>
                </p>
              </div>
            )}
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              comments: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form className="w-full flex flex-col gap-y-0.5 xl:gap-y-2.5">
                <div className="min-h-[75px] relative">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-hellixMedium text-[#031924] md:mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First Name"
                    onKeyDown={(e) => {
                      if (
                        !/^[A-Za-z\s]+$/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Tab"
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="w-full xl:h-[44px] h-10 px-3 py-2 bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none "
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="absolute text-red-500 text-[10px]  lg:text-xs ">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="min-h-[75px] relative">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-hellixMedium text-[#031924] md:mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Last Name"
                    onKeyDown={(e) => {
                      if (
                        !/^[A-Za-z\s]+$/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Tab"
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="w-full xl:h-[44px] h-10 px-3 py-2 bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none "
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="absolute text-red-500 text-[10px]  lg:text-xs ">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="min-h-[75px] relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-hellixMedium text-[#031924] md:mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="xyz@gmail.com"
                    onKeyDown={(e) => {
                      if (
                        !/^[A-Za-z0-9@.]+$/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Tab"
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="w-full xl:h-[44px] h-10 px-3 py-2 bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none "
                  />
                  {errors.email && touched.email && (
                    <p className="absolute text-red-500 text-[10px]  lg:text-xs ">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="min-h-[90px] mb-3   md:mb-2 relative">
                  <label
                    htmlFor="comments"
                    className="block text-sm font-hellixMedium text-[#031924] md:mb-1"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={values.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your message"
                    rows={3}
                    onKeyDown={(e) => {
                      if (
                        !/^[A-Za-z0-9\s,]+$/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Tab"
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="w-full px-3 py-1  bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none  resize-none"
                  />
                  {errors.comments && touched.comments && (
                    <p className="absolute -bottom-2 text-red-500 text-[10px]  lg:text-xs ">
                      {errors.comments}
                    </p>
                  )}
                </div>

                <ButtonWrapper
                  className="bg-[#20B2FF] select-none h-[35px] md:h-[40px] rounded-lg font-hellixSemiBold text-white text-base w-full"
                  label="Submit"
                  type={true}
                  disabled={isLoading}
                />
              </Form>
            )}
          </Formik>
        </div>
      )}

      <div
        onClick={() => setShowForms((prev) => !prev)}
        className={`${
          !showForms ? "bg-white" : "bg-primary"
        } xl:w-[56px] h-12 w-12 xl:h-[56px] absolute bottom-0 cursor-pointer rounded-xl xl:rounded-[16px] shadow-enquery flex justify-center items-center ml-auto`}
      >
        {showForms ? (
          <X className="h-[40px] w-[40px]  text-[#ffffff]" />
        ) : (
          <Lottie
            animationData={un}
            loop={true}
            className="h-[40px] w-[40px]"
          />
        )}
      </div>
    </div>
  );
};

export default EnqueryModal;
