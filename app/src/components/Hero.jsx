import React from 'react'
import Human from '../assets/Human.png'
import Kind from '../assets/Kind.png'


function Hero() {
  return (
    <div>
        <div className='mt-28 md:mt-28'>
            <img src={Human}  className='w-[1175px] mx-auto'alt=""/>
            <img src={Kind} alt="" className=' w-[1175px] mx-auto md:mt-[-200px] mt-[-85px]' />
        </div>

        <p className='font-serif font-extralight mt-5 text-center md:text-2xl text-lg '>Creating a magical world for the kid in all of us.</p>

        <div className='w-full flex flex-row justify-center mt-6 '>
            <button className='font-bold md:text-base text-xs rounded-full border-[3px] border-black px-6 py-4'> 🎁 Get a Lunchbox</button>
            <button className='bg-black text-white md:text-base font-bold text-xs rounded-full border-[3px] border-black px-6 py-4 ml-2'> ⚔️ Play Now!</button>
        </div>
    </div>
  )
}

export default Hero