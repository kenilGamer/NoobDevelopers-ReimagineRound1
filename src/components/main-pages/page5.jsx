import React, { useLayoutEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page5({rotate}) {
  gsap.registerPlugin(ScrollTrigger);
  // const [rotate, setRotate] = useState("0");
  const target = useRef(null)
  const target2 = useRef(null)
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: target2.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 3,
  //         // markers: true,
  //         pin: true,
  //         pinSpacing: false, 
  //         toggleActions: "play none none reverse",
  //     }}) 
  //     tl.to(target.current,{
  //       // fontSize: "100%",
  //       transform: "rotateX(-100deg) rotateY(180deg) rotateZ(0deg)",
  //       duration:2,
  //     })
  //     tl.from(".boxs1", {
  //       opacity: 0,
  //       // y: -300,
  //       width: 0,
  //       height: 0,
  //   })
  //   tl.from(".text-1", {
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.1
  //   })
  //   // tl.to(".cube", {
  //   //   opacity: 0
  //   // })
  // })
  // return () => ctx.revert();
  // })
  const [video, setvideo] = useState(0)
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
       <div
            className="cube w-full h-full absolute -left-[10vw] " >
            <Cube rotate={rotate} target={target}   video={video} />
        </div>
        <div className='camera-page'>
          <h1 className='absolute  z-[50] text-1 top-[14vh] left-[18.1vw] w-32 '>16 MP Sony IMX471 sensorr</h1>
          <h1 className='absolute  z-[50] text-1 top-[25vh] left-[17vw] heading '>Front camere</h1>
          <p className=' absolute  z-[50] text-1 top-[25vh] left-[50vw] text-6xl font-black w-[40vw] text-[#1d1d1c] shadow font2'>Include yourself with every moment</p>
          <p className=' absolute  z-[50] text-1 top-[70vh] left-[50vw] font-black text-4xl w-[40vw] heading'>Say nothing and have a click</p>
          <div className='absolute boxs1 z-[50]  h-[1px] w-[6vw] top-[17.5vh] left-[27vw] bg-white '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[7.5vw] top-[13.5vh] left-[18.5vw] bg-white  '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[1.5vw] top-[14.8vh] left-[25.7vw] bg-white rotate-[45deg] '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[2vw] top-[17.8vh] left-[26vw] bg-white rotate-[90deg] '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[1.5vw] top-[20.8vh] left-[25.7vw] bg-white -rotate-[45deg] '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[8.6vw] top-[21.9vh] left-[17.4vw] bg-white  '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[2.5vw] top-[19.4vh] left-[16vw] bg-white rotate-[90deg] '></div>
          <div className='absolute boxs1 z-[50]  h-[2px] w-[2vw] top-[15vh] left-[16.9vw] bg-white -rotate-[45deg] '></div>
        </div>
    </div>
  )
}

export default Page5