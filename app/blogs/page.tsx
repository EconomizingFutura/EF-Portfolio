"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header } from "@/sections/index";
import { ContactModal, EnqueryModal } from "@/modal/index";
import { WaveLeft, WaveRight, search, wave } from "@/assets/index";
import BlogsCard from "@/components/BlogsCard";
import { blogs } from "@/constants/constants";
// import { ContactData, contactAPI } from "../api/ContactAPI";
import { toast, Toaster } from "sonner";
import { ContactData } from "@/api/ContactAPI";
import { useScrollBackground } from "@/hooks/useScrollBackground";

const sectionColors = { default: "#c6ebff", scrolled: "#F4F8FB" };

const Blogs: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  const handleToggle = () => setShowModal(!showModal);

  const blogsFilter = [{ id: 1, header: "All" }];

  const [backgroundColor, setBackgroundColor] = useState(sectionColors.default);

  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

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
      //   const response = await contactAPI(data, setIsLoading);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useScrollBackground({
    mainRef: mainSectionRef,
    otherRef: techSectionRef,
    sectionColors,
    setBackgroundColor,
  });

  return (
    <>
      <Head>
        <title>Blog | Economizing Futura</title>
        <meta
          name="description"
          content="Read insights, case studies, and expert articles from Economizing Futura. Discover how we solve business problems with technology."
        />
        <link rel="canonical" href="https://economizingfutura.com/blogs" />
      </Head>

      <div className="min-h-screen mt-16 sm:mt-0 flex flex-col font-hellix">
        <Header handleShowForms={handleToggle} background={backgroundColor} />
        <Toaster richColors />

        <div
          ref={mainSectionRef}
          className="bg-[#BCE7FF] h-48 relative sm:h-60 md:h-72 lg:h-[322px] flex justify-between items-center"
          style={{
            backgroundImage: `url(${wave})`,
            backgroundRepeat: "repeat",
            backgroundPositionY: 0,
            backgroundPositionX: "0",
            backgroundColor: "#C8EBFF",
            backgroundSize: "50% 50%",
          }}
        >
          <Image
            src={WaveLeft}
            alt=""
            className="w-12 md:w-auto"
            draggable={false}
          />
          <h1 className="text-[#24536E] font-hellixBold text-3xl sm:text-4xl md:text-5xl text-center px-4">
            Blog
          </h1>
          <Image
            src={WaveRight}
            alt=""
            className="w-12 md:w-auto lg:pe-28"
            draggable={false}
          />
        </div>

        <div className="px-8 py-4 w-full max-w-[1140px] bg-[#FFFFFF] md:flex items-center justify-between mx-auto rounded-2xl mt-10 hidden absolute top-1/3 right-0 left-0">
          <div className="flex items-center gap-4 text-[#111111] text-[18px] font-hellixMedium">
            <span>Filter By :</span>

            <div className="flex gap-3 lg:h-[30px] lg:w-[454px]">
              {blogsFilter.map((blog) => (
                <button
                  key={blog.id}
                  className={`rounded h-[30px] px-2.5 ${
                    blog.header === activeFilter
                      ? "bg-[#20B2FF] text-white"
                      : "bg-[#F5F5F5]"
                  }`}
                  onClick={() => setActiveFilter(blog.header)}
                >
                  {blog.header}
                </button>
              ))}
            </div>
          </div>
          {blogs.length > 2 && (
            <div className="flex items-center justify-between border border-[#9CA4B5] rounded-[4px] h-[44px] w-[223px] max-w-[223px] text-[16px] placeholder:text-[#999999]">
              <Image src={search} alt="" className="mx-3" />
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search"
                className="focus:outline-none w-full pe-2"
                maxLength={20}
              />
            </div>
          )}
        </div>
        {/* Blog Cards Section */}
        <div className=" w-full bg-[#F4F8FB] overflow-hidden">
          <section
            ref={techSectionRef}
            className="max-w-[1139px]  flex min-h-screen mx-auto   items-start w-full py-20 justify-center"
          >
            <div
              className={`flex flex-wrap  ${
                blogs.length > 2
                  ? "justify-center items-center"
                  : "lg:justify-start justify-center items-start"
              }  gap-6 w-full `}
            >
              {blogs.map((a) => (
                <BlogsCard card={a} key={a.id} />
              ))}
            </div>
          </section>
        </div>

        <Footer />

        <div className="md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
          <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
        </div>

        {showModal && (
          <ContactModal
            isLoading={isLoading}
            onFormSubmit={handleFormSubmit}
            isModalOpen={showModal}
            handleToggle={handleToggle}
          />
        )}
      </div>
    </>
  );
};

export default Blogs;
