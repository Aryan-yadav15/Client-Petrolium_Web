"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll === 0 
        ? 0 
        : `${(totalScroll / windowHeight) * 100}`;
      
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ mobile = false }) => {
    const linkClass = mobile 
      ? "text-2xl text-white font-semibold hover:text-gray-300 hover:scale-105 transition-all active:text-gray-500"
      : "hover:text-white hover:scale-110 transition-all cursor-pointer";

    return (
      <>
        <a href="#about" className={linkClass} onClick={() => mobile && setIsOpen(false)}>
          About Us
        </a>
        <a href="#services" className={linkClass} onClick={() => mobile && setIsOpen(false)}>
          Services
        </a>
        <a href="#contact" className={linkClass} onClick={() => mobile && setIsOpen(false)}>
          Contact
        </a>
      </>
    );
  };

  return (
    <div className="relative z-50">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 w-full h-16 bg-gray-800 bg-opacity-60 backdrop-blur-md px-4 lg:px-20 py-2">
        <div className="flex flex-row justify-between items-center">
          {/* Logo Section */}
          <section>
            <img 
              src="/logoipsum-311.svg" 
              alt="Logo" 
              className="w-auto h-8" 
            />
          </section>

          {/* Desktop Navigation Links */}
          <section className="hidden md:flex gap-10 text-gray-300 pt-2">
            <NavLinks />
          </section>

          {/* Mobile Hamburger Icon */}
          <section 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </section>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-neonBlue to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 md:hidden animate-fade-in">
          <div className="relative h-full">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <FiX size={32} />
            </button>

            {/* Navigation links */}
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <NavLinks mobile={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;