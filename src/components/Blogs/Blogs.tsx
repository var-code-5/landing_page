import React from 'react';
import Image from 'next/image';
import vet from '@/../public/blogs/vet.jpeg';
import accidents from '@/../public/blogs/accidents.png'
import dogdaycare from '@/../public/blogs/dogdaycare.png'
import dogmeal from '@/../public/blogs/dogmeal.png'
import sickdog from '@/../public/blogs/sickdog.png'

import BlogCard from './BlogCard';
import { MoveUpRight } from 'lucide-react';
const Blogs = () => {
    const blogs = [
        {
          image: accidents,
          title: 'Tips for preventing accidents and incidents',
          description: 'Ensure your pets safety with practical advice to avoid common mishaps at home or outdoors. From secure spaces to supervised play, discover how to create a worry-free ...'
        },
        {
          image: dogdaycare,
          title: 'Unlocking the benefits of dog day care',
          description: 'Dog day care offers more than just a place for your pet to stay—its a haven for socialization, exercise, and expert care. Explore how this service can enrich your dogs life and bring ...'
        },
        {
          image: dogmeal,
          title: 'How to make the paw-fact meal for your dog',
          description: 'Crafting the perfect meal for your dog is more than just filling their bowl. Discover tips on balancing nutrition, incorporating variety, and ensuring every bite supports their health...'
        },
        {
          image: sickdog,
          title: 'How to Spot Early Signs of Illness in Your Dog',
          description: 'Your dogs well-being often lies in the small, subtle changes you might miss. Learn how to identify early warning signs of illness and take proactive...'
        }
      ];
      
  return (
    <div className="bg-foreground w-full min-h-screen text-center flex flex-col items-center p-4 md:p-6 lg:p-8">
      <h1 className="font-borela text-4xl sm:text-5xl md:text-7xl text-left text-background self-start mt-12 md:mt-20">
        RECENT ARTICLES<br />TO READ
      </h1>
      
      <div className="relative w-full mt-12">
        <Image 
          src={vet} 
          alt="vet taking care of a dog" 
          className="h-[40rem] w-full object-cover rounded-3xl"
        />
        
        <div className="absolute inset-0 flex flex-col justify-end text-left p-8 py-14 rounded-3xl bg-gradient-to-t from-black/50 to-transparent">
          <h2 className="text-white text-2xl md:text-6xl font-montserrat font-semibold mb-8">
            The role of regular<br /> veterinary check ups
          </h2>
          <p className="text-white/90 font-montserrat text-sm md:text-xl font-medium mb-4 md:mb-12 w-1/2">
            Ensure your pet's health and happiness with routine vet visits. Early detection leads to better care and a longer, healthier life.
          </p>
          <div className="relative">
              <button
                type="submit"
                className="font-montserrat font-semibold text-md w-fit px-12 py-3 bg-background text-white rounded-full hover:bg-gray-700 transition-colors flex flex-row justify-between pl-4 gap-x-5 pr-2 items-center gap-2"
              >
                READ ARTICLE
                
                <MoveUpRight className='w-6 text-background h-6 bg-primary rounded-full p-1' />
              </button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-28 mt-12 ">
        {blogs.map((blog, index) => (
          <BlogCard 
            key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;