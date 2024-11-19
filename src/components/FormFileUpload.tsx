import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Dropbox from "../assets/Dropbox.svg";
import File from "../assets/File.svg";
import FormError from "./FormError";

interface FormFileUploadProps {
  register: UseFormRegister<FieldValues>;
  watch: (name: string) => unknown;
  errorMessage?: string;
}

const FormFileUpload: React.FC<FormFileUploadProps> = ({
  register,
  watch,
  errorMessage,
}) => {
  const fileList = watch("file") as FileList | undefined;
  const file = fileList?.[0];

  return (
    <div className="mx-auto md:h-[104px] flex justify-between items-center flex-col cursor-pointer">
      {file ? (
        <div className="md:w-[379px] md:max-w-[380px] max-w-[250px] h-[80px] md:h-[103px] flex flex-col justify-between gap-6 items-center">
          <div className="flex bg-[#e6eaeb] h-[40px] lg:w-[379px] px-4 rounded gap-1 md:gap-3 items-center">
            <img src={File} alt="" />
            <h1 className="truncate max-w-48 inline-block text-center my-auto text-sm leading-[16.8px] font-medium">
              {file.name}
            </h1>
          </div>
          <div className="flex justify-center rounded-md items-center w-[119px] bg-[rgba(241,250,255,1)] lg:h-[40px] h-7">
            <label
              htmlFor="file"
              className="text-primary text-base font-semibold leading-[19.2px] cursor-pointer"
            >
              Change File
            </label>
          </div>
        </div>
      ) : (
        <label htmlFor="file" className="cursor-pointer">
          <img src={Dropbox} alt="" className="h-[52px] w-[52px] mx-auto" />
          <p className="text-[#031924] font-medium text-center text-[16px]">
            Choose a file or drag & drop it here
          </p>
          <p className="text-[#999999] font-normal text-[14px] text-center">
            PDF and Doc up to 5MB
          </p>
        </label>
      )}

      <input
        id="file"
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx"
        {...register("file", {
          validate: (value) => {
            const fileList = value as unknown as FileList;
            const file = fileList?.[0];
            if (file) {
              const validTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ];
              const maxSize = 5 * 1024 * 1024;

              if (!validTypes.includes(file.type)) {
                return "Only PDF and Word documents are allowed";
              }
              if (file.size > maxSize) {
                return "File must be less than 5MB";
              }
            }
            return true;
          },
        })}
      />
      {errorMessage && <FormError errorMessage={errorMessage} />}
    </div>
  );
};

export default FormFileUpload;
