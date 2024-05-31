import React from 'react'
import SeriesData from '../../SeriesData'
import { useParams } from 'react-router-dom'
import SeasonEpisodeBar from '../SeasonEpisodeSection/SeasonEpisodeBar'

const SeriesScreen = () => {

  const {id} = useParams()

  let DATA = SeriesData.filter((item) => {
    return item.id == id ? item : false
  }).map((item) => {
    return item
  })[0]

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DATA.Walpapers.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  

  const dashArray = 40 * Math.PI * 2;
  const dashOffSet = dashArray - (dashArray * DATA.score) / 10;

  return (
    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(../images/SeriesWalpapers/${DATA.Walpapers[currentIndex]}.jpg`}} className="pb-20 overflow-hidden w-full bg-cover bg-no-repeat bg-center flex flex-col justify-start items-start">
      <div className='w-[60%] m-14'>
        <h1 className='text-[50px] text-white font-serif'>{DATA.title}</h1>
        <p className='text-white font-serif'>{DATA.summary}</p>
        <div className='xl:flex lg:flex justify-start items-start'>
          <svg width="125" height="125" viewBox='0 0 200 200' className='mt-5'>
            <circle className="fill-none stroke-transparent" cx="50" cy="50" strokeWidth="7px" r="40"></circle>
            <circle transform='rotate(-90 50 50)' style={{strokeDasharray:dashArray,strokeDashoffset:dashOffSet,strokeLinecap:'round',strokeLinejoin:'round'}} className="fill-none stroke-yellow-300" cx="50" cy="50" strokeWidth="7px" r="40"></circle>
            <text fill='white' className="text-[25px] font-bold" x="25%" y="25%" dy="0.3em" textAnchor='middle'>{DATA.score}</text>
          </svg>
          <h1 className='py-[2%] mr-5 text-white/50 font-semibold text-xl italic'>Season Number : {DATA.seasonNumber}</h1>
          <h1 className='py-[2%] mr-5 text-white/50 font-semibold text-xl italic'>Episode Number : {DATA.episodeNumber}</h1>
          <h1 className='py-[2%] mr-5 text-white/50 font-semibold text-xl italic'>+{DATA.forAge}</h1>
        </div>
      </div>
      <SeasonEpisodeBar seasons={DATA.seriesData} />
    </div>
  )
}

export default SeriesScreen