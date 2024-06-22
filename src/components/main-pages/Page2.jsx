import React, { useState } from 'react'
import Page2setup from '../partials/Page2-setup'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Page2main from '../partials/Page2main';


function Page2() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  const [video, setvideo] = useState(0)
  
  useGSAP(() => {
    const tl = gsap.timeline({scrollTrigger: {
      trigger: ".page2",
      start: "top top",
      end: "top -100%",
      // markers: true,
      scrub: 2,
      pin: true,
      boxShadow: "0px 0px 20px #fff",
  }});
    tl.from(".text-2",{
      opacity:0,
      duration: 1
    })
    tl.from(".boxs",{
      opacity: 0,
      // y: -300,
      width:0,
      height:0,
      // scrollBehavior:smooth ,
      stagger: 1
    })
    
  })
  return (
    <div  className='w-full  page2 min-h-[100vh] overflow-hidden bg-black flex items-center relative top-0 left-0 justify-center flex-col p-2'>
        <Page2setup/>
        {/* <Page2main/> */}
    </div>
  )
}

export default Page2