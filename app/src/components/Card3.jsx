import React from 'react'
import HumankindFund from '../assets/HumankindFund.webp'
function Cards3() {
  return (
    <div className='grid grid-cols-2 border-4 m-5  border-black rounded-3xl mt-10'>
        <div className='flex '>
            <img src={HumankindFund} alt="" className='mx-auto my-auto rounded-lg w-48 ' />
        </div>

        <div className=' p-4 '>
            <h1 className='font-extrabold text-xl  py-2 leading-6'>Bring your ideas to life with the Humankind Fund</h1>

            <p className='font-serif mt-2  leading-6 text-[15px]'>The Humankind Fund is a community-driven initiative that supports and empowers projects that share the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact on the world.</p>


            <div className=''>

                <button className='bg-[#ffd900] mt-3 text-black md:text-base font-bold text-xs rounded-full border-[3px] border-[#ca8d00] px-5 py-4  '> 💖 Learn More</button>
            </div>

        </div>
        
    </div>
  )
}

export default Cards3