import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page7({rotate}) {
    gsap.registerPlugin(ScrollTrigger);
    // const [rotate, setRotate] = useState("0");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [video, setvideo] = useState(2)
    const target = useRef(null)
    const target2 = useRef(null)
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {

    //     })
    //     return () => ctx.revert();
    // })
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.page7',
                start: "top 0%",
                end: "top -150%",
                scrub: 5,
                // markers: true,
                pin: true,
                // pinSpacing: false,
                // toggleActions: "play none none reverse",
            }
        })
        tl.to(".text_border2", {
            opacity: 1,
            duration: 2,
        })
        tl.to(target.current, {
            // fontSize: "100%",
            transform: "rotateX(-100deg) rotateY(-90deg) rotateZ(0deg)",
            duration: 3,
        })

        tl.from(".img-1", {
            // onStart: () => {
            //     setvideo(1)
            // },
            opacity: 0,
            y: 500,
            duration: 2,
        })
        tl.to(".text-23", {
            opacity: 1,
            duration: 2,
            stagger: .5
        },'a')
        tl.from(".text-23-1", {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: .5
      },'a')
    })
    return isMobile === false ?  (
        <div className='w-full page7 h-[100vh] bg-black relative  overflow-hidden'>
            <div
                className="cube1 w-full h-full absolute top-[10vh]  z-20  " >
                <Cube rotate={rotate} target={target} video={video} />
            </div>
            <div className='absolute top-[50vh] left-[31vw] z-50 img-1 op'>
                <img className='img-1' src="/enter2-hand.png" width={500} alt="" />
            </div>
            <div className='haedings flex items-center justify-center '>
                <h1 className='text-center absolute top-[7vh] text-3xl text-23-1 heading w-[50vw]'>Experience the Ultimate Performance with Snapdragon 778G+ Chipset</h1>
                <h1 className='text-center absolute top-[30vh] text-23 w-[50vw] heading text-[#999d9c] opacity-0'><samp className='text-white heading'>596815</samp> Antutu benchmark Score</h1>
                <h1 className='text-center absolute top-[30vh] text-[18vw]  textww  heading opacity-0'>6nm</h1>
            </div>
        </div>

    ): (
        <div ref={target2} className='w-full page7 h-[100vh] bg-black relative overflow-hidden px-2'>
          <div className="cube1 w-full h-full max-md:text-xs absolute z-20">
            <Cube rotate={rotate} target={target} video={video} />
          </div>
          <div className='absolute top-[45vh] left-[5vw] z-50 img-1'>
            <img className='img-1' src="/enter2-hand.png" width={510} alt="" />
          </div>
          <div className='headings flex items-center justify-center'>
            <h1 className='text-center absolute top-[10vh] text-2xl text-23-1 text-[#999d9c] heading w-[100vw] ' >
              Experience the Ultimate Performance with Snapdragon 778G+ chipset
            </h1>
            <h1 className='text-center absolute top-[30vh] text-[#999d9c] text-23 text-xl heading opacity-0'>
            <samp className='text-white heading'>596815</samp>  Antutu benchmark score
            </h1>
            <h1 className='text-center textww absolute top-[40vh] text-[22vw]  text-23 heading opacity-0'>
              6nm
            </h1>
          </div>
        </div>
      );
}

export default Page7