import React, { useLayoutEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page6() {
    gsap.registerPlugin(ScrollTrigger);
    const [rotate, setRotate] = useState("0");
    
    const target = useRef(null)
    const target2 = useRef(null)
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
          
    //   })
    //   return () => ctx.revert();
    //   })
    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target2.current,
          start: "top top",
          end: "bottom top",
          scrub: 3,
          markers: true,
          pin: true,
          toggleActions: "play none none reverse",
      }}) 
      tl.to(target.current,{
        // fontSize: "100%",
        transform: "rotateX(-100deg) rotateY(-90deg) rotateZ(0deg)",
        duration:2 ,
      })
      tl.to(".text-2",{
        opacity: 1,
        duration: 2 ,
        ease: "power3.out",
  })
    })
  return (
    <div ref={target2} className='w-full h-screen bg-black relative'>
       <div
            className="cube1 w-full h-full absolute top-[5vh] z-20  " >
            <Cube rotate={rotate} target={target} />
        </div>
        <div className='flex items-center justify-center flex-col p-7 gap-5'>
        <h1 className='text-2xl heading w-96 text-center text-2 opacity-0'>Outshine the Ordinary 10 Bit AMOLED Display</h1>
        <h1 className='text-xl text-2 opacity-0'>1200nits Peak Brightness</h1>
        </div>
        <div className=''>
            <h1 className='text-[10vw] absolute top-[40vh] left-[17vw] heading text-black text_border2 tracking-widest text-2 opacity-0'>HDR10+</h1>
        </div>
            <img className='w-[40vw] absolute top-[70vh] left-[30vw] text-2 opacity-0 ' src="/Page_3_img/Rectangle 80.svg"  alt="" />
        <div>
        </div>
    </div>

  )
}

export default Page6