// Page3.js
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../cube.css";
import Cube from "../partials/Cube";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const [rotate, setRotate] = useState("0");

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
      .to(section.querySelector(".element3"), {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) rotate(0deg) scale(1)",
      });
    // gsap.to(".cube", {
    //   top: 0,
    //   rotate: 0,
    //   left: 0,
    //   ease: "none",
    //   fontSize: "100%",
    //   opacity:1,
    //   scrollTrigger: {
    //     trigger: ".page3",
    //     start: "top 0%",
    //     end: "top -100%",
    //     scrub: 2,
    //   },
    // });
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
   <div className="relative w-full min-h-[200vh]">
    <div className="page3 w-full h-[100vh]   overflow-hidden">
      <div
        ref={sectionRef}
        className="my-section w-full h-full relative bg-black z-20"
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
       
      </div>
      {/* page3 end */}
    
    </div>
    <div className="3d-modle">
     <div className="cube w-full h-full fixed top-[30%] text-lg -left-[0%]  z-10" >
          <Cube rotate={rotate} />
        </div>
        <button className="p-5 absolute top-0 right-0 z-50" onClick={showfront}>Rotate</button>
     </div>
     <div className="page4 w-full h-[100vh] bg-black relative">
      <div className="absolute top-10 left-0 flex flex-col items-center justify-center w-full text-4xl np">
      <h1 className="">Shoot Every Detail</h1>
      <h1> Feel Every Emotion</h1>
      </div>

      <div className="w-[5%] h-[1px] bg-white absolute top-[46%] left-[38.9%] z-50 "></div>
      <div className="w-12 h-[1px] bg-white absolute top-[43.4%] left-[35.8%] z-50 rotate-[40deg] "></div>

      <div className="box ">
        <div className="w-24 h-[2px] absolute top-[34.5%] left-[27.8%] bg-white"></div>
        <div className="w-6 h-[2px] absolute top-[35.6%] left-[34.7%] rotate-[40deg] bg-white"></div>
        <div className="w-6 h-[2px] absolute top-[38.9%] left-[35.3%] rotate-[90deg] bg-white"></div>
        <div className="w-7 h-[2px] absolute top-[42.1%] left-[34.4%] -rotate-[40deg] bg-white"></div>
        <div className="w-9 h-[2px] absolute top-[40.8%] left-[25%] rotate-[90deg]  bg-white"></div>
        <div className="w-[2.3%] h-[2px] absolute top-[36.1%] left-[25.9%] -rotate-[45deg]  bg-white"></div>
        <div className="w-28 h-[2px] absolute top-[43.6%] left-[26.4%] bg-white"></div>
      </div>

     </div>
   </div>
  );
};

export default Page3;
