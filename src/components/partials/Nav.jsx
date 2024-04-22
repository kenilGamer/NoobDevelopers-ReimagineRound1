import React from "react";
import { useState } from 'react';


function Nav() {
  
  
  const [dark_theme, setDark_theme] = useState(true);
  const theme = () => {
    dark_theme == true ? setDark_theme(false) : setDark_theme(true);

  };



  return (
    <div className="w-full h-24 flex items-center justify-between p-6 relative overflow-hidden">
      <div className="nav-l hover:animate-pulse ">
        <div className="absolute top-[1vw] left-6 logo-img">
          <img src="/Group 5.svg" className="w-[20vw]" alt="" />
        </div>
        <div className="absolute top-[1.7vw] logo logo-nav left-[4.5vw]">
          {/* <img src="/Rectangle 8.svg" className='w-92 top-0' alt="" /> */}
          <h1 className="text-[3.5vw]">NOTHING</h1>
        </div>
      </div>
      <div className=" flex gap-5 ml-20 items-center justify-center">
        <div className="relative nav-c overflow-hidden mt-[.9vw] ml-[15vw] flex items-center ">
          <div>
            <img src="/Group 4.png" className="w-80 " alt="" />
          </div>
          <div className="absolute top-[.4vw] hover:animate-pulse left-[1vw] ">
            <input
              className="bg-transparent border-none hover:animate-pulse outline-none rounded-full px-10 text-xl py-2 w-72"
              color="transparent"
              placeholder="Search Here..."
              type="search"
              name="search"
              id="search"
            />
          </div>
        </div>
        <div onClick={theme} className="moon_btn relative nav-c  ">
          <div className={`ab hover:animate-pulse`}>

            <img src="/button/Group 22.svg" className="w-[6vw]" alt="" />
          </div>
          <div className={`absolute top-[0.001vw] ${dark_theme ? 'right-[6px]' : ''}`}>
            <img src="/button/Group 23.svg" className=" w-[3vw]  " alt="" />
          </div>
          <div className={` absolute top-[0.5vw]   ${dark_theme ? 'right-[0.5vw]' : 'left-[0.5vw]'}`}>
            <img src="/button/Rectangle 12.svg" className=" w-[2.4vw] min-w-[2.4vw] " alt="" />
          </div>
        </div>
      </div>

      <div className=" flex gap-10">
        {["store", "suport", "community"].map((i, k) => (
          <div className="relative nav-r hover:animate-pulse">
            <img src="/Group 1.svg" width={140} alt="" />
            <div
              className={`absolute top-[0.46vw] text-lg  ${
                k === 2 ? "left-[2vw]" : `left-[3.2vw]`
              }`}
            >
              <a href={`#${i}`}>{i}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;