import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';
import Page2 from './components/main-pages/Page2';
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './components/main-pages/page3';
import Page4 from './components/main-pages/page4';
import Cube from './components/partials/Cube';
// import Page3d from './components/main-pages/page-3d';

function App() {
  const [rotate, setRotate] = useState("0");
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  // const locomotiveScroll = new LocomotiveScroll({
  //   lenisOptions: {
  //     autoResize: true,
  //     smoothScrolling: true,
  //     wrapper: window,
  //     content: document.documentElement,
  //     lerp: 0.1,
  //     duration: 3,
  //     orientation: "vertical",
  //     gestureOrientation: "vertical",
  //     smoothWheel: true,
  //     smoothTouch: true,
  //     wheelMultiplier: 1,
  //     touchMultiplier: 2,
  //     normalizeWheel: true,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   },
  // });
 useGSAP(()=>{
  gsap.to(".cube", {
    top: 0,
    rotate: 0,
    left: 0,
    opacity:1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page3",
      scrub: 2,
    },
  });
  gsap.to(".btm", {
    opacity:1,
    scrollTrigger: {
      trigger: ".page3",
      scrub: 2,
    },
  });

 })
 const showfront = () => {
  setRotate(rotate === '1' ? '0' : '1');
};
  return (
    <div id='main' className='w-full h-screen text-white select-none bg-black ' >
      <Home/>
      <Page2/>
     <div className='relative -z-10 '>
      <Page3/>
      <Page4/>
      <div className="cube w-full h-full  fixed top-[70%] opacity-0 -left-[60%] rotate-45 z-[12]" >
          <Cube rotate={rotate}/>
        </div>
          <button className="p-5 btm fixed opacity-0 top-0 right-0 z-[999]" onClick={showfront}>Rotate</button>
     </div>
    </div>
  )
}

export default App