import React from 'react'
import Nav from '../partials/Nav'
import Homeline from '../partials/Homeline'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {
  const tl = gsap.timeline();
  useGSAP(() => {
    // tl.from(".logo-img",{
    //   scale: 0,
    //   duration: 0.3,
    // })
    tl.from(".logo-nav",{
      scale: 0,
      duration: 0.8,
      stagger:0.5,
    })
    tl.to(".line1",{
      width: '11vw',
      // delay: 2,
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line2",{
      width: '14.9vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line3",{
      width: '8vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: ,
    })
    tl.to(".line4",{
      width: '50vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line5",{
      width: '15vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line6",{
      width: '5vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line7",{
      width: '3.9vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line8",{
      width: '15.89vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line9",{
      width: '5vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line10",{
      width: '25vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line11",{
      width: '44vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line12",{
      width: '5vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl.to(".line13",{
      width: '70vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 1,
    })
    tl.from(".nav-c",{
      y: -500,
      duration:1,
      stagger: 0.3,
    })
    tl.from(".nav-r",{
      y: -500,
      duration:1,
      stagger: 0.3,
    })
    tl.from(".mobile2",{
      y: 2000,
      x:500,
      duration: 0.8,
    })
    tl.from(".mobile1",{
      y: 2000,
      x:500,
      duration: 0.8,
    }) 
    tl.from(".heading1",{
      y:400,
      duration: 1,
    })
    tl.from(".heading2",{
      y:400,
      duration: 1,
    })
    tl.from(".end2",{
      y:400,
      duration: 1,
    })
  })
  return (
    <div className='w-full h-full bg-black overflow-hidden'>
      <Nav/>
      <div className='w-full h-full pointer-events-none relative '>
        <Homeline/>
      </div>
    </div>
  )
}

export default Home