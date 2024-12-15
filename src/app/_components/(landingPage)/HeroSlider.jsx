"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define the image array with names
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

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Progress bar logic
  useEffect(() => {
    setProgress(0); // Reset progress when the slide changes
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Adjust the increment speed for progress bar
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
    <div className="relative w-full h-[100vh] overflow-hidden ">
      {/* Slider Wrapper */}
      <div className="relative w-full h-full bg-black">
        <AnimatePresence mode="wait">
          <div className="relative w-full h-full">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 10, x: -100 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60"></div>
            <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-20 z-30 text-black text-center bg-gray-800 bg-opacity-60 backdrop-blur-md p-10 rounded-3xl">
              <div className="overflow-hidden">
                <motion.div
                  className="text-gray-200 text-6xl font-bold flex flex-col gap-4 "
                  key={currentIndex}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1>{images[currentIndex].title}</h1>
                </motion.div>
              </div>
              <div className="overflow-hidden pt-4">
                <motion.div
                  className="text-gray-200 text-6xl font-bold flex flex-col items-start "
                  key={currentIndex.toString() + "subheading"}
                  initial={{ opacity: 40, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 40, y: -100 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-lg font-thin w-[70vw] lg:w-[50vw]">
                    {images[currentIndex].subheading}
                  </span>
                  <span className="text-neonBlue pl-14 text-lg font-thin w-[50vw]">
                    View full →
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>

      {/* Image Names and Progress Bars */}
      {/* Progress Bar Section */}
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
      {/*
                
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
        >
          &gt;
        </button>
      </div>
      */}
    </div>
  );
};

export default ImageSlider;
