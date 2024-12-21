"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/image/homeSlider/img3.jpg",
    name: "LDO",
    title: "Light Diesel Oil",
    subheading:
      "High efficiency fuel for industrial applications. Suitable for a wide range of engines. Low sulfur content for cleaner emissions.",
  },
  {
    src: "/image/homeSlider/img2.jpg",
    name: "Furnace Oil",
    title: "Furnace Oil",
    subheading:
      "Reliable and cost-effective heating solution. Ideal for industrial heating systems. High calorific value for efficient combustion.",
  },
  {
    src: "/image/homeSlider/img1.jpg",
    name: "MTO",
    title: "Mineral Turpentine Oil",
    subheading:
      "Versatile solvent for various industries. Excellent solvency power. Used in paints, varnishes, and thinners.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen">
      {/* Main Slider */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-x-0 bottom-32 flex justify-center items-center px-4 sm:px-6 lg:px-8">
              <motion.div
                className="w-full max-w-4xl bg-black/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {images[currentIndex].title}
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4 max-w-3xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {images[currentIndex].subheading}
                </motion.p>
                <motion.button
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base flex items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  View full <span className="text-lg">→</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4 z-40">
        <div className="w-full max-w-[30rem] bg-black/50 rounded-3xl py-4 px-4">
          <div className="flex flex-row justify-evenly space-x-2 sm:space-x-4">
            {images.map((image, index) => (
              <div key={index} className="flex-1 min-w-0 max-w-full">
                <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonBlue to-blue-500"
                    style={{
                      width: currentIndex === index ? `${progress}%` : "0%",
                    }}
                    initial={{ width: "0%" }}
                    animate={{
                      width: currentIndex === index ? `${progress}%` : "0%",
                    }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 top-28 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
