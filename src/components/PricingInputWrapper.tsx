import React from "react";

interface PricingInputWrapperProps {
  label: string;
  onChangeFunction: (value: string) => void;
  values: string;
}
const PricingInputWrapper: React.FC<PricingInputWrapperProps> = ({
  label,
  onChangeFunction,
  values,
}) => {
  return (
    <div className=" lg:h-[44px] w-auto  gap-2 flex items-center">
      <label className="text-[#031924] lg:text-base font-medium text-sm leading-5">
        {label} :
      </label>
      <input
        type="text"
        placeholder={label}
        className=" border-t-0 border-r-0 border-l-0 focus:border-b-[#999999] border-b-2 focus:outline-none"
        onChange={(e) => onChangeFunction(e.target.value)}
        value={values}
      />
    </div>
  );
};

export default PricingInputWrapper;
