import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect"


const Main = () => {
  return (
    <div style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(images/movie-application-bg.jpg)"}} className="w-full bg-norepeat bg-cover bg-center h-screen flex justify-center items-start font-Inter pb-[1080px]">
        <div className="flex w-[30%] justify-center items-center flex-col grow-0 mt-52">
            <div className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[20px] text-white text-center font-bold">
                <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:75,
                        strings:["You can watch all the movies and series in iTube"]
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Main