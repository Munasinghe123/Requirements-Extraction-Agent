import React from 'react'
import roboarom from '../Images/WhyUs/roboarm.png'
import arm from '../Images/WhyUs/arm.png'
import why from '../Images/WhyUs/why.png'

function WhyUs({ className }) {
  return (
    <div className='scroll-section relative z-10 h-screen bg-black w-full ' >
      <div className='flex items-center justify-center w-full '>
        <h1 className='text-white text-7xl uppercase font-bold w-full text-center pt-10 max-w-3xl'
          style={{ fontFamily: 'Orbitron, sans-serif' }}>Let Our <span className='text-cyan-300'>Agents</span>  Do <span className='text-cyan-300'>Your Work</span>
        </h1>
      </div>
      <div className='flex items-center justify-center w-full h-full '>
        <img src={roboarom} className='absolute z-0 left-0 -bottom-20 h-full object-cover ' />
        <img src={why} className='absolute z-0 bottom-16  left-1/2 -translate-x-1/2 h-96 object-cover opacity-80' />
        <img src={arm} className='absolute z-0 right-0 -bottom-20 h-full object-cover ' />
      </div>
    </div>
  )
}

export default WhyUs
