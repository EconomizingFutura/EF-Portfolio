import React from "react";

interface RadioButtonWrapperProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  selectedValue: string;
}
const RadioButtonWrapper: React.FC<RadioButtonWrapperProps> = ({
  label,
  onChange,
  value,
  selectedValue,
}) => {
  return (
    <div className=" lg:h-[44px] w-auto gap-2 bg-[#F4FAFF] rounded-lg px-2 flex items-center">
      <input
        required
        className=" h-4 w-4 border-[#999999] rounded-full border-2"
        type="radio"
        name={label}
        checked={selectedValue === value}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <label className="text-[#031924] lg:text-base font-medium text-sm leading-5">
        {label}
      </label>
    </div>
  );
};

export default RadioButtonWrapper;
