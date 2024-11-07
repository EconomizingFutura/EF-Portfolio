import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/EFLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import ButtonWrapper from "./ButtonWrapper";

interface HeaderProps {
    show_props?: () => void;
  }
  
  export const Header: React.FC<HeaderProps> = ({ show_props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center bg-[#B1E3FF]">
        
            <nav className="large">
                <Link to = "/" className="title">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu />
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/technologies">Technology</NavLink>
                    </li>
                    <li onClick={show_props}>
                        {/* <NavLink to="/contact">Contact Us</NavLink> */}
                        <ButtonWrapper className={"contact"} label={"Contact Us"}/>
                    </li>
                    </ul>
            </nav>
        
    </header>
  );
};

