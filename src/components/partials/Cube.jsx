import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import img1 from '/assets/1edd2008-8ef7-41b7-bc2d-359674e8f26d-removebg-preview.png';
import img2 from '/assets/963f4090-1cff-49ed-aa20-84f30c6068e2-removebg-preview.png';
import img3 from '/assets/blackpowerbtn.png';
import img4 from '/assets/black-volume.png';
import img5 from '/Page_3_img/Rectangle 41.png';
import img6 from '/assets/nothing_frame-removebg-preview.png';

const Cube = ({ rotate, rotateZ, target,video }) => {
  const [state, setState] = useState('0');
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const sceneRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rotate === '1') {
        let x = (e.clientY / window.innerHeight) * 360; // Adjusted to match rotateX
        let y = (e.clientX / window.innerWidth) * 360; // Adjusted to match rotateY
        setRotation({ x, y });
      } else {
        setRotation({ x: 0, y: 0 });
      }
    };

    const handleTouchMove = (e) => {
      if (rotate === '1') {
        let touch = e.touches[0];
        let x = (touch.clientY / window.innerHeight) * 360; // Adjusted to match rotateX
        let y = (touch.clientX / window.innerWidth) * 360; // Adjusted to match rotateY
        setRotation({ x, y });
      }
    };

    const handleScroll = () => {
      if (rotate === '1') {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / maxScroll;
        const x = scrollPercent * 360; // Adjust as needed
        const y = scrollPercent * 360; // Adjust as needed
        setRotation({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotate]);

  const showfront = () => {
    setState(state === '1' ? '0' : '1');
  };

  return (
    <div id="tridiv" style={{ fontSize: '300.5%' }}>
      <div ref={target} className="scene"
        style={{
          transform: `rotateX(-100deg) rotateY(180deg) rotateZ(180deg)`,
        }}>
        <div className={`shape cuboid-1 cub-1 box state-${state}`} data-state={state}
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
          <div className="face ft">
            <div className="photon-shader-ft" style={{ backgroundColor: '#36363A' }}>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="face bk">
            <div className="photon-shader-bk" style={{ backgroundColor: '#302E2A' }}>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="face rt">
            <div className="photon-shader-rt" style={{ backgroundColor: '#36363A' }}>
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="face lt">
            <div className="photon-shader-lt" style={{ backgroundColor: '#36363A' }}>
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="face bm">
            <div className="photon-shader-bm">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="face tp">
            <div className="photon-shader-tp" style={{ backgroundColor: '#afafaf' }}>
              {video == 0 ? <img src={img6} alt="" /> :  <video className='-rotate-90 mt-[70%] scale-[2] w-full object-cover rounded-xl' muted autoPlay src='/game.mp4' type="video/mp4" >
              </video>}
              
             
            </div>
          </div>
          <div className="cr cr-0">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
          <div className="cr cr-1">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
          <div className="cr cr-2">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
          <div className="cr cr-3">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
