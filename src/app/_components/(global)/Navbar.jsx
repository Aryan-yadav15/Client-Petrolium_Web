"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import BrentPrice from "./BrentPrice";
import ScrollProgressBar from "./ScrollProgressBar";
import Link from "next/link";
import DollarPrice from "./DollarPrice";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false }) => {
    const linkClass = mobile
      ? "text-2xl text-white font-semibold hover:text-gray-300 hover:scale-105 transition-all active:text-gray-500"
      : "hover:text-white hover:scale-110 transition-all cursor-pointer";

    return (
      <>
        <a
          href="#about"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          About Us
        </a>
        <a
          href="#services"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          Services
        </a>
        <a
          href="#contact"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          Contact
        </a>
        <div className="brent-price-container">
          <AnimatePresence>
            {/* First Element (Brent Price) */}
            <motion.div
              key="brent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrentPrice />
            </motion.div>

            {/* Second Element (Dollar Price) */}
            <motion.div
              key="dollar"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <DollarPrice />
            </motion.div>
          </AnimatePresence>
        </div>
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
            <Link href="/">
              <img
                src="/logoipsum-311.svg"
                alt="Logo"
                className="w-auto h-8 pt-2"
              />
            </Link>
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
      <ScrollProgressBar />

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
