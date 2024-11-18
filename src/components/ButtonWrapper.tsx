import React from "react";
interface PropsTypes {
  className: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  type?: boolean;
}

const ButtonWrapper: React.FC<PropsTypes> = ({
  className,
  label,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button
      type={type ? "submit" : "button"}
      disabled={disabled}
      className={`${className} font-hellix`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonWrapper;
