import React from 'react';
import Image from 'next/image';

function MissionCard({
  iconSrc = "/mission/mission.png",
  imageSrc = "/mission/dog-playing-1.jpeg",
  title = "OUR MISSION",
  description = "To revolutionize pet care through technology by delivering personalized services, ensuring transparency and security. We aim to give pet parents peace of mind while supporting pet sitters with fair compensation, fostering trust and care for everyone involved."
}) {
  return (
    <div className="mt-6 sm:mt-8 md:mt-12 w-full md:w-2/5 bg-background md:bg-white text-white md:text-black p-4 sm:p-6 md:p-8 md:hover:bg-background md:hover:text-white rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-300 group overflow-hidden h-full">
      <div className="flex flex-col md:flex-row md:group-hover:flex-col items-start md:items-center md:group-hover:items-start mb-2 sm:mb-3 md:mb-4 justify-start gap-2 sm:gap-3 md:gap-4 w-full">
        <Image
          src={iconSrc}
          alt={`${title.toLowerCase()} icon`}
          width={1000}
          height={1000}
          className="w-10 sm:w-12 md:w-16 h-auto object-contain"
        />
        <p className="font-borela text-3xl sm:text-4xl md:text-5xl text-white md:text-background md:group-hover:text-white transition-colors duration-300">{title}</p>
      </div>
      <div className="flex flex-col h-full">
        <p className="font-montserrat text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12 opacity-100 max-h-screen md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-screen transition-all duration-300 ease-in-out">
          {description}
        </p>
        <div className="relative flex-grow mt-4 sm:mt-8 md:mt-12">
          <Image
            src={imageSrc}
            alt={`${title.toLowerCase()} image`}
            width={1000}
            height={1000}
            className="w-full rounded-xl sm:rounded-2xl md:rounded-3xl object-cover h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default MissionCard;