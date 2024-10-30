import React, { useEffect, useRef, useState } from "react";
import Footer from "../sections/Footer";
import ContactModal from "../modal/ContactModal";
import WaveRight from "../assets/WaveRight.svg";
import WaveLeft from "../assets/WaveLeft.svg";
import BlogsCard from "../components/BlogsCard";
import searchIcon from "../assets/search.svg";
import { blogs } from "../constants/constants";
import EnqueryModal from "../modal/EnqueryModal";
import wave from "../assets/wave.svg";
import Header from "../sections/Header";

const sectionColors = ["#c6ebff", "#FFFFFF"];

const Blogs: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchInput, setSearchInput] = useState<string>("");
  const handleToggle = () => setShowModal(!showModal);

  const blogsFilter = [
    { id: 1, header: "All" },
    { id: 2, header: "Manufacturing" },
    { id: 3, header: "Logistics" },
    { id: 4, header: "Retail" },
  ];

  const [backgroundColor, setBackgroundColor] = useState(sectionColors[0]);

  console.log(backgroundColor);

  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  console.log(mainSectionRef, techSectionRef);

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
      { threshold: 0.25, rootMargin: "0px 0px -40% 0px" } // Adjust this for sensitivity in detecting section visibility
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
  }, []);

  return (
    <div className="min-h-screen mt-16 sm:mt-0 flex flex-col font-hellix">
      <Header
        width={"xl:w-[1139px]"}
        handleShowForms={handleToggle}
        background={backgroundColor}
      />

      {/* Hero Section */}
      <div
        ref={mainSectionRef}
        className="bg-[#BCE7FF] h-48 relative sm:h-60 md:h-72 lg:h-[322px] flex justify-between items-center"
        style={{
          backgroundImage: `url(${new URL(wave, window.location.origin)})`,
          backgroundRepeat: "repeat",
          backgroundPositionY: 0,
          backgroundPositionX: "0",
          backgroundColor: "#C8EBFF",
          backgroundSize: "50% 50%",
        }}
      >
        <img
          src={WaveLeft}
          alt="wave left"
          className="w-12 md:w-auto"
          draggable={false}
        />
        <h1 className="text-[#24536E] font-bold text-3xl sm:text-4xl md:text-5xl text-center px-4">
          Blog
        </h1>
        <img
          src={WaveRight}
          alt="wave right"
          className="w-12 md:w-auto lg:pe-28"
          draggable={false}
        />
      </div>

      {/* Filter Section (Separate Div for Observer) */}
      <div className="px-8 py-4 w-full max-w-[1140px] bg-[#ffffff] md:flex items-center justify-between mx-auto rounded-2xl mt-8 hidden ">
        {/* Filter Section */}
        <div className="flex items-center gap-4 text-[#111111] text-[18px] font-medium">
          <span>Filter By :</span>
          <div className="flex gap-5">
            {blogsFilter.map((blog) => (
              <button
                key={blog.id}
                className={`${
                  blog.header === activeFilter
                    ? "bg-[#20B2FF] text-white rounded px-4 py-1"
                    : "hover:bg-[#20B2FF]/20"
                }`}
                onClick={() => setActiveFilter(blog.header)}
              >
                {blog.header}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between border-[1px] border-[#9CA4B5] rounded-[4px] h-[44px] w-[223px] text-[16px] placeholder:text-[#999999]">
          <img src={searchIcon} alt="search" className="px-2" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search blogs"
            className="focus:outline-none"
          />
        </div>
      </div>

      {/* Blog Cards Section */}
      <section
        ref={techSectionRef}
        className="w-full flex min-h-screen mx-auto justify-center items-center py-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-[1139px]">
          {blogs.map((a) => (
            <BlogsCard card={a} key={a.id} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <div className="md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      {showModal && (
        <ContactModal isModalOpen={showModal} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Blogs;
