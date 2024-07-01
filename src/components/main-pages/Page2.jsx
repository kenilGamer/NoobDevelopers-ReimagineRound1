import React, { useEffect, useState } from 'react'
import Page2setup from '../partials/Page2-setup'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Page2main from '../partials/Page2main';


function Page2() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const [video, setvideo] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useGSAP(() => {
    if (isMobile === false) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page2",
          start: "top top",
          end: "top -100%",
          // markers: true,
          scrub: 2,
          pin: true,
          boxShadow: "0px 0px 20px #fff",
        }
      });
      tl.from(".text-2", {
        opacity: 0,
        duration: 1
      })
      tl.from(".boxs", {
        opacity: 0,
        // y: -300,
        width: 0,
        height: 0,
        // scrollBehavior:smooth ,
        stagger: 1
      })

    }else{
      const tl = gsap.timeline({scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "top -100%",
        // markers: true,
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
        stagger: 0.1
      })
      
    }
  })

  return (
    <div className='w-full  page2 h-[100vh] overflow-hidden bg-black flex items-center relative '>
      <Page2setup />
      {/* <Page2main/> */}
    </div>
  )
}

export default Page2