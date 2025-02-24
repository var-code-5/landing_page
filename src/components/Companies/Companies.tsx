import React from 'react'
import Image from 'next/image'
import iic from '@/../public/companies/iic.png'
import iimb from '@/../public/companies/iimb.png'
import meity from '@/../public/companies/meity.png'
import meitystartup from '@/../public/companies/meitystartup.png'
import vit from '@/../public/companies/vit.png'
import vitvellore from '@/../public/companies/vitvellore.png'
import wadhwani from '@/../public/companies/wadhwani.png'

function Companies() {
  return (
    <div className='bg-foreground w-full min-h-screen text-center flex flex-col items-center p-4 md:p-6 lg:p-8'>
      <h1 className='font-borela text-4xl sm:text-5xl md:text-7xl text-background mt-12 md:mt-20'>BACKED BY</h1>
      <h2 className='font-montserrat text-xl sm:text-2xl text-[#606060] mt-6 md:mt-8 tracking-wide'>Institutions who have put their trust in us</h2>
      
      <div className='grid grid-cols-3 gap-4 p-8 md:p-2 md:grid-cols-6 w-full max-w-6xl mt-8 md:mt-12'>
        <div className='col-span-2 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={iimb} 
            alt='iimb logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='col-span-1 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={meitystartup} 
            alt='meity startup hub logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='col-span-2 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={meity} 
            alt='meity logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='col-span-1 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={wadhwani} 
            alt='wadhwani logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='col-span-2 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={vit} 
            alt='VIT logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='col-span-1 md:col-span-2 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={iic} 
            alt='IIC logo' 
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='col-span-3 md:col-span-2 p-2 md:p-4 flex items-center justify-center'>
          <Image 
            src={vitvellore} 
            alt='VIT Vellore logo' 
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Companies