import React from 'react'
import StarBackground from '../components/StartBackGround'

function OurAgents({ className }) {
  return (
    <div className='relative scroll-section rounded-t-4xl  z-10 bg-taupe-950 h-screen w-full'>
      
      <h1 className='text-white text-7xl uppercase font-bold w-full text-center pt-10'
        style={{ fontFamily: 'Orbitron, sans-serif' }}>Our <span className='text-cyan-300'>Agents</span> 
      </h1>
    </div>
  )
}

export default OurAgents
