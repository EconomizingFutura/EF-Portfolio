"use client";
import React from "react";
import Image from "next/image";
import { Arrow, BlogEllipse, Star, BlogsPerson } from "@/assets/index";
import { useRouter } from "next/navigation";
import { BlogTypes } from "@/constants/constants";

interface BlogsCardProps {
  card: BlogTypes;
}

const BlogsCard: React.FC<BlogsCardProps> = ({ card }) => {
  const router = useRouter();
  const handleClick = (a: string) => {
    router.push(`/blog/${a}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const meta = [
    { id: 1, header: card.metadata.author, icon: BlogsPerson },
    { id: 2, header: card.metadata.read_time, icon: BlogEllipse },
    { id: 3, header: card.metadata.published_date, icon: Star },
  ];

  return (
    <div className="w-[90%] sm:w-[353px] h-[380px] sm:h-[395px] shrink-0 flex flex-col justify-between items-center relative  rounded-lg overflow-hidden">
      <Image
        src={card.thumbnail}
        alt=""
        fill
        className="h-[199px] object-cover rounded-4xl w-full md:w-[353px]"
      />

      <div className="bg-[#f9fbfc] px-3 absolute bottom-0 flex flex-col w-11/12 sm:w-[337px] p-2 justify-evenly gap-[6px] rounded-[10px] h-[240px]">
        <div className="w-full h-[190px] flex flex-col gap-2 mx-auto ">
          <div className="h-[16px] md:gap-3 gap-1 flex ">
            {meta.map((a) => (
              <div
                key={a.id}
                className="justify-center md:gap-1 gap-1.5 items-center flex"
              >
                <Image
                  src={a.icon}
                  alt=""
                  className={`${a.id == 1 && "md:h-[16px] md:w-[16px]"}`}
                />
                <p className="md:text-[12px] text-[10px]">{a.header}</p>
              </div>
            ))}
          </div>
          <div className=" h-[145px] md:h-[180px] w-full cursor-default flex flex-col md:gap-4 gap-2">
            <h1 className="text-[#111111] font-hellixBold text-[16px] md:text-[20px] leading-6">
              {card.heading}
            </h1>
            <h1 className="text-[#999999] h-1/3   line-clamp-6 font-hellixMedium text-[14px]  md:text-[16px] leading-5">
              {card.sub}
            </h1>
          </div>
        </div>
        <button
          className="ml-auto cursor-pointer text-primary font-hellixMedium text-sm float-end leading-6 flex justify-between w-[93px]"
          onClick={() => handleClick(card.slug)}
        >
          Read Post
          <Image src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
