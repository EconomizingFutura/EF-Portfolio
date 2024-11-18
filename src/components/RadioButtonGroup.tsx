import React from "react";

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  name: string;
  register: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    ref: React.Ref<HTMLInputElement>;
  };
  options: Option[];
};

const RadioGroup: React.FC<RadioGroupProps> = ({ name, register, options }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input type="radio" name={name} value={option.value} {...register} />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
