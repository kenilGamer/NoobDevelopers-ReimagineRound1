import React, { useState } from 'react';
import '../footer.css';
import { useTransition, animated } from 'react-spring';

const Footer2 = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (key) => {
    setOpenSection(prevKey => (prevKey === key ? null : key));
  };

  const transition = useTransition(openSection, {
    from: { height: 0, opacity: 0 },
    enter: { height: 'auto', opacity: 1 },
    leave: { height: 0, opacity: 0 },
    config: { duration: 500 },
  });

  const renderDetails = (key, content) => (
    <div className="foot-elem" onClick={() => handleToggle(key)}>
      <div className="foot-heading">
        <h1>{key.replace(/([A-Z])/g, ' $1').replace('Details', '')}</h1>
      </div>
      {transition((style, item) => item === key && (
        <animated.div className="foot-details" style={style}>
          {content.split('<br />').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </animated.div>
      ))}
    </div>
  );

  return (
    <div className="foot-bottom heading">
      <div className="foot-design-section">
        <h1 className='heading'>Design</h1>
        <div className="foot-design-elem">
          {renderDetails('DisplayDetails', `
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
          `)}

          {renderDetails('CapacityDetails', `
            8 RAM + 128 GB memory <br />
            8 RAM + 256 GB memory <br />
            12 RAM + 256 GB memory
          `)}

          {renderDetails('DimensionsDetails', `
            Height: 159.2 mm <br />
            Width: 75.8 mm <br />
            Depth: 8.3 mm <br />
            Weight: 193.5 g
          `)}

          {renderDetails('InTheBoxDetails', `
            Nothing Phone (1) <br />
            Type-C cable <br />
            Safety information and warranty card <br />
            Screen protector <br />
            (pre-applied) <br />
            SIM tray ejector
          `)}
        </div>
      </div>

      <div className="foot-camera-section">
        <h1>Camera</h1>
        <div className="foot-camera-elem">
          {renderDetails('MainCameraDetails', `
            50 MP <br />
            Sony IMX766 sensor<br />Focal length: 24 mm <br />
            OIS and EIS image stabilisation <br />Panorama Night Mode <br />
            Portrait Mode <br />
            Beauty Mode <br />
            Bokeh HDR
          `)}

          {renderDetails('VideoDetails', `
            4K recording at 30 fps <br />
            1080p recording at 30 or 60 fps <br />
            Live HDR at 30 fps
          `)}

          {renderDetails('FrontCameraDetails', `
            16 MP <br />
            Sony IMX471 sensor <br />
            ƒ/2.45 aperture <br />
            1/3.1” sensor size <br />
            Live Photo <br />
            HD Portrait
          `)}

          {renderDetails('UltraWideDetails', `
            50 MP <br />
            Samsung JN1 sensor <br />
            ƒ/2.2 aperture <br />
            1/2.76” sensor size <br />
            EIS image stabilisation <br />
            114° field of view <br />
            Night Mode <br />
            Macro (4 cm) <br />
            HDR
          `)}
        </div>
      </div>

      <div className="Features foot-design-section mt-3">
        <h1>Features</h1>
        <div className="foot-design-elem">
          {renderDetails('BatteryDetails', `
            4500 mAh battery size <br />
            33W PD3.0 wired charging: full charge in 70 mins <br />
            15W Qi wireless charging: full charge in 120 mins <br />
            5W reverse wireless charging <br />
            Non-removable battery
          `)}

          {renderDetails('SensorsDetails', `
            In-display fingerprint sensor <br />
            Accelerometer <br />
            Electronic compass <br />
            Gyroscope <br />
            Ambient light sensor <br />
            Proximity sensor <br />
            Sensor core <br />
            Flick-detect sensor <br />
            Grip sensor
          `)}

          {renderDetails('MemoryDetails', `
            LPDDR5 RAM <br />
            UFS3.1 storage
          `)}

          {renderDetails('UnlockDetails', `
            In-display fingerprint sensor <br />
            Face unlock
          `)}

          {renderDetails('AudioDetails', `
            Stereo speakers <br />
            Noise cancellation <br />
            Dual mic <br />
            Dolby Atmos
          `)}

          {renderDetails('SimCardDetails', `
            Dual SIM: nano SIM + nano SIM <br />
            (dual 5G support)
          `)}

          {renderDetails('ShipsetDetails', `
            Qualcomm Snapdragon 778G+ <br />
            (customized for Nothing) <br />
            Octa-core (1x 2.5GHz Cortex-A78 <br />
            3x 2.4GHz Cortex-A78 <br />
            4x 1.8GHz Cortex-A55) <br />
            Adreno 642L GPU <br />
            6nm process technology
          `)}

          {renderDetails('ResistanceDetails', `
            IP53 rating for splash, water, and dust resistance
          `)}
        </div>
      </div>

      <div class="footer">
        <div class="footer-top">
          <div class="links">
            <h1>Products</h1>
            <h4><a href="https://nl.nothing.tech/products/phone-2a">Phone (2a)</a></h4>
            <h4><a href="https://nl.nothing.tech/products/phone-2">Phone (2)</a></h4>
            <h4><a href="https://nl.nothing.tech/products/ear-a">Ear (a)</a></h4>
            <h4><a href="https://nl.nothing.tech/products/ear">Ear</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/store">Accessories</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/apparel">Apparel</a></h4>
          </div>
          <div class="links">
            <h1>Company</h1>
            <h4><a href="https://nl.nothing.tech/pages/about">About US</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/careers">Careers</a></h4>
            <h4><a href="https://nothing.community/">Community</a></h4>
            <h4><a href="">Newsroom</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/student-program">Sustainability</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/business-enquiry">Business enquiry</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/press-contact">Press Contact</a></h4>
          </div>
          <div class="links">
            <h1>Support</h1>
            <h4><a href="https://nl.nothing.tech/pages/support-centre">Support Center</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/contact-support">Contact US</a></h4>
            <h4><a href="">Contact US via Whatsapp</a></h4>
            <h4><a href="">Service Centre</a></h4>
            <h4><a href="">E-waste management</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/store-locator">Find a store</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/vulnerability-report">Security Vulnerability</a></h4>
            <h4><a href="https://nl.nothing.tech/pages/vulnerability-report">Report</a></h4>
          </div>
          <div class="email np  ">
            <h1 className='heading'>JOIN OUR MAILING LIST</h1>
            <div className='flex items-center relative left-10 max-sm:left-20'>
            <input className='np' type="text" placeholder="EMAIL ADDRESS" />
            <button type='submit' className='w-12 h-[9vh] left-[18vw] max-sm:left-0 absolute rounded-lg bg-white'><i class="ri-arrow-right-up-line text-black text-2xl"></i></button>
            </div>
          </div>
        </div>

        <div class="footer-bottom relative">
          <h3><a href="https://nl.nothing.tech/pages/privacy-policy">Privacy Policy</a></h3>
          <h3><a href="https://nl.nothing.tech/pages/terms-of-sales">Warranty Policy</a></h3>
          <h3><a href="https://nl.nothing.tech/pages/nothing-website-acceptable-use-policy">Acceptable Use Policy</a></h3>
          <h3><a href="https://nl.nothing.tech/pages/user-agreement">User Agreement</a></h3>
          <div class="absolute top-16 left-[45vw] flex gap-4 ">
            <a class='bg-white px-1 rounded-full text-black' href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fnothing%2F%3Fhl%3Den&is_from_rle"><i class="ri-instagram-line"></i></a>
            <a class='bg-white px-1 rounded-full text-black' href="https://www.youtube.com/c/NothingTechnology"><i class="ri-youtube-line"></i></a>
            <a class='bg-white px-1 rounded-full text-black' href="https://x.com/nothing"><i class="ri-twitter-x-line"></i></a>
            <a class='bg-white px-1 rounded-full text-black' href="https://www.tiktok.com/@nothing"><i class="ri-tiktok-fill"></i></a>
            <a class='bg-white px-1 rounded-full text-black' href="https://discord.com/invite/nothingtech"><i class="ri-discord-fill"></i></a>
          </div>
          <h4 className='absolute top-[19vh] max-md:top-[27vh]  left-[50vw]'><a href="">India</a></h4>
        </div>
        <h5 className=''>Redesign and Develop by Noob Developers Team</h5>
      </div>
    </div>
  );
};

export default Footer2;
