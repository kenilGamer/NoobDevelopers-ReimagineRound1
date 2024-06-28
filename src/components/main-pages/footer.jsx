import React, { useState, useEffect } from 'react';
import '../footer.css';
import gsap from 'gsap';

const Footer1 = () => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [capacityDetails, setCapacityDetails] = useState(false);
  const [dimensionsDetails, setDimensionsDetails] = useState(false);
  const [inTheBoxDetails, setInTheBoxDetails] = useState(false);
  const [mainCameraDetails, setMainCameraDetails] = useState(false);
  const [videoDetails, setVideoDetails] = useState(false);
  const [frontCameraDetails, setFrontCameraDetails] = useState(false);
  const [ultraWideDetails, setUltraWideDetails] = useState(false);
  const [batteryDetails, setBatteryDetails] = useState(false);
  const [sensorsDetails, setSensorsDetails] = useState(false);
  const [memoryDetails, setMemoryDetails] = useState(false);
  const [unlockDetails, setUnlockDetails] = useState(false);
  const [audioDetails, setAudioDetails] = useState(false);
  const [simCardDetails, setSimCardDetails] = useState(false);
  const [chipsetDetails, setChipsetDetails] = useState(false);
  const [resistanceDetails, setResistanceDetails] = useState(false);

  const handleToggle = (setter, current) => {
    setter(!current);
    console.log( current );
  };

  useEffect(() => {
    const footElems = document.querySelectorAll('.foot-elem, .foot-elem2');
    footElems.forEach((el) => {
      el.addEventListener('click', function() {
        const details = this.querySelector('.foot-details');
        const isOpen = details.style.height === 'auto';
        gsap.to(details, {
          height: isOpen ? '0vh' : 'auto',
          duration: 0.7,
        });
      });
    });
  }, []);

  return (
    <div className="foot-bottom heading">
      <div className="foot-design-section">
        <h1 className='heading'>Design</h1>
        <div className="foot-design-elem">
          <div className="foot-elem" onClick={() => handleToggle(setDisplayDetails, displayDetails)}>
            <div className="foot-heading">
              <h1>Display</h1>
            </div>
            <div className="foot-details" style={{ height: displayDetails ? 'auto' : '0vh' }}>
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

          <div className="foot-elem" onClick={() => handleToggle(setCapacityDetails, capacityDetails)}>
            <div className="foot-heading">
              <h1>Capacity</h1>
            </div>
            <div className="foot-details" style={{ height: capacityDetails ? 'auto' : '0vh' }}>
              <p>
                8 RAM + 128 GB memory <br />
                8 RAM + 256 GB memory <br />
                12 RAM + 256 GB memory
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle(setDimensionsDetails, dimensionsDetails)}>
            <div className="foot-heading">
              <h1>Dimensions</h1>
            </div>
            <div className="foot-details" style={{ height: dimensionsDetails ? 'auto' : '0vh' }}>
              <p>
                Height: 159.2 mm <br />
                Width: 75.8 mm <br />
                Depth: 8.3 mm <br />
                Weight: 193.5 g
              </p>
            </div>
          </div>

          <div className="foot-elem foot-elem-box" onClick={() => handleToggle(setInTheBoxDetails, inTheBoxDetails)}>
            <div className="foot-heading">
              <h1>In The Box</h1>
            </div>
            <div className="foot-details" style={{ height: inTheBoxDetails ? 'auto' : '0vh' }}>
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
          <div className="foot-elem2" onClick={() => handleToggle(setMainCameraDetails, mainCameraDetails)}>
            <div className="foot-heading">
              <h1>Main camera</h1>
            </div>
            <div className="foot-details foot-camera-details" style={{ height: mainCameraDetails ? 'auto' : '0vh' }}>
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

          <div className="foot-elem2" onClick={() => handleToggle(setVideoDetails, videoDetails)}>
            <div className="foot-heading">
              <h1>Video</h1>
            </div>
            <div className="foot-details foot-camera-details" style={{ height: videoDetails ? 'auto' : '0vh' }}>
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

          <div className="foot-elem2" onClick={() => handleToggle(setFrontCameraDetails, frontCameraDetails)}>
            <div className="foot-heading">
              <h1>Front Camera</h1>
            </div>
            <div className="foot-details foot-camera-details" style={{ height: frontCameraDetails ? 'auto' : '0vh' }}>
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

          <div className="foot-elem2 foot-elem-box" onClick={() => handleToggle(setUltraWideDetails, ultraWideDetails)}>
            <div className="foot-heading">
              <h1>Ultra wide</h1>
            </div>
            <div className="foot-details" style={{ height: ultraWideDetails ? 'auto' : '0vh' }}>
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
          <div className="foot-elem" onClick={() => handleToggle(setBatteryDetails, batteryDetails)}>
            <div className="foot-heading">
              <h1>Battery</h1>
            </div>
            <div className="foot-details" style={{ height: batteryDetails ? 'auto' : '0vh' }}>
              <p>
                4500 mAh battery size <br />
                33W PD3.0 wired charging: full charge in 70 mins <br />
                15W Qi wireless charging: full charge in 120 mins <br />
                5W reverse wireless charging <br />
                Non-removable battery
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle(setSensorsDetails, sensorsDetails)}>
            <div className="foot-heading">
              <h1>Sensors</h1>
            </div>
            <div className="foot-details" style={{ height: sensorsDetails ? 'auto' : '0vh' }}>
              <p>
                In-display fingerprint sensor <br />
                Accelerometer <br />
                Electronic compass <br />
                Gyroscope <br />
                Ambient light sensor <br />
                Proximity sensor <br />
                Sensor core <br />
                Flick-detect sensor <br />
                Grip sensor
              </p>
            </div>
          </div>

          <div className="foot-elem" onClick={() => handleToggle(setMemoryDetails, memoryDetails)}>
            <div className="foot-heading">
              <h1>Memory</h1>
            </div>
            <div className="foot-details" style={{ height: memoryDetails ? 'auto' : '0vh' }}>
              <p>
                LPDDR5 RAM <br />
                UFS3.1 storage
              </p>
            </div>
          </div>

          <div className="foot-elem foot-elem-box" onClick={() => handleToggle(setUnlockDetails, unlockDetails)}>
            <div className="foot-heading">
              <h1>Unlock</h1>
            </div>
            <div className="foot-details" style={{ height: unlockDetails ? 'auto' : '0vh' }}>
              <p>
                In-display fingerprint sensor <br />
                Face unlock
              </p>
            </div>
          </div>
        </div>
      </div>  
      <div className="footer">
        <div className="foot-left">
          <div className="foot-left-sect">
            <div className="foot-elem" onClick={() => handleToggle(setAudioDetails, audioDetails)}>
              <div className="foot-heading">
                <h1>Audio</h1>
              </div>
              <div className="foot-details" style={{ height: audioDetails ? 'auto' : '0vh' }}>
                <p>
                  Stereo speakers <br />
                  Noise cancellation <br />
                  Dual mic <br />
                  Dolby Atmos
                </p>
              </div>
            </div>

            <div className="foot-elem" onClick={() => handleToggle(setSimCardDetails, simCardDetails)}>
              <div className="foot-heading">
                <h1>Sim Card</h1>
              </div>
              <div className="foot-details" style={{ height: simCardDetails ? 'auto' : '0vh' }}>
                <p>
                  Dual SIM: nano SIM + nano SIM <br />
                  (dual 5G support)
                </p>
              </div>
            </div>

            <div className="foot-elem" onClick={() => handleToggle(setChipsetDetails, chipsetDetails)}>
              <div className="foot-heading">
                <h1>Chipset</h1>
              </div>
              <div className="foot-details" style={{ height: chipsetDetails ? 'auto' : '0vh' }}>
                <p>
                  Qualcomm Snapdragon 778G+ <br />
                  (customized for Nothing) <br />
                  Octa-core (1x 2.5GHz Cortex-A78 <br />
                  3x 2.4GHz Cortex-A78 <br />
                  4x 1.8GHz Cortex-A55) <br />
                  Adreno 642L GPU <br />
                  6nm process technology
                </p>
              </div>
            </div>

            <div className="foot-elem foot-elem-box" onClick={() => handleToggle(setResistanceDetails, resistanceDetails)}>
              <div className="foot-heading">
                <h1>Resistance</h1>
              </div>
              <div className="foot-details" style={{ height: resistanceDetails ? 'auto' : '0vh' }}>
                <p>
                  IP53 rating for splash, water, and dust resistance
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div class="footer">
        <div class="footer-top">
          <div class="links">
            <h1>Products</h1>
            <h4><a href="">Phone (2a)</a></h4>
            <h4><a href="">Phone (2)</a></h4>
            <h4><a href="">Ear (a)</a></h4>
            <h4><a href="">Ear</a></h4>
            <h4><a href="">Accessories</a></h4>
            <h4><a href="">Apparel</a></h4>
          </div>
          <div class="links">
            <h1>Company</h1>
            <h4><a href="">About US</a></h4>
            <h4><a href="">Careers</a></h4>
            <h4><a href="">Community</a></h4>
            <h4><a href="">Newsroom</a></h4>
            <h4><a href="">Sustainability</a></h4>
            <h4><a href="">Business enquiry</a></h4>
            <h4><a href="">Press Contact</a></h4>
          </div>
          <div class="links">
            <h1>Support</h1>
            <h4><a href="">Support Center</a></h4>
            <h4><a href="">Contact US</a></h4>
            <h4><a href="">Contact US via Whatsapp</a></h4>
            <h4><a href="">Service Centre</a></h4>
            <h4><a href="">E-waste management</a></h4>
            <h4><a href="">Find a store</a></h4>
            <h4><a href="">Security Vulnerability</a></h4>
            <h4><a href="">Report</a></h4>
          </div>
          <div class="email">
            <h1>JOIN OUR MAILING LIST</h1>
            <input type="text" placeholder="EMAIL ADDRESS" />
          </div>
        </div>

        <div class="footer-bottom">
          <h3><a href="">Privacy Policy</a></h3>
          <h3><a href="">Warranty Policy</a></h3>
          <h3><a href="">Acceptable Use Policy</a></h3>
          <h3><a href="">User Agreement</a></h3>
          <div class="icons">
            <a href=""><i class="ri-instagram-line"></i></a>
            <a href=""><i class="ri-youtube-line"></i></a>
            <a href=""><i class="ri-twitter-x-line"></i></a>
            <a href=""><i class="ri-tiktok-fill"></i></a>
            <a href=""><i class="ri-discord-fill"></i></a>
          </div>
          <h4><a href="">India</a></h4>
        </div>
        <h5>Redesign and Develop by Noob Developers Team</h5>
      </div>
        {/* <div className="foot-right">
          <div className="foot-right-sect">
            <div className="foot-right-heading">
              <h1>Company</h1>
            </div>
            <ul>
              <li>About</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Nothing Community</li>
            </ul>
          </div>
          <div className="foot-right-sect">
            <div className="foot-right-heading">
              <h1>Products</h1>
            </div>
            <ul>
              <li>Phone (1)</li>
              <li>Ear (1)</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="foot-right-sect">
            <div className="foot-right-heading">
              <h1>Support</h1>
            </div>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Product Support</li>
              <li>Warranty</li>
              <li>Service Centers</li>
            </ul>
          </div>
          <div className="foot-right-sect">
            <div className="foot-right-heading">
              <h1>Follow Us</h1>
            </div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer1;
