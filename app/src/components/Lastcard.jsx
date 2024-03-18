import React from 'react'
import Lunchbox from '../assets/lunchbox.gif'

function Lastcard() {
  return (
    <div className='grid grid-cols-2 border-4 m-5  border-black rounded-3xl mt-10'>
        <div className='flex '>
            <img src={Lunchbox} alt="" className='mx-auto my-auto rounded-lg w-48 ' />
        </div>

        <div className=' p-4 '>
            <h1 className='font-extrabold text-xl  py-2 leading-6'>Grab your lunchbox. It will be a long journey.</h1>

            <p className='font-serif mt-2  leading-6 text-[15px]'>We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!</p>

            <p className='font-serif mt-2  leading-6 text-[15px]'>Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.</p>


            <div className=''>

                <button className='bg-[#ffd900] mt-3 text-black md:text-base font-bold text-xs rounded-full border-[3px] border-[#ca8d00] px-5 py-4  '> 💖 Learn More</button>
            </div>

        </div>
        
    </div>
  )
}

export default Lastcard