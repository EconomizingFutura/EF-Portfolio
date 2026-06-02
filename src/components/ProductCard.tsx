import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonArrow } from "@/assets/index";

interface ProductCardProps {
  product: {
    id: number;
    slug: string;
    name: string;
    tagline: string;
    price: number | null;
    platform: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      prefetch
      className="group flex flex-col bg-[#F4F8FB] rounded-2xl overflow-hidden border border-[#DDE4EE] transition-shadow duration-300 hover:shadow-[0px_18px_36px_-18px_#0000001A]"
    >
      <div className="relative w-full h-[200px] md:h-[220px] bg-white flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 p-5 flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[20px] md:text-[22px] font-hellixBold text-[#032435]">
            {product.name}
          </h3>
          <span className="text-[11px] font-hellixSemiBold text-[#20B2FF] bg-[#E8F7FF] px-2 py-1 rounded-full whitespace-nowrap">
            {product.platform}
          </span>
        </div>
        <p className="text-[#666666] font-hellixMedium text-[14px] leading-6 line-clamp-2">
          {product.tagline}
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-[#032435] font-hellixBold text-[18px]">
            {product.price == null
              ? "Custom pricing"
              : product.price === 0
              ? "Free"
              : `₹${product.price.toLocaleString("en-IN")}`}
          </span>
          <span className="flex items-center gap-1.5 text-[#20B2FF] font-hellixSemiBold text-[14px]">
            View
            <Image
              src={ButtonArrow}
              alt=""
              width={14}
              height={14}
              className="rotate-90 transition-transform duration-200 group-hover:rotate-45"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
