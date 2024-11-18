import React from "react";

interface InputsProps {
  name: string;
  email: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  errors: { [key: string]: string };
}

const Inputs: React.FC<InputsProps> = ({
  name,
  email,
  setName,
  setEmail,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1.5">
        <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
          Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && <p className="text-red-500 text-xs">{errors?.name}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#031924] text-xs xl:text-[16px] text-[14px] font-normal">
          Email
        </label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal h-[44px] p-3 flex gap-[10px] border-[1px] rounded-lg border-[#DDE4EE]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <p className="text-red-500 text-xs">{errors?.email}</p>
        )}
      </div>
    </div>
  );
};

export default Inputs;
