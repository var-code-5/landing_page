import Petcare from "@/components/Petcare/petcare";
import Features from "@/components/Features/Features";
import HeroCollar from "@/components/HeroCollar";
import Companies from "@/components/Companies/Companies";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-auto flex flex-col items-center overflow-hidden">
        <div className="bg-foreground w-[85vw] h-[90vh] flex flex-col">
          <div className="flex flex-col justify-start items-start">
            <h1 className="relative font-borela text-7xl lg:text-[9vw] mt-16 text-background leading-none">
              SMART COLLARS<span className="md:absolute font-mombay text-5xl -bottom-3 right-0 md:left-[42%] z-10 text-background">for</span> 
            </h1>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-[5vw] rounded-lg bg-primary leading-none p-5 ">
              HAPPIER PETS
            </h1>
          </div>
          <Image
            alt="hero dog image"
            src="/hero/dog.png"
            width={1000}
            height={1000}
            className="absolute bottom-0  lg:right-10 h-[60vh] lg:h-[80vh] w-auto"
          />
          <div className="lg:flex items-center w-[450px] h-[175px] bg-background p-7 rounded-3xl mt-20 hidden">
            <h3 className="text-xl text-white text-opacity-70 font-montserrat">
              REDEFINING THE FUTURE OF PET CARE WITH OUR{" "}
              <span className="text-opacity-100 text-white">NEXT-GEN</span>{" "}
              SMART COLLARS
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
            <Marquee
              autoFill
              className="text-xl bg-background opacity-80 py-3 text-white"
            >
              MY PERRO <Star className="mx-5 fill-white" /> SMART COLLARS{" "}
              <Star className="mx-5 fill-white" /> TRACK.MONITOR.PROTECT
            </Marquee>
          </div>
        </div>
      </div>
      <HeroCollar />
      <Petcare />
      <Features />
      <Companies />
    </>
  );
}
