import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { blogs } from "../constants/constants";
import { Star, projectsHeader } from "../assets/index";
import { EnqueryModal, ContactModal } from "../modal/index";
import BlogsCard from "../components/BlogsCard";
import { Header, Footer } from "../sections/index";
import { ContactData } from "../api/ContactAPI";
import { toast, Toaster } from "sonner";
import { contactAPI } from "../api/ContactAPI";
import { Helmet } from "react-helmet";
const sectionColors = ["#e3f5ff", "#FFFFFF"];

const Blog: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  const handleFormSubmit = async (data: ContactData) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.comments === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await contactAPI(data, setIsLoading);
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainSectionTop =
        mainSectionRef.current?.getBoundingClientRect().top;
      const techSectionTop =
        techSectionRef.current?.getBoundingClientRect().top;

      if (mainSectionTop !== undefined && techSectionTop !== undefined) {
        if (techSectionTop < -90) {
          setBackgroundColor(sectionColors[1]);
        } else if (mainSectionTop < -120) {
          setBackgroundColor(sectionColors[0]);
        } else {
          setBackgroundColor(sectionColors[0]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const param = useParams<{ id?: string }>();

  const otherBlogs = blogs
    .filter((a) => a?.id !== Number(param?.id))
    .slice(0, 3);

  const content = blogs.filter((a) => a?.id == Number(param?.id))[0];
  return (
    <>
      <Helmet>
        <title>{content.header} | Economizing Futura</title>
        <meta
          name="description"
          content={
            content.heading ||
            content.sub ||
            "Read this article on Economizing Futura."
          }
        />
        <link
          rel="canonical"
          href={`https://economizingfutura.com/blog/${content.header}`}
        />
      </Helmet>
      <div className=" font-hellix min-h-screen flex flex-col overflow-x-hidden relative">
        {/* <div
        style={{ backgroundImage: `url(${projectHeader})` }}
        className="absolute bg-red-300 left-0 top-1/3"
      ></div> */}
        <div className=" h-[32px] w-full" ref={mainSectionRef}>
          <Header
            width={"xl:w-[1107px]"}
            handleShowForms={handleToggle}
            background={backgroundColor}
          />
        </div>
        {/* top */}
        <div
          style={{ backgroundImage: `url(${projectsHeader})` }}
          className=" h-60  w-full rounded-b-[50%] absolute blur-md md:top-0 "
        ></div>
        {/* right */}
        <div
          style={{ backgroundImage: `url(${projectsHeader})` }}
          className=" h-[350px] w-[350px] rounded-full absolute blur-xl translate-x-2/3 pointer-events-none top-[20%] right-0 -rotate-90 opacity-80"
        ></div>
        <div
          style={{ backgroundImage: `url(${projectsHeader})` }}
          className=" md:h-[400px] md:w-[400px] h-[200px] w-32 rounded-full absolute blur-xl -translate-x-2/3 md:top-1/3 hidden md:block pointer-events-none left-0 rotate-90 opacity-80"
        ></div>
        {/* enquery */}
        <div className="xl:right-8 xl:bottom-8  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
          <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
        </div>
        <Toaster richColors />
        <section
          ref={techSectionRef}
          className=" h-auto flex-grow flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto xl:w-[1107px] overflow-x-hidden  mt-16  py-8 sm:py-10 w-11/12 relative"
        >
          <div className="flex flex-col lg:flex-row justify-between w-full lg:h-[412px] gap-4">
            {/* Blog Details */}
            <div className="flex flex-col h-auto lg:h-full w-full lg:w-[532px] gap-4">
              <div className="flex justify-between  font-hellixMedium text-[12px] leading-[19.2px] md:text-[16px] md:w-[145px]  w-[116px] h-[19px] text-[#031924]">
                <p>{content.date}</p>
                <p className="flex items-center">
                  <img src={Star} alt="" className="h-[14px] w-[14px] mr-0.5" />
                  {content.min}
                </p>
              </div>
              <h1 className="text-[#24536E] text-[36px] md:text-[44px] font-hellixBold leading-[52.8px]">
                Blog Heading
              </h1>
              <p className=" text-[#000000] text-[18px] md:text-[20px] leading-[20px] md:leading-[28px] font-hellixMedium">
                Treva Chat is an advanced chatbot platform that allows users to
                ask questions and resolve their doubts with ease. It
                incorporates features like reference tracking for each
                conversation, providing a seamless way to continue discussions.
                Additionally, the chat history stores the last five
                conversations for user convenience, allowing quick reference to
                past interactions. Treva Chat also includes chat-specific
                ratings and feedback mechanisms to ensure quality interactions.
                User authentication and session management are built-in,
                offering a secure environment for personalised support.
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
            <h1 className="text-[24px] text-[#24536E] font-hellixBold md:leading-[38.14px] leading-[28.8px] md:text-[32px] mb-4">
              Heading
            </h1>
            <ul className="list-disc ml-6 space-y-2  text-[#000000]">
              {Array(7)
                .fill("")
                .map((_, i) => (
                  <li
                    key={i}
                    className=" md:text-[20px] md:leading-[28px] font-hellixMedium leading-[20px] text-[14px]"
                  >
                    Treva is a comprehensive platform designed to simplify
                    workflow management by integrating with GitHub and Google
                    Drive. It offers an intuitive dashboard for reviewing
                    workflows, managing user data, and visualising chat
                    sessions. Treva Chat provides a seamless chatbot experience
                    with conversation history, feedback mechanisms, and
                    reference tracking for enhanced support.
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <section className="h-min md:h-[657px] xl:overflow-x-hidden bg-[#F4FAFF] flex flex-col justify-evenly items-center w-full ">
          <h1 className="text-[32px] md:text-[38px] font-hellixBold text-[#032435] leading-tight text-center">
            More Blogs
          </h1>

          {/* Blog Card Container */}
          <div className="flex flex-row xl:w-[1139px] justify-start md:justify-between overflow-x-auto  gap-4 md:gap-6 items-center w-full sm:w-4/5 md:w-11/12 h-auto">
            {otherBlogs.map((a) => (
              <BlogsCard card={a} key={a.id} />
            ))}
          </div>
        </section>
        <Footer />
        {showModal && (
          <ContactModal
            onFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            isModalOpen={showModal}
            handleToggle={handleToggle}
          />
        )}
      </div>
    </>
  );
};

export default Blog;
