"use client";

import React, { useMemo } from "react";
import EFLogo from "../assets/EFLogo.svg";
import { navLinks } from "../constants/constants";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const addressSection = useMemo(
    () => (
      <div className="font-semibold text-sm lg:text-[14px] text-white leading-5 font-overpass">
        <p>ECONOMIZING FUTURA (OPC) PRIVATE LIMITED,</p>
        <p>
          101, Unit 101, Oxford Towers, 139, HAL Old Airport Road, Hulsur
          Bazaar,
        </p>
        <p>Bangalore North, Bangalore - 560008,</p>
        <p>Karnataka, India</p>
      </div>
    ),
    []
  );

  const renderedNavLinks = useMemo(
    () =>
      navLinks.map((a) => (
        <Link
          key={a.id}
          href={a.link}
          className="text-white opacity-70 text-xs lg:text-[13px] font-hellixSemiBold hover:opacity-100 transition-opacity"
          prefetch={false}
        >
          {a.name}
        </Link>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navLinks]
  );

  return (
    <footer className="bg-[#011520] w-full">
      <div className="max-w-[1640px] mx-auto px-4 md:px-12 xl:px-44 py-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Logo and Address */}
          <div className="flex flex-col gap-4">
            <div className="bg-white flex justify-center items-center h-16 w-20 rounded-md">
              <Image
                src={EFLogo}
                alt="Economizing Futura Logo"
                width={48}
                height={48}
                className="h-12 w-12"
                priority
              />
            </div>
            {addressSection}
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between lg:w-[227px]">
            <div className="flex flex-col gap-2">
              {renderedNavLinks}
              <div className=" text-xs py-2  lg:text-[13px] font-hellixSemiBold">
                <Link
                  href="/privacypolicy"
                  className="opacity-70 transition-opacity text-white hover:opacity-100"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/termsandconditions"
                  className="block py-2 lg:py-3 opacity-70 transition-opacity text-white hover:opacity-100"
                  prefetch={false}
                >
                  Terms & Condition
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#4d5b62] rounded my-6 lg:my-7"></div>

        {/* Copyright */}
        <div className="flex flex-col lg:flex-row gap-4 items-center lg:justify-between">
          <p className="text-white text-xs lg:text-sm leading-5 font-overpass font-normal">
            © Economizingfutura. All rights reserved 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
