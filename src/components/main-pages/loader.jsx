import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Loader() {
    const line = gsap.timeline();
    const [loading_number, setLoadingNumber] = useState(0);
    const [loading_speed, setloading_speed] = useState(20);
    const [click_on, setClick_on] = useState(false);


    const click_on_fun = (data) => {
        setClick_on(data);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingNumber(prevNumber => {
                if (prevNumber < 100) {
                    return prevNumber + 1;
                } else {
                    clearInterval(interval);
                    return prevNumber;
                }
            });
        }, loading_speed);

        return () => clearInterval(interval);
    }, []);
    useGSAP(() => {
        if (loading_number == 100) {
            /*  line.to(".line",{
                rotate:0+"deg",
              ease: "power4",
              
              
              top:"50%",
              left:"50%",
              transform: "translate(-50%,-50%)",
              
        
              })
              line.to(".line",{
                height:100+"vh",
                position: "fixed",
                top:"50%",
              left:"50%",
              transform: "translate(-50%,-50%)",
               ease: "power4",
        
              })*/
            line.to(".number_box", {
                position: "static"
            }, "a")
            line.to(".line", {
                top: 50 + "%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }, "a")
            line.to(".line", {
                height: 100 + "vh",
                ease: "power4",
                delay: 0.2,
            })
            line.to(".line", {
                width: 100 + "vw",
                ease: "power4",
                delay: 0.2,
            })
            line.to(".loader", {
                opacity: 0,
                // display:"none",

            }, "b")
        }
    }, [loading_number])

    const t_x = gsap.timeline();

    useGSAP(() => {
        t_x.to(".text_box h1", 1.8, {
            display: "none",
            opacity: 0,
            stagger: 2.2,
            repeat: -1,
        });
        var loader = document.getElementById("loader");
        setTimeout(function () {
            loader.style.top = "-100%"
        }, 5400)
    })
    return (
        // <div className="w-screen  loader h-[100vh] fixed z-[1000] items-center  justify-center bg-black flex flex-col bg-">
        //     <div className="w-full h-[100%] relative z-[1000] items-center  justify-center bg-black flex flex-col ">

        //         <div className="w-full h-auto flex-col gap-[0vw] pl-11 ">

        //             <div className="text_box text-[9vh] w-full overflow-hidden h-[12vh] heding">
        //                 <h1>PURE INSTINCT</h1>
        //                 <h1>BRILLIANT</h1>
        //                 <h1>CONSIDERED</h1>
        //                 <h1>PERFECTED</h1>
        //                 <h1>TOGETHER</h1>
        //             </div>
        //             <div className="number_box top-20 bg-zinc-300 relative" >
        //                 <h2 className="text-[10vh] p-5" style={{ lineHeight: 0.9 }}>{loading_number}%</h2>
        //                 <div className="line  absolute top-[50%]  left-[20%]  -translate-y-1/2 -rotate-[90deg] w-[2vw] h-[20vh] bg-white rounded-2xl">
        //                     <div className={`w-full rounded-2xl bg-cyan-400 `} style={{ height: loading_number + "%" }}></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="loader" className='heading'>
            <h1>PURE INSTINCT</h1>
            <h1>BRILLIANT</h1>
            <h1>CONSIDERED</h1>
            <h1>PERFECTED</h1>
            <h1>TOGETHER</h1>
        </div>
    )
}

export default Loader