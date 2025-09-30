import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const [navColor, setNavColor] = useContext(NavbarColorContext)

  return (
    <div className="z-50 flex fixed top-0 w-full items-center justify-between bg-transparent px-3 sm:px-6 lg:px-10 py-2">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src="/cric-logo.png"
            alt="logo"
            className="w-16 sm:w-20 md:w-28 lg:w-36"
          />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          if (navGreenRef.current) navGreenRef.current.style.height = '100%'
        }}
        onMouseLeave={() => {
          if (navGreenRef.current) navGreenRef.current.style.height = '0%'
        }}
        className="relative bg-[#55a99c] h-10 sm:h-12 md:h-14 lg:h-16 w-12 sm:w-14 md:w-16 lg:w-[16vw] cursor-pointer rounded-md overflow-hidden"
      >
        {/* Green Hover Effect */}
        <div
          ref={navGreenRef}
          className="bg-[#07474e] transition-all duration-300 absolute top-0 h-0 w-full"
        ></div>

        {/* Hamburger Lines */}
        <div className="relative h-full flex flex-col justify-center items-center sm:items-end gap-1 sm:gap-1.5 px-2 sm:px-4 lg:px-8">
          <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-white"></div>
          <div className="w-4 sm:w-6 md:w-8 lg:w-10 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
