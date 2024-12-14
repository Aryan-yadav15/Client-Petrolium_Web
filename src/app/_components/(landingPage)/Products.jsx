"use client";
import { motion } from "framer-motion";
import { products } from "@/app/lib/products";
import React from "react";

const Products = () => {
  return (
    <section className="py-10">
      <div className="px-8 py-12 bg-white rounded-xl">
        {/* Header Section */}
        <div className="bg-neonBlue inline-block p-1 px-4 rounded-md">
          <span className="font-semibold">Products</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 mt-4">Our Product Range</h1>
        <p className="text-gray-700 text-lg mb-8">
          We offer a diverse range of high-quality products designed to meet the
          needs of various industries. Our products are known for their
          reliability, efficiency, and performance.
        </p>
        <a
          href="#"
          className="text-sky-400 font-medium flex items-center mb-12 hover:underline"
        >
          View All Products →
        </a>

        {/* Horizontal Scrollable Product Cards */}
        <div className="relative">
          <motion.div
            className="flex space-x-6 overflow-x-scroll scrollbar-hide"
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-4 hover:scale-105 transition-all"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 font-medium text-sm">
                    Image Placeholder
                  </p>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.shortDescription}
                  </p>
                  <a
                    href="#"
                    className="text-sky-400 text-sm font-medium hover:underline"
                  >
                    Read more →
                  </a>
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
