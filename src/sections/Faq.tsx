import React, { useState } from "react";
import AccordinDash from "../assets/AccordinDash.svg";
import { Plus } from "lucide-react";

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
      className={`w-full border-b-[1px] py-6 ${
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
        {isOpen ? <img src={AccordinDash} alt="" /> : <Plus size={20} />}
      </div>
      {isOpen && (
        <div className="text-[#999999] font-medium text-sm md:text-base leading-6 pt-3">
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
        "We specialise in creating a wide range of web and mobile applications, including e-commerce platforms, social networking apps, productivity tools, and more, tailored to meet our clients' needs.",
    },
    {
      id: 3,
      title: "Which platforms do you support?",
      content:
        "We develop apps for multiple platforms, including Android, iOS, and cross-platform     solutions that work seamlessly across devices",
    },
    {
      id: 4,

      title: "Do you offer post-launch support and maintenance?",
      content:
        "Yes, we provide comprehensive post-launch support and maintenance to ensure your web or mobile app runs smoothly after it's live. Our services include regular updates, bug fixes, performance monitoring, security enhancements, and feature upgrades. We also offer ongoing technical support to address any issues or new requirements as your app evolves, helping you keep it up-to-date and fully functional for your users.",
    },
    {
      id: 5,

      title: "What is the cost of developing a web or mobile app?",
      content:
        "The cost varies based on the complexity and features of the app. We offer competitive pricing and custom solutions tailored to your budget and project scope.",
    },
    {
      id: 6,

      title: "How do you ensure the security of my app?",
      content:
        "We follow industry best practices for security, including data encryption, secure API integrations, and regular security audits to safeguard your web and mobile applications.",
    },
    {
      id: 7,

      title: "How does your development process work?",
      content:
        "Our process starts by understanding your idea and refining it into a clear roadmap. We then design intuitive user interfaces and experiences, followed by development using the latest technologies. After rigorous testing to ensure quality, we deploy your web or mobile app on the necessary platforms. Throughout the process, we keep you informed to ensure your vision is brought to life.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="w-full px-4  lg:max-w-[608px] flex flex-col  xl:px-0">
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
