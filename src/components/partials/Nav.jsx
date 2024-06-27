import React, { useState, useEffect } from "react";
import Slider from "../partials/Slider";
function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  
  const [dark_theme, setDark_theme] = useState(true);
  const theme = () => {
    dark_theme == true ? setDark_theme(false) : setDark_theme(true);
  };

  const [sd, setSd] = useState(false);

  const handleDataFromChild = (data) => {
    setSd(data);
  };

  return isMobile == false ? (
    <div className="w-full min-h-[15.3vh] flex items-center justify-between relative overflow-hidden">
      <div className="nav-l">
        {/* <div className="absolute top-[1vw] left-6 logo-img"> */}
          <img src="/Group5.svg" className="w-[20vw] absolute logo-nav top-[2vh] left-7 " alt="" />
        {/* </div> */}
        {/* <div className="absolute top-[1.7vw] logo logo-nav left-[4.5vw]"> */}
          {/* <img src="/Rectangle 8.svg" className='w-92 top-0' alt="" /> */}
          <h1 className="text-[3.5vw] absolute top-[3.7vh] logo logo-nav left-[4.8vw] ">NOTHING</h1>
        {/* </div> */}
      </div>
      <div className=" flex gap-5 ml-20 items-center justify-center">
        <div className="relative nav-c overflow-hidden mt-[.9vw] ml-[15vw] flex items-center ">
          <div>
            <img src="/Group4.png" className="w-80 " alt="" />
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
        {/* <div onClick={theme} className="moon_btn relative nav-c  ">
          <div className={`ab hover:animate-pulse`}>

            <img src="/button/Group 22.svg" className="w-[6vw]" alt="" />
          </div>
          <div
            className={`absolute top-[0.001vw] ${
              dark_theme ? "right-[6px]" : ""
            }`}
          >
            <img src="/button/Group 23.svg" className=" w-[3vw]  " alt="" />
          </div>
          <div
            className={` absolute  ${!dark_theme ? "top-[0.5vw]" : "top-[0.2vw]"}   ${
              dark_theme ? "right-[0.9vw] -top-[0.0001vw]" : "left-[0.5vw]"
            }`}
          >
            <img
              src={`${!dark_theme ? "/button/Rectangle 12.svg" : "/sun_PNG13425.webp"} `}
              className={`${!dark_theme ? 'w-[2.4vw]' : "w-[2.1vw]"} `}
              alt=""
            />
          </div>
        </div> */}
      </div>

      <div className=" flex gap-10">
        {["store", "suport", "community"].map((i, k) => (
          <div key={k} className="relative nav-r hover:animate-pulse">
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
  ) : (
    <>
      <Slider on={sd} sendDataToParent={handleDataFromChild} />
      <div className="left_ w-full h-[15vw] flex  justify-between px-2">
        <div className=" relative h-full  w-[30vw]">
          <img src="/Group 5.svg" className="w-full h-full object-fill" />
          <img
            src="Rectangle 8.svg"
            className=" absolute -top-[1vw] w-full h-full object-fill"
          />
        </div>
        <div className="h-full flex gap-4">
          <div className=" relative h-full  w-[10vw] ">
            {/* <img
              src="/button/Group 23.svg"
              className="w-full h-full object-fill"
            />
            <img
              onClick={theme}
              src={dark_theme ? "/sun_PNG13425.webp" : "moon.svg"}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-fill fill-white scale-50"
            /> */}
          </div>
          <div className=" relative h-full  w-[10vw]">
            <img
              src="/button/Group 23.svg"
              className="w-full h-full object-fill"
            />
            <img
              onClick={() => setSd(true)}
              src="three_line.svg"
              className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-full h-full object-fill fill-white scale-50"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
