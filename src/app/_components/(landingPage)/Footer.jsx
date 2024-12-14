import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="bg-gray-200 text-gray-800 rounded-t-2xl ">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto py-10 flex flex-row gap-8 justify-between px-10">
          {/* Section 1: Branding and Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logoipsum-311.svg"
                width={200}
                height={200}
                alt="Logo"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">
              We growing up your business with personal AI manager.
            </h2>
            <p>Maxwell, 2023.</p>
          </div>

          {/* Section 2: Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Platform</h3>
            <ul className="space-y-2">
              <li>Plans & Pricing</li>
              <li>Personal AI Manager</li>
              <li>AI Business Writer</li>
            </ul>
          </div>

          {/* Section 3: Company and Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
            
          </div>

          {/* Section 4: Get the App */}
        </div>

        {/* Bottom Bar */}
        <div className="bg-neonBlue text-gray-900 text-sm text-center py-3">
          <p>
            &copy; 2025 Vishveshwar Oil & Lubricants Pvt Ltd
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
