import React from 'react'
import Video from './Video'

const Hero = () => {
  return (
    <div className="pt-5 text-center space-y-2">
      {/* First Line */}
      <div
        className="flex justify-center items-center 
                   bg-gradient-to-r from-orange-500 via-white to-green-500 
                   bg-clip-text text-transparent uppercase 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                   leading-tight sm:leading-snug md:leading-[1.1]"
      >
        More
      </div>

      {/* Second Line */}
      <div
        className="flex justify-center items-center 
                   bg-gradient-to-r from-orange-500 via-white to-green-500 
                   bg-clip-text text-transparent uppercase 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                   leading-tight sm:leading-snug md:leading-[1.1]"
      >
        Th
        <div
          className="mx-2 rounded-full overflow-hidden 
                     h-10 w-20 sm:h-12 sm:w-24 md:h-16 md:w-32 lg:h-20 lg:w-40"
        >
          <Video />
        </div>
        an a
      </div>

      {/* Third Line */}
      <div
        className="flex justify-center items-center 
                   bg-gradient-to-r from-orange-500 via-white to-green-500 
                   bg-clip-text text-transparent uppercase 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                   leading-tight sm:leading-snug md:leading-[1.1]"
      >
        Game
      </div>
    </div>
  )
}

export default Hero
