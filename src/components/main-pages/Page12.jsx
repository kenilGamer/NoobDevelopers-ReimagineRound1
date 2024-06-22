import React from 'react'

function Page12() {
  return (
    <div className='w-full h-[100vh] bg-black p-3 flex max-md:flex-col max-md:mt-80 gap-5'>
        <div className='w-1/2 max-md:w-full h-full flex flex-col gap-3 p-1'>
            <div className='w-full h-[70%] shadow1 rounded-3xl p-2'>
                <h1 className='heading text-[3vw] max-md:text-[4vw] text-center '>Main Camera</h1>
               <div>
               <p className='w-24 ml-6 max-md:text-xs'>50 MP Sony IMX766 sensor Focal length: 24 mm OIS and EIS image stabilisation Panorama Night Mode Portrait Mode Beauty Mode Bokeh
               HDR</p>
               </div>
            </div>
            <div className='w-full h-[30%] shadow1 rounded-3xl'></div>

        </div>
        <div className='w-1/2 max-md:w-full h-full bg-gray-900 '></div>
    </div>
  )
}

export default Page12