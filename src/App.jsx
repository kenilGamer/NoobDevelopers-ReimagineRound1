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
import Page8 from './components/main-pages/page8';
import Page9 from './components/main-pages/page9';
import Page10 from './components/main-pages/page10';
import Page11 from './components/main-pages/page11';
import Page12 from './components/main-pages/Page12';
import Footer from './components/main-pages/footer';

function App() {
  const [rotate, setRotate] = useState("0");
  const showfront = () => {
    setRotate(rotate === '1' ? '0' : '1');
  };
  const scrollRef = useRef(null);


  useEffect(() => {

    const scrollEl = document.querySelector("#main-section");

    // const locoScroll = new LocomotiveScroll({
    //   el: scrollEl,
    //   smooth: true,
    //   multiplier: 1,
    //   lerp: 0.03,
    //   class: "is-reveal",
    //   tablet: {
    //     smooth: true
    //   },
    //   smartphone: {
    //     smooth: true
    //   }
    // });
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        autoResize: true,
        smoothScrolling: true,
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 4.5,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });
  }, []);



  return (
    <div id='main-section' className='w-full h-screen text-white select-none  bg-black ' >
      <Home  />
      <Page2 />
      <Page3 rotate={rotate}/>
      <Page4 rotate={rotate}/>
      <Page5 rotate={rotate}/>
      <Page6 rotate={rotate}/>
      <Page7 rotate={rotate}/>
      <Page8 rotate={rotate}/>
      <Page9 rotate={rotate}/>
      {/* <Page10/> */}
      {/* <Page11/>
      <Page12/> */}
      <Footer/>
      <button title="rotate a phone for a 3d model " className="px-7  max-md:hidden py-2 rounded-full fixed top-10 right-10 border-2 opacity-0 z-50 btn" onClick={showfront}>Rotate</button>

    </div>
  )
}

export default App