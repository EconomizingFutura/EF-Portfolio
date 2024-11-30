import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  placeholder?: string;
  others?: boolean;
  isBudget?: boolean;
}

const ReactInputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  register,
  errorMessage,
  placeholder,
  others,
  isBudget,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      type === "email" &&
      !e.ctrlKey &&
      !e.key.match(
        /^[a-zA-Z0-9@._]|\b(Backspace|Delete|Tab|Enter|ArrowLeft|ArrowRight)\b$/
      )
    ) {
      e.preventDefault();
    }

    if (
      type === "text" &&
      !e.ctrlKey &&
      !e.key.match(
        isBudget
          ? /^[a-zA-Z0-9]|\b(Backspace|Delete|Enter|ArrowLeft|ArrowRight)\b$/
          : /^[a-zA-Z]|\b(Backspace|Delete|Enter|ArrowLeft|ArrowRight)\b$/
      )
    ) {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`gap-1.5   ${
        others
          ? "flex flex-row mt-1 justify-center items-center"
          : " flex flex-col w-full px-4"
      }`}
    >
      <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
        {others ? label + ":" : label}
      </label>
      <input
        id={id}
        type={type}
        className={
          others
            ? "border-t-0 border-r-0 placeholder:text-[11px] md:placeholder:text-[16px] w-full border-l-0 focus:border-b-[#999999] border-b-2 focus:outline-none text-[#999999]"
            : "w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[11px] md:placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE] text-[#999999]"
        }
        maxLength={60}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        {...register}
      />
      {!others && errorMessage && (
        <p className="text-red-500 text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export default ReactInputField;
