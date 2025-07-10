import { UseFormRegister } from "react-hook-form";
import FormLabels from "./FormLabels";

interface FormCheckboxInputProps<T extends Record<string, unknown>> {
  id: string;
  small: boolean;
  label: string;
  type: "checkbox" | "radio";
  value?: string;
  register: ReturnType<UseFormRegister<T>>;
  name: keyof T;
  validation?: object;
}

const FormRadioCheckbox = <T extends Record<string, unknown>>({
  id,
  label,
  value,
  type,
  register,
  small,
}: FormCheckboxInputProps<T>) => {
  return (
    <div className="lg:h-[44x] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center">
      <input
        type={type}
        id={id}
        value={value || label.toLowerCase().replace(/\s+/g, "_")}
        // register={}
        {...register}
        className={`${
          type === "checkbox"
            ? "lg:h-4 lg:w-4 h-3 w-3 rounded-[2px] lg:p-2 border-[2px]"
            : "h-4 w-4 border-[#999999] rounded-full border-2"
        }`}
      />
      <FormLabels label={label} small={small} />
    </div>
  );
};

export default FormRadioCheckbox;
