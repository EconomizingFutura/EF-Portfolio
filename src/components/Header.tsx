import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/EFLogo.svg";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center bg-[#B1E3FF]">
        <div>
            <nav className="w-[1167px] flex justify-between items-center">
                <Link to = "/" className="title">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
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
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    </ul>
            </nav>
        </div>
    </header>
  );
};
