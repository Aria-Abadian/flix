import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Popup = ({isOpen, closePopup}) => {
  
  
  return (
    <div className={`fixed w-full h-full bg-slate-800/80 backdrop-blur-sm z-40 ${isOpen} justify-center items-center`}>
      <div className="bg-slate-800 w-[80vw] h-[120vw] md:w-[40vw] md:h-[50vw] rounded-xl flex flex-col justify-center items-center p-[2vw]">
        <div className="md:text-[2.2vw] text-white flex flex-row justify-between items-center w-full px-[2vw]">
          <h2 className="">Welcome! please sign in</h2>
          <button onClick={closePopup}>
            <IoClose />
          </button>
        </div>
        <div>
          <div className="p-[9vw] h-[100vw] md:w-[40vw] md:h-[38vw] flex flex-col justify-center items-center">
            <form className="flex flex-col gap-[4vw] md:gap-[1vw] items-center">
              <div className="flex flex-col">
                <label className="text-white w-[16vw] md:text-[1.7vw] text-nowrap" htmlFor='username'>Email or username:</label>
                <input className="bg-slate-200 rounded-md w-[61vw] md:w-[24vw] md:h-[3vw] px-[5vw] md:px-[1vw]" id="username" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="text-white w-[16vw] md:text-[1.7vw]" htmlFor='password'>Password:</label>
                <input className="rounded-md bg-slate-200 w-[61vw] md:w-[24vw] md:h-[3vw] px-[5vw] md:px-[1vw]" id="password" type="text" />
              </div>
                <a href="#">
              <div className="text-[4.7vw] md:text-[1.5vw] w-[60vw] text-nowrap md:h-[3vw] md:w-[24vw] mt-[5vw] md:mt-[1vw] text-white bg-[#4c8bf5] flex flex-row items-center justify-center gap-[3vw] md:gap-[1vw] px-[2vw] py-[.5vw] rounded-full">
                  <FaGoogle />
                  <h2 className=" md:font-semibold">Sign in with google</h2>
              </div>
                </a>
              <p className="text-slate-300 text-[4vw] md:text-[1.5vw]">Don't have and acccount? <a href="#" className="text-[#4c8bf5] font-semibold">Sing up</a></p>
              <button type="submit" className="bg-slate-900 rounded-xl text-[4.5vw] md:text-[1.7vw] text-white py-[.5vw] w-[30vw] md:w-[10vw]">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
