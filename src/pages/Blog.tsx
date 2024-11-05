import React, { useEffect, useRef, useState } from "react";
import Footer from "../sections/Footer";
import ContactModal from "../modal/ContactModal";
import { useParams } from "react-router";
import { blogs } from "../constants/constants";
import Star from "../assets/Star.svg";
import EnqueryModal from "../modal/EnqueryModal";
import BlogsCard from "../components/BlogsCard";
import Header from "../sections/Header";
import projectHeader from "../assets/projectsHeader.svg";

const sectionColors = ["#e3f5ff", "#FFFFFF"];

const Blog: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  console.log(backgroundColor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            if (entry.target === mainSectionRef.current) {
              setBackgroundColor(sectionColors[0]);
              console.log("Main section in view");
            } else if (entry.target === techSectionRef.current) {
              setBackgroundColor(sectionColors[1]);
              console.log("Tech section in view");
            }
          }
        });
      },
      { threshold: 0.3 } // Adjust this for sensitivity in detecting section visibility
    );

    // Observe both sections
    const sections = [mainSectionRef, techSectionRef];
    sections.forEach((section) => {
      if (section.current) {
        console.log(`Observing section: ${section.current}`);
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) observer.unobserve(section.current);
      });
    };
  }, [backgroundColor]);

  const param = useParams<{ id?: string }>();
  console.log(blogs);

  const otherBlogs = blogs.filter((a) => a.id !== Number(param.id)).slice(0, 3);
  console.log(otherBlogs);

  const content = blogs.filter((a) => a.id == Number(param.id))[0];
  return (
    <div className=" font-hellix min-h-screen flex flex-col overflow-x-hidden">
      <div className=" bg-red-500 h-[32px] w-full" ref={mainSectionRef}>
        <Header
          width={"xl:w-[1107px]"}
          handleShowForms={handleToggle}
          background={backgroundColor}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${projectHeader})` }}
        className=" h-60 w-full absolute top-0 left-0 opacity-80"
      ></div>

      <div className="  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      <section
        ref={techSectionRef}
        className=" h-auto flex-grow flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto xl:w-[1107px]  mt-16  py-8 sm:py-10 w-11/12"
      >
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
          <div className="h-[180px]  sm:h-auto lg:h-[412px] w-full lg:w-[532px] z-10">
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
