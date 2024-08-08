import React from "react";

// Icons
import { IoMdFunnel } from "react-icons/io";
import { HiOutlineFunnel } from "react-icons/hi2";

//Images
import desMe from "../assets/desMe.webp";
import frozen from "../assets/frozen.webp";
import panda from "../assets/panda4.webp";
import hotel from "../assets/hotel4.webp";

const TrendingAnimation = () => {
  const trendingCards = [
    { image: desMe, title: "Despicable Me 4", rate: "4.5", year: "2024" },
    { image: hotel, title: "Hotel Transilvania 4", rate: "4.7", year: "2024" },
    { image: frozen, title: "Frozen", rate: "4.3", year: "2020" },
    { image: hotel, title: "Hotel Transilvania 4", rate: "4.7", year: "2024" },
    { image: panda, title: "Kong Fu Panda 4", rate: "4.8", year: "2024" },
  ];
  return (
    <div className="h-[31.6vw]">
      <div className="h-[4vw] flex flex-row justify-between items-center px-[2vw] text-[2.1vw] font-bold text-white">
        <h2>Trending in Animation</h2>
        <div className="bg-slate-900 w-[8.3vw] h-[3vw] rounded-full flex flex-row justify-between items-center px-[1.5vw] text-[1.5vw]">
          <button>
            <div className="text-gray-300 hover:text-white">
              <IoMdFunnel />
            </div>
          </button>
          <div className="text-gray-500 font-thin -translate-y-1">
            <span>|</span>
          </div>
          <button>
            <div className="text-gray-300 hover:text-white">
              <HiOutlineFunnel />
            </div>
          </button>
        </div>
      </div>
      <div className="h-[27.5vw] flex flex-row items-center">
        {trendingCards.map((trendingCard, index) => (
          <div className="flex flex-col gap-[.5vw] px-[2vw] ">
            <div className="object-cover h-[21vw] w-[15vw] cursor-pointer overflow-hidden rounded-[2vw]">
              <img
                className=" w-full self-center"
                src={trendingCard.image}
              />
            </div>
            <h3 className="text-white font-semibold text-[1.5vw] cursor-pointer">
              {trendingCard.title}
            </h3>
            <div className="cursor-pointer flex flex-row justify-start gap-3 font-semibold text-white text-[1vw]">
              <p>⭐ {trendingCard.rate}</p>
              <p className="text-gray-300">|</p>
              <p>{trendingCard.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingAnimation;
