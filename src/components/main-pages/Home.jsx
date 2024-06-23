import React, { useEffect, useState } from 'react'
import Nav from '../partials/Nav'
import Homeline from '../partials/Homeline'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {
  
  const tl5 = gsap.timeline();
  
  useGSAP(() => {
    // tl5.from(".logo-img",{
    //   scale: 0,
    //   duration: 0.3,
    // })
  if (isMobile === false) {
    tl5.from(".logo-nav",{
      scale: 0,
      duration: 0.8,
      stagger:0.2,
    })
    tl5.to(".line1",{
      width: '11vw',
      // delay: 2,
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line2",{
      width: '14.9vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line3",{
      width: '8vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: ,
    })
    tl5.to(".line4",{
      width: '50vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line5",{
      width: '15vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line6",{
      width: '5vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line7",{
      width: '3.9vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line8",{
      width: '15.89vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line9",{
      width: '5vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line10",{
      width: '25vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line11",{
      width: '44vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line12",{
      width: '5vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 2,
    })
    tl5.to(".line13",{
      width: '70vw',
      boxShadow: "0px 0px 20px #fff",
      duration:0.3,
      // stagger: 0.5,
    })
    tl5.from(".nav-c",{
      y: -500,
      duration:0.5,
      stagger: 0.3,
    })
    tl5.from(".nav-r",{
      y: -500,
      duration:0.5,
      stagger: 0.3,
    })
    tl5.from(".mobile2",{
      y: 2000,
      x:500,
      duration: 0.8,
    })
    tl5.from(".mobile1",{
      y: 2000,
      x:500,
      duration: 0.8,
    }) 
    tl5.from(".heading1",{
      y:400,
      duration: 0.5,
    })
    tl5.from(".heading2",{
      y:400,
      duration: 0.5,
    })
    tl5.from(".end2",{
      y:400,
      duration: 0.5,
    })
  } else {
    tl5.from(".mobile2",{
      y: 2000,
      x:500,
      duration: 0.8,
    })
    tl5.from(".mobile1",{
      y: 2000,
      x:500,
      duration: 0.8,
    }) 
    tl5.from(".heading1",{
      y:400,
      duration: 0.5,
    })
    tl5.from(".heading2",{
      y:400,
      duration: 0.5,
    })
    tl5.from(".end2",{
      y:400,
      duration: 0.5,
    })
  }
  })
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
  return (
    <div className='w-full h-full overflow-hidden page'>
      <Nav/>
      <div className='w-full h-full overflow-hidden pointer-events-none relative '>
        <Homeline isMobile={isMobile}/>
      </div>
    </div>
    
  )
}

export default Home