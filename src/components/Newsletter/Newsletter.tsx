'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import newsletterdog from '@/../public/newsletter/newsletterdog.png'
import { MoveUpRight } from 'lucide-react';
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="w-full bg-foreground mt-20 min-h-[400px] flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

      <div className="w-full  md:w-2/5 md:hidden">
          <div className="overflow-hidden ">
            <Image
              src={newsletterdog}
              alt="Person with dog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-12">
          <h2 className="text-4xl md:text-left text-center text-background font-borela md:text-6xl tracking-wider">
            SUBSCRIBE TO NEWSLETTER
          </h2>
          <p className="text-gray-600 text-lg md:text-left text-center font-montserrat">
            Stay informed with the latest updates<span className='hidden md:inline'> on pet, and keep up with everything that matters to you and your pets.</span>
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-4 md:px-5 md:py-5 rounded-full pr-32 border border-gray-300 focus:outline-none focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="absolute md:right-3 md:top-3 font-montserrat font-semibold text-sm right-2 top-2 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors flex gap-x-5 pr-2 items-center gap-2"
              >
                SUBSCRIBE
                
                <MoveUpRight className='w-6 text-background h-6 bg-primary rounded-full p-1' />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-2/5 md:block hidden">
          <div className="overflow-hidden ">
            <Image
              src={newsletterdog}
              alt="Person with dog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;