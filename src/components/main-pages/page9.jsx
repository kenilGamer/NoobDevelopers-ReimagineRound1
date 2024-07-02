import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Page9() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page9",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        // markers:true,
        pin: true,
      }
    })
    tl.to(".imgs-1", {
      duration: 1,
      left: "-10vw",
    }, 'a')
    tl.to(".imgs-2", {
      duration: 1,
      right: "-10vw",
    }, 'a')
    tl.to(".textsing", {
      opacity: 1,
      duration: 2
    }, 'b')
    tl.to(".texts1", {
      top: "5vh",
      duration: 2
    }, 'b')
    tl.to(".texts2", {
      top: "15vh",
      duration: 2
    }, 'b')
  })
  return (
    <div className='w-full h-[100vh] bg-black page9 relative overflow-hidden '>
      <div className="text flex items-center justify-center flex-col w-full opacity-0 textsing heading ">
        <h1 className='absolute top-[10vh] texts1 text-2xl max-md:text-sm
         text-black text_border2 '>Shining White and Shining Black</h1>
        <h1 className='absolute top-[10vh] text-[#999d9c] text-2xl max-md:text-sm
         '>Shining White and Shining Black</h1>
        <h1 className='absolute top-[10vh] texts2 text-2xl max-md:text-sm
         text-black text_border2 '>Shining White and Shining Black</h1>
      </div>
      <div className='imgs'>
        <img className=' imgs-1 absolute top-[20vh] max-md:top-[30vh] -left-[60vw] w-[60vw] max-md:w-full ' src="/Page_3_img/Rectangle 100.png" alt="" />
        <img className=' imgs-2 absolute top-[50vh] -right-[60vw] w-[60vw] max-md:w-full' src="/Page_3_img/Rectangle 101.png" alt="" />
      </div>
    </div>
  )
}

export default Page9