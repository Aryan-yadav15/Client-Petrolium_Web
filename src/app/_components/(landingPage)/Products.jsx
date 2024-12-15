"use client";
import { motion } from "framer-motion";
import { products } from "@/app/lib/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Products = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  return (
    <section className="py-10">
      <div className="px-8 py-12 bg-white rounded-xl">
        {/* Header Section */}
        <div className="bg-neonBlue inline-block p-1 px-4 rounded-md">
          <span className="font-semibold">Products</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 mt-4">Our Product Range</h1>
        <p className="text-gray-700 text-lg">
          We offer a diverse range of high-quality products designed to meet the
          needs of various industries. Our products are known for their
          reliability, efficiency, and performance.
        </p>
        <a
          href="#"
          className="text-sky-400 font-medium flex items-center mb-4 hover:underline"
        >
          View All Products →
        </a>

        {/* Horizontal Scrollable Product Cards */}
        <div className="relative">
          <motion.div
            className="scroll-container flex space-x-4 sm:space-x-6 pt-2"
            drag={isTouchDevice ? false : "x"} // Disable drag on touch devices
            dragConstraints={{ left: -300, right: 0 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative w-[200px] sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-4 hover:scale-105 transition-all"
              >
                {/* Image Placeholder */}
                <div className="relative h-[250px] sm:h-[400px]">
                  <Image
                    src="/image/vert1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="product_Image"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-sky-300/30"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 text-white p-2 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-4 line-clamp-2 overflow-hidden text-ellipsis block">
                      {product.shortDescription}
                    </p>
                    <a
                      href="#"
                      className="text-sky-400 text-xs sm:text-sm font-medium mt-1 block hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
