import React, { useEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box_3 from '../partials/Box_3';

function Page5({rotate}) {
  gsap.registerPlugin(ScrollTrigger);
  // const [rotate, setRotate] = useState("0");
  const target = useRef(null)
  const target2 = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobile2, setIsMobile2] = useState(window.innerWidth <= 360);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [video, setvideo] = useState(0);
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target2.current,
        start: "top top",
        end: "top -100%",
        scrub: 3,
        // markers: true,
        pin: true,
        // pinSpacing: false, 
        toggleActions: "play none none reverse",
    }}) 
    tl.to(target.current,{
      // fontSize: "100%",
      transform: "rotateX(-100deg) rotateY(180deg) rotateZ(0deg)",
      duration:2,
    })
    tl.from(".boxs1", {
      opacity: 0,
      width: 0,
      height: 0,
  })
  tl.from(".text-1", {
      opacity: 0,
      duration: 1,
      stagger: 0.1
  })
  // tl.to(".cube", {
  //   opacity: 0
  // })
  })
  return (
    <div ref={target2} className='w-full h-screen bg-black relative overflow-hidden'>
      <div className={`cube w-full h-full absolute ${isMobile ? 'translate-x-[18vw] left-[5vw] page5-2' : '-left-[10vw]'}`}>
        <Cube rotate={rotate} target={target} video={video} />
      </div>
      {isMobile == false ? (
        <div   className='camera-page'>
          
          <p   className='absolute z-[50] text-1 top-[22vh] left-[50vw] text-5xl font-black w-[40vw] text-[#d3caca]  heading font2'>Include yourself with every moment</p>
          <p   className='absolute z-[50] text-1 top-[75vh] left-[50vw] font-black text-3xl w-[40vw] text-white font-mono tracking-tighter'>Say nothing and have a click</p>
         
         <div className='absolute left-2  w-full'>
         <h1  className='absolute z-[50] text-1 top-[14vh] left-[18.5vw] w-32'>16 MP Sony IMX471 sensor</h1>
          <h1  className='absolute z-[50] text-1 top-[25vh] left-[17vw] text-sm heading'>Front camera</h1>
          <div className='absolute boxs1 z-[50] h-[1px] w-[6vw] top-[17.5vh] left-[27vw] bg-white'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[7.5vw] top-[13.5vh] left-[18.5vw] bg-white'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[1.5vw] top-[14.8vh] left-[25.7vw] bg-white rotate-[45deg]'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[2vw] top-[17.8vh] left-[26vw] bg-white rotate-[90deg]'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[1.5vw] top-[20.8vh] left-[25.7vw] bg-white -rotate-[45deg]'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[8.6vw] top-[21.9vh] left-[17.4vw] bg-white'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[2.5vw] top-[19.4vh] left-[16vw] bg-white rotate-[90deg]'></div>
          <div className='absolute boxs1 z-[50] h-[2px] w-[2vw] top-[15vh] left-[16.9vw] bg-white -rotate-[45deg]'></div>
         </div>
        </div>
      ) : (
       <div className='p-3'>
        <p   className='absolute z-[50] top-[5vh] text-[6vw] text-center font-black heading text-[#999d9c] font2 text-1'>Include yourself with every moment</p>
         <div className={`absolute page5-1 top-[21.5vh]`}>
          <div className='w-[30vw] relative boxs1'>
            <Box_3   w='100%' t='-2vh' type='type_3' />
            <div className='absolute w-full text-center sn top-0'>
              <h1 className='text-[2.5vw] page5-2 text-1'>16 MP Sony IMX471 sensor</h1>
            </div>
            <div className='absolute -top-[4.6vw] -right-[7vw] w-[1px] h-[16vw] rotate-90 bg-white'></div>
          </div>
        </div>
       </div>
      )}
    </div>
  )
}

export default Page5