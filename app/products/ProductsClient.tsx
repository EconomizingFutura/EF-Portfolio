"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Header, Footer } from "@/sections/index";
import { EnqueryModal, ContactModal } from "@/modal/index";
import { WaveLeft, WaveRight, wave } from "@/assets/index";
import { toast, Toaster } from "sonner";
import ProductCard from "@/components/ProductCard";
import { products } from "../lib/products";
import { contactAPI, ContactData } from "@/api/ContactAPI";

const ProductsClient = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => setShow(!show);
  const backgroundColor = "#aee2ff";

  const handleFormSubmit = async (data: ContactData) => {
    if (!data.firstName || !data.lastName || !data.email || !data.comments) {
      toast.error("All fields are required");
      return;
    }
    try {
      await contactAPI(data, setIsLoading);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-hellix flex flex-col min-h-screen">
      <Header handleShowForms={handleToggle} background={backgroundColor} />
      <Toaster richColors />

      <div
        className="bg-[#BCE7FF] mt-16 sm:mt-0 h-48 sm:h-60 md:h-72 lg:h-[322px] flex justify-between items-center"
        style={{
          backgroundImage: `url(${wave.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "50% 50%",
          backgroundColor: "#C8EBFF",
        }}
      >
        <Image
          src={WaveLeft}
          alt=""
          className="w-12 md:w-auto"
          draggable={false}
        />
        <div className="text-center px-4">
          <h1 className="text-[#24536E] font-hellixBold text-3xl sm:text-4xl md:text-5xl">
            Our Products
          </h1>
          <p className="text-[#24536E] font-hellixMedium text-sm md:text-base mt-3 max-w-xl mx-auto">
            Ready-to-use tools we&apos;ve built in-house. Browse, then request
            access to get started.
          </p>
        </div>
        <Image
          src={WaveRight}
          alt=""
          className="w-12 md:w-auto lg:pe-28"
          draggable={false}
        />
      </div>

      <main className="flex-grow bg-[#FFFFFF] w-full">
        <section className="max-w-7xl mx-auto w-11/12 py-12 md:py-16">
          {products.length === 0 ? (
            <p className="text-center text-[#666666] font-hellixMedium">
              Products coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <p className="text-center text-[#999999] font-hellixMedium text-sm mt-10">
            Interested in a tool? Open one and request access — we&apos;ll get
            you set up.
          </p>
        </section>
      </main>

      <div className="md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
      </div>

      <Footer />

      {show && (
        <ContactModal
          isLoading={isLoading}
          onFormSubmit={handleFormSubmit}
          isModalOpen={show}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default ProductsClient;
