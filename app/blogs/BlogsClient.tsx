"use client";
import { BlogsCard } from "@/components/index";
import { Footer, Header } from "@/sections/index";
import React, { useRef, useState } from "react";
import { blogs } from "@/constants/constants";
import { toast } from "sonner";
import { ContactData } from "@/api/ContactAPI";

const BlogsClient = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => setShowModal(!showModal);
  const [backgroundColor] = useState("#aee2ff");
  const mainSectionRef = useRef<HTMLDivElement | null>(null);

  const handleFormSubmit = async (data: ContactData) => {
    if (!data.firstName || !data.lastName || !data.email || !data.comments) {
      toast.error("All fields are required");
      return;
    }
    try {
      // await contactAPI(data, setIsLoading);
      // toast.success("Message sent successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  void handleFormSubmit;
  void showModal;
  void isLoading;

  const blogContents = blogs;
  return (
    <div className="font-hellix relative flex flex-col min-h-screen bg-white overflow-hidden">
      <div className="h-[32px]" ref={mainSectionRef}>
        <Header handleShowForms={handleToggle} background={backgroundColor} />
      </div>

      <main className="flex-grow">
        <section className="w-11/12 max-w-7xl mx-auto py-10">
          <h1 className="text-[32px] md:text-[44px] font-hellixBold text-[#24536E] mb-8">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogContents.map((blog) => (
              <BlogsCard key={blog.id} card={blog} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogsClient;
