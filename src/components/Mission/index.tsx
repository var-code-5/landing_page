import React from 'react';
import Image from 'next/image';
import MissionCard from './MissionCard';

function Mission() {
  return (
    <div className='bg-foreground w-full min-h-screen text-center flex flex-col items-center p-4 md:p-6 lg:p-8'>
      <h1 className="font-borela text-4xl sm:text-5xl md:text-7xl text-center text-background mt-12 md:mt-0">
        <p className='md:block hidden'>ENHANCING LIVES.<br />ONE PAW AT A TIME.</p>
      </h1>
      <div className='flex flex-row justify-center gap-8'>
        <MissionCard 
            iconSrc="/mission/mission.png"
            imageSrc="/mission/dog-playing-1.jpeg"
            title="OUR MISSION"
            description="To revolutionize pet care through technology by delivering personalized services, ensuring transparency and security. We aim to give pet parents peace of mind while supporting pet sitters with fair compensation, fostering trust and care for everyone involved."
        />
        <MissionCard 
            iconSrc="/mission/vision.png"
            imageSrc="/mission/dog-playing-2.jpeg"
            title="OUR VISION"
            description="We aim to broaden our services with “MyPerro Space,” a dedicated boarding area, and expand into pet grooming, pet-friendly commute, and pet food. Our goal is to deliver personalized care by understanding each dog’s unique needs."
        />
      </div>
      
    </div>
  );
}

export default Mission;