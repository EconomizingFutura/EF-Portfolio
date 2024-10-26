import React, { useState } from "react";
import EFLogo from "../assets/EFLogo.svg";
import { navLinks } from "../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import ButtonWrapper from "../components/ButtonWrapper";
import { Menu, X } from "lucide-react";

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

  return (
    <div
      className={`${background} py-2 px-5 xl:px-0 w-full flex md:items-center md:justify-center font-[#Hellix] h-[74px] relative`}
    >
      <div className={`${width} w-full flex justify-between`}>
        <img
          src={EFLogo}
          alt=""
          className="h-[60px] w-[48px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Mobile menu button */}
        <div className="flex justify-between items-center">
          <button
            className="sm:hidden text-[#031924]"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-5 items-center text-[#031924] font-semibold text-base">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.link}>{nav.name}</Link>
              </li>
            ))}
            <ButtonWrapper
              onClick={() => handleShowForms()}
              label={"Contact Us"}
              className="bg-[#20B2FF] p-[10px] text-[#FFFFFF] rounded-lg font-semibold text-base h-[46px] w-[139px]"
            />
          </ul>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className=" ">
              <ul className="flex flex-col items-center py-4">
                {navLinks.map((nav) => (
                  <li key={nav.id} className="py-2">
                    <Link
                      to={nav.link}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
                <li className="py-2">
                  <ButtonWrapper
                    onClick={() => {
                      handleShowForms();
                      setMobileMenuOpen(false);
                    }}
                    label={"Contact Us"}
                    className="bg-[#20B2FF] p-[10px] text-[#FFFFFF] rounded-lg font-semibold text-base h-[46px] w-[139px]"
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
