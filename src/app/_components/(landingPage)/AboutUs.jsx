import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full pt-20 pb-4">
      <div className="flex flex-col lg:flex-row bg-white p-6 rounded-xl border-gray-200">
        <section className="flex flex-row flex-1">
          <div className="flex-row">
            <div className="bg-neonBlue inline-block p-1 px-4 rounded-md">
              <span className="font-semibold">About Us</span>
            </div>
            <div className="text-left py-2 pr-8">
              <h1 className="font-bold text-4xl text-sky-800">
                Delivering High-Quality Petroleum Products with Integrity and
                Innovation
              </h1>
              {/* Adjust height, color, and opacity as needed */}
            </div>
          </div>
        </section>
        <section className="flex flex-row flex-1 ">
          <span className="text-gray-700 pt-9 pr-4">
            Since our establishment in [Year], we have been a trusted name in
            the petroleum industry. Specializing in manufacturing, importing,
            and reselling a diverse range of petroleum products, we pride
            ourselves on delivering top-notch solutions to meet our customers'
            needs.
            <br /> Our core products include petrochemicals, lubricants, and
            industrial oils, catering to industries ranging from automotive to
            manufacturing. What sets us apart is our commitment to quality,
            innovation, and sustainability, ensuring we contribute positively to
            both our clients and the environment.
          </span>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
