import React from 'react'
import Image from 'next/image'

import iimb from '@/../public/companies/iimb.png'
import meity from '@/../public/companies/meity.png'
import meitystartup from '@/../public/companies/meitystartup.png'
import vit from '@/../public/companies/vit.png'

import wadhwani from '@/../public/companies/wadhwani.png'

function Companies() {
  return (
    <div className='bg-foreground w-full text-center flex flex-col items-center p-4 md:p-6 lg:p-8'>
      <h1 className='font-borela text-4xl sm:text-5xl md:text-7xl text-background mt-12 md:mt-20'>BACKED BY</h1>
      <h2 className='font-montserrat text-xl sm:text-2xl text-[#606060] mt-6 md:mt-8 tracking-wide'>Institutions who have put their trust in us</h2>
      
      <div className='flex flex-wrap justify-center items-center w-full mt-10 gap-10 p-2'>
        <div className='flex items-center justify-center w-[80%] sm:w-[50%] md:w-[30%] lg:w-[20%] p-2 md:p-4'>
          <Image 
            src={iimb} 
            alt='iimb logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='flex items-center justify-center w-[45%] sm:w-[30%] md:w-[15%] p-2 md:p-4'>
          <Image 
            src={meitystartup} 
            alt='meity startup hub logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='flex items-center justify-center w-[55%] sm:w-[35%] md:w-[20%] p-2 md:p-4'>
          <Image 
            src={meity} 
            alt='meity logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='flex items-center justify-center w-[45%] sm:w-[30%] md:w-[15%] p-2 md:p-4'>
          <Image 
            src={wadhwani} 
            alt='wadhwani logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='flex items-center justify-center  w-[55%] sm:w-[35%] md:w-[20%]  p-2 md:p-4'>
          <Image 
            src={vit} 
            alt='VIT logo' 
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Companies