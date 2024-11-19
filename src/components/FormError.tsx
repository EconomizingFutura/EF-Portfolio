import React from "react";

interface FormErrorProps {
  errorMessage: string;
}

const FormError: React.FC<FormErrorProps> = ({ errorMessage }) => {
  return (
    <span className="text-red-500 text-xs font-hellix font-normal">
      {errorMessage}
    </span>
  );
};

export default FormError;
