import React from 'react'
import Nav from '../partials/Nav'
import Homeline from '../partials/Homeline'

function Home() {
  return (
    <div className='w-full h-full bg-black overflow-hidden'>
      <Nav/>
      <div className='w-full h-full relative '>
        <Homeline/>
      </div>
    </div>
  )
}

export default Home