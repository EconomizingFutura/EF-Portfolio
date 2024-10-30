import React from "react";
interface PropsTypes {
  className: string;
  label: string;
  onClick?: () => void;
}

const ButtonWrapper: React.FC<PropsTypes> = ({ className, label, onClick }) => {
  return (
    <button className={`${className} font-hellix`} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonWrapper;
