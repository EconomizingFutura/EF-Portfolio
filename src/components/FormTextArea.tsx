import { UseFormRegisterReturn } from "react-hook-form";
import FormError from "./FormError";

interface FormTextAreaProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  register,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col mx-5 h-[164px] md:mx-0 gap-2 w-full">
      <h1 className="text-[#031924] font-normal text-[16px] leading-[19.2px]">
        Comments
      </h1>
      <textarea
        className="w-full bg-[#F9FBFC] placeholder:text-[#999999] focus:outline-none placeholder:text-[16px] placeholder:font-normal min-h-[120px] p-3 border-[1px] rounded-lg text-[#999999] border-[#DDE4EE] resize-y"
        style={{ height: "auto", width: "100%" }}
        rows={5}
        cols={30}
        {...register}
        onKeyDown={(e) => {
          const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
          ];
          const isLetter = /^[a-zA-Z]$/.test(e.key);
          const isNumber = /^[0-9]$/.test(e.key);
          const isComma = e.key === ",";
          const isNavigationKey = allowedKeys.includes(e.key);

          if (!(isLetter || isNumber || isComma || isNavigationKey)) {
            e.preventDefault();
          }
        }}
        placeholder="Enter"
      />
      {errorMessage && <FormError errorMessage={errorMessage} />}
    </div>
  );
};

export default FormTextArea;
