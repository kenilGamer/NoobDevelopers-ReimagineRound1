import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';
import Page2 from './components/main-pages/Page2';
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './components/main-pages/page3';
import Page5 from './components/main-pages/page5';
import Page6 from './components/main-pages/page6';
import Page7 from './components/main-pages/page7';
import Page4 from './components/main-pages/page4';

function App() {

  const scrollRef = useRef(null);


    useEffect(() => {
      const scrollEl = document.querySelector("#main-section");
  
      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        lerp: 0.06,
        class: "is-reveal",
        tablet: {
          smooth: true
        },
        smartphone: {
          smooth: true
        }
      });
    }, []);

  

  return (
    <div  id='main-section' className='w-full h-screen text-white select-none  bg-black ' >
      <Home/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
    </div>
  )
}

export default App