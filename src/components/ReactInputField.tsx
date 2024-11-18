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
}

const ReactInputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  register,
  errorMessage,
  placeholder,
  others,
}) => {
  return (
    <div
      className={`gap-1.5  ${
        others
          ? "flex flex-row mt-1 justify-center items-center"
          : " flex flex-col"
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
            ? "border-t-0 border-r-0 border-l-0 focus:border-b-[#999999] border-b-2 focus:outline-none"
            : "w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE] text-[#999999]"
        }
        placeholder={placeholder}
        {...register}
      />
      {!others && errorMessage && (
        <p className="text-red-500 text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export default ReactInputField;
