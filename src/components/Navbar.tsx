import "./styles/navbar.css";
import { useState } from "react";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  // State to track whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="navbar"
      style={{ flexDirection: menuOpen ? "column" : "row" }}
    >
      {/* Left section of the navbar */}
      <div className="left-div">
        {/* Logo */}
        <div className="logo">
          <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="KoinX Logo" />
        </div>
        {/* Hamburger menu button (visible only when menu is closed) */}
        <div
          className="hamburger-logo"
          style={{ display: menuOpen ? "block" : "none" }}
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="Hamburger Icon" className="hamburger-img" />
        </div>
      </div>
      
      {/* Hamburger menu button (visible only when menu is open) */}
      <div
        className="hamburger"
        style={{ display: menuOpen ? "none" : "block" }}
        onClick={toggleMenu}
      >
        <img src={hamburger} alt="Hamburger Icon" className="hamburger-img" />
      </div>
      
      {/* Right section of the navbar */}
      <div className={`right-div ${menuOpen ? "menu" : ""}`}>
        <span>Crypto Taxes</span>
        <span>Free Tools</span>
        <span>Resource Center</span>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;