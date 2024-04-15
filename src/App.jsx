import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';
import Page2 from './components/main-pages/Page2';


function App() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  return (
    <div className='w-full h-screen text-white select-none bg-black '>
      <Home/>
      <Page2/>
    </div>
  )
}

export default App