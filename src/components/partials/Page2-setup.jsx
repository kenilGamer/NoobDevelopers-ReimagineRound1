import React, { useState, useEffect } from "react";
import Box from '../partials/Box';
import Box_1 from '../partials/Box_1';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';







function Page2setup() {
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

  return isMobile==false ? (
    <div className="w-full min-h-full text-white overflow-hidden">
      <div className="text-center absolute boxs w-full top-[7vw] -left-[2.7vw] heading ">
        <h1 className="text-7xl shadows shadow-white">Features</h1>
      </div>
      <div className="relative box hover:cursor-pointer hover:animate-pulse ml-[8.7vw] -mt-[2vw]">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-12">
          <h1 className="text-3xl np">Design</h1>
          <p className="text-xl">Design that goes beyond the surface.</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.6vw] absolute boxs bg-white boxs-line top-[14.5vw] left-[18vw] rotate-[50deg]"></div>
      </div>

      <div className="relative box hover:cursor-pointer hover:animate-pulse mt-[11.5vw] ml-[46vw] ">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-6">
          <h1 className="text-3xl np">Battery</h1>
          <p className="text-xl">
            Fuel everything you need. Enjoy as you want. Charge Fast
          </p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>

      <div className="relative box hover:cursor-pointer hover:animate-pulse mt-[15vw] ml-[4.6vw]">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-12">
          <h1 className="text-3xl np">Camera</h1>
          <p className="text-xl">50MP dual camera with Sony IMX sensor</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.6vw] absolute boxs bg-white boxs-line top-[14.5vw] left-[18vw] rotate-[50deg]"></div>
      </div>

      <div className="relative box hover:cursor-pointer hover:animate-pulse -mt-[5.7vw] ml-[25.4vw] ">
        <div className="absolute boxs top-[8.7vw] w-[16vw] h-[26vh] left-[4.7vw] text-3 z-30 flex flex-col gap-8">
          <h1 className="text-3xl np">Display</h1>
          <p className="text-xl">6.55” AMOLED display. HDR10+</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[6.2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.5vw] absolute boxs bg-white boxs-line top-[5.1vw] left-[4.1vw] rotate-[49deg]"></div>
      </div>
      <div className="relative box hover:cursor-pointer hover:animate-pulse mt-[30.5vw] ml-[21.2vw] ">
        <div className="absolute boxs top-[7vw] w-[14vw] h-[26vh] left-[7vw] text-3 z-30 flex flex-col gap-12">
          <h1 className="text-3xl np">Sustainability</h1>
          <p className="text-xl">Made with 100% recycled aluminium.</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[6.2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.6vw] left-[2vw]"></div>
        <div className="w-[22.7vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[24.5vw]"></div>
        <div className="w-[2px] h-[5.5vw] absolute boxs bg-white boxs-line top-[5.1vw] left-[4.1vw] rotate-[49deg]"></div>
      </div>
      <div className="relative box hover:cursor-pointer hover:animate-pulse mt-[11.5vw] ml-[46vw] ">
        <div className="absolute boxs top-[7vw] w-[18vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-8">
          <h1 className="text-3xl np">Glyph Interface</h1>
          <p className="text-xl">
            A new way to communicate. Unique light patterns
          </p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[22.8vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[24.66vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[22.4vw] rotate-[-52deg]"></div>
      </div>

      <div className="relative box hover:cursor-pointer hover:animate-pulse -mt-[7vw]  ml-[60.3vw]  w-80 rotate-180 ">
        <div className="absolute boxs top-[6vw] w-[16vw] h-[26vh] left-[1vw] text-3 z-30 flex flex-col gap-12 -rotate-180">
          <h1 className="text-3xl np">Chipset</h1>
          <p className="text-xl">Snapdragon 778G+ accelerated by 5G</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>

      <div className=" relative box hover:cursor-pointer hover:animate-pulse mt-[45.3vw]  ml-[65vw] bg-slate boxs-line-100 w-80 rotate-180 ">
        <div className="absolute boxs top-[6vw] w-[16vw] h-[26vh] left-[1vw] text-3 z-30 flex flex-col gap-8 -rotate-180">
          <h1 className="text-3xl np">Performance</h1>
          <p className="text-xl">Essential power for speed and gaming</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>
    </div>
    
  ) : (
    <>
    <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper" className="w-[100vw] relative flex gap-[2vw] p-1  h-[100vh] min-h-[100vh] text-white bg-white  ">
    
    <SwiperSlide className="relative rounded-2xl h-full w-[100vw] min-w-full bg-black ">
    
    <div className="absolute top-[22.5vw] left-[15vw]"> 
      <div className="relative w-full h-full ">
      <Box w="40vw"  type="type_1"/>
      <div className="absolute  boxs top-[0vw] w-full h-full left-[1vw] text-3 z-30 flex flex-col gap-1 ">
          <h1 className="text-xs np">Chipset</h1>
          <p className="text-[2vw]">Snapdragon 778G+ accelerated by 5G</p>
        </div>
      </div>
      </div>
    
        <div className="absolute top-[55vw] left-[5vw] "> 
      <div className="relative w-full h-full">
      <Box w="40vw"  type="type_1"/>
      </div>
      </div>
    
     <div className="absolute top-[40.5vw] right-[5vw]"> 
      <div className="relative w-full h-full">
      <Box w="40vw"  type="type_4"/>

      </div>
      </div>
      
       <div className="absolute top-[75vw] left-[38.5vw]"> 
      <div className="relative w-full h-full">
      <Box w="40vw"  type="type_4"/>
      </div>
      </div>
    
    </SwiperSlide>
    
     <SwiperSlide className="relative rounded-2xl h-full w-[100vw] min-w-full  bg-black">
     
     <div className="absolute top-[22.5vw] right-[15vw]"> 
      <div className="relative w-full h-full ">
      <Box w="40vw"  type="type_2"/>
      <div className="absolute  boxs top-[0vw] w-full h-full left-[1vw] text-3 z-30 flex flex-col gap-1 ">
          <h1 className="text-xs np">Chipset</h1>
          <p className="text-[2vw]">Snapdragon 778G+ accelerated by 5G</p>
        </div>
      </div>
      </div>
    
        <div className="absolute top-[55vw] right-[5vw] "> 
      <div className="relative w-full h-full">
      <Box w="40vw"  type="type_2"/>
      </div>
      </div>
    
     <div className="absolute top-[40.5vw] left-[5vw]"> 
      <div className="relative w-full h-full">
      <Box w="40vw"  type="type_3"/>

      </div>
      </div>
      
       <div className="absolute top-[75vw] right-[38.5vw]"> 
      <div className="relative w-full h-full">
      <Box w="40vw"  type="type_3"/>
      </div>
      </div>
     
     
     </SwiperSlide>
    
    
    
      
    
    
    
    
    

    
    
    
    
    
    
    
      
      </Swiper>
      </>
      )
}
export default Page2setup;