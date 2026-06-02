"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import { Header, Footer } from "@/sections/index";
import { products } from "../lib/products";

const DownloadClient = () => {
  const [backgroundColor] = useState("#aee2ff");
  const searchParams = useSearchParams();

  const slug = searchParams.get("product");
  // Razorpay appends this to the callback_url after a Payment Link is paid.
  const status = searchParams.get("razorpay_payment_link_status");
  const product = products.find((p) => p.slug === slug);

  // If Razorpay sent a status, require it to be "paid"; otherwise allow
  // (e.g. when testing or arriving from an email link).
  const paymentOk = !status || status === "paid";

  return (
    <div className="font-hellix flex flex-col min-h-screen">
      <Header handleShowForms={() => {}} background={backgroundColor} />

      <main className="flex-grow w-11/12 max-w-2xl mx-auto py-24 mt-16 text-center flex flex-col items-center gap-5">
        {!product ? (
          <>
            <h1 className="text-[28px] md:text-[36px] font-hellixBold text-[#24536E]">
              Thank you for your purchase
            </h1>
            <p className="text-[#666666] font-hellixMedium">
              We couldn&apos;t match your purchase to a product automatically.
              If your download doesn&apos;t arrive by email shortly, please{" "}
              <Link href="/" className="text-[#20B2FF] hover:underline">
                contact us
              </Link>{" "}
              and we&apos;ll send it right over.
            </p>
          </>
        ) : !paymentOk ? (
          <>
            <h1 className="text-[28px] md:text-[36px] font-hellixBold text-[#24536E]">
              Payment not completed
            </h1>
            <p className="text-[#666666] font-hellixMedium">
              It looks like the payment for{" "}
              <span className="font-hellixSemiBold">{product.name}</span> was not
              completed.
            </p>
            <Link
              href={`/products/${product.slug}`}
              className="bg-[#20B2FF] hover:bg-[#1ba0e8] transition-colors h-[50px] px-8 rounded-lg font-hellixSemiBold text-white flex items-center justify-center"
            >
              Try again
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-[28px] md:text-[36px] font-hellixBold text-[#24536E]">
              Thank you for purchasing {product.name}!
            </h1>
            <p className="text-[#666666] font-hellixMedium">
              Your payment was successful. Your download is ready below.
            </p>

            {product.downloadUrl ? (
              <a
                href={product.downloadUrl}
                className="bg-[#20B2FF] hover:bg-[#1ba0e8] transition-colors h-[52px] px-8 rounded-lg font-hellixSemiBold text-[18px] text-white flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download {product.name} ({product.version})
              </a>
            ) : (
              <p className="text-[#666666] font-hellixMedium">
                Your download link will be emailed to you shortly. If you
                don&apos;t receive it, please{" "}
                <Link href="/" className="text-[#20B2FF] hover:underline">
                  contact us
                </Link>
                .
              </p>
            )}

            <p className="text-[13px] text-[#999999] font-hellixMedium mt-2">
              Keep this page or your email receipt for future re-downloads.
            </p>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DownloadClient;
