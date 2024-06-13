import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';
import Page2 from './components/main-pages/Page2';
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './components/main-pages/page3';

import Cube from './components/partials/Cube';
// import Page3d from './components/main-pages/page-3d';

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

  return (
    <div id='main' className='w-full h-screen text-white select-none bg-black ' >
      <Home/>
      <Page2/>
      <Page3/>
    </div>
  )
}

export default App