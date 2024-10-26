import React from "react";

interface propsTypes {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
  pricing?: true;
}

const InputFieldWrapper: React.FC<propsTypes> = ({
  label,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 ">
      <label className="text-[#031924] text-base leading-5" htmlFor={label}>
        {label}
      </label>
      {label === "Comments" ? (
        <textarea
          id={label}
          required
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          draggable={false}
          className={`border-[#DDE4EE] focus:outline-none border resize-none  placeholder:text-[#F9FBFC] rounded-lg p-3 `}
        />
      ) : (
        <input
          className={`${className} border-[#DDE4EE] border
               placeholder:text-[#999999] text-[#999999]"
          }  focus:outline-none rounded-lg p-3 h-[48px]`}
          placeholder={placeholder}
          type={label === "Email" ? "email" : "text"}
          name={label}
          id={label}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default InputFieldWrapper;
