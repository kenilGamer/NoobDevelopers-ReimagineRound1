// Page3.js
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../cube.css";
import Cube from "../partials/Cube";
import { motion, useScroll } from "framer-motion"
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const cube = useRef(null)
  const cube1 = useRef(null)
  const target = useRef(null)
  const [rotate, setRotate] = useState("0");
  const { scrollYProgress } = useScroll({
    target: cube,
    offset: ["start end", "end end"]
  })
  const { scrollY } = useScroll({
    target: target,
    offset: ["start end", "end end"]
  })
  const data1 = useScroll()
  // console.log(data1);
  // scrollY.on('change', (data) => {
  //   console.log(data % 6);
  //   if(data == 1177){
  //     alert("op")
  //   }
  // })
  useEffect(() => {
    const section = sectionRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        pin: true,
      },
    });

    timeline
    .to(".btn",{
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    })
      .to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(90deg)",
      })
      .to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(0deg)",
      })
      .to(
        section.querySelector(".element4"),
        {
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%) rotate(90deg)",
          opacity: 0,
          duration: 3,
        },
        "a"
      )
      .to(
        section.querySelector(".element5"),
        {
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%) rotate(-90deg)",
          opacity: 0,
          duration: 3,
        },
        "a"
      )
      .to(
        section.querySelector(".element6"),
        {
          top: "50%",
          right: "50%",
          transform: "translate(-50%,-50%) scale(1)",
          opacity: 0,
          duration: 3,
        },
        "a"
      )
      .to(section.querySelector(".element3"), {
        top: "80%",
        left: "60%",
        transform: "translate(-50%,-50%) rotate(0deg) scale(2)",
      })
      .to(cube1.current,{
        opacity:0
      })
      .to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(0deg) scale(1)",
      })

    gsap.to(cube1.current, {
      top: 0,
      rotate: 0,
      left: 0,
      scrollTrigger: {
        trigger: ".page3",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
      },
    });
    // gsap.to(".cube", {
    //   top: 200,
    //   fontSize: "120%",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".page4",
    //     start: "top 0%",
    //     end: "top -100%",
    //     markers:true,
    //     scrub: 2,
    //   },
    // });
    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
    };
  }, []);

  const showfront = () => {
    setRotate(rotate === '1' ? '0' : '1');
  };

  return (
    <div ref={target} className="relative page w-full min-h-[200vh]">
      <div className="page3 w-full min-h-[100vh] overflow-hidden ">
        <div
          ref={sectionRef}
          className="my-section w-full h-full relative bg-black"
        >
          <div className="element4 w-[60vw] h-auto absolute top-[50%] left-[-20%] -translate-x-1/2 -translate-y-1/2 rotate-90 z-[12]">
            <img
              id="page_3_moin_img"
              src={"../Page_3_img/water.png"}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="element5 w-[60vw] h-auto absolute top-[50%] right-[-20%] translate-x-1/2 -translate-y-1/2 -rotate-90 z-[12]">
            <img
              id="page_3_moin_img"
              src={"../Page_3_img/water.png"}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="element6 w-[100vw] h-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center items-center scale-0 z-[0]">
            <h1 className="heading text_border text-black  text-[22vw] font-medium">
              IP53
            </h1>
          </div>

        <div 
        ref={cube1}
          className="cube w-full min-h-full absolute top-[70vh] -left-[55vw] rotate-45 " >
          <Cube rotate={rotate} />
        </div>
        </div>
        {/* page3 end */}
      </div>
      <div className="3d-modle">
        <motion.div style={{ scale: scrollYProgress }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

          className="cube w-full min-h-full fixed top-[30vh] text-lg -left-[0vw]  z-10" >
          <Cube rotate={rotate} />
        </motion.div>
        <button title="rotate a phone for a 3d model "  className="px-7 py-2 rounded-full fixed top-10 right-10 border-2 opacity-0 z-50 btn" onClick={showfront}>Rotate</button>
      </div>
      <div ref={cube} className="page4  overflow-hidden w-full min-h-[100vh] bg-black relative">
        <div className="absolute top-10 left-0 flex flex-col gap-2 items-center justify-center w-full text-5xl np">
          <motion.h1
            className="text-[#2c2b2b] shadow ">Shoot Every Detail</motion.h1>
          <motion.h1
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.8 }}
             style={{ x: 100 }}
            className="text-[#353333] shadow "> Feel Every Emotion</motion.h1>
        </div>


        <div className="main-camera">
          <div className="w-[5vw] h-[1px] bg-white absolute top-[46vh] left-[38.9vw] z-50 "></div>
          <div className="w-[3.5vw] h-[1px] bg-white absolute top-[43.4vh] left-[35.8vw] z-50 rotate-[40deg] "></div>
          <h1 className="text-[13vw] absolute top-[30%] -left-36 font-semibold text-[#252525] shadow -rotate-[90deg]">50 MP</h1>
          <div className="box w-full min-h-full ">
            <h1 className="absolute text-3xl text-[#646363] shadow  top-[27vh] left-[24vw]">Main Camera</h1>
            <h4 className="w-32 absolute top-[35vh] left-[27vw] ">50 MP Sony IMX766 sensor</h4>
            <div className="w-[8.5vw] h-[2px] absolute top-[34.5vh] left-[26.5vw] bg-white"></div>
            <div className="w-[1.8vw] h-[2px] absolute  top-[35.7vh] left-[34.5vw] rotate-[49deg] bg-white"></div>
            <div className="w-[1.6vw] h-[2px] absolute  top-[38.9vh] left-[35.2vw] rotate-[90deg] bg-white"></div>
            <div className="w-[2.04vw] h-[2px] absolute  top-[42.09vh] left-[34.2vw] -rotate-[40deg] bg-white"></div>
            <div className="w-[2.6vw] h-[2px] absolute  top-[40.8vh] left-[23.7vw] rotate-[90deg]  bg-white"></div>
            <div className="w-[2.3vw] h-[2px] absolute top-[36.1%] left-[24.8%] -rotate-[45deg]  bg-white"></div>
            <div className="w-[9.5vw] h-[2px] absolute top-[43.6%] left-[25.2%] bg-white"></div>
          </div>
        </div>

        <div className="camer2">
          <div className="w-[5vw] h-[1px] bg-white absolute top-[54vh] left-[38.9vw] z-50 "></div>
          <div className="w-[3.6vw] h-[1px] bg-white absolute top-[56.4vh] left-[35.8vw] z-50 -rotate-[40deg] "></div>
          <div className="box w-full min-h-full ">
            <h1 className="absolute text-3xl text-[#646363] shadow  top-[67vh] left-[24vw]">Ultra Wide</h1>
            <h4 className="w-32 absolute top-[57vh] left-[27vw] ">50 MP Samsung JN1 sensor</h4>
            <div className="w-[8.2vw] h-[2px] absolute top-[56.5vh] left-[26.7vw] bg-white"></div>
            <div className="w-[1.6vw] h-[2px] absolute top-[57.6vh] left-[34.7vw] rotate-[40deg] bg-white"></div>
            <div className="w-[1.6vw] h-[2px] absolute top-[60.5vh] left-[35.3vw] rotate-[90deg] bg-white"></div>
            <div className="w-[2vw] h-[2px] absolute top-[63.8vh] left-[34.4vw] -rotate-[40deg] bg-white"></div>
            <div className="w-[2.6vw] h-[2px] absolute top-[62.6vh] left-[23.8vw] rotate-[90deg]  bg-white"></div>
            <div className="w-[2.3vw] h-[2px] absolute top-[58.1vh] left-[24.8vw] -rotate-[45deg]  bg-white"></div>
            <div className="w-[9.5vw] h-[2px] absolute top-[65.2vh] left-[25.2vw] bg-white"></div>
          </div>
        </div>

        <div className="flash">
          <div className="absolute top-[45vh] left-[43.4vw] w-[7%] h-[1px] bg-white rotate-[90deg] z-50 "></div>
          <div className="box w-full min-h-full ">
            <h1 className="absolute top-[30.8vh] left-[44.5vw] text-xl">Flash</h1>
            <div className="w-[5.9vw] h-[2px] absolute top-[29.9vh] left-[43.7%] bg-white"></div>
            <div className="w-[1.3vw] h-[2px] absolute top-[30.9vh] left-[49.1vw] rotate-[40deg] bg-white"></div>
            <div className="w-[1.3vw] h-[2px] absolute top-[33.2vh] left-[49.6vw] rotate-[90deg] bg-white"></div>
            <div className="w-[1.5vw] h-[2px] absolute top-[35.4vh] left-[48.9vw] -rotate-[37deg] bg-white"></div>
            <div className="w-[2vw] h-[2px] absolute top-[34.4vh] left-[41.5vw] rotate-[90deg]  bg-white"></div>
            <div className="w-[1.5vw] h-[2px] absolute top-[31.1%] left-[42.5%] -rotate-[45deg]  bg-white"></div>
            <div className="w-[6.5vw] h-[2px] absolute top-[36.5%] left-[42.9%] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
