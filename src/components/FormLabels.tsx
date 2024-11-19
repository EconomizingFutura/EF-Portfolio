import React from "react";

const FormLabels: React.FC<{
  label: string;
  small?: boolean;
  dropDown?: boolean;
}> = ({ label, small, dropDown }) => {
  return dropDown ? (
    <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
      {label}
    </label>
  ) : (
    <label
      htmlFor={label}
      className={`${
        small ? "lg:text-base" : "lg:text-[17px]"
      } text-[#031924] w-auto  font-medium tracking-[0.02em] text-sm leading-5`}
    >
      {label}
    </label>
  );
};

export default FormLabels;
