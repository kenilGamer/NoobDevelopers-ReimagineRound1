import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page6({ rotate }) {
  gsap.registerPlugin(ScrollTrigger);
  // const [rotate, setRotate] = useState("0");

  const target = useRef(null)
  const target2 = useRef(null)
  // useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {

  //   })
  //   return () => ctx.revert();
  //   })
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
  const [video, setvideo] = useState(0)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target2.current,
        start: "top top",
        end: "bottom top",
        scrub: 3,
        // markers: true,
        pin: true,
        toggleActions: "play none none reverse",
      }
    })
    tl.to(target.current, {
      // fontSize: "100%",
      transform: "rotateX(-100deg) rotateY(-90deg) rotateZ(0deg)",
      duration: 2,
    })
    tl.from(".text-2-2", {
      opacity: 0,
      duration: 3,
      y:100,
      // ease: "power3.out",
      stagger: 1
    })
    tl.to(".text-2", {
      opacity: 1,
      duration: 2,
      // ease: "power3.out",
      stagger: 1
    })
  })
  return isMobile === false ? (
    <div ref={target2} className='w-full h-screen bg-black relative overflow-hidden'>
      <div
        className="cube1 w-full text-xl h-full absolute top-[5vh] z-20  " >
        <Cube rotate={rotate} target={target} video={video} />
      </div>
      <div className='flex items-center justify-center flex-col p-7 gap-5'>
        <h1 className='text-3xl heading w-[50vw]  text-[#707070] text-center text-2-2'>Outshine the Ordinary 10 Bit AMOLED Display</h1>
        <h1 className='text-xl text-2 heading opacity-0 text-[#707070] '><samp className='text-white heading'>1200nits</samp> Peak Brightness</h1>
      </div>
      <div className=''>
        <h1 className='text-[13vw] absolute top-[35vh] left-[5vw] heading textww tracking-widest text-2 opacity-0'>HDR10+</h1>
      </div>
      <h1 className=' absolute top-[75vh] heading left-[30vw] text-2 textyy text-[8vw] opacity-0'>120HZ</h1>
      {/* <img className='w-[40vw] absolute top-[70vh] left-[30vw] text-2 opacity-0 ' src="/Page_3_img/Rectangle 80.svg"  alt="" /> */}
      <div>
      </div>
    </div>

  ) : (
    <div ref={target2} className='w-full h-screen bg-black relative overflow-hidden p-2 '>
      <div className="cube1 w-full h-full max-md:text-xs absolute z-20">
        <Cube rotate={rotate} target={target} video={video} />
      </div>
      <div className='flex items-center justify-center flex-col p-7 gap-5'>
        <h1 className='text-2xl absolute top-[10vh] heading w-96 text-center text-2-2 text-[#707070] p-1'>
          Outshine the Ordinary 10 Bit AMOLED Display
        </h1>
        <h1 className='text-md absolute top-[30vh] text-nowrap heading text-2 text-[#707070] opacity-0'><span className='text-white heading'>1200nits</span> Peak Brightness</h1>
      </div>
      <div>
        <h1 className='text-[15vw] absolute top-[45vh]  textww heading tracking-widest text-2 opacity-0'>
          HDR10+
        </h1>
      </div>
      <h1 className=' absolute top-[67vh] left-[2vw] heading text-[18vw] text-2 textyy opacity-0'>120HZ</h1>
      {/* <img className='w-[100vw] absolute top-[60vh] left-[50%] -translate-x-1/2 text-2 opacity-0' src="/Page_3_img/Rectangle 80.svg" alt="" /> */}
    </div>
  );
}

export default Page6