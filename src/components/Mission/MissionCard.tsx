import React from 'react';
import Image from 'next/image';

function MissionCard({ 
  iconSrc = "/mission/mission.png", 
  imageSrc = "/mission/dog-playing-1.jpeg", 
  title = "OUR MISSION", 
  description = "To revolutionize pet care through technology by delivering personalized services, ensuring transparency and security. We aim to give pet parents peace of mind while supporting pet sitters with fair compensation, fostering trust and care for everyone involved."
}) {
  return (
    <div className='mt-12 bg-white w-2/5 p-8 hover:bg-background hover:text-white rounded-3xl transition-all duration-300 group overflow-hidden h-full'>
      <div className='flex flex-row group-hover:flex-col group-hover:items-start items-center mb-4 justify-start gap-4 w-full'>
        <Image
          src={iconSrc}
          alt={`${title.toLowerCase()} icon`}
          width={1000}
          height={1000}
          className="w-16 h-auto object-contain"
        />
        <p className='font-borela text-5xl text-background group-hover:text-white transition-colors duration-300'>{title}</p>
      </div>
      <div className='flex flex-col h-full'>
        <p className='font-montserrat text-2xl group-hover:mb-12 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 ease-in-out'>
          {description}
        </p>
        <div className='relative flex-grow mt-12'>
          <Image
            src={imageSrc}
            alt={`${title.toLowerCase()} image`}
            width={1000}
            height={1000}
            className="w-full rounded-3xl object-cover h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default MissionCard;