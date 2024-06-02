import React, { useState } from 'react'
import MovieCards from './MovieCards'
import {useSearchParams } from 'react-router-dom';
import MovieData from '../../MovieData';



const MoviesPage = () => {

    const [a,setA] = useSearchParams()

    const [search,setSearch] = React.useState("");

    const [isFilterOpen,setIsFilterOpen] = React.useState(true);

    const newData = MovieData.filter((data) => {
        return search.toLowerCase() === '' ? data : data.title.toLowerCase().includes(search)
    }).filter((data) => {
        return a.get("category") == undefined ? data : data.kind.includes(a.get("category")) ? data : data.kind.includes(a.get("category"))
    }).filter((data) => {
        return a.get("minScore") == undefined ? data : Number(data.score) >= a.get("minScore") ? data : false
    }).filter((data) => {
        return a.get("maxScore") == undefined ? data : Number(data.score) <= a.get("maxScore") ? data : false
    }).map(data => {
        return <MovieCards img={data.img} liked={data.liked} isInWatchList={data.isInWatchList} id={data.id} score={data.score} title={data.title} time={data.time} kind={data.kind.filter((item) => item != "All").join("-")}/>
    })
    

  return (
    
    <div  className="w-full flex flex-col pb-20 bg-cover bg-center" >
        <div className="xl:flex lg:flex md:flex items-start flex-col justify-start">
            <div className='w-full flex justify-start px-[80px] mt-10'>
                {isFilterOpen == true ? 
                    <div onClick={((filter) => setIsFilterOpen(filter => !filter))} className='flex justify-center items-center text-white cursor-pointer'>
                        <div><i class="mr-2 fa-solid fa-filter text-2xl"></i></div>
                        <h1 className='text-xl font-Inter'>Filter</h1>
                    </div>
                    :
                    <div className='w-full flex justify-center items-center'>
                        <div id="forCategoryBorderAnimation">
                            <div>
                                <input className='w-full rounded-xl pl-5 py-1' onChange={(e) => setSearch(e.target.value)}/>
                            </div>
                            <div className='mt-5 mb-5'>
                                <h1 className='ml-[6px] text-white text-2xl italic'>Category</h1>
                                <div className='flex flex-wrap mt-3'>
                                    <a className="px-4 py-1 rounded-xl bg-red-700 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=All">All</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Action">Action</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Crime">Crime</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Comedy">Comedy</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Drama">Drama</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Fantasy">Fantasy</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Horror">Horror</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Mystery">Mystery</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Romance">Romance</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Thriller">Thriller</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Western">Western</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Science Fiction">Science Fiction</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Animated">Animated</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-600 hover:bg-red-800 duration-300 text-white m-2" href="Movies?category=Historical">Historical</a>
                                </div>
                            </div>
                            <div className='w-[31%]'>
                                <h1 className='ml-[6px] text-white text-2xl italic'>Rating</h1>
                                <div className='flex flex-wrap mt-3'>
                                    <a className="px-4 py-1 rounded-xl bg-red-700 hover:bg-red-800 duration-300 text-white m-2" href={`Movies?minScore=1&maxScore=3`}><i class="fa-solid fa-star text-yellow-300 mr-1"></i>1-3</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-700 hover:bg-red-800 duration-300 text-white m-2" href={`Movies?minScore=3&maxScore=5`}><i class="fa-solid fa-star text-yellow-300 mr-1"></i>3-5</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-700 hover:bg-red-800 duration-300 text-white m-2" href={`Movies?minScore=5&maxScore=7`}><i class="fa-solid fa-star text-yellow-300 mr-1"></i>5-7</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-700 hover:bg-red-800 duration-300 text-white m-2" href={`Movies?minScore=7&maxScore=9`}><i class="fa-solid fa-star text-yellow-300 mr-1"></i>7-9</a>
                                    <a className="px-4 py-1 rounded-xl bg-red-700 hover:bg-red-800 duration-300 text-white m-2" href={`Movies?minScore=9&maxScore=10`}><i class="fa-solid fa-star text-yellow-300 mr-1"></i>9-10</a>
                                </div>
                            </div>
                        </div>
                        <div className='cursor-pointer ml-5 px-4 py-1 rounded-full bg-black text-white text-xl hover:rotate-90 duration-300' onClick={((filter) => setIsFilterOpen(filter => !filter))}><i class="fa-solid fa-xmark"></i></div>
                    </div>
                }
            </div>
            <div className="w-full flex justify-start items-end flex-wrap mt-10 pl-10">
                {newData}
            </div>
        </div>
    </div>
  )
}

export default MoviesPage



