"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Building2, Shield, Truck, Users } from "lucide-react";

const slides = [
  {
    src: "/image/homeSlider/img1.jpg",
    title: "Excellence in Petroleum",
    subheading: "Leading the industry with integrity, innovation, and sustainable solutions since 2005.",
    showLogo: true,
    highlights: [
      {
        icon: Building2,
        title: "18+ Years",
        desc: "Of Industry Excellence"
      },
      {
        icon: Shield,
        title: "Quality Assured",
        desc: "ISO Certified Products"
      },
      {
        icon: Truck,
        title: "Pan India",
        desc: "Distribution Network"
      },
      {
        icon: Users,
        title: "1000+",
        desc: "Satisfied Clients"
      }
    ]
  },
  {
    src: "/image/homeSlider/img2.jpg",
    title: "Our Expertise",
    subheading: "With 18+ years of experience, we provide comprehensive petroleum solutions backed by cutting-edge technology and industry expertise.",
    features: ["Quality Assurance", "Sustainable Practices", "24/7 Support", "Nationwide Delivery"],
    showLogo: false,
  },
  {
    src: "/image/homeSlider/img3.jpg",
    title: "Premium Products",
    subheading: "Comprehensive range of high-quality petroleum products for diverse industrial needs:",
    products: [
      { name: "LDO (Light Diesel Oil)", desc: "High-efficiency fuel for industrial applications" },
      { name: "Furnace Oil", desc: "Premium heating solution for industrial boilers" },
      { name: "MTO (Motor Turbine Oil)", desc: "Advanced lubricant for turbine engines" },
      { name: "C9 Solvent", desc: "Versatile aromatic solvent for multiple applications" }
    ],
    showLogo: false,
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
  };

  return (
    <div className="relative w-full h-screen bg-black">
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
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-32 flex justify-center items-center px-4 sm:px-6 lg:px-8">
              <motion.div
                className="w-full max-w-4xl bg-black/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {slides[currentIndex].showLogo && (
                  <div className="mb-8 flex justify-center">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-white/60 rounded-lg transform scale-110" />
                      <img
                        src="/logo3.svg"
                        alt="Company Logo"
                        className="relative w-60 h-20 object-contain"
                      />
                    </motion.div>
                  </div>
                )}
                
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-3xl text-center mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {slides[currentIndex].subheading}
                </motion.p>

                {slides[currentIndex].highlights && (
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {slides[currentIndex].highlights.map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      >
                        <item.icon className="w-8 h-8 mb-3 mx-auto text-blue-400" />
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {slides[currentIndex].features && (
                  <motion.div
                    className="grid grid-cols-2 gap-4 mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {slides[currentIndex].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-white">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </motion.div>
                )}

                {slides[currentIndex].products && (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {slides[currentIndex].products.map((product, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-200">{product.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4 z-40">
        <div className="w-full max-w-[30rem] bg-black/50 rounded-3xl py-4 px-4">
          <div className="flex flex-row justify-evenly space-x-2 sm:space-x-4">
            {slides.map((_, index) => (
              <div key={index} className="flex-1 min-w-0 max-w-full">
                <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-500"
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

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
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