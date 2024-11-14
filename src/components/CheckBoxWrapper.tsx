import React from "react";
interface CheckBoxWrapperProps {
  label: string;
  isChecked: boolean;
  onChange: (value: string) => void;
  value?: string;
}

const CheckBoxWrapper: React.FC<CheckBoxWrapperProps> = ({
  label,
  onChange,
  isChecked,
}) => {
  return (
    <div className=" lg:h-[32px] rounded-lg   w-auto gap-2 bg-[#F4FAFF] p-2 justify-between md:px-2 flex items-center">
      <input
        required
        type="checkbox"
        className=" lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]  "
        onChange={() => onChange(label)}
        checked={isChecked}
      />
      <label className="text-[#031924] lg:text-[17px] font-medium tracking-[0.02em] text-sm leading-5">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxWrapper;
