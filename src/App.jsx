import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';
import Page2 from './components/main-pages/Page2';
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './components/main-pages/page3';

function App() {

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
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      duration: 3,
      multiplier: 1, // Adjust the scroll speed if needed
    });

    // Clean up on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  

  return (
    <div  id='main' className='w-full h-screen text-white select-none bg-black ' >
      <Home/>
      <Page2/>
      <Page3/>
    </div>
  )
}

export default App