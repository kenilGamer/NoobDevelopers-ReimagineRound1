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

  return isMobile == false ? (
     <div className="w-full h-full text-white page2 overflow-hidden">
      <div className="text-center absolute text-2  w-full top-[5em] -left-[2.5em] heading ">
        <h1 className="text-[5vw] shadows shadow-white">Features</h1>
      </div>
      <div className="relative boxs hover:cursor-pointer hover:animate-pulse ml-[8.7em] -mt-[2vem]">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-7">
          <h1 className="text-[2.5vw] ">Design</h1>
          <p className="text-[1.5vw]">Design that goes beyond the surface.</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.6vw] absolute boxs bg-white boxs-line top-[14.5vw] left-[18vw] rotate-[50deg]"></div>
      </div>

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[9.5em] ml-[46em] ">
        <div className="absolute boxs top-[15vh] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-4">
          <h1 className="text-[2.5vw] ">Battery</h1>
          <p className="text-[1.5vw] ">
            Fuel everything you need. Enjoy as you want. Charge Fast
          </p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[15em] ml-[4.6em]">
        <div className="absolute boxs top-[15vh]  w-[12vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-7">
          <h1 className="text-[2.5vw] ">Camera</h1>
          <div className="w-44">
          <p className="text-lg w-52">50MP dual camera with Sony IMX sensor</p>
          </div>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.6vw] absolute boxs bg-white boxs-line top-[14.5vw] left-[18vw] rotate-[50deg]"></div>
      </div>

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse -mt-[5.7em] ml-[25.4em] ">
        <div className="absolute boxs top-[16.7vh] w-[16vw] h-[26vh] left-[4.7vw] text-3 z-30 flex flex-col gap-6">
          <h1 className="text-[2.5vw] ">Display</h1>
          <p className="text-[1.5vw]">6.55” AMOLED display. HDR10+</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[6.2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.5vw] absolute boxs bg-white boxs-line top-[5.1vw] left-[4.1vw] rotate-[49deg]"></div>
      </div>
      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[30.5em] ml-[21.2em] ">
        <div className="absolute boxs top-[15vh] w-[14vw] h-[26vh] left-[7vw] text-3 z-30 flex flex-col gap-5">
          <h1 className="text-[2.5vw] ">Sustainability</h1>
          <p className="text-[1.5vw]">Made with 100% recycled aluminium.</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[6.2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.6vw] left-[2vw]"></div>
        <div className="w-[22.7vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[24.5vw]"></div>
        <div className="w-[2px] h-[5.5vw] absolute boxs bg-white boxs-line top-[5.1vw] left-[4.1vw] rotate-[49deg]"></div>
      </div>
      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[9.5em] ml-[46em] ">
        <div className="absolute boxs top-[15vh] w-[18vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-4">
          <h1 className="text-[2.5vw] ">Glyph Interface</h1>
          <p className="text-[1.5vw]">
            A new way to communicate. Unique light patterns
          </p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[22.8vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[24.66vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[22.4vw] rotate-[-52deg]"></div>
      </div>

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse -top-[1em]  left-[63.5em]  w-80 rotate-180 ">
        <div className="absolute boxs top-[13vh] w-[16vw] h-[26vh] left-[1vw] text-3 z-30 flex flex-col gap-4 -rotate-180">
          <h1 className="text-[2.5vw] ">Chipset</h1>
          <p className="text-[1.5vw]">Snapdragon 778G+ accelerated by 5G</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>

      <div className=" relative boxs hover:cursor-pointer hover:animate-pulse top-[13em]  left-[67.5em] bg-slate boxs-line-100 w-80 rotate-180 ">
        <div className="absolute boxs top-[15vh] w-[16vw] h-[26vh] bg-zinc-00 justify-center items-center left-[2vw] text-3 z-30 flex flex-col gap-4 -rotate-180">
          <h1 className="text-[2.5vw] ">Performance</h1>
          <p className="text-[1.5vw]">Essential power for speed and gaming</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>
    </div>

  ):(
    <>
    <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" mySwiper w-[100vw] relative flex heading  gap-[2vw]  h-[80vh] text-white bg-black  "
      >
        <SwiperSlide className="relative h-full min-w-full flex items-center justify-center bg-black ">
        {/* <h1 className="text-2 text-white  text-5 top-[5.5vw] text-4xl absolute">Features</h1> */}
        <div className="text-center absolute text-2  w-full top-[5vw] left-[.5vw] heading ">
        <h1 className="text-[10vw] shadows shadow-white">Features</h1>
      </div>
          <div className="absolute top-[22.5vw] left-[15vw]">
            <div className="relative w-full h-full ">
              <Box w="40vw" type="type_1" />
              <div className="absolute  boxs top-[4vw] w-full h-full left-[2vw] text-3 z-30 flex flex-col gap-6">
                <h1 className="text-2[1.5vw] ml-3 ">Design</h1>
                <p className="text-[2vw] w-32">
                  Design that goes beyond the surface.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[55vw] left-[5vw] ">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_1" />
              <div className="absolute  boxs top-[4vw]  w-full h-full left-[5vw] text-3 z-30 flex flex-col gap-6 ">
                <h1 className="text-2[1.5vw] ">Display</h1>
                <p className="text-[2vw] w-32"> 6.55” AMOLED display. HDR10+</p>
              </div>
            </div>
          </div>

          <div className="absolute top-[40.5vw] right-[5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_4" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[11vw] text-3 z-30 flex flex-col gap-12">
                <h1 className="text-2 ">Camera</h1>
                
              </div>
              <div className="absolute boxs top-[17vw] w-44 left-2">
              <p className="text-[2vw] w-32">
                  50MP dual camera with Sony IMX sensor
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[75vw] left-[38.5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_4" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[8vw] text-3 z-30 flex flex-col gap-1 ">
                <h1 className="text-[3vw] ml-1.5 ">Sustainability</h1>
                {/* <p className="text-[2vw]">Made with 100% recycled aluminium.</p> */}
              </div>
              <div className="absolute boxs top-[17vw] w-48 left-4">
              <p className="text-[2.5vw] w-32">Made with 100% recycled aluminium.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative  h-full w-[100vw] min-w-full  bg-black">
          
          <div className="absolute top-[22.5vw] right-[15vw]">
            <div className="relative w-full h-full ">
              <Box w="40vw" type="type_2" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[2.5vw] text-3 z-30 flex flex-col gap-5 ">
                <h1 className="text-[3.5vw] ml-4 ">Chipset</h1>
                <div className="w-32 ml-5 ">
                <p className="text-[2vw]">
                  Snapdragon 778G+ accelerated by 5G
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[55vw] right-[5vw] ">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_2" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[4vw] text-3 z-30 flex flex-col gap-6 ">
                <h1 className="text-[3vw] ">Performance</h1>
              <div className="w-32">
              <p className="text-[2vw] ml-7">
                  Essential power for speed and gaming
                </p>
              </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[40.5vw] left-[5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_3" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[3vw] text-3 z-30 flex flex-col gap-5 ">
                <h1 className="text-[3vw] ">Battery</h1>
                <p className=" text-[2vw] w-32">
                  Fuel everything you need. Enjoy as you want. Charge Fast
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[75vw] right-[38.5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_3" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[3vw] text-3 z-30 flex flex-col gap-6 ">
                <h1 className="text-[2.5vw] text-nowrap ">Glyph Interface</h1>
               <div className="w-32">
               <p className="text-[2vw] ">
                  A new way to communicate. Unique light patterns
                </p>
               </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
  )
}

export default Page2setup;