import React from 'react'
import SeriesData from '../../SeriesData'
import SeriesCards from './SeriesCards'

const SeriesPage = () => {

    const newSeriesData = SeriesData.map(serie => {
        return <SeriesCards id={serie.id} img={serie.img} title={serie.title}/>
    })

  return (
    <div className=''>
        <div className='w-full flex flex-wrap justify-center items-center'>
            {newSeriesData}
        </div>
    </div>
  )
}

export default SeriesPage