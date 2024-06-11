import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 // Make sure the path is correct based on your project structure
import '../../cube.css';
import Cube from '../partials/Cube';

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.page3',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        pin: true,
      },
    });

    timeline
      .to(section.querySelector('.element3'), 
      { top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(90deg)', })
      .to(section.querySelector('.element3'), 
      { top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(0deg)', })
      .to(section.querySelector('.element4'), 
      { top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(90deg)', opacity: 0, duration: 3 }, "a")
      .to(section.querySelector('.element5'), { top: '50%', right: '50%', transform: 'translate(50%,-50%) rotate(-90deg)', opacity: 0, duration: 3 }, "a")
      .to(section.querySelector('.element6'), { top: '50%', right: '50%', transform: 'translate(-50%,-50%) scale(1)', opacity: 0, duration: 3 }, "a")
      .to(section.querySelector('.element3'), { top: '80%', left: '60%', transform: 'translate(-50%,-50%) rotate(0deg) scale(2)', })
      .to(section.querySelector('.element3'), { top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(0deg) scale(1)', });

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="page3 w-full h-[100vh] relative overflow-hidden">
      <div ref={sectionRef} className="my-section w-full h-full relative bg-black">
        <div className="element4 w-[60vw] h-auto absolute top-[50%] left-[-20%] -translate-x-1/2 -translate-y-1/2 rotate-90 z-[12]">
          <img id="page_3_moin_img" src={"../Page_3_img/water.png"} className="w-full h-full object-fill" />
        </div>
        <div className="element5 w-[60vw] h-auto absolute top-[50%] right-[-20%] translate-x-1/2 -translate-y-1/2 -rotate-90 z-[12]">
          <img id="page_3_moin_img" src={"../Page_3_img/water.png"} className="w-full h-full object-fill" />
        </div>
        <div className="element6 w-[100vw] h-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center items-center scale-0 z-[0]">
          <h1 className="heading text_border text-black  text-[22vw] font-medium">IP53</h1>
        </div>
        <div className="cube-container w-full h-full flex justify-center items-center z-20">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export default Page3;
