import React from 'react'

function Page11() {
  return (
     <div className='w-full h-screen max-md:min-h-[190vh] bg-black page10 overflow-hidden relative  p'>
            <div className='w-full h-full '>
                <div className='text-1 text-center heading text-5xl'>Design</div> 
                <div className='flex max-md:flex-col w-full h-[90vh]'>
                    <div className='w-1/3 max-md:w-full p-3 '>
                        <div className='w-full h-full rounded-3xl shadow1  px-10 aclonica'>
                            <h1 className='heading text-center text-[2vw] p-3'>Display</h1>
                            <div className='flex flex-col gap-4 '>
                            <p>6.55” flexible AMOLED display</p>
                            <p>Corning® Gorilla® Glass</p>
                            <p>HDR10+</p>
                            <p>10-bit colour depth</p>
                            <p>2400x1080-pixel resolution at 402 ppi</p>
                            <p>1,000,000:1 contrast ratio</p>
                            <p>500 nits brightness; 1200 nits peak brightness</p>
                            <p>60Hz - 120Hz adaptive refresh rate</p>
                            <p>240Hz touch sampling rate</p>
                            <p>Haptic touch motors</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-1/3 max-md:w-full p-3 '>
                        <div className='w-full h-full flex flex-col justify-around p-2 aclonica'>
                            <div className='w-full h-[40vh] max-md:h-full shadow1  rounded-3xl px-10'>
                                <h1 className='heading text-center text-[2vw] p-3'>Capacity</h1>
                                <div className='flex flex-col gap-3'>
                                    <p>8 RAM + 128 GB memory</p>
                                    <p>8 RAM + 256GB memory</p>
                                    <p>12 RAM + 256GB memory</p>
                                </div>
                            </div>
                            <div className='w-full h-[40vh] max-md:h-full shadow1  rounded-3xl px-10'>
                                <h1 className='heading text-center text-[2vw] p-3'>Dimensions</h1>
                                <div className='flex flex-col gap-3'>
                                    <p>Height: 159.2 mm</p>
                                    <p>Width: 75.8 mm</p>
                                    <p>Depth: 8.3 mm</p>
                                    <p>Weight: 193.5 g</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-1/3 max-md:w-full p-3 '>
                        <div className='w-full min-h-full rounded-3xl shadow1  px-10 aclonica'>
                            <h1 className='heading text-center text-[2vw] p-3'>In The Box</h1>
                            <div className='flex flex-col gap-10 '>
                            <p>Nothing Phone (1)</p>
                            <p>Type-C cable</p>
                            <p>Safety information and warranty card</p>
                            <p>Screen protector (pre-applied)</p>
                            <p>SIM tray ejector</p>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
  )
}

export default Page11