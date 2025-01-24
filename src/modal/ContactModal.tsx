import React, { useEffect } from "react";
import { ButtonWrapper } from "../components/index";
import { CancelIcon } from "../assets/index";
import { ContactData } from "../api/ContactAPI";
import { Toaster } from "sonner";
import * as Yup from "yup";
import { Form } from "formik";
import { Formik } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
}

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
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#1e75bb] bg-opacity-40 flex flex-col justify-center items-center shadow-enquery gap-1  md:gap-2 lg:gap-2.5 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <img
        src={CancelIcon}
        onClick={handleToggle}
        className="cursor-pointer h-10 md:h-12 lg:h-auto"
        alt=""
      />
      <Toaster richColors />
      <div className="bg-[#FFFFFF]  rounded-2xl md:rounded-[30px] px-5 py-1 lg:py-5 lg:px-10 gap-0 flex flex-col font-hellix justify-start items-start md:h-[min-content] lg:h-[517px] h-4/5 w-11/12 max-w-lg lg:max-w-2xl">
        <div className="w-full gap-2.5 flex flex-col md:h-[90px] justify-between">
          <h1 className="text-start text-xl lg:text-[32px] lg:leading-[38.41px] md:leading-[38.41px] text-[#24536E] font-hellixBold">
            Contact Us
          </h1>
          <p className="font-hellixMedium text-xs lg:text-base leading-[19.2px] lg:leading-[19.2px] text-[#031924]">
            Please provide your email address so our team can get in touch with
            you. For any issues, email us at{" "}
            <span className=" text-primary cursor-pointer hover:underline">
              economizingfutura@gmail.com
            </span>
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onFormSubmit(values);
            handleToggle();
            handleEmail(values);
          }}
        >
          {(formik) => (
            <Form className="w-full flex flex-col h-full gap-0.5 md:gap-3 py-2 justify-evenly  lg:gap-4">
              <div className="flex flex-col w-full lg:h-[72px] lg:flex-row gap-1.5 lg:gap-4">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-1">
                    <label
                      htmlFor="firstName"
                      className="text-[#031924] lg:text-[16px] text-[12px] leading-[19.2px]"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...formik.getFieldProps("firstName")}
                      className="border-[#DDE4EE] bg-[#F9FBFC] focus:outline-none border resize-none placeholder:text-[#999999] rounded-md text-[#999999] lg:rounded-lg lg:p-3 px-2 p-1.5"
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
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-1">
                    <label
                      htmlFor="lastName"
                      className="text-[#031924] lg:text-[16px] text-[12px] leading-[19.2px]"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...formik.getFieldProps("lastName")}
                      className="border-[#DDE4EE] bg-[#F9FBFC] focus:outline-none border resize-none rounded-md placeholder:text-[#999999] text-[#999999] lg:rounded-lg lg:p-3 px-2 p-1.5"
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
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col w-full lg:h-[75px] ">
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="email"
                    className="text-[#031924] lg:text-[16px] text-[12px] leading-[19.2px]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    placeholder="xyz@gmail.com"
                    className="border-[#DDE4EE] bg-[#F9FBFC] focus:outline-none border resize-none placeholder:text-[#999999] rounded-md lg:rounded-lg lg:px-3 lg:p-0 px-2 p-1.5 text-[#999999] lg:h-12"
                    onKeyDown={(e) => {
                      if (
                        !/^[A-Za-z0-9@.]+$/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Tab"
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="comments"
                    className="text-[#031924] lg:text-[16px] text-[12px] leading-[19.2px]"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    {...formik.getFieldProps("comments")}
                    className="w-full rounded-md bg-[#F9FBFC] border-gray-300 px-3  lg:py-2 text-[#999999] focus:outline-none border resize-none"
                    placeholder="Enter your message"
                    rows={3.5}
                    onKeyDown={(e) => {
                      if (
                        !/^[A-Za-z0-9\s,]+$/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Tab"
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                {formik.touched.comments && formik.errors.comments ? (
                  <div className="text-red-500 text-[8px] sm:text-[10px] lg:text-xs">
                    {formik.errors.comments}
                  </div>
                ) : null}
              </div>

              <ButtonWrapper
                className="bg-[#20B2FF] h-[35px] md:h-[47px] rounded-lg font-hellixSemiBold text-base leading-5 text-white w-full"
                type={true}
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
