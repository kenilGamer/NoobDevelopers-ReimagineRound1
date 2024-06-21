// Page3.js
import React, { useRef, useEffect, useState } from "react";
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

const Page3 = () => {
  // gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const cube = useRef(null)
  const cube1 = useRef(null)
  const target = useRef(null)
  const target2 = useRef(null)
  const [rotate, setRotate] = useState("0");
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
  useEffect(() => {
    const section = sectionRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top 0%",
        end: "top -100%",
        scrub: 3,
        pin: true,
      },
    });

    timeline
      .to(".btn", {
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
      .to(cube1.current, {
        opacity: 0
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
  gsap.registerPlugin(useGSAP, ScrollTrigger);


  return (
    <div ref={target} className="relative page w-full min-h-[200vh] snap-y snap-mandatory ">
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

      <button title="rotate a phone for a 3d model " className="px-7 py-2 rounded-full fixed top-10 right-10 border-2 opacity-0 z-50 btn" onClick={showfront}>Rotate</button>

      <div className="page4">
        <div className="3d-modle absolute">
          <motion.div style={{ scale: scrollYProgress }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            className="cube w-full min-h-full fixed top-[30%] text-lg -left-[0vw]  z-50" >
            <Cube rotate={rotate} rotatez={rotateZ} target={target2} />
          </motion.div>
        </div>
        <Page4 cube={cube} />
      </div>

    </div>
  );
};

export default Page3;
