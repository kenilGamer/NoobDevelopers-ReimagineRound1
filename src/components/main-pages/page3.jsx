// Page3.js
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../cube.css";
import Cube from "../partials/Cube";
import { motion, useScroll } from "framer-motion"
import Page4 from "./page4";
import { useGSAP } from "@gsap/react";
import Page5 from "./page5";

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page3 = ({rotate}) => {
  // gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const cube = useRef(null)
  const cube1 = useRef(null)
  const target = useRef(null)
  const target2 = useRef(null)
  const [video, setvideo] = useState(0)
  // const [rotate, setRotate] = useState("0");
  const [rotateZ, setRotateZ] = useState(null);
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
  //   // console.log(data % 6);
  //   if(data == 1177){
  //     alert("op")
  //   }
  // })
  scrollYProgress.on('change', (data) => {
  })
  // useLayoutEffect(() => {
    

    
  //   // gsaptimeline.to(".cube", {
  //   //   top: 200,
  //   //   fontSize: "120%",
  //   //   ease: "none",
  //   //   scrollTrigger: {
  //   //     trigger: ".page4",
  //   //     start: "top 0%",
  //   //     end: "top -100%",
  //   //     markers:true,
  //   //     scrub: 2,
  //   //   },
  //   // });
  //   return () => {
  //     if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
  //   };
  // }, []);
useGSAP(()=>{
  const section = sectionRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top 0%",
        end: "top -100%",
        scrub: 5,
        // markers:true,
        pin: true,
      },
    });

    timeline.to(cube1.current, {
      top: 0,
      rotate: 0,
      left: 0,
      duration: 3,
    })
      timeline.to(".btn", {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
      timeline.to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(90deg)",
      })
      timeline.to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(0deg)",
      })
      timeline.to(
        section.querySelector(".element4"),
        {
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%) rotate(90deg)",
          opacity: 0.3,
          duration: 3,
        },
        "a"
      )
      timeline.to(
        section.querySelector(".element5"),
        {
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%) rotate(-90deg)",
          opacity: 0.3,
          duration: 3,
        },
        "a"
      )
      timeline.to(
        section.querySelector(".element6"),
        {
          top: "50%",
          right: "50%",
          transform: "translate(-50%,-50%) scale(1)",
          opacity: 0.3,
          duration: 3,
          
        },
        "a"
      )
      timeline.to(section.querySelector(".element3"), {
        top: "80%",
        left: "60%",
        transform: "translate(-50%,-50%) rotate(0deg) scale(2)",
      })
      timeline.to(cube1.current, {
        opacity: 0
      })
      timeline.to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(0deg) scale(1)",
      })
    
})
  const showfront = () => {
    setRotate(rotate === '1' ? '0' : '1');
  };
  gsap.registerPlugin(useGSAP, ScrollTrigger);


  return (
    <div ref={target} className="relative page w-full h-[200vh]">
    <div className="page3 w-full min-h-[100vh] overflow-hidden ">
      <div
        ref={sectionRef}
        className="my-section w-full h-full relative bg-black"
      >
        <div className="element4 w-[60vw] max-md:w-full  h-auto absolute top-[50%] left-[-20%] max-md:-left-[60%] -translate-x-1/2 -translate-y-1/2 rotate-90 z-[12]">
          <img
            id="page_3_moin_img"
            src={"../Page_3_img/water.png"}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="element5 w-[60vw] max-md:w-full h-auto absolute top-[50%] right-[-20%] max-md:-right-[50%] translate-x-1/2 -translate-y-1/2 -rotate-90 z-[12]">
          <img
            id="page_3_moin_img"
            src={"../Page_3_img/water.png"}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="element6 w-[100vw] h-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center items-center scale-0 z-[0]">
          <h1 className="heading textyy1  text-[22vw] font-medium">
            IP53
          </h1>
        </div>

        <div
          ref={cube1}
          className="cube w-full max-md:text-xs min-h-full absolute top-[70vh] -left-[55vw] rotate-45 " >
          <Cube rotate={rotate}  video={video} />
        </div>
      </div>
      {/* page3 end */}
    </div>


  </div>
  );
};

export default Page3;
