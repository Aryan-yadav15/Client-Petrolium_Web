"use client"
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Scroll Progress Bar */}
      <div className="fixed top-[10vh] left-0 w-full h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;