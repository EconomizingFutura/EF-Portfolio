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

const sectionColors = ["#c6ebff", "#F4F8FB"];

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
      { threshold: 0.25, rootMargin: "0px 0px -40% 0px" }
    );

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

      <div className="px-8 py-4 w-full max-w-[1140px] bg-[#FFFFFF] md:flex items-center justify-between mx-auto rounded-2xl mt-10 hidden absolute top-1/3 right-0 left-0 ">
        <div className="flex items-center gap-4 text-[#111111] text-[18px] font-medium">
          <span>Filter By :</span>
          <div className="flex gap-3 lg:h-[30px] lg:w-[454px] ">
            {blogsFilter.map((blog) => (
              <button
                key={blog.id}
                className={`rounded h-[30px] px-2.5 ${
                  blog.header === activeFilter
                    ? "bg-[#20B2FF] text-white "
                    : "bg-[#F5F5F5]"
                }`}
                onClick={() => setActiveFilter(blog.header)}
              >
                {blog.header}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-[1px] border-[#9CA4B5] rounded-[4px] h-[44px] w-[223px] max-w-[223px] text-[16px] placeholder:text-[#999999]">
          <img src={searchIcon} alt="search" className="px-2" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
            className="focus:outline-none w-full pe-2"
            maxLength={20}
          />
        </div>
      </div>

      {/* Blog Cards Section */}
      <section
        ref={techSectionRef}
        className="w-full flex min-h-screen mx-auto bg-[#F4F8FB]  justify-center items-center py-20"
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
