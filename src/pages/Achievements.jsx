import { useGSAP } from '@gsap/react'
import Achievement from "../components/Achievements/AchievementCard"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AchievementCard from '../components/Achievements/AchievementCard'
import Skiper30 from './Gallery'
import Footer from './Footer'

const Achievements = () => {
  const achievements = [{
    image1: 'https://i.pinimg.com/736x/34/dc/86/34dc86c1a55f8173d5e8d167a5d74099.jpg',
    tag1: 'ODI World Cup `11',
    image2: 'https://i.pinimg.com/736x/60/89/eb/6089eb7a232ec833d413ef7a02fd10a3.jpg',
    tag2:'Champions trohy `13'
  }, {
    image1: 'https://i.pinimg.com/736x/27/b6/44/27b6440ed0e506106e9ec1cacc1a510f.jpg',
     tag1: 'T20 World Cup `07',
    image2: '/2018bgt.jpeg',
    tag2:'BGT `18'
  }, {
    image1: 'https://i.pinimg.com/736x/19/b1/d5/19b1d5e93a52213d5210e7b1d985160b.jpg',
    tag1:'T20 World Cup `24',
    image2: 'https://i.pinimg.com/736x/f1/23/70/f123702e90cc3eaa7320140c8f2d0a87.jpg',
    tag2:'Champions trophy `25'
  },
{
    image1: 'https://i.pinimg.com/736x/f2/af/db/f2afdb4cc8ebcde0221d0abe63492217.jpg',
    tag1:'ODI World Cup `83',
    image2: 'https://i.pinimg.com/736x/cf/33/72/cf33723618b76ede9ecb45e795176769.jpg',
    tag2:'BGT `21'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -50%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4  p-2'>
      <div className=' pt-[35vh]'>
        <h2
          className="font-['Playfair_Display']
             text-4xl sm:text-5xl md:text-6xl lg:text-[7vw] xl:text-[9.5vw] 
             uppercase text-center text-[#FFFFFF]"
        >
          Achievements
        </h2>
        <p className=" 
             text-xl mt-5 sm:text-xl md:text-xl lg:text-[1vw] xl:text-[1.5vw] font-['Playfair_Display'] 
             uppercase text-center text-[#E0E0E0]">From historic victories to unforgettable milestones, and triumphs that inspire generations.</p>
      </div>
      <div className='lg:mt-20 lol sm:flex sm:flex-wrap   sm:justify-center sm:items-center lg:gap-8 gap-4 mt-10'>
        {achievements.map(function (elem, idx) {
          return <div key={idx} className='hero w-full  lg:h-[400px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 items-center justify-center'>
            <AchievementCard  image1={elem.image1}
                              tag1={elem.tag1}
                              image2={elem.image2}
                              tag2={elem.tag2} />
          </div>
        })}
      </div> 
      
      <Footer/>
    </div>
  )
}

export default Achievements