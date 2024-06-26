import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Page8() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page8",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        // markers:true,
        pin: true,
      }
    })
    tl.to(".imgs1", {
      duration: 1,
      left: "-10vw",
    }, 'a')
    tl.to(".imgs2", {
      duration: 1,
      right: "-10vw",
    }, 'a')
    tl.to(".textui1", {
      duration: 1,
      left: "9vw",
    }, 'a')
    tl.to(".textui2", {
      duration: 1,
      right: "13vw",
    }, 'a')
    tl.to(".texts", {
      opacity: 1,
      duration: 2
    })
  })
  return (
    <div className='w-full h-[100vh] bg-black page8 relative overflow-hidden '>
    
        <h1 className=' absolute textui1 top-[22vh] -left-[100vw]  max-md:top-[30vh] text-4xl   heading max-md:text-xs  '>The symmetrical bezels and aluminium frame</h1>
        <h1 className='absolute  textui2 top-[83vh] -right-[100vw]  text-4xl heading  max-md:text-xs'> adds elegance, lightness and durability</h1>
   
      <div className='imgs'>
        <img className=' imgs1 absolute top-[15vh] -left-[60vw] w-[60vw] max-md:w-full max-md:top-[30vh] ' src="/Page_3_img/Rectangle 93.png" alt="" />
        <img className=' imgs2 absolute top-[50vh] -right-[60vw] w-[60vw] max-md:w-full' src="/Page_3_img/Rectangle 94.png" alt="" />
      </div>
    </div>
  )
}

export default Page8