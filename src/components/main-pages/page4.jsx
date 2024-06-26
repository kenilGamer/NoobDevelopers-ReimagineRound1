import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Cube from "../partials/Cube";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Box_3 from "../partials/Box_3"
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Page4({ rotate }) {
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
    const cube = useRef(null)
    const target = useRef(null)
    const [video, setvideo] = useState(0)
    const target2 = useRef(null)
    const data1 = useScroll()

    const { scrollYProgress } = useScroll({
        target: cube,
        offset: ["start end", "end end"]
    })

    const { scrollY } = useScroll({
        target: target,
        offset: ["start end", "end end"]
    })
    gsap.registerPlugin(ScrollTrigger);
    //   useLayoutEffect(() => {
    //     // let ctx = gsap.context(() => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //               trigger: ".page4",
    //               start: "top top",
    //               end: "bottom top",
    //               scrub: 3,
    //               markers: true, 
    //               pin: true,
    //             },
    //         //   });

    //         // tl.from(".boxs22", {
    //         //     opacity: 0,
    //         //     // y: -300,
    //         //     width: 0,
    //         //     height: 0,
    //         //     // scrollBehavior:smooth ,
    //         //     stagger: 0.1
    //         // })
    //         // tl.from(".text-6", {
    //         //     opacity: 0,
    //         //     duration: 1,
    //         //     stagger: 0.1
    //         // })
    //         // tl.from(".text-5", {
    //         //     opacity: 0,
    //         //     duration: 1
    //         // })

    //   })
    //   return () => ctx.revert();
    // })
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page4",
                start: "top top",
                end: "bottom top",
                scrub: 3,
                //   markers: true, 
                pin: true,
            },
        })
        tl.from(".boxs22", {
            opacity: 0,
            // y: -300,
            width: 0,
            height: 0,
            // scrollBehavior:smooth ,
            stagger: 0.1
        })
        tl.from(".text-6", {
            opacity: 0,
            duration: 1,
            stagger: 0.1
        })
        tl.from(".text-5", {
            opacity: 0,
            duration: 1
        })

    })
    return isMobile == false ? (
        <div ref={cube} className="overflow-hidden page4 w-full min-h-[100vh] bg-black relative ">
            <div className="3d-modle absolute">
                <motion.div style={{ scale: scrollYProgress }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}

                    className="cube w-full h-full fixed top-[30.5vh] text-lg -left-[0vw]  z-50" >
                    <Cube rotate={rotate} target={target2} video={video} />
                </motion.div>
            </div>
            <div className="absolute top-10 left-0 flex flex-col gap-2 items-center justify-center w-full text-5xl np">
                <h1
                    className="text-[#dbdfde] text-6 heading">Shoot Every Detail</h1>
                <h1
                    className="text-[#dbdfde] heading text-6"> Feel Every Emotion</h1>
            </div>


            <div className="main-camera">
                <div className="w-[5vw] h-[1px] bg-white boxs22 absolute top-[46vh] left-[38.9vw] z-50 "></div>
                <div className="w-[3.5vw] h-[1px] bg-white boxs22 absolute top-[43.4vh] left-[35.8vw] z-50 rotate-[40deg] "></div>
                <h1 className="text-[7vw] absolute top-[38%] text-5 -left-36 font-semibold text-[#252525] shadow heading -rotate-[90deg]">50 MP</h1>
                <div className="box w-full min-h-full ">
                    <h1 className="absolute text-3xl text-[#646363] shadow  top-[27vh] left-[24vw] text-6">Main Camera</h1>
                    <h4 className="w-32 absolute top-[35vh] left-[27vw] text-6">50 MP Sony IMX766 sensor</h4>
                    <div className="w-[8.5vw] h-[2px] absolute top-[34.5vh] left-[26.5vw] bg-white boxs22"></div>
                    <div className="w-[1.8vw] h-[2px] absolute  top-[35.7vh] left-[34.5vw] rotate-[49deg] bg-white boxs22"></div>
                    <div className="w-[1.6vw] h-[2px] absolute  top-[38.9vh] left-[35.2vw] rotate-[90deg] bg-white boxs22"></div>
                    <div className="w-[2.04vw] h-[2px] absolute  top-[42.09vh] left-[34.2vw] -rotate-[40deg] bg-white boxs22"></div>
                    <div className="w-[2.6vw] h-[2px] absolute  top-[40.8vh] left-[23.7vw] rotate-[90deg]  bg-white boxs22"></div>
                    <div className="w-[2.3vw] h-[2px] absolute top-[36.1%] left-[24.8%] -rotate-[45deg]  bg-white boxs22"></div>
                    <div className="w-[9.5vw] h-[2px] absolute top-[43.6%] left-[25.2%] bg-white boxs22"></div>
                </div>
            </div>

            <div className="camer2">
                <div className="w-[5vw] h-[1px] bg-white boxs22 absolute top-[54vh] left-[38.9vw] z-50 "></div>
                <div className="w-[3.6vw] h-[1px] bg-white boxs22 absolute top-[56.4vh] left-[35.8vw] z-50 -rotate-[40deg] "></div>
                <div className="box w-full min-h-full ">
                    <h1 className="absolute text-3xl text-[#646363] shadow  top-[67vh] left-[24vw] text-6">Ultra Wide</h1>
                    <h4 className="w-32 absolute top-[57vh] left-[27vw] text-6">50 MP Samsung JN1 sensor</h4>
                    <div className="w-[8.2vw] h-[2px] absolute top-[56.5vh] left-[26.7vw] bg-white boxs22"></div>
                    <div className="w-[1.6vw] h-[2px] absolute top-[57.6vh] left-[34.7vw] rotate-[40deg] bg-white boxs22"></div>
                    <div className="w-[1.6vw] h-[2px] absolute top-[60.5vh] left-[35.3vw] rotate-[90deg] bg-white boxs22"></div>
                    <div className="w-[2vw] h-[2px] absolute top-[63.8vh] left-[34.4vw] -rotate-[40deg] bg-white boxs22"></div>
                    <div className="w-[2.6vw] h-[2px] absolute top-[62.6vh] left-[23.8vw] rotate-[90deg]  bg-white boxs22"></div>
                    <div className="w-[2.3vw] h-[2px] absolute top-[58.1vh] left-[24.8vw] -rotate-[45deg]  bg-white boxs22"></div>
                    <div className="w-[9.5vw] h-[2px] absolute top-[65.2vh] left-[25.2vw] bg-white boxs22"></div>
                </div>
            </div>

            <div className="flash">
                <div className="absolute top-[45vh] left-[43.4vw] w-[7%] h-[1px] bg-white boxs22 rotate-[90deg] z-50 "></div>
                <div className="box w-full min-h-full ">
                    <h1 className="absolute top-[30.8vh] left-[44.5vw] text-xl text-6">Flash</h1>
                    <div className="w-[5.9vw] h-[2px] absolute top-[29.9vh] left-[43.7%] bg-white boxs22"></div>
                    <div className="w-[1.3vw] h-[2px] absolute top-[30.9vh] left-[49.1vw] rotate-[40deg] bg-white boxs22"></div>
                    <div className="w-[1.3vw] h-[2px] absolute top-[33.2vh] left-[49.6vw] rotate-[90deg] bg-white boxs22"></div>
                    <div className="w-[1.5vw] h-[2px] absolute top-[35.4vh] left-[48.9vw] -rotate-[37deg] bg-white boxs22"></div>
                    <div className="w-[2vw] h-[2px] absolute top-[34.4vh] left-[41.5vw] rotate-[90deg]  bg-white boxs22"></div>
                    <div className="w-[1.5vw] h-[2px] absolute top-[31.1%] left-[42.5%] -rotate-[45deg]  bg-white boxs22"></div>
                    <div className="w-[6.5vw] h-[2px] absolute top-[36.5%] left-[42.9%] bg-white boxs22"></div>
                </div>
            </div>
            <div className="back-light">
                <h1 className=" absolute top-[31vh] left-[60.8vw] font-semibold text-6">Back Light</h1>
                <div className="absolute top-[42vh] left-[54.2vw] w-[7%] h-[1px] bg-white boxs22 -rotate-[47deg] z-50 "></div>
                <div className="absolute left-[60.1vw] top-[36vh] bg-white boxs22 h-[2px] w-[6vw] "></div>
                <div className=" absolute h-[2px] w-[1.7vw] top-[34vh] left-[59.2vw] rotate-90 bg-white boxs22 "></div>
                <div className=" absolute h-[2px] w-[1.7vw] top-[31vh] left-[59.8vw] -rotate-45 bg-white boxs22 "></div>
                <div className="absolute left-[61.1vw] top-[29.89vh] bg-white boxs22 h-[2px] w-[5vw] "></div>
                <div className=" absolute h-[2px] w-[1.2vw] top-[30.9vh] left-[65.9vw] rotate-45 bg-white boxs22 "></div>
                <div className=" absolute h-[2px] w-[1.2vw] top-[33vh] left-[66.3vw] rotate-90 bg-white boxs22 "></div>
                <div className=" absolute h-[2px] w-[1.2vw] top-[35vh] left-[65.9vw] -rotate-45 bg-white boxs22 "></div>
            </div>
            <div className="Glyph-Fil-Lights">

                <div className=" absolute top-[53.9vh] left-[57vw] bg-white boxs22 h-[1px] w-[6vw] z-50 "></div>

                <h1 className="absolute top-[50vh] left-[63.6vw] font-semibold text-6">Glyph Fil Lights</h1>
                <div className=" absolute top-[1.5vh] -left-[0.3vw] ">
                    <div className=" absolute h-[2px] w-[2vw] top-[52vh] left-[62.2vw] rotate-90 bg-white boxs22 "></div>
                    <div className="absolute left-[63.2vw] top-[54.2vh] bg-white boxs22 h-[2px] w-[8.4vw] "></div>
                    <div className=" absolute h-[2px] w-[2vw] top-[48.4vh] left-[62.9vw] -rotate-45 bg-white boxs22 "></div>
                    <div className="absolute left-[64.4vw] top-[47.05vh] bg-white boxs22 h-[2px] w-[7vw] "></div>
                    <div className=" absolute h-[2px] w-[1.5vw] top-[48.3vh] left-[71.1vw] rotate-45 bg-white boxs22 "></div>
                    <div className=" absolute h-[2px] w-[1.5vw] top-[51vh] left-[71.6vw] rotate-90 bg-white boxs22 "></div>
                    <div className=" absolute h-[2px] w-[1.3vw] top-[53.5vh] left-[71.2vw] -rotate-[43deg] bg-white boxs22 "></div>
                </div>
            </div>
        </div>
    )
        : (
            <div ref={cube} className="overflow-hidden page4 w-full h-[100vh] bg-black relative ">

                <div className="absolute -right-[48vw] top-[50vh]">
                    {/* <img className="w-full 0 h-full scale-[1.7] object-contain" src="Nothing-Phone-1-PNG-Free-Image.png" /> */}
                    <motion.div style={{ scale: scrollYProgress }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}

                    className="cube w-full min-h-full fixed top-[18%] text-lg left-[20vw]  " >
                    <Cube rotate={rotate} target={target2} video={video} />
                </motion.div>
                </div>

                <div className="absolute top-10 left-0 flex flex-col gap-2 items-center justify-center w-full text-2xl text_h1 ">
                    <h1
                        className="text-[#2c2b2b] shadow text-6  ">Shoot Every Detail</h1>
                    <h1
                        className="text-[#353333] shadow text-6"> Feel Every Emotion</h1>
                </div>
                <div className=" absolute top-[38vh]">
                    <div className="w-[30vw] absolute boxs22">
                        <Box_3 w="100%" t="-10px" type="type_3" />
                        <div className="absolute w-full text-center top-0 np">
                        <h1>50 MP</h1> <h5 className="text-[2.5vw]">Sony IMX766 sensor </h5> 
                        </div>
                        <div className=" absolute -top-[5.4vw] -right-[10vw] w-[1px] h-[22vw] rotate-90 bg-white"></div>
                    </div>
                </div>

                <div className=" absolute top-[45vh]">
                    <div className="w-[30vw] absolute boxs22">
                        <Box_3 w="100%" t="0px" type="type_3" />
                        <div className="absolute w-full text-center top-3 sn">
                        <h1>50 Mp</h1> <h5 className="text-[2vw]">MP Samsung JN1 sensor </h5> 
                        </div>
                        <div className="absolute -top-[6vw] -right-[10vw] w-[1px] h-[22vw] rotate-90 bg-white"></div>
                        
                    </div>
                </div>
            </div>
        )
}

export default Page4
