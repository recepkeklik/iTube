import React from 'react'
import { Link } from 'react-router-dom'


const SeriesCards = (props) => {

  return (
    <Link to={`${props.id}`}className='flex flex-col m-5 bg-cover bg-center xl:w-[30%] lg:w-[29%] md:w-[35%] w-[60%] xl:py-[10%] lg:py-[10%] md:py-[10%] py-[20%] rounded-xl' style={{backgroundImage:`url(${props.img}`}}></Link>
  )
}

export default SeriesCards