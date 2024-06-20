import React, { useState } from 'react'
import Cube from '../partials/Cube'

function Page5() {
  const [rotate, setRotate] = useState("0");

  return (
    <div className='w-full h-screen bg-slate-800 relative'>
       <div
            className="cube w-full min-h-full absolute  " >
            <Cube rotate={rotate} />
          </div>
    </div>
  )
}

export default Page5