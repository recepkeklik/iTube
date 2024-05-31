import React from 'react'
import MovieData from '../../MovieData'
import { useParams } from 'react-router-dom'


 

const MovieScreen = () => {

  const {id} = useParams()

  let DATA = MovieData.filter((item) => {
    return item.id == id ? item : false
  }).map((item) => {
    return item
  })[0]

  const dashArray = 40 * Math.PI * 2;
  const dashOffSet = dashArray - (dashArray * DATA.score) / 10;
  
  const [isLiked,setIsLiked] = React.useState(DATA.liked)
  const [isInWatclist,setIsInWacthlist] = React.useState(DATA.isInWatchList)

  
  DATA.liked = isLiked;
  DATA.isInWatchList = isInWatclist;

  const slideLeft = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 470
    console.log(slider.scrollLeft)
  }

  const slideRight = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 470
  }



  return (
    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(../images/MovieScreenBgs/${DATA.BgImage}.jpeg`}} className="pb-20 overflow-hidden w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
        <div className="xl:w-[80%] lg:w-[75%] md:w-[80%] mt-16 xl:flex lg:flex md:flex justify-between items-start px-6">
          <img className="xl:w-[40%] md:w-[58%] lg:w-[60%] rounded-xl mr-3 mb-10" src={"."+DATA.img}/>
          <div className="w-full flex justify-center xl:items-start lg:items-start md:items-start flex-col text-start">
            <div className="flex justify-center items-end">
              <h1 className="text-[30px] font-Inter font-bold text-white mb-2">{DATA.title}</h1>
              <p className="italic text-black/50 font-semibold text-white/75">{DATA.time}</p>
            </div>
            <div className="flex justify-start items-start ml-1 mt-5">
              <div className="flex justify-center items-start flex-col">
                <svg width="125" height="125" viewBox='0 0 200 200'>
                  <circle className="fill-none stroke-transparent" cx="50" cy="50" strokeWidth="7px" r="40"></circle>
                  <circle transform='rotate(-90 50 50)' style={{strokeDasharray:dashArray,strokeDashoffset:dashOffSet,strokeLinecap:'round',strokeLinejoin:'round'}} className="fill-none stroke-green-400" cx="50" cy="50" strokeWidth="7px" r="40"></circle>
                  <text fill='white' className="text-[25px] font-bold" x="25%" y="25%" dy="0.3em" textAnchor='middle'>{DATA.score}</text>
                </svg>
                <div className="flex">
                  <i class={`${DATA.liked == true ? "fa-solid fa-heart" : "fa-regular fa-heart"} text-[30px] mr-5 text-white hover:scale-[1.2] duration-300 cursor-pointer`} onClick={(like) => setIsLiked(like => !like)}></i>
                  <i class={`${DATA.isInWatchList == true ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} text-[30px] text-white hover:scale-[1.2] duration-300 cursor-pointer`} onClick={(isInWatchList) => setIsInWacthlist(isInWatchList => !isInWatchList)}></i>
                </div>
              </div>
              <div className="flex">
                {DATA.kind[1] != null ? <div className="mt-3 w-24 py-[6px]  flex justify-center items-center text-white text-[18px] italic bg-red-600 rounded-[30px] mr-2">{DATA.kind[1]}</div> : <></>}
                {DATA.kind[2] != null ? <div className="mt-3 w-24 py-[6px]  flex justify-center items-center text-white text-[18px] italic bg-red-600 rounded-[30px] mr-2">{DATA.kind[2]}</div> : <></>}
              </div>
            </div>
            <p className="text-[17px] text-gray-100 mt-2 pr-2">{DATA.summary}</p>
            <div className="flex flex-col mt-10">
              <h1 className="font-FrizQuadrataRegular text-white text-xl font-bold italic">Released On: <span className="text-xl text-white/50">{DATA.date}</span></h1>
              <h1 className="text-white text-xl font-bold italic">Director: <span className="text-xl text-white/50">{DATA.director}</span></h1>
              <h1 className="text-white text-xl font-bold italic">Age Limit: <span className="text-xl text-white/50">{DATA.forAge}</span></h1>
            </div>
          </div>
        </div>
        <div className="relative xl:flex lg:flex md:flex hidden items-center px-[5%] pb-20 mt-[2%]">
          <div onClick={slideLeft} className="text-white text-2xl mr-[1%] flex justify-center items-center duration-300 cursor-pointer rounded-full">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div id={'slider'}   className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth relative'>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.firstCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.firstCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.firstCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.secondCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.secondCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.secondCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.thirdCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.thirdCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.thirdCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.fourthCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.fourthCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.fourthCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.fivethCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.fivethCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.fivethCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.sixthCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.sixthCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.sixthCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.seventhCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.seventhCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.seventhCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.eighthCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.eighthCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.eighthCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.ninethCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.ninethCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.ninethCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.tenthCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.tenthCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.tenthCharacterMovieName}</h2>
              </div>
            </div>
            <div className='w-[15%] p-1 pb-0 relative inline-block'>
              <img className="w-full xl:h-[340px] lg:h-[240px] md:h-[170px] block" src={DATA.eleventhCharacterImg}/>
              <div className="absolute text-center bottom-0 bg-black/70 w-full">
                <h1 className="font-semibold text-white xl:text-[22px] md:text-[12px]">{DATA.eleventhCharacterRealName}</h1>
                <h2 className="italic text-gray-300 xl:text-[14px] lg:text-[14px] md:text-[10px] mb-[2px]">{DATA.eleventhCharacterMovieName}</h2>
              </div>
            </div>
          </div>
          <div onClick={slideRight} className="text-white text-2xl ml-[1%] flex justify-center items-center duration-300 cursor-pointer rounded-full">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <iframe className='mt-10 xl:w-[50%] xl:h-[400px] lg:w-[50%] lg:h-[300px] md:w-[60%] md:h-[300px]' src="https://www.youtube.com/embed/sY1S34973zA" title="The Godfather Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default MovieScreen