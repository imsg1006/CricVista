import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-full py-8 backdrop-blur-lg "
      // style={{ background: "linear-gradient(135deg, #1fa793, #00AFC1, #425182)" }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between border-t-2"
      c 
      >
        {/* Left Section */}
        <div className="font-['Playfair_Display'] text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl mt-6 font-bold bg-gradient-to-r from-[#36436e] to-[#1fa793] bg-clip-text text-transparent">
            ICT <span style={{ color: "#FFFFFF" }}>Website</span>
          </h2>
          <p className="text-sm mt-2 text-[#E0E0E0]" >
            Celebrating the Indian Cricket Team 
          </p>
        </div>

        {/* Navigation */}
        <nav className="font-['Playfair_Display'] flex space-x-8">
          <a
            href="/"
            className="text-lg text-[#D1ECF1] hover:text-white font-medium transition duration-300 hover:underline"
           
          >
            Home
          </a>
          <a
            href="/Achievements"
            className="text-lg text-[#D1ECF1] hover:text-white font-medium transition duration-300 hover:underline"
             
          >
            Achievements
          </a>
          <a
            href="/players"
            className="text-lg text-[#D1ECF1] hover:text-white  font-medium transition duration-300 hover:underline"
             
          >
            Players
          </a>
          <a
            href="/gallery"
            className="text-lg text-[#D1ECF1] hover:text-white  font-medium transition duration-300 hover:underline"
             
          >
           Gallery
          </a>
        </nav>

        {/* Button */}
         
      </div>
    </footer>
  )
}

export default Footer
