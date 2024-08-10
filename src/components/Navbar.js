import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import profilePic from "../assets/profilePic.webp";
import { animations, kDrama, comedy } from "../data/TrendingData";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]); 

  const allData = [...animations, ...kDrama, ...comedy];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredData(
        allData.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    setIsSearchClicked(!isSearchClicked);
    if (isSearchClicked) setSearchQuery(""); 
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && filteredData.length > 0) {
      window.location.href = filteredData[0].url;
    }
  };

  const hideNav = isSearchClicked ? "hidden" : "flex";
  const searchContainerPL = isSearchClicked ? "md:pl-[.2vw]" : "pl-[16vw] md:pl-[1vw]";
  const searchWidth =
    isSearchClicked 
      ? "w-[88vw] md:w-[21.6vw] justify-start pl-[5vw] md:pl-[1vw] translate-x-[1vw] md:translate-x-[0]" : "w-[13vw] md:w-[3vw] justify-center";
  const searchInput = isSearchClicked ? "flex w-[70vw] md:w-[18vw]" : "hidden";

  return (
    <div className="h-[15vw] md:h-[6.2vw] flex flex-row justify-between absolute z-20 w-full pr-[3vw] md:pr-0">
      <div className=" w-[20vw] md:w-1/3 flex items-center pl-[4vw] md:pl-[2vw] text-[8vw] md:text-[2.2vw] font-bold text-white">
        <h1 className="cursor-pointer">Flix.id</h1>
      </div>
      <div className="w-[90vw] fixed bottom-2 left-[5vw] md:static md:w-1/3 flex justify-center items-center">
        <div
          className={`w-full md:w-[22vw] h-[15vw] md:h-[3.2vw] rounded-full flex flex-row justify-between ${searchContainerPL} pr-[1vw] md:pr-[.2vw] items-center bg-slate-900`}
        >
          <nav
            className={`text-[4.5vw] md:text-[1vw] ${hideNav} flex-row gap-[3vw] justify-center items-center text-gray-200 font-semibold`}
          >
            <a className="cursor-pointer">Movie</a>
            <a className="cursor-pointer">Series</a>
            <a className="cursor-pointer">Originals</a>
          </nav>
          <div
            className={`cursor-pointer ${searchWidth} h-[13vw] md:h-[2.8vw] bg-slate-700 rounded-full gap-[5vw] md:gap-[1vw] flex items-center text-[5vw] md:text-[1.1vw] text-gray-200`}
          >
            <button onClick={handleSearch}>
              <FaSearch />
            </button>
            <input
              className={`${searchInput} bg-slate-600 rounded-r-full`}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleEnterPress}
            />
          </div>
        </div>
      </div>
      <div className="w-[60vw] md:w-1/3 flex flex-row items-center justify-end pr-[2vw] gap-[3vw] md:gap-[1vw]">
        <div>
          <div className="absolute translate-x-[6vw] md:translate-x-[2.3vw] bg-red-400 w-[5vw] h-[5vw] md:w-[1.3vw] md:h-[1.3vw] flex justify-center items-center rounded-full text-gray-200">
            <span className="text-[4vw] font-semibold md:font-normal md:text-[1vw]">
              8
            </span>
          </div>
          <div
            className="cursor-pointer w-[9vw] h-[9vw] md:w-[3.4vw] md:h-[3.4vw] bg-slate-400 rounded-full flex justify-center 
          items-center text-[6vw] md:text-[1.5vw] text-gray-200"
          >
            <FaBell />
          </div>
        </div>
        <div className="h-full md:h-[3.4vw] flex flex-row gap-[3vw] md:gap-[.5vw] items-center md:items-start">
          <div className="cursor-pointer w-[9vw] h-[9vw] md:w-[3.4vw] md:h-[3.4vw] rounded-full overflow-hidden">
            <img className="w-full" src={profilePic} />
          </div>
          <div className="hidden md:flex md:flex-col text-gray-200 font-semibold text-[4vw] md:text-[1vw] cursor-pointer">
            <p>Aria A</p>
            <p>premium</p>
          </div>
        </div>
        <div className="hidden md:flex cursor-pointer w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] justify-center items-center text-[10vw] md:text-[2vw] text-gray-200">
          <IoIosArrowDown />
        </div>
      </div>
      {isSearchClicked && searchQuery && (
        <div className="absolute top-[15vw] md:top-[5vw] left-[5vw] md:left-[38.5vw] w-[90vw] md:w-[22vw] bg-slate-800 rounded-md shadow-lg z-30">
          <ul className="text-gray-200 font-semibold">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <li key={index} className="p-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2">
                  <img src={item.image} alt={item.title} className="w-[10vw] md:w-[2vw] rounded" />
                  <a href={item.url} className="text-gray-200 hover:underline">
                    {item.title}
                  </a>
                </li>
              ))
            ) : (
              <li className="p-2">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
