import React, { useLayoutEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page7() {
    gsap.registerPlugin(ScrollTrigger);
    const [rotate, setRotate] = useState("0");

    const target = useRef(null)
    const target2 = useRef(null)
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
          
    //     })
    //     return () => ctx.revert();
    // })
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: target2.current,
                start: "top top",
                end: "bottom top",
                scrub: 3,
                markers: true,
                pin: true,
                // pinSpacing: false,
                // toggleActions: "play none none reverse",
            }
        })
        tl.to(target.current, {
            // fontSize: "100%",
            transform: "rotateX(-100deg) rotateY(-90deg) rotateZ(0deg)",
            duration: 2,
        })
    })
    return (
        <div ref={target2} className='w-full h-[100vh] bg-black relative'>
                <div
                    className="cube1 w-full h-full absolute  z-20  " >
                    <Cube rotate={rotate} target={target} />
                </div>        
        </div>

    )
}

export default Page7