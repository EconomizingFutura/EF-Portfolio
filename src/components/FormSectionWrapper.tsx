interface FormSectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  isComment?: boolean;
  isFile?: boolean;
}

const FormSectionWrapper: React.FC<FormSectionWrapperProps> = ({
  children,
  className = "",
  isFile,
  isComment,
}) => (
  <div
    className={
      isFile
        ? "border-dashed-spaced font-hellix items-center bg-[#FFFFFF] lg:h-[228px] w-full md:w-[380px] lg:w-[420px] xl:w-[487px] justify-center flex"
        : `bg-[#FFFFFF] font-hellix xl:w-[487px] justify-center rounded-[16px] flex border-[#E0E0E0] border-[1px] ${className}`
    }
  >
    <div
      className={
        isComment
          ? " flex w-full py-5 sm:p-4 md:p-8"
          : "flex w-full pt-4 ps-4 pb-4 lg:pt-8 lg:ps-8 lg:pb-8"
      }
    >
      {children}
    </div>
  </div>
);

export default FormSectionWrapper;
