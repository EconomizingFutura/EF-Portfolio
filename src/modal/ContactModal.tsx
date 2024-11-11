import React, { useEffect, useState } from "react";
import InputFieldWrapper from "../components/InputFieldWrapper";
import ButtonWrapper from "../components/ButtonWrapper";
import CancelIcon from "../assets/CancelIcon.svg";
import { ContactData } from "../api/ContactAPI";
import { toast, Toaster } from "sonner";
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
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !comments) {
      toast.error("All fields are required");
      return;
    }
    onFormSubmit({ firstName, lastName, email, comments });
    handleToggle();
  };

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
      <Toaster richColors />
      <div className="bg-white rounded-2xl md:rounded-3xl px-5 py-2 md:py-0 lg:p-6 gap-5 flex flex-col font-hellix justify-start items-start md:h-[557px] h-4/5 w-11/12 max-w-lg lg:max-w-2xl ">
        <div className="w-full gap-6 flex flex-col md:h-[81px] md:py-1">
          <h1 className="text-start text-2xl lg:text-[32px] md:leading-[38.41px] text-[#24536E] font-bold">
            Contact Us
          </h1>
          <p className="font-medium text-xs lg:text-base leading-[19.2px] text-[#031924]">
            Please provide your email address, and our team will get in touch
            with you.
          </p>
        </div>

        <form
          className="w-full flex flex-col h-full gap-1 md:gap-3 py-2 justify-between lg:gap-6 "
          onSubmit={handleClick}
        >
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
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
