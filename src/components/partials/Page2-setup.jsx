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
      <div className="text-center absolute text-2  w-full top-[5vw] -left-[2.7vw] heading ">
        <h1 className="text-[70px] shadows shadow-white">Features</h1>
      </div>
      <div className="relative boxs hover:cursor-pointer hover:animate-pulse ml-[8.7vw] -mt-[2vw]">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-7">
          <h1 className="text-[2.5vw] np">Design</h1>
          <p className="text-[1.5vw]">Design that goes beyond the surface.</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.6vw] absolute boxs bg-white boxs-line top-[14.5vw] left-[18vw] rotate-[50deg]"></div>
      </div>

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[11.5vw] ml-[46vw] ">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-4">
          <h1 className="text-[2.5vw] np">Battery</h1>
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

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[15vw] ml-[4.6vw]">
        <div className="absolute boxs top-[7vw]  w-[12vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-7">
          <h1 className="text-[2.5vw] np">Camera</h1>
          <div className="w-44">
          <p className="text-lg">50MP dual camera with Sony IMX sensor</p>
          </div>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.6vw] absolute boxs bg-white boxs-line top-[14.5vw] left-[18vw] rotate-[50deg]"></div>
      </div>

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse -mt-[5.7vw] ml-[25.4vw] ">
        <div className="absolute boxs top-[7.7vw] w-[16vw] h-[26vh] left-[4.7vw] text-3 z-30 flex flex-col gap-6">
          <h1 className="text-[2.5vw] np">Display</h1>
          <p className="text-[1.5vw]">6.55” AMOLED display. HDR10+</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[6.2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.5vw] absolute boxs bg-white boxs-line top-[5.1vw] left-[4.1vw] rotate-[49deg]"></div>
      </div>
      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[30.5vw] ml-[21.2vw] ">
        <div className="absolute boxs top-[7vw] w-[14vw] h-[26vh] left-[7vw] text-3 z-30 flex flex-col gap-8">
          <h1 className="text-[2.5vw] np">Sustainability</h1>
          <p className="text-[1.5vw]">Made with 100% recycled aluminium.</p>
        </div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[6.2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.6vw] left-[2vw]"></div>
        <div className="w-[22.7vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[24.5vw]"></div>
        <div className="w-[2px] h-[5.5vw] absolute boxs bg-white boxs-line top-[5.1vw] left-[4.1vw] rotate-[49deg]"></div>
      </div>
      <div className="relative boxs hover:cursor-pointer hover:animate-pulse mt-[11.5vw] ml-[46vw] ">
        <div className="absolute boxs top-[7vw] w-[18vw] h-[26vh] left-12 text-3 z-30 flex flex-col gap-4">
          <h1 className="text-[2.5vw] np">Glyph Interface</h1>
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

      <div className="relative boxs hover:cursor-pointer hover:animate-pulse -mt-[7vw]  ml-[60.3vw]  w-80 rotate-180 ">
        <div className="absolute boxs top-[6vw] w-[16vw] h-[26vh] left-[1vw] text-3 z-30 flex flex-col gap-4 -rotate-180">
          <h1 className="text-[2.5vw] np">Chipset</h1>
          <p className="text-[1.5vw]">Snapdragon 778G+ accelerated by 5G</p>
        </div>
        <div className="w-[14vw] h-[2px] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[2px] h-[13vw] absolute boxs bg-white boxs-line top-[6vw] left-[2vw]"></div>
        <div className="w-[18.3vw] h-[2px] absolute boxs bg-white boxs-line top-[19vw] left-[2vw]"></div>
        <div className="w-[2px] h-[9.5vw] absolute boxs bg-white boxs-line top-[9.59vw] left-[20.19vw]"></div>
        <div className="w-[2px] h-[5.7vw] absolute boxs bg-white boxs-line top-[4.96vw] left-[18vw] rotate-[-52deg]"></div>
      </div>

      <div className=" relative boxs hover:cursor-pointer hover:animate-pulse mt-[45.3vw]  ml-[65vw] bg-slate boxs-line-100 w-80 rotate-180 ">
        <div className="absolute boxs top-[7vw] w-[16vw] h-[26vh] bg-zinc-00 justify-center items-center left-[2vw] text-3 z-30 flex flex-col gap-4 -rotate-180">
          <h1 className="text-[2.5vw] np">Performance</h1>
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
        className=" mySwiper w-[100vw] relative flex  gap-[2vw]  h-[80vh] text-white bg-white  "
      >
        <SwiperSlide className="relative h-full min-w-full flex items-center justify-center bg-black ">
        <h1 className="text-2 top-0 left-[30%] text-5[1.5vw] absolute">Features</h1>
          <div className="absolute top-[22.5vw] left-[15vw]">
            <div className="relative w-full h-full ">
              <Box w="40vw" type="type_1" />
              <div className="absolute  boxs top-[4vw] w-full h-full left-[2vw] text-3 z-30 flex flex-col gap-6">
                <h1 className="text-2[1.5vw] ml-3 np">Design</h1>
                <p className="text-[2.5vw]">
                  Design that goes beyond the surface.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[55vw] left-[5vw] ">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_1" />
              <div className="absolute  boxs top-[4vw]  w-full h-full left-[5vw] text-3 z-30 flex flex-col gap-6 ">
                <h1 className="text-2[1.5vw] np">Display</h1>
                <p className="text-[2.9vw]"> 6.55” AMOLED display. HDR10+</p>
              </div>
            </div>
          </div>

          <div className="absolute top-[40.5vw] right-[5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_4" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[14vw] text-3 z-30 flex flex-col gap-12">
                <h1 className="text-2[1.5vw] np">Camera</h1>
                
              </div>
              <div className="absolute boxs top-[17vw] w-44 left-2">
              <p className="text-[2.7vw] w-32">
                  50MP dual camera with Sony IMX sensor
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[75vw] left-[38.5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_4" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[8vw] text-3 z-30 flex flex-col gap-1 ">
                <h1 className="text-[3.5vw] ml-5 np">Sustainability</h1>
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
              <div className="absolute  boxs top-[3vw] w-full h-full left-[5vw] text-3 z-30 flex flex-col gap-5 ">
                <h1 className="text-[3.5vw] np">Chipset</h1>
                <div className="w-32 ml-5 ">
                <p className="text-[3vw]">
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
                <h1 className="text-[3.5vw] np">Performance</h1>
              <div className="w-32">
              <p className="text-[3vw] ml-5">
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
                <h1 className="text-[4vw] np">Battery</h1>
                <p className=" text-[3vw]">
                  Fuel everything you need. Enjoy as you want. Charge Fast
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[75vw] right-[38.5vw]">
            <div className="relative w-full h-full">
              <Box w="40vw" type="type_3" />
              <div className="absolute  boxs top-[3vw] w-full h-full left-[3vw] text-3 z-30 flex flex-col gap-3 ">
                <h1 className="text-[3.5vw] text-nowrap np">Glyph Interface</h1>
               <div className="w-32">
               <p className="text-[3vw] np">
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