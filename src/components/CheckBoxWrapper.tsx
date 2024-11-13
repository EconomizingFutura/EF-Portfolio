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
    <div className=" lg:h-[32px] rounded-lg   w-auto gap-2 bg-[#F4FAFF] px-2 flex items-center">
      <input
        required
        type="checkbox"
        className=" h-4 w-4 "
        onChange={() => onChange(label)}
        checked={isChecked}
      />
      <label className="text-[#031924] lg:text-base font-medium text-sm leading-5">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxWrapper;
