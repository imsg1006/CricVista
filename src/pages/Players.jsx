import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react' 
import { ExpandableCardDemo } from '../components/Players/playersInfo'


const Players = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    'https://pbs.twimg.com/media/GRtvSLYbcAA1wN6?format=jpg&name=large',
    'https://i.pinimg.com/1200x/2a/09/b6/2a09b69101918a21daa48ded833da1ce.jpg',
    'https://i.pinimg.com/736x/1f/9f/c1/1f9fc138db49589a289ca0c020ab9c74.jpg',
    'https://i.pinimg.com/1200x/bc/03/2f/bc032f52da2a4a61e2f72f33cdd65133.jpg',
    'https://media.gettyimages.com/id/171229904/photo/final-icc-champions-trophy.jpg?s=612x612&w=gi&k=20&c=sUyFhLT5Emf1wnWTxJgtcvZ-fP8J514cwuwb4uaoZ_8=',
    'https://i.pinimg.com/736x/f2/e9/b7/f2e9b7962832e728528bd5d43700f1ce.jpg',
    'https://i.pinimg.com/736x/9b/74/1b/9b741b45b870cd74e0f8314c2818fd75.jpg',
    'https://i.pinimg.com/1200x/9b/6d/70/9b6d70118436dcce4c09dfc34dfccce9.jpg',
    'https://media.gettyimages.com/id/171229614/photo/final-icc-champions-trophy.jpg?s=612x612&w=gi&k=20&c=_dKZiKV0ULMeDr31ZTefPOD9vsg2_PLUDB9GYxynpUs=',
    'https://i.pinimg.com/736x/a0/fd/aa/a0fdaab15f2a3c88618b3efc2fb50295.jpg'  
  ]

 useGSAP(() => {
  ScrollTrigger.matchMedia({

    // ✅ Desktop and larger screens
    "(min-width: 769px)": function () {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 1%",
          end: "top -70%",
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: "transform",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (elem) => {
            let imageIndex;
            if (elem.progress < 1) {
              imageIndex = Math.floor(elem.progress * imageArray.length);
            } else {
              imageIndex = imageArray.length - 1;
            }
            imageRef.current.src = imageArray[imageIndex];
          },
        },
      });
    },

    // ✅ Mobile devices
    "(max-width: 768px)": function () {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 1%", // tweak for mobile
          end: "+=60%", // shorter scroll distance
          pin: true,
          markers:true,
          pinType: "transform",
          pinSpacing: true,
          pinReparent: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (elem) => {
            let imageIndex;
            if (elem.progress < 1) {
              imageIndex = Math.floor(elem.progress * imageArray.length);
            } else {
              imageIndex = imageArray.length - 1;
            }
            imageRef.current.src = imageArray[imageIndex];
          },
        },
      });
    },

  });
});



  return (
    <div>
      <div className="section1 relative py-1">

  {/* Reserve space for the pinned element */}
  <div className="h-[2vh] lg:h-[10vh] relative">
    <div
      ref={imageDivRef}
      className="absolute overflow-hidden 
                 lg:h-[20vw] h-[30vw] 
                 lg:w-[15vw] w-[25vw] 
                 lg:rounded-3xl rounded-xl 
                 lg:top-40 
                 lg:left-[28vw] left-[28vw]"
    >
      <img
        ref={imageRef}
        className="h-full w-full object-cover"
        src="https://pbs.twimg.com/media/GRtvSLYbcAA1wN6?format=jpg&name=large"
        alt=""
      />
    </div>
  </div>

  {/* Heading + text */}
  <div className="relative">
    <div className="lg:mt-[45vh] mt-[40vh]">
      <h1 className="text-[14vw] text-center bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent uppercase leading-[15vw]">
        Champions <br /> in blue
      </h1>
    </div>
    <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
      <p className="lg:text-6xl text-xl leading-tight bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent p-2 m-2">
        Meet the cricketing legends who carried the pride of a billion hearts. Each player journey is a story of passion, resilience, and glory in the Indian jersey.
      </p>
    </div>
  </div>
</div>

<div className="section2 m-10 min-h-screen">
  <ExpandableCardDemo />
</div>

    </div>
  )
}

export default Players