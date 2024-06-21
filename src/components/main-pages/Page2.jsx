import React from 'react'
import Page2setup from '../partials/Page2-setup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page2() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);

  const tl = gsap.timeline({scrollTrigger: {
    trigger: ".page2",

    boxShadow: "0px 0px 20px #fff",
}});

  useGSAP(() => {
    tl.from(".text-2",{
      opacity:0,
      duration: 2
    })
    tl.from(".boxs-line bos ",{
      opacity: 0,
      // y: -300,
      width:0,
      height:0,
      // scrollBehavior:smooth ,
      stagger: 0.1
    })
    
  })
  return (
    <div  className='w-full  page2 h-[100vh] overflow-hidden bg-black flex items-center relative top-0 left-0 justify-center p-2'>
        <Page2setup/>
    </div>
  )
}

export default Page2