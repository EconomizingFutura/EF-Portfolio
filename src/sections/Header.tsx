"use client";

import React, { useState } from "react";
import EFLogo from "@/assets/EFLogo.svg";
import { navLinks } from "../constants/constants";
import ButtonWrapper from "../components/ButtonWrapper";
import { Menu, X } from "lucide-react";
import wave from "@/assets/wave.svg";
import Image from "next/image";
import Link from "next/link";

interface PropsTypes {
  background: string;
  handleShowForms: () => void;
  transparent?: boolean;
  home?: boolean;
}

const Header: React.FC<PropsTypes> = ({
  background,
  handleShowForms,
  transparent,
  home,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const noWaveBackgrounds = new Set([
    "#FFFFFF",
    "",
    "#dcf3ff",
    "#F4FAFF",
    "#F4F8FB",
    "#e3f5ff",
    "#E0F3FF",
    "#aee2ff",
  ]);

  const shouldShowWave = !noWaveBackgrounds.has(background);

  const headerStyle = {
    backgroundColor: background,
    ...(shouldShowWave && {
      backgroundImage: `url(${wave.src})`,
      backgroundSize: "100% auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
  };

  return (
    <div
      style={transparent ? {} : headerStyle}
      className={`${transparent ? "bg-[#ddf3ff]" : ""} ${
        background === "#FFFFFF" || background === "#F4F8FB"
          ? "dark:shadow-xl/50 shadow-slate-500/40"
          : ""
      } py-2 px-5 fixed ${
        home ? "z-40" : "z-30"
      } top-0 xl:px-0 w-full border-b border-b-[#D1EEFF] flex md:items-center md:justify-center font-hellix h-[74px]`}
    >
      <div className="xl:w-[1186px] lg:px-6 xl:px-0 w-full flex justify-between items-center">
        <Link href="/" prefetch>
          <Image
            src={EFLogo}
            alt="EF Logo"
            className="h-[60px] w-[48px] cursor-pointer"
            priority // Important for above-the-fold images
          />
        </Link>

        <button
          className="sm:hidden font-hellix text-[#031924]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden sm:flex gap-5 items-center text-[#031924] font-hellixSemiBold text-base">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.link} prefetch>
                {nav.name}
              </Link>
            </li>
          ))}
          <ButtonWrapper
            onClick={handleShowForms}
            label="Contact Us"
            className="bg-[#20B2FF] p-[10px] text-[#FFFFFF] rounded-lg font-hellixSemiBold text-base h-[46px] w-[139px]"
          />
        </ul>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 font-hellixSemiBold z-50 flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="mobile-menu relative py-4 w-[75%] bg-white max-w-[320px] h-full shadow-lg transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <ul className="flex flex-col items-center mt-10 gap-5">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-gray-800 text-lg font-hellixMedium hover:text-blue-600"
                  >
                    <Link
                      href={nav.link}
                      prefetch
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
                <li className="w-full text-center mt-5">
                  <ButtonWrapper
                    onClick={() => {
                      handleShowForms();
                      setMobileMenuOpen(false);
                    }}
                    label="Contact Us"
                    className="bg-[#20B2FF] p-3 text-[#FFFFFF] rounded-lg font-hellixSemiBold w-10/12"
                  />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
