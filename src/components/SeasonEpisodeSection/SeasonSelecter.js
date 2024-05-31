import React from 'react'

const SeasonSelecter = ({ seasons, onSeasonChange }) => {
  return (
    <div className='flex justify-center items-center'>
      <select className='block italic py-2.5 px-0 w-[15%] text-center text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-0 focus:border-gray-200 peer' onChange={(e) => onSeasonChange(seasons[e.target.value])}>
        {seasons.map((season, index) => (
          <option className='bg-black text-white' key={season.id} value={index}>{season.name}</option>
        ))}
      </select>
    
    </div>
  )
}

export default SeasonSelecter



