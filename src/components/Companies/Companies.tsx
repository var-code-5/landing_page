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
      <h1 className='font-borela text-4xl sm:text-5xl md:text-7xl text-background mt-12 md:mt-20'>
        BACKED BY
      </h1>
      <h2 className='font-montserrat text-xl sm:text-2xl text-[#606060] mt-6 md:mt-8 tracking-wide'>
        Institutions who have put their trust in us
      </h2>

      <div className='w-full max-w-7xl mt-10 px-4 py-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          <div className='flex items-center justify-center p-2'>
            <Image src={iimb} alt='iimb logo' className='w-full h-auto max-h-20 object-contain' />
          </div>
          <div className='flex items-center justify-center p-2'>
            <Image src={meitystartup} alt='meity startup hub logo' className='w-full h-auto max-h-20 object-contain' />
          </div>
          <div className='flex items-center justify-center p-2'>
            <Image src={meity} alt='meity logo' className='w-full h-auto max-h-20 object-contain' />
          </div>
          <div className='flex items-center justify-center p-2'>
            <Image src={wadhwani} alt='wadhwani logo' className='w-full h-auto max-h-20 object-contain' />
          </div>
          <div className='col-span-2 sm:col-span-1 flex items-center justify-center p-2'>
            <Image src={vit} alt='VIT logo' className='w-full h-auto max-h-20 object-contain' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Companies