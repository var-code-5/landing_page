import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-black w-full h-screen">
      <div className="relative w-full h-[70vh] overflow-hidden rounded-3xl px-10 py-16 mt-20">
        {/* Background image with overlay */}
        <Image
          src='/about/dog.gif'
          width={1000}
          height={1000}
          alt="dog running"
          className="absolute inset-0 bg-cover w-full h-full bg-bottom"
        ></Image>

        <div className="absolute inset-0 bg-[url('/about/overlay.jpeg')] opacity-30" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl md:text-6xl lg:text-8xl text-white font-borela">
            ABOUT US
          </h1>
          <div className="h-full flex mt-5  justify-between">
            <div className="w-full lg:w-1/2">
              <p className="text-white text-md font-montserrat md:text-lg lg:text-2xl">
                Welcome to MyPerro, where your pet's well-being is our priority, providing personalized care and peace of mind with technology-driven solutions.
              </p>
              <button className="mt-5 rounded-full gap-3 flex text-xl items-center  font-borela text-white bg-background pl-5 px-3 py-2">
                REACH US OUT{" "}
                <MoveUpRight className="bg-primary w-10 h-10 rounded-full p-2 font-bold" />
              </button>
            </div>

          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
