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
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <div className="fixed inset-0 z-[1000] bg-[#1e75bb] gap-3 bg-opacity-40 flex flex-col justify-center items-center">
      <img
        src={CancelIcon}
        onClick={handleToggle}
        className=" cursor-pointer"
      />
      <div className="bg-white rounded-3xl p-6 h-[557px] gap-5 w-[740px] flex flex-col justify-start items-start">
        <div className=" mx-auto w-[644px]">
          <h1 className="text-start py-2.5 text-[32px] leading-[38.41px] text-[#24536E] font-bold">
            Contact Us
          </h1>
          <p className="font-medium py-2.5 text-base leading-[19.2px] text-[#031924]">
            Please provide your email address, and our team will get in touch
            with you.
          </p>
        </div>

        <form className="w-[644px] flex flex-col gap-6 mx-auto">
          <div className="flex justify-between gap-2">
            <InputFieldWrapper
              label="First Name"
              placeholder="Name"
              value={firstName}
              className="w-1/2"
              onChange={setFirstName}
            />
            <InputFieldWrapper
              label="Last Name"
              placeholder="Name"
              value={lastName}
              onChange={setLastName}
            />
          </div>
          <InputFieldWrapper
            label="Email"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={setEmail}
          />
          <InputFieldWrapper
            label="Comments"
            placeholder="Enter"
            value={comments}
            onChange={setComments}
          />
          <ButtonWrapper
            className="bg-[#20B2FF] h-[47px] rounded-lg font-semibold text-base leading-5 text-[#FFFFFF] w-[644px]"
            label="Contact Us"
            onClick={() => console.log("Contact Us clicked")}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
