import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="text-xl font-bold">Certify</div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            Courses
          </a>
          <a href="#" className="hover:text-black">
            Certifications
          </a>
          <a href="#" className="hover:text-black">
             Pricing
          </a>
        </nav>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 cursor-pointer  ">
            Sign up
          </button>
          <button className="px-4 py-2 border rounded text-gray-700 hover:bg-orange-200 cursor-pointer">
            Log in
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
