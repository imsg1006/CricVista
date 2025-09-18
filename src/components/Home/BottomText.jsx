import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-transparent">
      <Link
        to="/Achievements"
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                   leading-tight sm:leading-snug md:leading-normal 
                   hover:border-[#05A181] border-4 m-2 
                   border-[#00B894] rounded-full px-6 sm:px-8 md:px-10 
                   py-2 text-[#FF9933] uppercase text-center"
      >
        Achievements
      </Link>
      <Link
        to="/players"
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                   leading-tight sm:leading-snug md:leading-normal 
                   hover:border-[#05A181] border-4 m-2 font-semibold 
                   border-[#00B894] rounded-full px-6 sm:px-8 md:px-10 
                   py-2 text-[#FF9933] uppercase text-center"
      >
        Players
      </Link>
      <Link
        to="/gallery"
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                   leading-tight sm:leading-snug md:leading-normal 
                   hover:border-[#05A181] border-4 m-2 font-semibold 
                   border-[#00B894] rounded-full px-6 sm:px-8 md:px-10 
                   py-2 text-[#FF9933] uppercase text-center"
      >
        Gallery
      </Link>
    </div>
  )
}

export default BottomText
