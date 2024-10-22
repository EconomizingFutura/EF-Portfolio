import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Clients: React.FC = () => {
  const [toggle, setToggle] = useState<number>(0);

  const sections = [
    {
      id: 1,
      title: "How we start",
      content: [
        {
          heading: "Arrange a Meeting : ",
          info: "Let’s explore how we can help you. Book a consultation to discuss your project needs and discover tailored solutions.",
        },
        {
          heading: "Partner with Us : ",
          info: "We’ll work closely with you to understand your vision, target audience, and desired outcomes, ensuring our approach aligns with your goals.",
        },
        {
          heading: "Maximize Technology’s Value : ",
          info: "Leverage your insights and our expertise to develop smart, scalable solutions that drive business success.",
        },
      ],
    },
    {
      id: 2,
      title: "How we work",
      content: [
        {
          heading: "Delivering Excellence Through Project-Based Outsourcing",
          info: "We are committed to delivering high-quality results by following a structured, project-based outsourcing model. This ensures efficiency, focus on your objectives, and precise execution from start to finish.",
        },
        {
          heading: "Focused and Flexible Approach",
          info: "Our project-based model combines flexibility with a focus on your project’s goals. We handle every phase of development, adhering to timelines and budgets, while delivering solutions tailored to your needs.",
        },
        {
          heading: "End-to-End Project Management",
          info: "From planning to final delivery, our comprehensive project outsourcing services manage the entire lifecycle, ensuring a smooth, efficient process with regular updates and rigorous quality control for successful outcomes.",
        },
      ],
    },
  ];

  const headers = [
    { id: 1, section: "How We Start" },
    { id: 2, section: "How We Work" },
  ];

  const activeSection = sections[toggle];

  const ToggleSection = () => {
    return (
      <div className="flex flex-col gap-10 w-full px-3.5 max-w-sm lg:my-8">
        {headers.map((header) => (
          <div
            key={header.id}
            onClick={() => setToggle(header.id - 1)}
            className={`relative h-[72px] w-full rounded-lg cursor-pointer shadow-clientCustom flex justify-between items-center bg-white`}
          >
            {toggle === header.id - 1 && (
              <div className="absolute -top-[0px] h-[8px]  border-b-4 w-3/4 rounded-lg border-b-white bg-[#20B2FF]"></div>
            )}
            <p className="font-semibold text-xl px-6">{header.section}</p>
            {toggle === header.id - 1 && (
              <ChevronRight className="text-[#666666] me-6" />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-2 w-full lg:w-[1137px] justify-center">
      <ToggleSection />
      <div className="flex flex-col w-full lg:max-w-[701px]">
        {activeSection.content.map((section, index) => (
          <div key={index} className="my-2 p-5 lg:h-40 ">
            <div className="flex items-center gap-8">
              <div className="relative inline-block bg-[#00A4FF] text-white font-bold text-lg p-2 rounded-md">
                Step {index + 1}
                <div className="absolute top-0 right-[-17px] w-0 h-0 border-t-[24px] border-b-[24px] border-l-[20px] border-transparent border-l-[#00A4FF]" />
              </div>
              <h2 className="font-bold lg:text-xl text-[18px]">
                {section.heading}
              </h2>
            </div>
            <p className="lg:text-[16px] text-[14px] text-[#999999] font-medium px-2 mt-4">
              {section.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
