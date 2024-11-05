import React, { useState } from "react";
import EFLogo from "../assets/EFLogo.svg";
import { navLinks } from "../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import ButtonWrapper from "../components/ButtonWrapper";
import { Menu, X } from "lucide-react";
import wave from "../assets/wave.svg";

interface propsTypes {
  background: string;
  width: string;
  handleShowForms: () => void;
}

const Header: React.FC<propsTypes> = ({
  background,
  handleShowForms,
  width,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const headerStyle = {
    backgroundColor: background,
    backgroundRepeat: "no-repeat",

    ...(background !== "#FFFFFF" &&
      background !== "#dcf3ff" &&
      background !== "#F4FAFF" &&
      background !== "#F4F8FB" &&
      background !== "#e3f5ff" &&
      background !== "#E0F3FF" && {
        backgroundImage: `url(${new URL(wave, window.location.origin)})`,
        backgroundSize: "100% auto",
        // backgroundPosition: "center",
        "@media (min-width: 768px)": {
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
        },
      }),
  };
  return (
    <div
      style={headerStyle}
      className={` ${background} ${
        background === "#FFFFFF" || background == "#F4F8FB"
          ? "dark:shadow-xl shadow-slate-500"
          : ""
      }  py-2 px-5 fixed z-[100] top-0 xl:px-0 w-full flex md:items-center md:justify-center font-hellix h-[74px] `}
    >
      <div className={`${width} w-full flex justify-between items-center`}>
        <img
          src={EFLogo}
          alt="Economizing Futura Logo"
          className="h-[60px] w-[48px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Mobile menu button */}
        <button
          className="sm:hidden font-hellix text-[#031924]"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden font-hellix sm:flex gap-5 items-center text-[#031924] font-semibold text-base">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.link}>{nav.name}</Link>
            </li>
          ))}
          <ButtonWrapper
            onClick={() => handleShowForms()}
            label={"Contact Us"}
            className="bg-[#20B2FF] font-hellix  p-[10px] text-[#FFFFFF] rounded-lg font-semibold text-base h-[46px] w-[139px]"
          />
        </ul>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              style={{ background: background }}
              className="mobile-menu relative py-4 w-[75%] max-w-[320px] h-full shadow-lg transition-transform duration-500 transform translate-x-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>

              <ul className="flex flex-col items-center mt-10 gap-5">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`text-gray-800 text-lg font-medium hover:text-blue-600 mobile-menu-item`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <Link
                      to={nav.link}
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
                    label={"Contact Us"}
                    className="bg-[#20B2FF] p-3 text-[#FFFFFF] rounded-lg font-semibold w-10/12"
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
