import React from "react";
import Image from "next/image";
import vet from "@/../public/blogs/vet.jpeg";
import accidents from "@/../public/blogs/accidents.png";
import dogdaycare from "@/../public/blogs/dogdaycare.png";
import dogmeal from "@/../public/blogs/dogmeal.png";
import sickdog from "@/../public/blogs/sickdog.png";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import BlogCard from "@/components/Blogs/BlogCard";
import MobileBlogCard from "@/components/Blogs/MobileBlogCard";
import { MoveUpRight } from "lucide-react";
import Hero from "@/components/Blogs/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";

const Blogs = () => {
  const blogs = [
    {
      image: accidents,
      title: "Tips for preventing accidents and incidents",
      description:
        "Ensure your pets safety with practical advice to avoid common mishaps at home or outdoors. From secure spaces to supervised play, discover how to create a worry-free ...",
    },
    {
      image: dogdaycare,
      title: "Unlocking the benefits of dog day care",
      description:
        "Dog day care offers more than just a place for your pet to stay—its a haven for socialization, exercise, and expert care. Explore how this service can enrich your dogs life and bring ...",
    },
    {
      image: dogmeal,
      title: "How to make the paw-fact meal for your dog",
      description:
        "Crafting the perfect meal for your dog is more than just filling their bowl. Discover tips on balancing nutrition, incorporating variety, and ensuring every bite supports their health...",
    },
    {
      image: sickdog,
      title: "How to Spot Early Signs of Illness in Your Dog",
      description:
        "Your dogs well-being often lies in the small, subtle changes you might miss. Learn how to identify early warning signs of illness and take proactive...",
    },
  ];

  return (
    <div className="bg-foreground max-w-[85vw] min-h-screen text-center flex flex-col items-center mt-4">
      <Hero />

      <h1 className="font-borela text-4xl sm:text-5xl md:text-7xl text-center md:text-left text-background md:self-start mt-12 md:mt-0">
        <p className="md:block hidden">
          RECENT ARTICLES
          <br />
          TO READ
        </p>
        <p className="md:hidden block">RECENTLY ADDED</p>
      </h1>

      <div className="relative w-full mt-12">
        <Image
          src={vet}
          alt="vet taking care of a dog"
          className="h-[14rem] md:h-[40rem] w-full object-cover rounded-3xl"
        />

        <div className="absolute inset-0 flex flex-col justify-end text-left p-4 md:p-8 md:py-14 rounded-3xl bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex flex-row w-full justify-between items-center mb-3 md:mb-8">
            <h2 className="text-white text-xl md:text-6xl font-montserrat font-semibold ">
              The role of regular
              <br /> veterinary check ups
            </h2>
            <MoveUpRight
              color="white"
              className="w-10 md:hidden block text-background h-10 bg-primary rounded-full p-2"
            />
          </div>

          <p className="text-white/90 font-montserrat text-sm md:text-xl hidden md:inline font-medium mb-4 md:mb-12 w-1/2">
            Ensure your pet's health and happiness with routine vet visits.
            Early detection leads to better care and a longer, healthier life.
          </p>
          <div className="hidden md:block relative">
            <button
              type="submit"
              className="font-montserrat font-semibold text-md w-fit px-12 py-3 bg-background text-white rounded-full hover:bg-gray-700 transition-colors flex flex-row justify-between pl-4 gap-x-5 pr-2 items-center gap-2"
            >
              READ ARTICLE
              <MoveUpRight className="w-6 text-background h-6 bg-primary rounded-full p-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-32 mt-12 hidden">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden w-full mt-12">
        <Carousel className="w-full">
          <CarouselContent className="h-[32rem]">
            {blogs.map((blog, index) => (
              <CarouselItem>
                <MobileBlogCard
                  key={index}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Newsletter/>
    </div>
  );
};

export default Blogs;
