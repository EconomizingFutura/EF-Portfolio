import React from "react";
interface PropsTypes {
  className: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<PropsTypes> = ({
  className,
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${className} font-hellix`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonWrapper;
