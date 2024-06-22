import React from 'react'

function Page12() {
  return (
    <div className='w-full h-[100vh] bg-black p-3 relative flex max-md:flex-col max-md:mt-80 gap-5 aclonica                           '>
      <div className='w-1/2 max-md:w-full h-full flex flex-col gap-3 p-1'>
        <div className='w-full h-[70%] shadow1 rounded-3xl p-2'>
          <h1 className='heading text-[3vw] max-md:text-[4vw] text-center '>Main Camera</h1>
          <div className='flex items-center justify-around'>
            <p className='w-32 ml-6 max-md:text-xs'>50 MP Sony IMX766 sensor Focal length: 24 mm OIS and EIS image stabilisation Panorama Night Mode Portrait Mode Beauty Mode Bokeh
              HDR</p>
            <p className='w-32 ml-6 max-md:text-xs'> Google Filter Scene Detection Live Photo Document Mode Night Mode Extreme Night Mode Night Video Expert Mode Panorama Slo-Mo (120 fps) Time-lapse</p>
          </div>
        </div>
        <div className='w-full h-[30%] shadow1 rounded-3xl'>
          <h1 className='heading text-[3vw] max-md:text-[4vw] text-center '>Video</h1>
          <div className='flex items-center justify-around'>
            <p className='w-48 ml-6 max-md:text-xs'>4K recording at 30 fps 1080p recording at 30 or 60 fps Live HDR at 30 fps</p>
            <p className='w-48 ml-6 max-md:text-xs'> Slo-mo (120 fps) Night Mode  (720p/1080p at 30 fps) OIS and EIS image stabilisation</p>
          </div>
        </div>

      </div>
      <div className='w-1/2 max-md:w-full h-full'>
        {/* <h1 className=' text-center heading text-4xl max-md:text-xl'>Camera</h1> */}
        <div className='h-full flex flex-col gap-5'>
          <div className='w-full h-[60%] shadow1 rounded-3xl'>
            <h1 className='heading text-[3vw] max-md:text-[4vw] text-center'>Ultra wide</h1>
            <div className='flex items-center justify-center '>
            <p className='max-md:w-28 w-32 text-center   max-md:text-xs'>50 MP Samsung JN1 sensor ƒ/2.2 aperture 1/2.76” sensor size EIS image stabilisation 114° field of view Night Mode Macro (4 cm) HDR</p>
            </div>
          </div>
          <div className='w-full h-[40%] shadow1 rounded-3xl'>
          <h1 className='heading text-[3vw] max-md:text-[4vw] text-center'>Front Camera</h1>
          <div className='flex items-center justify-around mt-2'>
         <p className='w-32 ml-6 max-md:text-xs'> 16 MP Sony IMX471 sensor ƒ/2.45 aperture 1/3.1” sensor size Live Photo HD Portrait </p>
         <p className='w-32 ml-6 max-md:text-xs '>Google Filter Beauty Mode Night Mode 1080p video recording  30 fps</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page12