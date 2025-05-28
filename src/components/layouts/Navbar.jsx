import React, { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }
  return (
    <div>
      <header className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="text-xl font-bold">Certify</div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="relative inline-block text-gray-700 hover:text-black
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            Browse
          </a>
          <a href="#" className="relative inline-block text-gray-700 hover:text-black
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            For Enterprise
          </a>
          <a href="#" className="relative inline-block text-gray-700 hover:text-black
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            Pricing
          </a>
          <a href="#" className="relative inline-block text-gray-700 hover:text-black
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            Support
          </a>
        </nav>
        <div className="flex gap-2">
          <button className="px-2 py-1 md:px-4 md:py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 cursor-pointer  ">
            Sign up
          </button>
          <button className="px-2 py-1 md:px-4 md:py-2 border rounded text-gray-700 hover:bg-orange-200 cursor-pointer">
            Log in
          </button>
          {/* menu icon */}
          <button
            className="md:hidden text-orange-600 text-2xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoClose /> : <TbMenuDeep />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="fixed w-full h-full bg-gradient-to-b from-white to-orange-50 z-40 flex flex-col items-center space-y-5 py-10 px-6 shadow-2xl backdrop-blur-sm">
          <a
            href="#"
            className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
          >
            Browse
          </a>
          <a
            href="#"
            className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
          >
            For Enterprise
          </a>
          <a
            href="#"
            className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
          >
            Pricing
          </a>
          <a
            href="#"
            className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
          >
            Support
          </a>
        </div>
      )}

    </div>
  );
};

export default Navbar;
