"use client";
import { ContactModal, EnqueryModal } from "@/modal";
import { Footer, Header } from "@/sections";
import React, { useRef, useState } from "react";
import BlogsCard from "./BlogsCard";
import Image from "next/image";
import { projectsHeader, Star } from "@/assets";
import { toast, Toaster } from "sonner";
import { blogs, blogsPage } from "@/constants/constants";
import { useScrollBackground } from "@/hooks/useScrollBackground";
import { contactAPI, ContactData } from "@/api/ContactAPI";
import { useTrackBlogView } from "@/hooks/useTrackBlogView";
import { useShowBlogsCount } from "@/hooks/useShowBlogsCount";
import { Eye } from "lucide-react";

type BlogsPageProps = {
  slug: string;
};

const BlogsPage = ({ slug }: BlogsPageProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => setShowModal(!showModal);
  const [backgroundColor, setBackgroundColor] = useState(blogsPage.default);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);

  const views = useShowBlogsCount(slug);

  useTrackBlogView(slug);
  useScrollBackground({
    mainRef: mainSectionRef,
    otherRef: techSectionRef,
    sectionColors: blogsPage,
    setBackgroundColor,
  });

  const handleFormSubmit = async (data: ContactData) => {
    if (!data.firstName || !data.lastName || !data.email || !data.comments) {
      toast.error("All fields are required");
      return;
    }
    try {
      await contactAPI(data, setIsLoading);
      toast.success("Message sent successfully");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const content = blogs.find((blog) => blog.slug === slug);
  const otherBlogs = blogs.filter((blog) => blog.slug !== slug).slice(0, 3);

  if (!content) return <div>Blog not found</div>;

  return (
    <>
      <div className="font-hellix min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="h-[32px] w-full" ref={mainSectionRef}>
          <Header handleShowForms={handleToggle} background={backgroundColor} />
        </div>

        {/* Decorative elements */}
        <div
          style={{ backgroundImage: `url(${projectsHeader})` }}
          className="h-60 w-full rounded-b-[50%] absolute blur-md md:top-0"
        />
        <div
          style={{ backgroundImage: `url(${projectsHeader})` }}
          className="h-[350px] w-[350px] rounded-full absolute blur-xl translate-x-2/3 pointer-events-none top-[20%] right-0 -rotate-90 opacity-80"
        />
        <div
          style={{ backgroundImage: `url(${projectsHeader})` }}
          className="md:h-[400px] md:w-[400px] h-[200px] w-32 rounded-full absolute blur-xl -translate-x-2/3 md:top-1/3 hidden md:block pointer-events-none left-0 rotate-90 opacity-80"
        />

        <div className="xl:right-8 xl:bottom-8 md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
          <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
        </div>

        <Toaster richColors />

        <section
          ref={techSectionRef}
          className="flex-grow flex flex-col justify-start items-start gap-8 max-w-7xl mx-auto xl:w-[1107px] overflow-x-hidden mt-16 py-8 sm:py-10 w-11/12 relative"
        >
          {/* Hero */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="flex gap-4 font-hellixMedium text-[12px] md:text-[16px] text-[#031924]">
                <p>{content.metadata.published_date}</p>
                <p className="flex items-center">
                  <Image
                    src={Star}
                    alt="Read time"
                    className="h-[14px] w-[14px] mr-1"
                  />
                  {content.metadata.read_time}
                </p>
                {views && typeof views === "number" && (
                  <p className=" flex items-center gap-1">
                    <Eye color="#20B2FF" size={18} />
                    {views} views
                  </p>
                )}
              </div>
              <h1 className="text-[#24536E] text-[32px] md:text-[44px] font-hellixBold leading-tight">
                {content.header}
              </h1>
              <p className="text-[#000000] text-[18px] md:text-[20px] leading-relaxed font-hellixMedium">
                {content.sub}
              </p>
            </div>

            <div className="w-full lg:w-1/2 relative h-[200px] md:h-[350px] lg:h-[412px] rounded-3xl overflow-hidden">
              <Image
                src={content.thumbnail}
                alt="Thumbnail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Blog body */}
          {content.subHeading && (
            <div className="w-full mt-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-[28px] md:text-[36px] text-[#24536E] font-hellixBold">
                  {content.subHeading.title}
                </h2>
                <h3 className="text-[20px] md:text-[24px] font-hellixMedium text-[#000000]">
                  {content.subHeading.subheading}
                </h3>
                <p className="text-[#000000] md:text-[18px] leading-relaxed font-hellix">
                  {content.subHeading.description}
                </p>
              </div>

              <div className="space-y-10">
                {content.subHeading.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-[22px] md:text-[26px] font-hellixBold text-[#24536E]">
                      {section.heading}
                    </h4>
                    <p className="text-[#000000] md:text-[18px] leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                    {section.image && (
                      <div className="w-full relative h-[200px] md:h-[400px] rounded-2xl overflow-hidden">
                        <Image
                          src={section.image}
                          alt={section.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <p className="text-[20px] md:text-[24px] font-hellixBold text-[#24536E]">
                  {content.subHeading.cta}
                </p>
              </div>
            </div>
          )}
        </section>

        {otherBlogs.length > 0 && (
          <section className="bg-[#ffffff] py-12 flex flex-col items-center w-full">
            <h2 className="text-[32px] md:text-[38px] font-hellixBold text-[#032435] mb-8 text-center">
              More Blogs
            </h2>
            <div className="flex flex-row xl:w-[1139px] h-min justify-center md:justify-start overflow-x-auto gap-4 md:gap-6 items-center  w-full sm:w-4/5 md:w-11/12">
              {otherBlogs.map((blog) => (
                <BlogsCard key={blog.slug} card={blog} />
              ))}
            </div>
          </section>
        )}

        <Footer />

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

export default BlogsPage;
