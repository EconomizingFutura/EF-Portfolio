import React, { useEffect } from "react";
import ButtonWrapper from "../components/ButtonWrapper";
import CancelIcon from "../assets/CancelIcon.svg";
import { ContactData } from "../api/ContactAPI";
import { Toaster } from "sonner";
import * as Yup from "yup";
import { Form } from "formik";

import { Formik } from "formik";

interface propsTypes {
  handleToggle: () => void;
  onFormSubmit: (data: ContactData) => void;
  isModalOpen: boolean;
  isLoading: boolean;
}

const ContactModal: React.FC<propsTypes> = ({
  isModalOpen,
  handleToggle,
  onFormSubmit,
  isLoading,
}) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    comments: Yup.string().required("Comments are required"),
  });

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#1e75bb] bg-opacity-40 flex flex-col justify-center items-center gap-3 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <img
        src={CancelIcon}
        onClick={handleToggle}
        className="cursor-pointer"
        alt=""
      />
      <Toaster richColors />
      <div className="bg-[#FFFFFF] rounded-2xl md:rounded-[30px] px-5 py-2 md:py-0 lg:p-6 gap-0 flex flex-col font-hellix justify-start items-start md:h-[567px] h-4/5 w-11/12 max-w-lg lg:max-w-2xl">
        <div className="w-full gap-3 flex flex-col md:h-[75px] justify-between">
          <h1 className="text-start text-2xl lg:text-[32px] md:leading-[38.41px] text-[#24536E] font-bold">
            Contact Us
          </h1>
          <p className="font-medium text-xs lg:text-base leading-[19.2px] text-[#031924]">
            Please provide your email address, and our team will get in touch
            with you.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onFormSubmit(values);
            handleToggle();
          }}
        >
          {(formik) => (
            <Form className="w-full flex flex-col h-full gap-1 md:gap-3 py-2 justify-between lg:gap-6">
              <div className="flex flex-col w-full lg:h-[72px] lg:flex-row gap-3 lg:gap-4">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-1 lg:gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="text-[#031924] lg:text-base text-xs leading-5"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...formik.getFieldProps("firstName")}
                      className="border-[#DDE4EE] bg-[#F9FBFC] focus:outline-none border resize-none placeholder:text-[#999999] rounded-md text-[#999999] lg:rounded-lg lg:p-3 px-2 p-1.5"
                      placeholder="First Name"
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-1 lg:gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="text-[#031924] lg:text-base text-xs leading-5"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...formik.getFieldProps("lastName")}
                      className="border-[#DDE4EE] bg-[#F9FBFC] focus:outline-none border resize-none rounded-md placeholder:text-[#999999] text-[#999999] lg:rounded-lg lg:p-3 px-2 p-1.5"
                      placeholder="Last Name"
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-[#031924] lg:text-base text-xs leading-5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    placeholder="xyz@gmail.com"
                    className="border-[#DDE4EE] bg-[#F9FBFC] focus:outline-none border resize-none placeholder:text-[#999999] rounded-md lg:rounded-lg lg:p-3 px-2 p-1.5 text-[#999999]"
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full gap-1.5">
                  <label
                    htmlFor="comments"
                    className="text-[#031924] lg:text-base text-sm leading-5"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    {...formik.getFieldProps("comments")}
                    className="w-full rounded-md bg-[#F9FBFC] border-gray-300 px-3 py-1 lg:py-2 text-[#999999] focus:outline-none border resize-none"
                    placeholder="Enter your message"
                    rows={3.5}
                  />
                </div>
                {formik.touched.comments && formik.errors.comments ? (
                  <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                    {formik.errors.comments}
                  </div>
                ) : null}
              </div>

              <ButtonWrapper
                className="bg-[#20B2FF] h-[35px] md:h-[47px] rounded-lg font-semibold text-base leading-5 text-white w-full"
                label="Contact Us"
                disabled={isLoading || formik.isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactModal;
