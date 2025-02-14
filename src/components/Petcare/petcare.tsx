import React from 'react'
import Image from "next/image";
import DogIcon from '../../../public/petcare/dog-icon.png'
import CollarFeatures from '../../../public/petcare/collar-features-icon.png'
import Collar from '../../../public/petcare/dog-collar.png'
import Base from '../../../public/petcare/base.png'
function Petcare() {
  return (
    <div className="relative bg-foreground w-full min-h-screen text-center">
      <h1 className='font-borela text-black text-6xl mt-16'>THE FUTURE <span className='text-gray-600'>OF</span> PET CARE</h1>
      <Image
        src={Collar}
        height={700}
        width={700}
        alt='center image'
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'
      />
      <div className='relative flex flex-row justify-between min-h-96 text-black mt-24 z-[2]'>
        <div className='flex justify-start'>
          <div className='flex flex-row items-end w-[30rem] text-right p-4'>
            <div className='text-xl text-left'>
              <Image
                src={CollarFeatures}
                height={150}
                width={150}
                alt='dog icon'
                className='object-contain mb-4'
              ></Image>
              <p className='text-gray-600'>Our smart collars offer you peace of mind with real-time tracking 
                and health insights for your pets.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex flex-row items-start w-[30rem] text-right p-4'>
            <div className='text-xl'>
              <p className='font-bold mb-2'>Stay Linked. Stay Informed.</p>
              <p className='text-gray-600'>Elevate confidence in pet care with MyPerro Smart Collars</p>
            </div>
            <Image
              src={DogIcon}
              height={100}
              width={100}
              alt='dog icon'
              className='object-contain'
            ></Image>
          </div>
        </div>
      </div>
      <Image
        src={Base}
        alt='bottom left image'
        className='absolute bottom-16 h-[200] w-3/4 left-12 z-[0]'
      />
    </div>
  )
}

export default Petcare