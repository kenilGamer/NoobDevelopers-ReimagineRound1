import React, { useLayoutEffect, useRef, useState } from 'react'
import Cube from '../partials/Cube'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page7() {
    gsap.registerPlugin(ScrollTrigger);
    const [rotate, setRotate] = useState("0");
    const [video, setvideo] = useState(0)
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
            onStart: () => {
                setvideo(1)
            },
            opacity: 0,
            y: 500,
            duration: 2,
        })
        tl.to(".text-23", {
            opacity: 1,
            duration: 2,
            stagger: .5
        })
    })
    return (
        <div className='w-full page7 h-[100vh] bg-black relative  overflow-hidden'>
            <div
                className="cube1 w-full h-full absolute  z-20  " >
                <Cube rotate={rotate} target={target} video={video} />
            </div>
            <div className='absolute top-[40vh] left-[32vw] z-50 img-1 op'>
                <img className='img-1' src="/Page_3_img/Rectangle 83.png" width={500} alt="" />
            </div>

            <div className='haedings flex items-center justify-center '>
                <h1 className='text-center absolute top-[3vh] text-3xl text-23 heading w-[50vw] opacity-0'>Experience the Ultimate Performance with Snapdragon 778G+ chipset</h1>
                <h1 className='text-center absolute top-[25vh] text-23 w-[50vw] opacity-0'>596815 Antutu benchmar score</h1>
                <h1 className='text-center absolute top-[25vh] text-[15vw] text_border2 text-black heading opacity-0'>60nm</h1>
            </div>
        </div>

    )
}

export default Page7