import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-foreground  w-full min-h-screen flex flex-col">
      <div className="flex flex-col justify-start items-center">
        <h1 className="font-borela text-[10vw] mt-16 text-background text-nowrap leading-none">
          SMART COLLARS
        </h1>
        <h1 className="absolute font-mombay text-[4vw] top-[20vh] left-[44vw] z-10">for</h1>
        <h1 className="font-montserrat text-[5vw] rounded-lg bg-primary leading-none p-5 pr-20 -translate-x-[7vw]">
          HAPPIER PETS
        </h1>
      </div>
      <Image
        alt="hero dog image"
        src="/hero/dog.png"
        width={1000}
        height={1000}
        className="absolute bottom-0 right-[10vw] h-[85vh] w-auto"
      />
      <div className="flex items-center w-[450px] h-[175px] bg-background p-7 rounded-3xl mt-20">
        <h3 className="text-xl text-white text-opacity-70 font-montserrat">
          REDEFINING THE FUTURE OF PET CARE WITH OUR{" "}
          <span className="text-opacity-100 text-white">NEXT-GEN</span> SMART
          COLLARS
        </h3>
        <Image
          alt="hero dog image"
          src="/hero/video.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 overflow-hidden w-full ">
        <Marquee autoFill className="text-xl bg-background opacity-80 py-3 text-white">
          MY PERRO <Star className="mx-5 fill-white"/> SMART COLLARS <Star className="mx-5 fill-white"/> TRACK.MONITOR.PROTECT
        </Marquee>
      </div>
    </div>
  );
}
