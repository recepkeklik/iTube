import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="relative flex justify-around items-center w-full flex shadow-inner shadow-white/10 pt-10">
      <video className='w-full absolute top-0 bottom-0 left-0 right-0 h-32 object-cover object-bottom z-[-1]' autoPlay loop muted>
        <source src="./ice-fire.mp4" type="video/mp4"/>
      </video>
      <Link to="Movies" className='italic font-Inter text-3xl font-bold text-white'>Movies</Link>
      <Link to="Series" className='italic font-Inter text-3xl font-bold text-white'>Series</Link>
    </div>
  )
}

export default Footer