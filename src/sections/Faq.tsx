import React, { useState } from "react";
import AccordinDash from "../assets/AccordinDash.svg";
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  id: number;
  onClick: () => void;
  isLast: boolean;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
  isLast,
}) => {
  return (
    <div
      className={`w-full  border-b-[1px] py-6 ${
        isLast ? "border-b-0" : "border-b-[#ECECEC]"
      }`}
    >
      <div
        onClick={onClick}
        className="cursor-pointer flex justify-between items-center"
      >
        <p className="text-[#212735] text-[15px] w-3/4 md:text-[17px] font-bold">
          {title}
        </p>
        <img src={AccordinDash} alt="accordion icon" />
      </div>
      {isOpen && (
        <div className="text-[#999999] font-medium text-base leading-6 pt-3">
          {content}
        </div>
      )}
    </div>
  );
};
const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Can Economizing Futura help if I only have an idea?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
    {
      id: 2,
      title: "What types of web and mobile apps do you develop?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
    {
      id: 3,
      title: "Which platforms do you support?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
    {
      id: 4,

      title: "Do you offer post-launch support and maintenance?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
    {
      id: 5,

      title: "What is the cost of developing a web or mobile app?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
    {
      id: 6,

      title: "How do you ensure the security of my app?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
    {
      id: 7,

      title: "How does your development process work?",
      content:
        "Absolutely! At Economizing Futura, we specialise in turning ideas into reality. Whether you're starting with just a concept or have a fully developed plan, our team can guide you through every step, from refining your idea to creating a comprehensive strategy and executing it successfully. We're here to support you, no matter what stage you're at in the process.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="w-full max-w-md lg:max-w-[608px] flex flex-col lg:px-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Faq;
