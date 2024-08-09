import React from "react";

import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

import profilePic from "../assets/profilePic.webp";

const Navbar = () => {
  return (
    <div className="h-[15vw] md:h-[6.2vw] flex flex-row justify-between absolute z-20 w-full pr-[3vw] md:pr-0">
      <div className=" w-[20vw] md:w-1/3 flex items-center pl-[4vw] md:pl-[2vw] text-[8vw] md:text-[2.2vw] font-bold text-white">
        <h1 className="cursor-pointer">Flix.id</h1>
      </div>
      <div className="w-[90vw] fixed bottom-2 left-[5vw] md:static md:w-1/3 flex justify-center items-center">
        <div
          className="w-full md:w-[22vw] h-[15vw] md:h-[3.2vw] rounded-full flex flex-row justify-between pl-[16vw] pr-[1vw] md:pl-[2vw] md:pr-[.2vw] items-center
        bg-slate-900"
        >
          <nav className="text-[4.5vw] md:text-[1vw] flex flex-row gap-[3vw] justify-center items-center text-gray-200 font-semibold">
            <a className="cursor-pointer">Movie</a>
            <a className="cursor-pointer">Series</a>
            <a className="cursor-pointer">Originals</a>
          </nav>
          <div className="cursor-pointer w-[13vw] h-[13vw] md:w-[2.8vw] md:h-[2.8vw] bg-slate-700 rounded-full flex justify-center items-center text-[5vw] md:text-[1.1vw] text-gray-200">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="w-[60vw] md:w-1/3 flex flex-row items-center justify-end pr-[2vw] gap-[3vw] md:gap-[1vw]">
        <div>
          <div className="absolute translate-x-[6vw] md:translate-x-[2.3vw] bg-red-400 w-[5vw] h-[5vw] md:w-[1.3vw] md:h-[1.3vw] flex justify-center items-center rounded-full text-gray-200">
            <span className="text-[4vw] font-semibold md:font-normal md:text-[1vw]">8</span>
          </div>
          <div className="cursor-pointer w-[9vw] h-[9vw] md:w-[3.4vw] md:h-[3.4vw] bg-slate-400 rounded-full flex justify-center 
          items-center text-[6vw] md:text-[1.5vw] text-gray-200">
            <FaBell />
          </div>
        </div>
        <div className="h-full md:h-[3.4vw] flex flex-row gap-[3vw] md:gap-[.5vw] items-center md:items-start">
          <div className="cursor-pointer w-[9vw] h-[9vw] md:w-[3.4vw] md:h-[3.4vw] rounded-full overflow-hidden">
            <img className="w-full" src={profilePic} />
          </div>
          <div className=" hidden md:flex md:flex-col text-gray-200 font-semibold text-[4vw] md:text-[1vw] cursor-pointer">
            <p>Aria A</p>
            <p>premium</p>
          </div>
        </div>
        <div className="hidden md:flex cursor-pointer w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] justify-center items-center text-[10vw] md:text-[2vw] text-gray-200">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
