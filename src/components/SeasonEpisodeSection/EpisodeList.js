import React from 'react'
import { Link } from 'react-router-dom'

const EpisodeList = ({ episodes }) => {
  return (
    <div className='mt-10 flex justify-around items-center flex-wrap text-white'>
        {episodes.map((episode) => (
            <Link className='xl:w-[22%] lg:w-[45%] md:w-[55%] m-6 flex flex-col justify-center items-center' key={episode.id}>
                <img src={episode.img}/>
                <div className='mt-1 flex justify-between items-center w-full'>
                  <h1 className='font-bold'>#{episode.id}</h1>
                  <h1 className='italic text-md'>{episode.name}</h1>
                  <h1 className='text-white/50'>{episode.timeDuration}</h1>
                </div>
            </Link>
        ))}    
        </div>
  )
}

export default EpisodeList