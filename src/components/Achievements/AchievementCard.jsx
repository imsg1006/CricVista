import React from 'react'

const AchievementCard = (props) => {
  return ( 
    <>
     <div className='h-full lg:w-1/2  group relative rounded-none hover:rounded-[70px] transition w-1/2 bg-green-400'>
        <img className='h-full w-full   object-cover' src={props.image1} alt='img'/>
          <div className='absolute opacity-0 group-hover:opacity-100 flex items-center justify-center top-0 h-full w-full bg-black/10'>
          <h2 className=' font-[Playfair_Display]  uppercase p-7 font-semibold text-[#c8f134]   text-3xl border-2 rounded-full  '>{props.tag1}</h2>
        </div>
        </div> 
        <div className='h-full  lg:w-1/2 group relative rounded-none hover:rounded-[70px] transition w-1/2 bg-green-400'>
        <img className='h-full w-full object-cover' src={props.image2} />
         <div className='absolute opacity-0 group-hover:opacity-100 flex items-center justify-center top-0 h-full w-full bg-black/10'>
          <h2 className='uppercase font-[Playfair_Display] p-7 font-bold  text-3xl border-2 text-[#c3f707]  rounded-full '>{props.tag2}</h2>
        </div>
        </div>
    </>
      
       
  )
}

export default AchievementCard