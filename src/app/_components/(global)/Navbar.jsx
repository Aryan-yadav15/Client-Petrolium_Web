import React from "react";

const Navbar = () => {
  return (
    <div className="relative z-50">
      <div className="fixed top-0 w-full h-[10vh] bg-gray-500 bg-opacity-80 backdrop-blur-md px-20 py-2 ">
        <div className="flex flex-row justify-between items-center">
          <section>
            <img src="/logoipsum-311.svg" alt="" className=""/>
          </section>
          <section className="flex gap-10 text-gray-300">
            <span>About us</span>
            <span>About us</span>
            <span>About us</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
