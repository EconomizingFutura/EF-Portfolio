import React from "react";
import Arrow from "../assets/Arrow.svg";
import BlogPerson from "../assets/BlogsPerson.svg";
import BlogEllipse from "../assets/BlogEllipse.svg";
import Star from "../assets/Star.svg";
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
      icon: BlogPerson,
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
  };

  return (
    <div className="w-[90%] sm:w-[353px]   h-[395px] shrink-0 flex flex-col justify-between items-center relative  rounded-lg overflow-hidden">
      <img
        src={card.icon}
        className="h-[199px] object-cover rounded-[10px] w-full md:w-[353px]"
        alt=""
      />
      <div className="bg-[#F4F8FB] absolute bottom-0 flex flex-col w-11/12 sm:w-[337px] p-2 justify-evenly gap-[6px] rounded-[10px] h-[240px]">
        <div className="w-full h-full flex flex-col justify-between mx-auto ">
          <div className="h-[16px] gap-2 flex">
            {blogsInfo.map((a) => (
              <div
                key={a.id}
                className="justify-center gap-1 items-center flex"
              >
                <img
                  src={a.icon}
                  alt=""
                  className={`${a.id == 1 && "md:h-[16px] md:w-[16px]"}`}
                />
                <p>{a.header}</p>
              </div>
            ))}
          </div>
          <h1 className="text-[#111111] font-bold text-[18px] md:text-[20px] leading-6">
            {card.heading}
          </h1>
          <h1 className="text-[#999999] font-medium text-[14px] md:text-[16px] leading-5">
            {card.sub}
          </h1>
        </div>
        <button
          className="ml-auto text-primary font-medium text-sm float-end leading-6 flex justify-between w-[93px]"
          onClick={() => handleClick(card.id)}
        >
          Read Post
          <img src={Arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
