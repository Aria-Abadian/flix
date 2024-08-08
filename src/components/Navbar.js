import React from "react";

import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

import profilePic from "../assets/profilePic.webp";

const Navbar = () => {
  return (
    <div className=" h-[6.2vw] flex flex-row justify-between absolute z-20 w-full">
      <div className=" w-1/3 flex items-center pl-[2vw] text-[2.2vw] font-bold text-white">
        <h1 className="cursor-pointer">Flix.id</h1>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <div
          className="w-[22vw] h-[3.2vw] rounded-full flex flex-row justify-between pl-[2vw] pr-[.2vw] items-center
        bg-slate-900"
        >
          <nav className="text-[1vw] flex flex-row gap-[3vw] justify-center items-center text-gray-200 font-semibold">
            <a className="cursor-pointer">Movie</a>
            <a className="cursor-pointer">Series</a>
            <a className="cursor-pointer">Originals</a>
          </nav>
          <div className="cursor-pointer w-[2.8vw] h-[2.8vw] bg-slate-700 rounded-full flex justify-center items-center text-[1.1vw] text-gray-200">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-row items-center justify-end pr-[2vw] gap-[1vw]">
        <div>
          <div className="absolute translate-x-[2.3vw] bg-red-400 w-[1.3vw] h-[1.3vw] flex justify-center items-center rounded-full text-gray-200">
            <span className="text-[1vw]">8</span>
          </div>
          <div className="cursor-pointer w-[3.4vw] h-[3.4vw] bg-slate-400 rounded-full flex justify-center items-center text-[1.5vw] text-gray-200">
            <FaBell />
          </div>
        </div>
        <div className="h-[3.4vw] flex flex-row gap-[.5vw] items-start">
          <div className="cursor-pointer w-[3.4vw] h-[3.4vw] rounded-full overflow-hidden">
            <img className="w-full" src={profilePic} />
          </div>
          <div className="text-gray-200 font-semibold text-[1vw] cursor-pointer">
            <p>Aria A</p>
            <p>premium</p>
          </div>
        </div>
        <div className="cursor-pointer w-[3vw] h-[3vw] flex justify-center items-center text-[2vw] text-gray-200">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
