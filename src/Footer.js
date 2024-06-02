import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="relative flex justify-around items-center w-full flex shadow-inner shadow-white/10 py-10">
      <video className='w-full fixed h-full top-0 bottom-0 left-0 right-0 object-cover object-bottom z-[-1]' autoPlay loop muted>
        <source src="./ice-fire.mp4" type="video/mp4"/>
      </video>
      <Link to="Movies" className='italic font-Inter text-3xl font-bold text-white hover:scale-[1.5] duration-300'>Movies</Link>
      <Link to="Series" className='italic font-Inter text-3xl font-bold text-white hover:scale-[1.5] duration-300'>Series</Link>
    </div>
  )
}

export default Footer