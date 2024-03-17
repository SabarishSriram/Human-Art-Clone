import React from 'react'
import Cards1 from '../assets/Cards1.webp'

function Cards() {
  return (
    <div className='grid grid-cols-3 border-4  m-5  border-black rounded-3xl mt-28'>
        <div className='flex '>
            <img src={Cards1} alt="" className='mx-auto my-auto rounded-lg w-28 ' />
        </div>
        <div className='col-span-2 p-4 '>
            <h1 className='font-extrabold text-xl text-center py-2'>Wrestle. Wrestle. Wrestle!</h1>
            <p className='font-serif  leading-6 text-[15px]'>Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.</p>
            <div className='flex flex-col items-center'>
                <button className='bg-black text-white md:text-base font-bold text-xs rounded-full border-[3px] border-black px-6 py-4 ml-2 w-3/5'> 🤓 Learn More</button>
                <button className='bg-[#ffd900] mt-2 text-black md:text-base font-bold text-xs rounded-full border-[3px] border-[#ca8d00] px-6 py-4 ml-2 w-3/5 '> 🤼 Wrestle Now!</button>
            </div>

        </div>
        
    </div>
  )
}

export default Cards