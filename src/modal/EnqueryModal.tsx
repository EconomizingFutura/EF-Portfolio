import React, { useEffect, useState } from "react";
import un from "../assets/un.json";
import Lottie from "lottie-react";
import ButtonWrapper from "../components/ButtonWrapper";
import { X } from "lucide-react";
import { ContactData } from "../api/ContactAPI";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

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

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      await onFormSubmit(values);
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
          : "h-[540px] md:h-[560px] xl:h-[620px] w-[275px] md:w-[300px] xl:w-[380px]"
      } flex flex-col justify-between items-end`}
    >
      {showForms && (
        <div className="rounded-xl p-2.5 xl:px-6 xl:py-5 shadow-enquery flex flex-col justify-start items-start w-full bg-[#ffffff]">
          <h1 className="text-[18px] xl:text-[24px] font-bold leading-[1.2] text-[#24536E] mb-4">
            Contact Us
          </h1>

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
              <Form className="w-full flex flex-col gap-y-2 xl:gap-y-4">
                <div className="min-h-[80px] relative">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#031924] mb-1"
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
                    className="w-full xl:h-[44px] h-10 px-3 py-2 bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none "
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="absolute text-red-500 text-xs ">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="min-h-[80px] relative">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#031924] mb-1"
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
                    className="w-full xl:h-[44px] h-10 px-3 py-2 bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none "
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="absolute text-red-500 text-xs ">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="min-h-[80px] relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#031924] mb-1"
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
                    className="w-full xl:h-[44px] h-10 px-3 py-2 bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none "
                  />
                  {errors.email && touched.email && (
                    <p className="absolute text-red-500 text-xs ">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="min-h-[85px]  mb-3 relative">
                  <label
                    htmlFor="comments"
                    className="block text-sm font-medium text-[#031924] mb-1"
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
                    className="w-full px-3 py-1  bg-[#F9FBFC] border border-[#DDE4EE] rounded-lg text-[#999999] placeholder:text-[#999999] focus:outline-none  resize-none"
                  />
                  {errors.comments && touched.comments && (
                    <p className="absolute text-red-500 text-xs">
                      {errors.comments}
                    </p>
                  )}
                </div>

                <ButtonWrapper
                  className="bg-[#20B2FF] h-[35px] md:h-[44px] rounded-lg font-semibold text-white text-base w-full"
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
        } md:w-[56px] h-12 w-12 md:h-[56px] absolute bottom-0 cursor-pointer rounded-[16px] shadow-enquery flex justify-center items-center ml-auto`}
      >
        {showForms ? (
          <X className="h-[40px] w-[40px] text-[#ffffff]" />
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
