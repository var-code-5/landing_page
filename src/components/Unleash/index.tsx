import React from 'react';
import { MoveUpRight } from 'lucide-react';
function Unleash() {
  return (
    <div 
      className="relative w-full p-2 min-h-screen text-center bg-cover bg-center bg-no-repeat lg:block hidden"
      style={{ backgroundImage: "url('/unleash/background.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-white flex flex-col items-center min-h-screen">
        <h1 className='font-borela text-white text-4xl md:text-6xl mt-16'> UNLEASH THE BEST FOR YOUR PET</h1>
        <h2 className='font-montserrat text-md md:text-2xl mt-4 text-gray-400'>Discover unmatched comfort, cutting-edge technology, and safety <br></br> designed to keep your furry friend happy, healthy, and always connected.</h2>
        
        <div className="text-black w-full mt-12 flex justify-center md:h-screen">
          <div className="relative w-3/4 h-[30vh] md:h-[85vh] overflow-hidden justify-end flex rounded-3xl ">
            <div className="absolute inset-0 bg-[url('/unleash/dog.jpeg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            <div className="relative z-10 p-6 flex items-end ">
                        <button
                          type="submit"
                          className="font-montserrat h-fit font-semibold text-2xl px-10 py-4 bg-[#FF6600] text-white rounded-full hover:bg-primary transition-colors flex flex-row justify-between pl-6 gap-x-5 pr-4 items-center gap-2"
                        >
                          <span className='px-1 md:px-6'>SERVICES</span>
                          
                          <MoveUpRight className='w-12 text-white h-12 bg-black rounded-full p-1' />
                        </button>
                      </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Unleash;
