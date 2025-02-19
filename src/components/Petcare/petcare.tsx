import React from 'react'
import Image from "next/image";
import DogIcon from '../../../public/petcare/dog-icon.png'
import CollarFeatures from '../../../public/petcare/collar-features-icon.png'
import Collar from '../../../public/petcare/dog-collar.png'
import Base from '../../../public/petcare/base.png'
function Petcare() {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:relative bg-foreground w-full min-h-screen text-center">
      <h1 className='font-borela text-black p-4 text-3xl lg:text-6xl mt-0 lg:mt-16'>THE FUTURE <span className='text-gray-600'>OF</span> PET CARE</h1>
      <div className='lg:hidden text-lg p-4 lg:text-xl text-left flex flex-col items-center'>
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
        className='lg:absolute lg:top-[58%]  lg:mt-0 mt-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-[1]'
      />
      <div className='relative flex lg:flex-row lg:justify-between flex-col lg:items-stretch items-center min-h-96 text-black lg:mt-24 z-[2]'>
        <div className='flex justify-start'>
          <div className='flex flex-row items-end lg:w-[30rem] text-right p-4'>
            <div className='text-xl text-left lg:block hidden'>
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
        <div className='flex justify-center w-full p-4 items-center lg:items-stretch lg:justify-end'>
          <div className='flex flex-col items-center bg-white lg:bg-transparent rounded-xl m-2 lg:flex-row lg:items-start lg:w-[30rem] lg:text-right p-4'>
            <Image
              src={DogIcon}
              height={100}
              width={100}
              alt='dog icon'
              className='object-contain block lg:hidden'
            ></Image>
            <div className='text-xl'>
              <p className='font-bold mb-2'>Stay Linked. Stay Informed.</p>
              <p className='text-gray-600 lg:text-xl text-lg'>Elevate confidence in pet care with MyPerro Smart Collars</p>
            </div>
            <Image
              src={DogIcon}
              height={100}
              width={100}
              alt='dog icon'
              className='object-contain hidden lg:block'
            ></Image>
          </div>
        </div>
      </div>
      <Image
        src={Base}
        alt='bottom left image'
        className=' hidden lg:block lg:absolute bottom-0 h-[300] w-3/4 left-0 z-[0]'
      />
    </div>
  )
}

export default Petcare