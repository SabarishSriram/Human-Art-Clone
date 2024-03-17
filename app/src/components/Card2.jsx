import React from 'react'
import Herokind from "../assets/Herokind.webp";
function Cards2() {
  return (
    <div className='grid grid-cols-2 border-4  m-5  border-black rounded-3xl mt-10'>
        <div className='flex '>
            <img src={Herokind} alt="" className='mx-auto my-auto rounded-lg w-48 ' />
        </div>

        <div className=' p-4 '>
            <h1 className='font-extrabold text-xl  py-2'>Play Herokind!</h1>

            <p className='font-serif  leading-6 text-[15px]'>Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.</p>

            <p className='font-serif font-thin	  leading-6 text-[15px] mt-4'>Send your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.</p>

            <div className=''>

                <button className='bg-[#ffd900] mt-2 text-black md:text-base font-bold text-xs rounded-full border-[3px] border-[#ca8d00] px-5 py-4  '> ⚔️ Play Now!</button>
            </div>

        </div>
        
    </div>
  )
}

export default Cards2