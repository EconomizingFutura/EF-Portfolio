import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import FormLabels from "./FormLabels";
interface RadioInputProps<T extends FieldValues> {
  id: string;
  label: string;
  value: string;
  name: Path<T>;
  register: UseFormRegister<T>;
}
const ManiSelection = <T extends FieldValues>({
  id,
  label,
  value,
  name,
  register,
}: RadioInputProps<T>) => {
  return (
    <div className="lg:h-[44px] w-auto gap-2 bg-[#F4FAFF] rounded-lg p-2 flex items-center">
      <input
        id={id}
        type="radio"
        className="h-4 w-4 border-[#999999] rounded-full border-2"
        value={value}
        {...register(name, { required: "Please select a quote type" })}
      />
      <FormLabels label={label} small={true} />
    </div>
  );
};

export default ManiSelection;
