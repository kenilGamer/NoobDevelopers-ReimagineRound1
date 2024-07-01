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
import Footer1 from './components/main-pages/footer';
import Loader from './components/main-pages/loader';
import Footer2 from './components/main-pages/footer2';

function App() {
  const [rotate, setRotate] = useState("0");
  const showfront = () => {
    setRotate(rotate === '1' ? '0' : '1');
  };
  const scrollRef = useRef(null);
useGSAP(()=>{
  window.scrollTo(0, 0);
  gsap.to(".btn", {
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".page3",
      scrub: 2
    },
  })
  gsap.to(".btn", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".page9",
      scrub: 2
    },
  })
})
  return (
    <div id='main-section' className='w-full h-screen text-white select-none  bg-black ' >
      <Loader/>
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
      {/* <Footer1/> */}
      {/* <Footer/> */}
      <Footer2/>
      <img src="/public/Group 2 (1).png" className='fixed top-10 right-7 w-32   max-md:hidden opacity-0 btn' alt="" />
      <button title="rotate a phone for a 3d model " className="px-7  max-md:hidden py-2 rounded-full fixed top-10 right-10 opacity-0 z-50 np btn" onClick={showfront}>Rotate</button>
    </div>
  )
}

export default App