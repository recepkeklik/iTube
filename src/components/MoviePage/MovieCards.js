import React from 'react'
import { Link } from 'react-router-dom'
import MovieData from '../../MovieData'

const MovieCards = (props) => {

  const [isLiked,setIsLiked] = React.useState(props.liked)
  const [isInWatclist,setIsInWacthlist] = React.useState(props.isInWatchList)
  
  let index = MovieData.map((item) => {
    return item.id
  }).indexOf(props.id)

  MovieData[index].liked = isLiked;
  MovieData[index].isInWatchList = isInWatclist;


  return (
    <div className="relative xl:w-[18%] lg:w-[21%]   md:w-[45%] rounded-xl flex justify-center items-center flex-col p-2 m-3 text-center  hover:scale-[1.01] duration-300">
      <div className="group bg-black rounded-xl">
        <img className="group-hover:opacity-[0.2] rounded-xl xl:h-[400px] lg:h-[300px] md:h-[500px]" src={props.img} />
        <div className="top-[33%] left-0 w-full rounded-[10px] text-white justify-center items-center hidden group-hover:flex absolute">
          <div><i onClick={(like) => setIsLiked(like => !like)} class={`${isLiked == true ? "fa-solid fa-heart" : "fa-regular fa-heart"} text-[45px] mr-[50px] hover:scale-[1.2] duration-300 cursor-pointer`} ></i></div>
          <div><i onClick={(list) => setIsInWacthlist(list => !list)} class={`${isInWatclist == true ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} text-[45px] hover:scale-[1.2] duration-300 cursor-pointer`}></i></div>
        </div>
      </div>
      <div className="lg:w-[240px]">
          <h1 className="text-[22px] font-Inter text-white font-bold mt-1">{props.title}</h1>
      </div>
      <div className="">
          <p className="italic font-Inter text-gray-300">{props.time}</p>
          <p className="italic font-Inter text-gray-300">{props.kind}</p>
      </div>
      <Link to={`${props.id}`} className="font-Inter w-[85%] bg-red-700 mt-2 py-[6px] text-xl hover:bg-red-800 duration-300 rounded-lg text-white font-bold"><i class="fa-solid fa-play mr-1"></i>Watch Now</Link>
    </div>
  )
}

export default MovieCards