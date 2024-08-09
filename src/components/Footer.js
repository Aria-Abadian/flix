import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-900 md:bg-slate-950 flex flex-col md:flex-row items-center md:items-start md:justify-center p-[10vw] md:p-[2vw] text-center relative z-10">
      <div className="mb-[10vw] md:m-0 md:w-[30vw]">
        <h4 className="text-white font-semibold">About Us</h4>
        <p className="text-slate-200 text-justify mt-[5vw] md:mt-[1vw]">
          Welcome to Flix.id: Your Ultimate Entertainment Hub! At Flix.id, we’re
          passionate about all things film and television. Whether you’re a
          cinephile, a binge-watcher, or just looking for your next favorite
          show, we’ve got you covered.
        </p>
      </div>

      <div className="mb-[10vw] md:mb-0 md:w-[30vw]">
        <h4 className="text-white font-semibold">Contact Us</h4>
        <p className="text-slate-200 text-center mt-[5vw] md:mt-[2vw]">
          Email: info@Flix.id
        </p>
        <p className="text-slate-200 text-center mt-[1vw]">
          Phone: +1 (555) 123-4567
        </p>
      </div>

      <div className="md:w-[30vw]">
        <h4 className="text-white font-semibold">Follow Us</h4>
        <div className="flex flex-row justify-center items-center text-[10vw] md:text-[2vw] gap-[10vw] md:gap-[2vw] pt-[5vw] md:pt-[1vw] text-white">
          <FaInstagram />
          <FaTelegramPlane />
          <FaWhatsapp />
        </div>
        <p className="text-slate-200 mt-[7vw] md:mt-[2vw]">Created by Aria Abadian 2024. all rights reserved ©</p>
      </div>
      <div className="h-[20vw] md:hidden"></div>
    </div>
  );
};

export default Footer;
