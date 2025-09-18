import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', { display: 'block' })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: { amount: -0.3 }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: { amount: 0.3 }
    })
    tl.to('.navlink', { opacity: 1 })
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 }
    })
    tl.to('.stairing', {
      height: 0,
      stagger: { amount: 0.1 }
    })
    tl.to('.navlink', { opacity: 0 })
    tl.to('.fullscreennav', { display: 'none' })
  }

  useGSAP(() => {
    if (navOpen) gsapAnimation()
    else gsapAnimationReverse()
  }, [navOpen])

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-full w-full z-50 fixed top-0 left-0"
    >
      {/* Black background stairing effect */}
      <div className="h-screen w-full fixed flex">
        {Array(5)
          .fill()
          .map((_, i) => (
            <div key={i} className="stairing h-full w-1/5 bg-[#cece88]"></div>
          ))}
      </div>

      {/* Navigation Links */}
      <div ref={fullNavLinksRef} className="relative">
        {/* Header Row */}
        <div className="navlink flex w-full justify-between p-3 sm:p-4 lg:p-5 items-start">
          {/* Logo */}
          <div className="w-20 sm:w-28 lg:w-36">
            <Link to="/">
              <img onClick={() => setNavOpen(false)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg/792px-Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg.png?20240630054610" alt="logo" className="w-full h-auto" />
            </Link>
          </div>

          {/* Close Button */}
          <div
            onClick={() => setNavOpen(false)}
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32 relative cursor-pointer"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] rotate-45 bg-red-500"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] -rotate-45 bg-red-500"></div>
          </div>
        </div>

        {/* Menu Sections */}
        <div>
          {/* Achievements */}
          <Link to='/achievements'>
           <div onClick={() => setNavOpen(false)} className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-3xl sm:text-4xl md:text-6xl lg:text-[8vw] text-center leading-tight sm:leading-snug md:leading-[1.1] pt-3 lg:pt-10 uppercase">
              Achievements
            </h1>
            <div className="moveLink absolute text-black flex flex-col sm:flex-row top-0 bg-[#f8820c] overflow-x-auto">
              <div className="moveX flex items-center gap-2 sm:gap-4 px-2">
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  ODI World Cup
                </h2>
                <img
                  className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0"
                  src="https://im.indiatimes.in/content/2023/Oct/cricket-world-cup-Trophy_652519acb00d0.jpeg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  Champions Trophy
                </h2>
                <img
                  className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0"
                  src="https://i.pinimg.com/736x/74/ce/74/74ce74d5afac09cdfa3c8b5bcadccdb1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  T20 World Cup
                </h2>
                <img
                  className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0"
                  src="https://i.pinimg.com/1200x/0f/65/11/0f65113fd8943984b275696e8cdb9bcb.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  WTC
                </h2>
                <img
                  className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0"
                  src="https://i.pinimg.com/1200x/71/d5/bc/71d5bc2aafbd054af52a7edf58824ab5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          </Link>

          {/* Players */}
          <Link to='/players'>
           <div onClick={() => setNavOpen(false)} className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-3xl sm:text-4xl md:text-6xl lg:text-[8vw] text-center leading-tight sm:leading-snug md:leading-[1.1] pt-3 lg:pt-10 uppercase">
              Players
            </h1>
            <div className="moveLink absolute text-black flex flex-col sm:flex-row top-0 bg-[#b8ddf4] overflow-x-auto">
              <div className="moveX flex items-center gap-2 sm:gap-4 px-2">
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  C.Pujara
                </h2>
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96  rounded-full  object-cover shrink-0" src="https://i.pinimg.com/736x/37/76/ba/3776ba7cece868a3615130cfd16614c1.jpg" alt="vk" />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  M.Shami
                </h2>
                <img className="h-16 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/dd/b8/f6/ddb8f6cab9af0b17e6d586e69f2a4a12.jpg" alt="dhoni" />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                 Y.Chahal
                </h2>
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/4b/0e/04/4b0e04287d0061546bc1aaf1686a1f0b.jpg" alt="dhoni" />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  R.Ashwin
                </h2>
                <img className="h-12  w-28   sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/9c/ac/c1/9cacc11acc7b60e144d89714fc5e95ac.jpg" alt="dhoni" />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  S.Dhawan
                </h2>
                <img className="h-12  w-28   sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/62/24/1d/62241d3435b8eed1387cfd40c545d202.jpg" alt="dhoni" />
                <h2 className="whitespace-nowrap font-[font2] text-xl sm:text-3xl md:text-5xl lg:text-[8vw] uppercase">
                  A.Rahane
                </h2>
                <img className="h-12  w-28   sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/1200x/07/a9/57/07a957569c3c8bf979053301a826eff7.jpg" alt="dhoni" />
                
              </div>
            </div>
          </div>
          </Link>

          {/* Contact */}
          <Link to='/gallery'> 
          <div onClick={() => setNavOpen(false)} className="link origin-top relative border-t mb-6 border-white">
            <h1 className="font-[font2] text-3xl sm:text-4xl md:text-6xl lg:text-[8vw] text-center leading-tight sm:leading-snug md:leading-[1.1] pt-3 lg:pt-10 uppercase">
              Gallery
            </h1>
            <div className="moveLink absolute text-black flex flex-col sm:flex-row top-0 bg-[#0eee6b] overflow-x-auto">
              <div className="moveX flex items-center gap-4 sm:gap-4 px-2">
                 
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/48/29/2b/48292bd8e64c076627561e257a07e44f.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/9a/3e/7b/9a3e7baf153feab922293097dfff72d4.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/ef/62/f2/ef62f240d43a38d70b0d7d81b845e6e8.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/fc/78/83/fc78839de5ad2e205c5d35d88b75ce2d.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/3e/48/35/3e4835789df672c16220fe7971729df1.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/1200x/4b/52/8b/4b528bb708b6c15be85df45bf2e84241.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/9f/13/e8/9f13e8a14eadd7cd4d1a385f5f1f4307.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/71/1a/f1/711af17282517646a138e9cb042cad6b.jpg" alt="" />
                <img className="h-12 w-28 sm:h-16 sm:w-40 md:h-24 md:w-64 lg:h-36 lg:w-96 rounded-full object-cover shrink-0" src="https://i.pinimg.com/736x/99/27/8b/99278be3fd642dba232f2a62811c55bf.jpg" alt="" />
                
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
