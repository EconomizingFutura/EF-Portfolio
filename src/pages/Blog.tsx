import React, { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ContactModal from "../modal/ContactModal";
import { useParams } from "react-router";
import { blogs } from "../constants/constants";
import Star from "../assets/Star.svg";
import EnqueryModal from "../modal/EnqueryModal";
import BlogsCard from "../components/BlogsCard";

const Blog: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleToggle = () => {
    setShowModal(!showModal);
  };
  const param = useParams<{ id?: string }>();
  console.log(blogs);

  const otherBlogs = blogs.filter((a) => a.id !== Number(param.id)).slice(0, 3);
  console.log(otherBlogs);

  const content = blogs.filter((a) => a.id == Number(param.id))[0];
  return (
    <div className=" min-h-screen flex flex-col overflow-x-hidden">
      <Header
        background="bg-[#c5eaff] lg:px-32"
        handleShowForms={handleToggle}
      />
      <div className="  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      <section className=" flex-grow flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto py-8 sm:py-10 w-11/12">
        <div className="flex flex-col lg:flex-row justify-between w-full lg:h-[412px] gap-4">
          {/* Blog Details */}
          <div className="flex flex-col h-auto lg:h-full w-full lg:w-[532px] gap-4">
            <div className="flex justify-between  font-medium text-[12px] leading-[19.2px] md:text-[16px] md:w-[145px]  w-[116px] h-[19px] text-[#031924]">
              <p>{content.date}</p>
              <p className="flex items-center">
                <img src={Star} alt="" className="h-[14px] w-[14px] mr-0.5" />
                {content.min}
              </p>
            </div>
            <h1 className="md:text-[44px] text-[24px] text-[#24536E] leading-[28.8px] md:leading-[52.81px] font-bold">
              Blog Heading
            </h1>
            <p className="text-base text-[#000000] leading-[20px] md:text-[20px] text-[14px] md:leading-[28px]">
              Treva Chat is an advanced chatbot platform that allows users to
              ask questions and resolve their doubts with ease. It incorporates
              features like reference tracking for each conversation, providing
              a seamless way to continue discussions. Additionally, the chat
              history stores the last five conversations for user convenience,
              allowing quick reference to past interactions. Treva Chat also
              includes chat-specific ratings and feedback mechanisms to ensure
              quality interactions. User authentication and session management
              are built-in, offering a secure environment for personalised
              support.
            </p>
          </div>

          {/* Blog Image */}
          <div className="h-[180px]  sm:h-auto lg:h-[412px] w-full lg:w-[532px] ">
            <img
              src={content.icon}
              alt=""
              className="w-full h-full object-cover max-w-full max-h-full"
            />
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-8 w-full px-2 lg:px-0 ">
          <h1 className="text-[24px] text-[#24536E] font-bold md:leading-[38.14px] leading-[28.8px] md:text-[32px] mb-4">
            Heading
          </h1>
          <ul className="list-disc ml-6 space-y-2  text-[#000000]">
            {Array(7)
              .fill("")
              .map((_, i) => (
                <li
                  key={i}
                  className=" md:text-[20px] md:leading-[28px] font-medium leading-[20px] text-[14px]"
                >
                  Treva is a comprehensive platform designed to simplify
                  workflow management by integrating with GitHub and Google
                  Drive. It offers an intuitive dashboard for reviewing
                  workflows, managing user data, and visualising chat sessions.
                  Treva Chat provides a seamless chatbot experience with
                  conversation history, feedback mechanisms, and reference
                  tracking for enhanced support.
                </li>
              ))}
          </ul>
        </div>
        <section className="min-h-screen xl:overflow-x-hidden flex flex-col justify-evenly items-center  md:p-6  md:h-[741px] bg-white">
          <h1 className="text-[32px] md:text-[38px] font-bold text-[#032435] leading-tight text-center">
            More Blogs
          </h1>

          {/* Blog Card Container */}
          <div className="flex flex-row xl:w-[1139px] justify-start md:justify-between overflow-x-auto  gap-4 md:gap-6 items-center w-full sm:w-4/5 md:w-11/12 h-auto">
            {otherBlogs.map((a) => (
              <BlogsCard card={a} key={a.id} />
            ))}
          </div>
        </section>
      </section>

      <Footer />
      {showModal && (
        <ContactModal isModalOpen={showModal} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Blog;
