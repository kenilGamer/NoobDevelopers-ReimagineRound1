import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';
import Page2 from './components/main-pages/Page2';
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './components/main-pages/page3';

function App() {

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
    <div  id='main' className='w-full snap-y snap-mandatory h-screen text-white select-none bg-black ' >
      <Home/>
      <Page2/>
      <Page3/>
    </div>
  )
}

export default App