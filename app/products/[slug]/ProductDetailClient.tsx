"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Header, Footer } from "@/sections/index";
import { EnqueryModal, ContactModal } from "@/modal/index";
import { toast, Toaster } from "sonner";
import { products } from "../../lib/products";
import { contactAPI, ContactData } from "@/api/ContactAPI";

const ProductDetailClient = ({ slug }: { slug: string }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => setShow(!show);
  const backgroundColor = "#aee2ff";

  const product = products.find((p) => p.slug === slug);

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

  if (!product) {
    notFound();
  }

  const priceLabel =
    product.price == null
      ? "Custom pricing"
      : product.price === 0
      ? "Free"
      : `₹${product.price.toLocaleString("en-IN")}`;

  const meta = [
    { label: "Platform", value: product.platform },
    { label: "Version", value: product.version },
    { label: "Size", value: product.fileSize },
  ];

  return (
    <div className="font-hellix flex flex-col min-h-screen">
      <Header handleShowForms={handleToggle} background={backgroundColor} />
      <Toaster richColors />

      <main className="flex-grow w-11/12 max-w-6xl mx-auto py-12 md:py-20 mt-16">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 relative h-[260px] md:h-[380px] rounded-3xl overflow-hidden bg-[#F4F8FB] border border-[#DDE4EE] flex items-center justify-center">
            <Image
              src={product.image}
              alt={`${product.name} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-10"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <span className="text-[12px] font-hellixSemiBold text-[#20B2FF] bg-[#E8F7FF] px-3 py-1 rounded-full w-fit">
              {product.platform}
            </span>
            <h1 className="text-[#24536E] text-[32px] md:text-[44px] font-hellixBold leading-tight">
              {product.name}
            </h1>
            <p className="text-[#000000] text-[16px] md:text-[18px] font-hellixMedium leading-relaxed">
              {product.tagline}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-2 py-2">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[12px] text-[#999999] font-hellixMedium">
                    {m.label}
                  </span>
                  <span className="text-[15px] text-[#032435] font-hellixSemiBold">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              <span className="text-[32px] font-hellixBold text-[#032435]">
                {priceLabel}
              </span>
              {product.price != null && product.price !== 0 && (
                <span className="text-[13px] text-[#999999] font-hellixMedium">
                  one-time payment
                </span>
              )}
              {product.price === 0 && (
                <span className="text-[13px] text-[#999999] font-hellixMedium">
                  free download
                </span>
              )}
              {product.price == null && (
                <span className="text-[13px] text-[#999999] font-hellixMedium">
                  contact us for a quote
                </span>
              )}
            </div>

            {product.paymentLink ? (
              <a
                href={product.paymentLink}
                className="bg-[#20B2FF] hover:bg-[#1ba0e8] transition-colors h-[52px] rounded-lg font-hellixSemiBold text-[18px] text-white w-full sm:w-[260px] flex items-center justify-center"
              >
                {product.price === 0 ? "Get it now" : "Buy now"}
              </a>
            ) : (
              <button
                onClick={handleToggle}
                className="bg-[#20B2FF] hover:bg-[#1ba0e8] transition-colors h-[52px] rounded-lg font-hellixSemiBold text-[18px] text-white w-full sm:w-[260px]"
              >
                Request access
              </button>
            )}

            <p className="text-[13px] text-[#999999] font-hellixMedium">
              {product.paymentLink
                ? "Secure checkout. After payment you'll get your download link."
                : "Click “Request access” and our team will reach out with download & payment details."}
            </p>
          </div>
        </div>

        {/* Description */}
        <section className="mt-16">
          <h2 className="text-[24px] md:text-[30px] font-hellixBold text-[#24536E] mb-4">
            About {product.name}
          </h2>
          <p className="text-[#000000] md:text-[18px] font-hellix leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
        </section>

        {/* Features */}
        {product.features.length > 0 && (
          <section className="mt-12">
            <h2 className="text-[24px] md:text-[30px] font-hellixBold text-[#24536E] mb-6">
              What&apos;s included
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#E8F7FF] flex items-center justify-center">
                    <Check size={14} className="text-[#20B2FF]" />
                  </span>
                  <span className="text-[#000000] font-hellixMedium md:text-[17px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
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

export default ProductDetailClient;
