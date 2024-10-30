import React, { useEffect, useState } from "react";
import InputFieldWrapper from "../components/InputFieldWrapper";
import ButtonWrapper from "../components/ButtonWrapper";
import CancelIcon from "../assets/CancelIcon.svg";

interface propsTypes {
  handleToggle: () => void;
  isModalOpen: boolean;
}

const ContactModal: React.FC<propsTypes> = ({ isModalOpen, handleToggle }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");

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
        className="cursor-pointer "
        alt=""
      />
      <div className="bg-white rounded-3xl px-5 lg:p-6 gap-5 flex flex-col justify-start items-start md:h-[557px] h-4/5 w-11/12 max-w-lg lg:max-w-2xl mx-4 lg:mx-0">
        <div className="w-full ">
          <h1 className="text-center md:text-start md:py-2.5 text-2xl lg:text-[32px] leading-[38.41px] text-[#24536E] font-bold">
            Contact Us
          </h1>
          <p className="font-medium md:py-2.5 text-xs lg:text-base leading-[19.2px] text-[#031924]">
            Please provide your email address, and our team will get in touch
            with you.
          </p>
        </div>

        <form className="w-full flex flex-col h-full gap-1 md:gap-3 py-2 justify-between lg:gap-6 ">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
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
          </div>
          <InputFieldWrapper
            label="Email"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={setEmail}
            className="text-[#999999]"
          />
          <InputFieldWrapper
            label="Comments"
            placeholder="Enter your message"
            value={comments}
            onChange={setComments}
            className="text-[#999999]"
          />
          <ButtonWrapper
            className="bg-[#20B2FF] h-[35px] md:h-[47px] rounded-lg font-semibold text-base leading-5 text-white w-full"
            label="Contact Us"
            onClick={() => console.log("Contact Us clicked")}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
