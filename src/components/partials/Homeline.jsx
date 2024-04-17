import React from 'react'

function Homeline() {
  return (
    <div className='w-full h-full overflow-hidden'>
      {/* st lines */}
        <div  className='line1 h-[2px] w-[0vw] -rotate-[144.95deg] bg-white line1 absolute top-[2.9vw] left-[17.99vw] shadow-none'></div>
        <div className=' line2 h-[2px] line-2 w-[0vw] absolute top-[5.98vw] left-[27.89vw] bg-white'></div>
        <div className=' line3 h-[2px] line-2 w-[0vw] absolute top-[7.99vw] left-[42.3vw] -rotate-[150.01deg] bg-white'></div>
        <div className=' line4 h-[2px] line-2 w-[0vw] absolute top-[10.01vw] left-[49.7vw] bg-white'></div>
        <div className=' line5 h-[2px] line-2 w-[0vw] absolute top-[9.7vw] left-[37.7vw] bg-white -rotate-[149.59deg]'></div>
        <div className=' line6 h-[2px] line-2 w-[0vw] absolute top-[13.5vw] left-[51.6vw] bg-white'></div>
        <div className=' line7 h-[2px] line-2 w-[0vw] absolute top-[14.99vw] left-[55.89vw] bg-white rotate-[49.18deg]'></div>
        <div className=' line8 h-[2px] line-2 w-[0vw] absolute top-[16.39vw] left-[58.90vw] bg-white '></div>
        <div className=' line9 h-[2px] line-2 w-[0vw] absolute top-[14.2vw] left-[73.4vw] bg-white rotate-[117.7deg]'></div>
        <div className=' line10 h-[2px] line-2 w-[0vw] absolute top-[12vw] left-[77vw] bg-white '></div>
        {/* mobile */}
        <div><img className='mobile1 absolute top-[2vw] left-[55vw] z-20 ' src="/public/Rectangle_13-removebg-preview.png" alt="" /></div>
        <div><img className='mobile2 absolute w-[50vw] -top-[8vw] left-[42vw] z-10' src="/public/Rectangle 11.svg" alt="" /></div> 
        {/* end lines*/}
        <div className=' line11 h-[2px] line-2 w-[0vw] absolute top-[35vw] left-[0vw] bg-white '></div>
        <div className=' line12 h-[2px] line-2 w-[0vw] absolute top-[33.59vw] left-[43.48vw] bg-white rotate-[144.8deg]'></div>
        <div className=' line13 h-[2px] line-2 w-[0vw] absolute top-[32.2vw] left-[47.9vw] bg-white '></div>
        {/* text */}
        <div className='w-full h-full'>
        <div className='heading absolute top-[18vw] left-[3vw] text-center w-[50vw]'>
          <h1 className='heading1 text-[3vw]'>NOTHING PHONE (1)</h1>
          <h1 className='heading2 text-[3vw]'>PURE INSTINCT</h1>
        </div>
        <div className='absolute top-[32vw] left-[6vw] overflow-hidden '>
          <h5 className='logo end2 text-2xl tracking-wider opacity-80'>SNAPDRAGON 778g+ | 50 MP Dual camera</h5>
        </div>
        </div>
    </div>
  )
}

export default Homeline