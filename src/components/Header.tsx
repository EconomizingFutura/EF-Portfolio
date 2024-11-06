import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/EFLogo.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
      <div className="title">
          <img src={logo} alt="Logo" className="logo" /> {/* Use the logo image here */}
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <div>Blogs</div>
          </li>
          <li>
            <div>Pricing</div>
          </li>
          <li>
            <div>Technology</div>
          </li>
          <li>
            <div>Contact Us</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
