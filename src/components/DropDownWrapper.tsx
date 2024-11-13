import React from "react";
interface DropDownWrapperProps {
  label: string;
  option: string[];
  onChange: (value: string) => void;
}
const DropDownWrapper: React.FC<DropDownWrapperProps> = ({
  label,
  option,
  onChange,
}) => {
  return (
    <div className=" h-75px w-full flex flex-col justify-between gap-2">
      <h1 className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
        {label}
      </h1>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#F9FBFC] cursor-pointer placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
      >
        <option value="" disabled selected>
          Select
        </option>
        {option.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownWrapper;
