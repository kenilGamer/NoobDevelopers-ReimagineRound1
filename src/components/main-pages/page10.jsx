import React from 'react'

function Page10() {
  return (
        <div className='w-full h-[100vh] bg-black page10 relative p-10'>
            <div className='w-full h-full '>
                <div className='text-1 text-center p-10 heading text-6xl'>More</div>
                <div className='flex items-center justify-between gap-x-32 gap-y-10 heading h-[50vh] flex-wrap  px-52'>
                    <button className='text-xl py-5 p-20 rounded-2xl shadow1'>Design</button>
                    <button className='text-md py-5 p-20 rounded-2xl shadow1'><h1 className='text-wrap w-52'>Network and connectiviy</h1></button>
                    <button className='text-xl py-5 p-20 rounded-2xl shadow1'>Camera</button>
                    <button className='text-xl py-5 p-20 rounded-2xl shadow1 '>Features</button>
                </div>
            </div>
        </div>
  )
}

export default Page10