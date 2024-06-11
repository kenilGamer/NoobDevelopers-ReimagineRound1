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
        markers: true,
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
    gsap.to(".cube", {
      top: 0,
      rotate: 0,
      left: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".page3",
        scrub: 2,
      },
    });

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
    };
  }, []);

  const showfront = () => {
    setRotate(rotate === '1' ? '0' : '1');
  };

  return (
    <div className="page3 w-full h-[100vh] relative overflow-hidden">
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
        <div className="cube w-full h-full absolute top-[70%] -left-[60%] rotate-45 z-10" >
          <Cube rotate={rotate} />
        </div>
        <button className="p-5 absolute top-0 right-0 z-50" onClick={showfront}>Rotate</button>
      </div>
    </div>
  );
};

export default Page3;
