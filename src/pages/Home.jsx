import React from "react";
import img from '../assets/main.jpg'
import Navbar from "../components/layouts/Navbar";
import Card from "../components/cards/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-orange-50 " >
      <Navbar />
      <section className="min-h-[80vh] relative bg-gray-100 rounded-xl overflow-hidden m-4">
        <img
          src={img}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full opacity-80"
        />
        <div className="relative top-10 md:top-40  lg:right-70 z-10 p-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-2">Get certified</h1>
          <p className="text-lg mb-6">
            100+ certification courses. 100% online
          </p>
          <div className="flex flex-col md:flex-row items-center bg-white rounded shadow-md p-2 max-w-md">
            <input
              type="text"
              placeholder="Search for a certification"
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
            />
            <button className="
            px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </section>
      < Card />
      <Footer />
    </div>
  );
};

export default Home;
