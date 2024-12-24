"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import BrentPrice from "./BrentPrice";
import ScrollProgressBar from "./ScrollProgressBar";
import Link from "next/link";
import DollarPrice from "./DollarPrice";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrent, setShowBrent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBrent((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const NavLinks = ({ mobile = false }) => {
    const linkClass = mobile
      ? "text-2xl text-gray-800 font-semibold hover:text-gray-400 hover:scale-105 transition-all active:text-gray-500"
      : "text-gray-800  shadow-2xl drop-shadow-xl font-medium hover:text-white hover:scale-110 transition-all cursor-pointer";

    return (
      <>
        <a
          href="#about"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          About Us
        </a>
        <Link
          href="/Blog"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          Blog
        </Link>
        <a
          href="#contact"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          Contact
        </a>
        <div className="relative h-6 w-32 overflow-hidden">
          <AnimatePresence mode="wait">
            {showBrent ? (
              <motion.div
                key="brent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  y: { type: "tween", duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <BrentPrice />
              </motion.div>
            ) : (
              <motion.div
                key="dollar"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  y: { type: "tween", duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <DollarPrice />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  };

  return (
    <div className="relative z-50">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 w-full h-16 bg-gray-400 bg-opacity-60 backdrop-blur-md px-4 lg:px-20 pt-2">
        <div className="flex flex-row justify-between items-center">
          {/* Logo Section */}
          <section>
            <Link href="/">
              <img
                src="/logo3.svg"
                alt="Logo"
                className="w-auto h-10 drop-shadow-lg cursor-pointer"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 md:hidden animate-fade-in"
          >
            <div className="relative h-full">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors "
              >
                <FiX size={32} />
              </button>

              {/* Navigation links */}
              <div className="flex flex-col items-center justify-center h-full ">
                <NavLinks mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
