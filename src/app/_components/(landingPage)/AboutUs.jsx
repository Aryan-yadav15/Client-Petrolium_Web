import React from "react";

const AboutUs = () => {

  return (
    <div className="w-full pt-20 pb-4">
      <div className="flex flex-col lg:flex-row bg-white  rounded-xl border-gray-200">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-8">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-800 font-semibold rounded-full">
                About Us
              </span>
               <h1 className="text-4xl lg:text-5xl font-bold text-sky-900 leading-tight">
                Delivering High-Quality Petroleum Products with{" "}
                <span className="text-sky-600">Integrity and Innovation</span>
              </h1>

              <div className="h-1 w-20 bg-sky-500 rounded-full" />
            </div>

            <div className="flex items-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Since our establishment in [Year], we have been a trusted name
                in the petroleum industry. Specializing in manufacturing,
                importing, and reselling a diverse range of petroleum products,
                we pride ourselves on delivering top-notch solutions to meet our
                customers' needs.
                <br />
                <br />
                Our core products include petrochemicals, lubricants, and
                industrial oils, catering to industries ranging from automotive
                to manufacturing. What sets us apart is our commitment to
                quality, innovation, and sustainability, ensuring we contribute
                positively to both our clients and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
