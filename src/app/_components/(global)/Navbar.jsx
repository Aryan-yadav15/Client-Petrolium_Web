"use client"
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
    <div className="fixed top-0 w-full h-[10vh] bg-gray-800 bg-opacity-60 backdrop-blur-md px-20 py-2">
      <div className="flex flex-row justify-between items-center">
        {/* Logo Section */}
        <section>
          <img src="/logoipsum-311.svg" alt="Logo" />
        </section>
        
        {/* Desktop Navigation Links */}
        <section className="hidden md:flex gap-10 text-gray-300 ">
          <span className="hover:text-white hover:scale-110 transition-all">About us</span>
          <span className="hover:text-white hover:scale-110 transition-all">Services</span>
          <span className="hover:text-white hover:scale-110 transition-all">Contact</span>
        </section>

        {/* Mobile Hamburger Icon */}
        <section className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </section>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="absolute top-[10vh] left-0 w-full bg-gray-500 bg-opacity-80 backdrop-blur-md text-gray-300 hover:text-white p-6 md:hidden">
        <div className="flex flex-col gap-6">
          <span>About us</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </div>
    )}
  </div>
  );
};

export default Navbar;
