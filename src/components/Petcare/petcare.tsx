import React from 'react'
import Image from "next/image";
import DogIcon from '../../../public/petcare/dog-icon.png'
import CollarFeatures from '../../../public/petcare/collar-features-icon.png'
import Collar from '../../../public/petcare/dog-collar.png'
import Base from '../../../public/petcare/base.png'
function Petcare() {
  return (
    <div className="flex flex-col items-center md:items-stretch md:relative bg-foreground w-full min-h-screen text-center">
      <h1 className='font-borela text-black p-4 text-3xl md:text-6xl mt-0 md:mt-16'>THE FUTURE <span className='text-gray-600'>OF</span> PET CARE</h1>
      <div className='md:hidden text-md p-4 md:text-xl text-left flex flex-col items-center'>
              <Image
                src={CollarFeatures}
                height={150}
                width={150}
                alt='dog icon'
                className='object-contain mb-4 '
              ></Image>
              <p className='text-gray-600'>Our smart collars offer you peace of mind with real-time tracking 
                and health insights for your pets.</p>
      </div>
      <Image
        src={Collar}
        height={700}
        width={700}
        alt='center image'
        className='md:absolute md:top-1/2  md:mt-0 mt-4 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-[1]'
      />
      <div className='relative flex md:flex-row md:justify-between flex-col items-center min-h-96 text-black mt-24 z-[2]'>
        <div className='flex justify-start'>
          <div className='flex flex-row items-end md:w-[30rem] text-right p-4'>
            <div className='text-xl text-left md:block hidden'>
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
        <div className='flex justify-center w-full p-4 items-center md:justify-end'>
          <div className='flex flex-col items-center bg-white md:bg-transparent rounded-xl m-2 md:flex-row md:items-start md:w-[30rem] md:text-right p-4'>
            <Image
              src={DogIcon}
              height={100}
              width={100}
              alt='dog icon'
              className='object-contain block md:hidden'
            ></Image>
            <div className='text-xl'>
              <p className='font-bold mb-2'>Stay Linked. Stay Informed.</p>
              <p className='text-gray-600 md:text-xl text-lg'>Elevate confidence in pet care with MyPerro Smart Collars</p>
            </div>
            <Image
              src={DogIcon}
              height={100}
              width={100}
              alt='dog icon'
              className='object-contain hidden md:block'
            ></Image>
          </div>
        </div>
      </div>
      <Image
        src={Base}
        alt='bottom left image'
        className=' hidden md:absolute bottom-0 h-[300] w-3/4 left-0 z-[0]'
      />
    </div>
  )
}

export default Petcare