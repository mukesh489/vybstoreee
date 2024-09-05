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
        h-20 my-[12px] p-[20px] w-full
        bg-secondary font-primarytxt rounded-[35px] items-center
        lg:w-[1200px] lg:my-[12px] lg:gap-[60px] lg:flex-row"
    >
      {/* Logo and Search Bar for Desktop */}
      <div className="flex flex-row items-center w-full lg:w-auto">
        <Link to="/" className="flex items-center">
          <img
            src="/Images/logo.svg"
            alt="YB Store Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Search Bar for Desktop, hidden on mobile */}
        <div className=" hidden lg:block">
          <input
            type="text"
            placeholder="Search Creators"
            className="rounded-full border border-gray-300 h-10 font-primarytxt px-4"
            aria-label="Search Creators"
          />
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
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
        <Link to="/contact" className="cursor-pointer text-center py-2 lg:py-0">
          Contact Us
        </Link>
        <Link to="/profile" className="cursor-pointer text-center py-2 lg:py-0">
          About Us
        </Link>
        <Link to="/policies" className="cursor-pointer text-center py-2 lg:py-0">
          Policies
        </Link>
      </div>

      {/* Login Button (Hidden on Mobile) */}
      <div className="hidden lg:flex">
        <Link to="/login">
          <button className="rounded-xl bg-[#ffffff] px-8 py-2 border-2 border-[#a9a9a9] bg-white text-[#003c3c]">
            Login
          </button>
        </Link>
      </div>

      {/* Search Bar for Mobile, shown below the logo */}
      <div className="lg:hidden w-full  ml-4 items-center">
        <input
          type="text"
          placeholder="Search Creators"
          className="rounded-full border border-gray-300 h-10 font-primarytxt px-4 w-full"
          aria-label="Search Creators"
        />
      </div>
    </div>
  );
};

export default Header;
