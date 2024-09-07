import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Hamburger icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="flex flex-row justify-between fixed text-body1 backdrop-blur-xl
        h-20 my-[12px] p-[20px] w-[90vw]
        bg-secondary font-primarytxt rounded-[35px] items-center gap-2"
    >
      {/* Logo and Search Bar for Desktop */}
      <div className="flex flex-row items-center w-full lg:w-auto">
        <Link to="/" className="flex items-center">
          <img
            src="/Images/logo.svg"
            alt="YB Store Logo"
            className="w-auto h-12"
          />
        </Link>

        {/* Search Bar for Desktop, hidden on mobile */}
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search Creators"
            className="h-10 px-4 border border-gray-300 rounded-full font-primarytxt"
            aria-label="Search Creators"
          />
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex items-center lg:hidden">
        <button onClick={toggleMenu}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Menu Links (Visible in Desktop, Toggle in Mobile) */}
      <div
        className={`lg:flex lg:flex-row lg:gap-16 lg:items-center 
        flex-col absolute lg:static top-[60px] left-0 right-0 bg-secondary lg:bg-transparent 
        p-4 lg:p-0 z-10 rounded-lg lg:rounded-none ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <Link to="/contact" className="py-2 text-center cursor-pointer lg:py-0">
          Contact Us
        </Link>
        <Link to="/profile" className="py-2 text-center cursor-pointer lg:py-0">
          About Us
        </Link>
        <Link to="/policies" className="py-2 text-center cursor-pointer lg:py-0">
          Policies
        </Link>
        {/* Add some space */}
        <div className="h-4" />
        {/* Login Button */}
        <div className="flex justify-center mt-2">
          <Link to="/login">
            <button
              className="rounded-xl bg-[#ffffff] px-8 py-2 border-2 border-[#a9a9a9] bg-white text-[#003c3c]"
            >
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Search Bar for Mobile, shown below the logo */}
      <div className="items-center w-full ml-4 lg:hidden">
        <input
          type="text"
          placeholder="Search Creators"
          className="w-full h-10 px-4 border border-gray-300 rounded-full font-primarytxt"
          aria-label="Search Creators"
        />
      </div>
    </div>
  );
};

export default Header;