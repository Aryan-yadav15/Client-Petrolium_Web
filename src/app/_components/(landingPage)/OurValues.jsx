import React from "react";

const OurValues = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('/image/values.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom center", // Change this to adjust the position
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-3xl">
        {/* USP / Values */}
        <h1 className="text-4xl font-bold mb-4">
          Empowering Industries with Innovative Fuel Solutions
        </h1>
        <p className="text-lg mb-6">
          We prioritize sustainability and efficiency, delivering high-quality
          fuels and lubricants tailored to your business needs.
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="bg-neonBlue hover:bg-sky-400 text-gray-800 py-3 px-6 rounded-md text-lg font-medium transition duration-300"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default OurValues;
