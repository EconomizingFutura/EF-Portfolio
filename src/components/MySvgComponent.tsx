import React from "react";

const MySvgComponent: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M701 10c0-5.523-4.477-10-10-10H157c-5.523 0-10 4.477-10 10v36c0 5.523-4.477 10-10 10H10C4.477 56 0 60.477 0 66v66c0 5.523 4.477 10 10 10h681c5.523 0 10-4.477 10-10V10Z"
        fill="#fff"
      />
    </svg>
  );
};

export default MySvgComponent;
