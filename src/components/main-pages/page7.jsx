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
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.page7',
                start: "top 0%",
                end: "top -100%",
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
        tl.from(".img-1",{
            opacity: 0,
            y:500,
            duration: 2,
        })
    })
    return (
        <div className='w-full page7 h-[100vh] bg-black relative'>
            <div
                className="cube1 w-full h-full absolute  z-20  " >
                <Cube rotate={rotate} target={target} />
            </div>
            <div className='absolute top-[40vh] left-[32vw] z-50 img-1 op'>
                <img className='img-1' src="/Page_3_img/Rectangle 83.png" width={500} alt="" />
            </div>
        </div>

    )
}

export default Page7