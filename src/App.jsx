import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from './components/main-pages/Home';


function App() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  return (
    <div className='w-screen h-screen text-white select-none '>
      <Home/>
    </div>
  )
}

export default App