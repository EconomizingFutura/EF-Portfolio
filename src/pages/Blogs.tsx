import React, { useState } from "react";
import Footer from "../sections/Footer";
import ContactModal from "../modal/ContactModal";
import WaveRight from "../assets/WaveRight.svg";
import WaveLeft from "../assets/WaveLeft.svg";
import BlogsCard from "../components/BlogsCard";
import searchIcon from "../assets/search.svg";
import { blogs } from "../constants/constants";
import EnqueryModal from "../modal/EnqueryModal";
import { Header } from "../components/Header";
const Blogs: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchInput, setSearchInput] = useState<string>("");
  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const blogsFilter = [
    { id: 1, header: "All" },
    { id: 2, header: "Manufacturing" },
    { id: 3, header: "Logistics" },
    { id: 4, header: "Retail" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header show_props={handleToggle}/>
      {/* Content Section */}
      <div className="flex-grow">
        {/* Hero Section */}
        <div
          className="bg-sky-200 h-48 relative sm:h-60 md:h-72 lg:h-[248px] flex justify-between items-center "
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(173, 216, 230, 0.2) 0%, rgba(173, 216, 230, 0) 50%, rgba(173, 216, 230, 0.2) 100%),
            linear-gradient(to right, rgba(135, 206, 235, 0.1) 15%, rgba(135, 206, 235, 0) 50%, rgba(135, 206, 235, 0.1) 100%),
            linear-gradient(to right, rgba(100, 149, 237, 0.05) 0%, rgba(100, 149, 237, 0) 50%, rgba(100, 149, 237, 0.05) 100%)
          `,
            backgroundSize: "100% 30px, 100% 20px, 100% 10px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 20%, 0 40%, 0 60%",
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

          <div className="absolute -bottom-9 hidden right-48  px-8 py-4 w-full max-w-[1140px] bg-[#ffffff]  xl:flex items-center justify-between rounded-2xl ">
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
            <div className="flex items-center justify-between  border-[1px] border-[#9CA4B5] rounded-[4px] h-[44px] w-[223px]  text-[16px]  placeholder:text-[#999999]">
              <img src={searchIcon} alt="search" className="px-2" />
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search blogs"
                className="focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="w-full flex min-h-screen  mx-auto justify-center items-center py-12 ">
          <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-[1139px]">
            {blogs.map((a) => (
              <BlogsCard card={a} key={a.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <div className="  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      
      {showModal && (
        <ContactModal isModalOpen={showModal} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Blogs;
