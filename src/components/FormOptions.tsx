import React from "react";
interface FormOptionsProps {
  options: string;
  disabled?: boolean;
  value?: string;
}
const FormOptions: React.FC<FormOptionsProps> = ({
  options,
  disabled,
  value,
}) => {
  return (
    <option
      value={value}
      className="text-[#999999] font-normal leading-5"
      disabled={disabled}
    >
      {options}
    </option>
  );
};

export default FormOptions;
