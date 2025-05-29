import React, { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import MenuModal from "../MenuModal";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-18 z-50 flex items-center justify-between p-4 shadow-md bg-white">
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

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
