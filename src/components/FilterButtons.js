import React from "react";

// Icons
import { FaFire } from "react-icons/fa";
import { LuSwords } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { RiBearSmileLine } from "react-icons/ri";
import { SlGhost } from "react-icons/sl";
import { GiFallingStar } from "react-icons/gi";
import { LuMoonStar } from "react-icons/lu";


const FilterButtons = () => {
  const categories = [
    { label: "Trending", icon: <FaFire />, url: "#" },
    { label: "Action", icon: <LuSwords />, url: "#" },
    { label: "Romance", icon: <FaRegHeart />, url: "#" },
    { label: "Animation", icon: <RiBearSmileLine />, url: "#" },
    { label: "Horror", icon: <SlGhost />, url: "#" },
    { label: "Special", icon: <GiFallingStar />, url: "#" },
    { label: "Drakor", icon: <LuMoonStar />, url: "#" },
  ];

  return (
    <div className=" h-[9vw] flex flex-row items-center justify-center gap-3">
      {categories.map((cat, index) => (
        <ul key={index}>
          <li>
            <button
              className=" flex flex-row items-center justify-center font-semibold gap-2 text-2xl bg-[#8e9399]/10 w-[13vw] h-[6vw]
            rounded-[2vw] border border-[#bfc3c9]/50 text-white backdrop-blur-lg "
            >
              <span className="text-[1.5vw]">{cat.icon}</span>
              <p className="text-[1.5vw]">{cat.label}</p>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FilterButtons;
