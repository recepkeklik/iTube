import React from 'react'
import EpisodeList from './EpisodeList';
import SeasonSelector from './SeasonSelecter'

const SeasonEpisodeBar = ({ seasons }) => {

    const [selectedSeason, setSelectedSeason] = React.useState(seasons[0]);

    const handleSeasonChange = (season) => {
        setSelectedSeason(season);
    };


  return (
    <div className='w-full'>
        <SeasonSelector seasons={seasons} onSeasonChange={handleSeasonChange} />
        <EpisodeList episodes={selectedSeason.episodes} />
    </div>
  )
}

export default SeasonEpisodeBar