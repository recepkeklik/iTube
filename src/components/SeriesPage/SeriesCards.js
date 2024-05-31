import React from 'react'
import { Link } from 'react-router-dom'


const SeriesCards = (props) => {

  return (
    <Link to={`${props.id}`}className='flex flex-col justify-start items-start m-5 bg-cover bg-center xl:w-[30%] lg:w-[29%] md:w-[26%] sm:w-[25%] w-[21%] py-[10%] rounded-xl' style={{backgroundImage:`url(${props.img}`}}></Link>
  )
}

export default SeriesCards