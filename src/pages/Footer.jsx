import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-full py-8 backdrop-blur-lg "
      style={{ background: "linear-gradient(to right, #00416A, #E4E5E6)" }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between border-t-2"
      c 
      >
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl mt-6 font-bold" style={{ color: "#0A192F" }}>
            ICT <span style={{ color: "#F05454" }}>Website</span>
          </h2>
          <p className="text-sm mt-2" style={{ color: "#0A192F" }}>
            Celebrating the Indian Cricket Team 
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <a
            href="/"
            className="text-lg font-medium transition duration-300 hover:underline"
            style={{ color: "#0A192F" }}
          >
            Home
          </a>
          <a
            href="/achievements"
            className="text-lg font-medium transition duration-300 hover:underline"
            style={{ color: "#0A192F" }}
          >
            Achievements
          </a>
          <a
            href="/players"
            className="text-lg font-medium transition duration-300 hover:underline"
            style={{ color: "#0A192F" }}
          >
            Players
          </a>
          <a
            href="/gallery"
            className="text-lg font-medium transition duration-300 hover:underline"
            style={{ color: "#0A192F" }}
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
