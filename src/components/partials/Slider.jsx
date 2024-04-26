import React, {
  useEffect
} from 'react';
import gsap from 'gsap';
import Nav_box from '../partials/Nav_box'

function Slider(on) {
  useEffect(() => {
    const tl = gsap.timeline();
    const tl_1 = gsap.timeline();

    if (on.on) {
      tl.from(".sd_", {
        top: 0,
        duration: 1,
      });
    } else {
      tl_1.from(".sd_", {
        top: -120 + "vh",
        duration: 1,
      });
    }
  },
    [on.on]);

  return (
    <div className={`sd_ backdrop-blur-[10px] w-[100vw] h-[100vh]  fixed z-30 decoration-[2s]`} style={ { top: on.on ? '0': '-120vh',
      transitionDuration: "1.2s",
      transitionTimingFunction: "cubic-bezier(0.785, 0.135, 0.150, 0.860)" }}>
          <div className="h-[15vw] absolute top-[1vw] " style={ { right: on.on ? '2vw': '-14vw',
        transitionDuration: "0.2s",
        transitionDelay: "0.2s" }}>
      <div className=" relative h-full  w-[10vw]">
      <img src="/button/Group 23.svg" className="w-full h-full object-fill" />
        <img onClick={() => on.sendDataToParent(false)} src="cross.svg" className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-full h-full object-fill fill-white scale-50" />
    </div>
  </div>
  {/*_____________________*/}
  <div className="w-full  flex flex-col gap-9 py-28 px-10 h-full ">
{["store", "suport", "community"].map((e, i) => (
  <Nav_box key={i} color="white" width={207} text={e} />
))}

  </div>
  
  
  
  
  
  
</div>
);
}

export default Slider;