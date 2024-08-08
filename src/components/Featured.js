import React from "react";

import { FaPlay } from "react-icons/fa6";

import up from "../assets/up.webp";
import lonly from "../assets/lonelyGirlNight.webp";

const Featured = () => {
  return (
    <div className="h-[23vw] z-10 flex flex-row justify-center items-center gap-[1.4vw]">
      <div
        className="shadow-lg h-[21vw] w-[38.5vw] rounded-[1.7vw] overflow-hidden"
        style={{
          backgroundImage: `url(${lonly})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="cursor-pointer bg-gradient-to-r from-[#4699c9] to-[#87a2cd]/0 w-full h-full  flex flex-col justify-between p-[1vw]">
          <h2 className=" text-[3vw] font-semibold w-[10vw] text-white">
            Lonely Girl Night
          </h2>
          <div className="flex flex-row mt-[3vw] items-center gap-[.5vw] text-gray-100">
            <div className="text-[1vw] w-[2.1vw] h-[2.1vw] bg-slate-900 rounded-full flex justify-center items-center  ">
              <FaPlay />
            </div>
            <div><p className="text-[1vw] font-semibold">Let Play Moview</p></div>
          </div>
        </div>
      </div>
      <div className="shadow-lg h-[21vw] w-[55vw] rounded-[1.7vw] overflow-hidden" style={{
          backgroundImage: `url(${up})`,
          backgroundSize: "100% auto",
        }}>
        <div className="cursor-pointer bg-gradient-to-r from-[#87a2cd] to-[#87a2cd]/0 w-full h-full flex flex-col justify-between p-[1vw]">
          <h2 className=" text-[3vw] font-semibold w-[10vw] text-white">
            Up the Movie 2009
          </h2>
          <div className="flex flex-row mt-[3vw] items-center gap-[.5vw] text-gray-100">
            <div className="text-[1vw] w-[2.1vw] h-[2.1vw] bg-slate-900 rounded-full flex justify-center items-center  ">
              <FaPlay />
            </div>
            <div><p className="text-[1vw] font-semibold">Let Play Moview</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
