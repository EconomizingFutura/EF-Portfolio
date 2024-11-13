import React, { useEffect, useState } from "react";
import un from "../assets/un.json";
import Lottie from "lottie-react";
import ButtonWrapper from "../components/ButtonWrapper";
import InputFieldWrapper from "../components/InputFieldWrapper";
import { X } from "lucide-react";
import { ContactData } from "../api/ContactAPI";

interface PropsTypes {
  isLoading: boolean;
  onFormSubmit: (data: ContactData) => void;
}

const EnqueryModal: React.FC<PropsTypes> = ({ isLoading, onFormSubmit }) => {
  const [showForms, setShowForms] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !comments) {
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      onFormSubmit({ firstName, lastName, email, comments });
    } catch (error) {
      console.log(error);
    } finally {
      setFirstName("");
      setLastName("");
      setEmail("");
      setComments("");
      setShowForms(false);
    }
  };

  useEffect(() => {
    setShowForms(false);
  }, []);

  return (
    <div
      className={` ${
        !showForms
          ? "h-[56px] w-[56px] "
          : " h-[500px] md:h-[520px] lg:h-[600px] w-[275px]  lg:w-[350px] "
      } flex flex-col justify-between items-end  `}
    >
      {showForms && (
        <div className="rounded-xl p-2.5 lg:px-6 lg:py-5 gap-2 flex flex-col justify-start items-start w-full  lg:max-w-2xl mx-auto lg:mx-0 bg-[#ffffff]">
          <h1 className="text-[18px] lg:text-[24px] font-bold leading-[1.2] text-[#24536E] text-center md:text-start">
            Contact Us
          </h1>

          <form
            onSubmit={handleClick}
            className="w-full flex flex-col gap-y-2 lg:gap-y-4 "
          >
            <InputFieldWrapper
              label="First Name"
              placeholder="First Name"
              value={firstName}
              className="w-full text-[#999999]"
              onChange={setFirstName}
            />
            <InputFieldWrapper
              label="Last Name"
              placeholder="Last Name"
              value={lastName}
              className="w-full text-[#999999]"
              onChange={setLastName}
            />
            <div>
              <InputFieldWrapper
                label="Email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={setEmail}
                className=" text-[#999999]"
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <InputFieldWrapper
              label="Comments"
              placeholder="Enter your message"
              value={comments}
              onChange={setComments}
              className="text-[#999999]"
            />
            <ButtonWrapper
              className="bg-[#20B2FF] h-[35px] md:h-[47px] rounded-lg font-semibold text-white text-base w-full"
              label="Submit"
              disabled={isLoading}
            />
          </form>
        </div>
      )}
      <div
        onClick={() => setShowForms((prev) => !prev)}
        className={`${
          !showForms ? "bg-white" : "bg-primary"
        } w-[56px] h-[56px] absolute bottom-0 cursor-pointer rounded-[16px] shadow-enquery flex justify-center items-center ml-auto`}
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
