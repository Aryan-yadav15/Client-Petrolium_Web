"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define the image array with names
const images = [
  { src: "/image/homeSlider/img1.jpg", name: "Image 1 Name" }, // Replace with your image paths and names
  { src: "/image/homeSlider/img2.jpg", name: "Image 2 Name" },
  { src: "/image/homeSlider/img3.jpg", name: "Image 3 Name" },
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
    <div className="relative w-full h-[98vh] overflow-hidden rounded-3xl">
      {/* Slider Wrapper */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Image Names and Progress Bars */}
      <div className="absolute flex flex-row justify-evenly bottom-4 left-0 w-full px-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-start mb-4 w-80">
            {/* Image Name */}
            <div
              className={`text-sm font-semibold ${
                currentIndex === index ? "text-white" : "text-gray-400"
              }`}
            >
              {image.name}
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-700 rounded-lg overflow-hidden mt-2">
              <motion.div
                className={`h-full ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-green-500 to-blue-500"
                    : "bg-transparent"
                }`}
                style={{
                  width: currentIndex === index ? `${progress}%` : "0%",
                }}
                initial={{ width: "0%" }}
                animate={{
                  width: currentIndex === index ? `${progress}%` : "0%",
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        ))}
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
