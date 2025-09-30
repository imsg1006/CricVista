import React from 'react'
import Video from '../components/Home/Video'
import Hero from "../components/Home/Hero"
import BottomText from "../components/Home/BottomText" 

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <Video />
      </div>

      {/* Content Layer */}
      <div className="flex flex-col justify-between items-center w-full h-full px-4 sm:px-6 md:px-12 text-center">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>

        {/* Bottom Text Section */}
        <div className="pb-6 sm:pb-10 md:pb-12">
          <BottomText />
        </div>
      </div> 
    </div>
  )
}

export default Home
