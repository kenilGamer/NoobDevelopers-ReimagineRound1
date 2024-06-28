import React, { useState, useEffect } from 'react';
import '../footer.css';
import gsap from 'gsap';
import '../footer.css';
const Footer = () => {
  const [detailsState, setDetailsState] = useState({
    displayDetails: false,
    capacityDetails: false,
    dimensionsDetails: false,
    inTheBoxDetails: false,
    mainCameraDetails: false,
    videoDetails: false,
    frontCameraDetails: false,
    ultraWideDetails: false,
    batteryDetails: false,
    sensorsDetails: false,
    memoryDetails: false,
    unlockDetails: false,
    audioDetails: false,
    simCardDetails: false,
    chipsetDetails: false,
    resistanceDetails: false,
  });

//   const handleToggle = (key) => {

//     setDetailsState((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };
const handleToggle = (key) => {
    setDetailsState((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };
      if (newState[key]) {
        gsap.to(detailsRefs.current[key], {
          height: 'auto',
          duration: 0.5,
          ease: 'power1.inOut',
          onComplete: () => {
            detailsRefs.current[key].style.height = 'auto';
          }
        });
      } else {
        gsap.to(detailsRefs.current[key], {
          height: 0,
          duration: 0.5,
          ease: 'power1.inOut'
        });
      }
      return newState;
    });
  };

//   useEffect(() => {
//     const footElems = document.querySelectorAll('.foot-elem, .foot-elem2');
//     footElems.forEach((el) => {
//       el.addEventListener('click', function() {
//         const details = this.querySelector('.foot-details');
//         const isOpen = details.style.height === 'auto';
//         gsap.to(details, {
//           height: isOpen ? '0vh' : 'auto',
//           duration: 0.7,
//         });
//       });
//     });
//   }, [detailsState]);

  return (
    <div className="foot-bottom heading">
      <div className="foot-design-section">
        <h1 className='heading'>Design</h1>
        <div className="foot-design-elem">
          <div className="foot-elem" onClick={() => handleToggle('displayDetails')}>
            <div className="foot-heading">
              <h1>Display</h1>
            </div>
            <div  ref={(el) => (detailsRefs.current.displayDetails = el)} className="foot-details" style={{ height: detailsState.displayDetails ? 'auto' : '0vh' }}>
              <p>
                6.55” flexible AMOLED display <br />
                Corning® Gorilla® Glass <br />
                HDR10+ <br />
                10-bit colour depth <br />
                2400x1080-pixel resolution at 402 ppi <br />
                1,000,000:1 contrast ratio <br />
                500 nits brightness; 1200 nits peak brightness <br />
                60Hz - 120Hz adaptive refresh rate <br />
                240Hz touch sampling rate <br />
                Haptic touch motors
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('capacityDetails')}>
            <div className="foot-heading">
              <h1>Capacity</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.capacityDetails ? 'auto' : '0vh' }}>
              <p>
                8 RAM + 128 GB memory <br />
                8 RAM + 256 GB memory <br />
                12 RAM + 256 GB memory
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('dimensionsDetails')}>
            <div className="foot-heading">
              <h1>Dimensions</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.dimensionsDetails ? 'auto' : '0vh' }}>
              <p>
                Height: 159.2 mm <br />
                Width: 75.8 mm <br />
                Depth: 8.3 mm <br />
                Weight: 193.5 g
              </p>
            </div>
          </div>

          <div className="foot-elem foot-elem-box" onClick={() => handleToggle('inTheBoxDetails')}>
            <div className="foot-heading">
              <h1>In The Box</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.inTheBoxDetails ? 'auto' : '0vh' }}>
              <p>
                Nothing Phone (1) <br />
                Type-C cable <br />
                Safety information and warranty card <br />
                Screen protector <br />
                (pre-applied) <br />
                SIM tray ejector
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-camera-section">
        <h1>Camera</h1>
        <div className="foot-camera-elem">
          <div className="foot-elem2" onClick={() => handleToggle('mainCameraDetails')}>
            <div className="foot-heading">
              <h1>Main camera</h1>
            </div>
            <div className="foot-details foot-camera-details" style={{ height: detailsState.mainCameraDetails ? 'auto' : '0vh' }}>
              <p>
                50 MP <br />
                Sony IMX766 sensor<br />Focal length: 24 mm <br />
                OIS and EIS image stabilisation <br />Panorama Night Mode <br />
                Portrait Mode <br />
                Beauty Mode <br />
                Bokeh HDR
              </p>
              <p>
                Google Filter <br />Scene Detection <br />Live Photo
                <br />Document Mode <br />Night Mode <br />
                Extreme Night Mode <br />Night Video <br />Export Mode <br />
                Panorama <br />Slo-Mo (120 fps) <br />
                Time-lapse
              </p>
            </div>
          </div>

          <div className="foot-elem2" onClick={() => handleToggle('videoDetails')}>
            <div className="foot-heading">
              <h1>Video</h1>
            </div>
            <div className="foot-details foot-camera-details" style={{ height: detailsState.videoDetails ? 'auto' : '0vh' }}>
              <p>
                4K recording at 30 fps <br />
                1080p recording at 30 or 60 fps <br />
                Live HDR at 30 fps
              </p>
              <p>
                Slo-mo (120 fps) <br />
                Night Mode <br />
                (720p/1080p at 30 fps) <br />
                OIS and EIS image stabilisation
              </p>
            </div>
          </div>

          <div className="foot-elem2" onClick={() => handleToggle('frontCameraDetails')}>
            <div className="foot-heading">
              <h1>Front Camera</h1>
            </div>
            <div className="foot-details foot-camera-details" style={{ height: detailsState.frontCameraDetails ? 'auto' : '0vh' }}>
              <p>
                16 MP <br />
                Sony IMX471 sensor <br />
                ƒ/2.45 aperture <br />
                1/3.1” sensor size <br />
                Live Photo <br />
                HD Portrait
              </p>
              <p>
                Google Filter <br />
                Beauty Mode <br />
                Night Mode <br />
                1080p video recording <br />
                30 fps
              </p>
            </div>
          </div>

          <div className="foot-elem2 foot-elem-box" onClick={() => handleToggle('ultraWideDetails')}>
            <div className="foot-heading">
              <h1>Ultra wide</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.ultraWideDetails ? 'auto' : '0vh' }}>
              <p>
                50 MP <br />
                Samsung JN1 sensor <br />
                ƒ/2.2 aperture <br />
                1/2.76” sensor size <br />
                EIS image stabilisation <br />
                114° field of view <br />
                Night Mode <br />
                Macro (4 cm) <br />
                HDR
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Features foot-design-section">
        <h1>Features</h1>
        <div className="foot-design-elem">
          <div className="foot-elem" onClick={() => handleToggle('batteryDetails')}>
            <div className="foot-heading">
              <h1>Battery</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.batteryDetails ? 'auto' : '0vh' }}>
              <p>
                4500 mAh battery size <br />
                33W PD3.0 wired charging: full charge in 70 mins <br />
                15W Qi wireless charging: full charge in 120 mins <br />
                5W reverse wireless charging <br />
                Non-removable battery
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('sensorsDetails')}>
            <div className="foot-heading">
              <h1>Sensors</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.sensorsDetails ? 'auto' : '0vh' }}>
              <p>
                In-display fingerprint sensor <br />
                Accelerometer <br />
                Electronic compass <br />
                Gyroscope <br />
                Ambient light sensor <br />
                Proximity sensor <br />
                SAR sensor <br />
                Sensor core
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('memoryDetails')}>
            <div className="foot-heading">
              <h1>Memory</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.memoryDetails ? 'auto' : '0vh' }}>
              <p>
                8 GB/12 GB LPDDR5 <br />
                128 GB/256 GB UFS3.1
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('unlockDetails')}>
            <div className="foot-heading">
              <h1>Unlock Options</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.unlockDetails ? 'auto' : '0vh' }}>
              <p>
                In-display fingerprint sensor <br />
                Face Unlock
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Features foot-design-section">
        <h1>Specifications</h1>
        <div className="foot-design-elem">
          <div className="foot-elem" onClick={() => handleToggle('audioDetails')}>
            <div className="foot-heading">
              <h1>Audio</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.audioDetails ? 'auto' : '0vh' }}>
              <p>
                Stereo speakers <br />
                3 microphones <br />
                Noise cancellation support
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('simCardDetails')}>
            <div className="foot-heading">
              <h1>Sim Card</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.simCardDetails ? 'auto' : '0vh' }}>
              <p>
                2 Nano SIM slots <br />
                Supports dual 5G standby <br />
                Supports dual 4G standby <br />
                No SD card slot
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('chipsetDetails')}>
            <div className="foot-heading">
              <h1>Chipset</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.chipsetDetails ? 'auto' : '0vh' }}>
              <p>
                Qualcomm® Snapdragon™ 778G+ <br />
                Octa-core processor <br />
                6 nm process technology <br />
                Qualcomm® Adreno™ 642L GPU
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle('resistanceDetails')}>
            <div className="foot-heading">
              <h1>Resistance</h1>
            </div>
            <div className="foot-details" style={{ height: detailsState.resistanceDetails ? 'auto' : '0vh' }}>
              <p>
                IP53 water and dust resistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
