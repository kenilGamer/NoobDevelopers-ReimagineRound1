import React from 'react'

function Page10() {
  return (
        <div className='w-full min-h-[100vh] bg-black page10 relative p-10'>
            <div className='w-full min-h-full '>
                <div className='text-1 text-center p-10 heading text-[5vw]'>More</div>
                <div className='flex items-center justify-between gap-x-32 max-md:gap-10 gap-y-10 heading min-w-full min-h-[50vh] flex-wrap  px-52 max-md:p-2'>
                    <button className='text-xl py-5 p-20 rounded-2xl max-md:text-[3vw] shadow1'>Design</button>
                    <button className='text-md py-5 p-20 rounded-2xl max-md:text-[3vw] shadow1'><h1 className='text-wrap max-md:w-full w-52'>Network and connectiviy</h1></button>
                    <button className='text-xl py-5 p-20 rounded-2xl max-md:text-[3vw] shadow1'>Camera</button>
                    <button className='text-xl py-5 p-20 rounded-2xl max-md:text-[3vw] shadow1 '>Features</button>
                </div>
            </div>
        </div>
  )
}

export default Page10