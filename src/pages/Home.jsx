import React, { useState } from "react";
import img from '../assets/main.jpg'
import Navbar from "../components/layouts/Navbar";
import Card from "../components/cards/Card";
import Footer from "../components/Footer";
import { frontendTasks , awsTasks ,backendTasks,pythonTasks,mernTasks } from "../utils/tasks";
import FilterCard from "../components/cards/FilterCard";
import certifications from "../utils/Certifications";


const Home = () => {

  const [search,setSearch] = useState("")
  const[filteredTasks,setFilteredTasks] = useState(certifications);
  const[suggestions,setSuggestions] = useState([]);
  console.log(certifications)

  const handleSearch = () => {
    const result = certifications.filter((item)=> 
    item.title.toLowerCase().includes(search.toLowerCase()))
    setFilteredTasks(result);
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value)

     if (value.trim() === " ") {
      setSuggestions([]);
      setFilteredTasks(certifications);
      return;
    }
    const filtered = certifications.filter((item)=> item.title.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filtered.slice(0,5));
    setFilteredTasks(filtered);
  }
  const handleSuggestionClick = (text) => {
        setSearch(text)
        setSuggestions([])
        const result = certifications.filter(item=> 
           item.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredTasks(result);
  }


  return (
    <div className="bg-orange-50 ">
      <Navbar />
      <section className="min-h-[80vh] relative bg-gray-100 rounded-xl  m-4">
        <img
          src={img}
          alt="Background"
          className="absolute  rounded-2xl mt-25 inset-0 object-cover w-full h-full opacity-80"
        />
        <div className="relative top-20 md:top-70 lg:top-45 xl:top-70 z-10 p-10 lg:right-40 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-2">Get certified</h1>
          <p className="text-lg mb-6">
            100+ certification courses. 100% online
          </p>
          <div className="flex flex-col md:flex-row items-center bg-white rounded shadow-md p-2 max-w-md">
            <input
              type="text"
              placeholder="Search for a certification"
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
              value={search}
              onChange={handleInputChange} 
            />
            <button className="
            px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 cursor-pointer"
            onClick={handleSearch}
            >
              Search
            </button>
          </div>
          { suggestions.length > 0 && (
             <ul className=" absolute z-30 left-4 right-0 bg-white shadow-md rounded mt-1 max-h-40 max-w-[260px] md:max-w-2xl ">
                {suggestions.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-gray-700"
                    onClick={() => handleSuggestionClick(item.title)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
          ) }
        </div>
      </section>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
