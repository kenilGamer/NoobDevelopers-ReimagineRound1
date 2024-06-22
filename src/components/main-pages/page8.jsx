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
    tl.to(".texts", {
      opacity: 1,
      duration: 2
    })
  })
  return (
    <div className='w-full h-[100vh] bg-black page8 relative overflow-hidden '>
      <div className="text absolute top-[10vh] left-[20vw] opacity-0 texts heading w-[55vw] text-2xl">
        <h1 className='text-center'>The symmetrical bezels and aluminium frame adds elegance, lightness and durability</h1>
      </div>
      <div className='imgs'>
        <img className=' imgs1 absolute top-[15vh] -left-[50vw] w-[60vw]' src="/Page_3_img/Rectangle 93.png" alt="" />
        <img className=' imgs2 absolute top-[50vh] -right-[50vw] w-[60vw]' src="/Page_3_img/Rectangle 94.png" alt="" />
      </div>
    </div>
  )
}

export default Page8