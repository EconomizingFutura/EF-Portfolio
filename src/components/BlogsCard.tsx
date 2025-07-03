import React from "react";

import { Arrow, BlogEllipse, Star, BlogsPerson } from "../assets/index";
import { useNavigate } from "react-router";

interface CardProps {
  card: {
    id: number;
    header: string;
    date: string;
    min: string;
    heading: string;
    sub: string;
    icon: string;
  };
}

const BlogsCard: React.FC<CardProps> = ({ card }) => {
  const blogsInfo = [
    {
      id: 1,
      header: card.header,
      icon: BlogsPerson,
    },
    {
      id: 2,
      header: card.date,
      icon: BlogEllipse,
    },
    {
      id: 3,
      header: card.min,
      icon: Star,
    },
  ];
  const navigate = useNavigate();
  const handleClick = (a: number) => {
    navigate(`/blog/${a}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-[90%] sm:w-[353px]  h-[395px] shrink-0 flex flex-col justify-between items-center relative  rounded-lg overflow-hidden">
      <img
        src={card.icon}
        className="h-[199px] object-cover rounded-[10px] w-full md:w-[353px]"
        alt=""
      />
      <div className="bg-[#F4F8FB] px-3 absolute bottom-0 flex flex-col w-11/12 sm:w-[337px] p-2 justify-evenly gap-[6px] rounded-[10px] h-[240px]">
        <div className="w-full h-[190px] flex flex-col gap-2 mx-auto ">
          <div className="h-[16px] md:gap-3 gap-1 flex ">
            {blogsInfo.map((a) => (
              <div
                key={a.id}
                className="justify-center md:gap-1 gap-1.5 items-center flex"
              >
                <img
                  src={a.icon}
                  alt=""
                  className={`${a.id == 1 && "md:h-[16px] md:w-[16px]"}`}
                />
                <p className="md:text-[12px] text-[10px]">{a.header}</p>
              </div>
            ))}
          </div>
          <div className=" h-[145px] w-full  flex flex-col md:gap-4 gap-2">
            <h1 className="text-[#111111] font-hellixBold text-[16px] md:text-[20px] leading-6">
              {card.heading}
            </h1>
            <h1 className="text-[#999999] font-hellixMedium text-[14px] md:text-[16px] leading-5">
              {card.sub}
            </h1>
          </div>
        </div>
        <button
          className="ml-auto text-primary font-hellixMedium text-sm float-end leading-6 flex justify-between w-[93px]"
          onClick={() => handleClick(card.id)}
        >
          Read Post
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
