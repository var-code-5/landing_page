import Features from "@/components/Features/Features";
import HeroCollar from "@/components/HeroCollar";
import Companies from "@/components/Companies/Companies";
import Unleash from "@/components/Unleash";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import FeatureShowcase from "@/components/FeatureShowcase.tsx";

export const metadata = {
  title: "Home",
  description:
    "Welcome to MyPerro — the future of smart pet care, with GPS tracking, health monitoring, and more.",
};

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-auto flex flex-col items-center overflow-hidden">
        <div className="bg-foreground w-[85vw] h-[90vh] flex flex-col">
          <div className="flex flex-col justify-start items-start">
            <h1 className="relative font-borela text-5xl md:text-8xl lg:text-[9vw] mt-8  md:mt-16 text-background leading-none">
              SMART COLLARS
              <span className="md:absolute font-mombay text-6xl sm:text-7xl -bottom-5 right-0 md:left-[42%] z-10 text-background">
                for
              </span>
            </h1>
            <h1 className="font-montserrat text-2xl md:text-5xl lg:text-[5vw] rounded-lg bg-primary leading-none p-5 ">
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
          <div className="lg:flex items-center w-[560px] h-[218px] bg-background p-7 rounded-3xl mt-20 hidden">
            <h3 className="text-2xl text-white text-opacity-70 font-montserrat">
              REDEFINING THE FUTURE OF PET CARE WITH OUR{" "}
              <span className="text-opacity-100 text-white flex items-center gap-2">
                NEXT-GEN{" "}
                <Image
                  src="/hero/zig.png"
                  alt="zigzag"
                  width={1000}
                  height={1000}
                  className="w-auto h-full"
                />
              </span>{" "}
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
              <Star className="mx-5 fill-white" /> MYPERRO{" "}
              <Star className="mx-5 fill-white" /> SMART COLLARS{" "}
              <Star className="mx-5 fill-white" /> TRACK.MONITOR.PROTECT
            </Marquee>
          </div>
        </div>
      </div>
      <HeroCollar />
      <div className="flex flex-col  items-center relative bg-foreground w-full min-h-screen text-center bg-white">
        <div className="max-w-[85vw] w-full items-stretch">
          <h1 className="font-b</div>orela text-black p-4 text-3xl lg:text-6xl mt-0 lg:mt-8">
            THE FUTURE <span className="text-gray-600">OF</span> PET CARE
          </h1>
          <div className="lg:hidden text-lg p-4 lg:text-xl text-left flex flex-col items-center">
            <Image
              src="/petcare/collar-features-icon.png"
              height={1500}
              width={1500}
              alt="dog icon"
              className="object-contain mb-4 w-40"
            ></Image>
            <p className="text-gray-600">
              Our smart collars offer you peace of mind with real-time tracking
              and health insights for your pets.
            </p>
          </div>
          <Image
            src="/hero/collar.svg"
            height={1000}
            width={1000}
            alt="center image"
            className="lg:absolute lg:top-[58%]  lg:mt-0 mt-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-[1] h-[70%] w-auto"
          />
          <Image
            src="/hero/base.svg"
            width={1000}
            height={1000}
            alt="bottom left image"
            className="hidden lg:block lg:absolute left-0 -bottom-0 h-auto w-8/12 z-[0]"
          />
          <div className="relative flex lg:flex-row lg:justify-between flex-col lg:items-stretch items-center min-h-[20em] text-black lg:mt-12 z-[2]">
            <div className="flex justify-start">
              <div className="flex flex-row items-end lg:w-[30rem] text-right p-4">
                <div className="text-xl text-left lg:block hidden">
                  <Image
                    src="/petcare/collar-features-icon.png"
                    height={1500}
                    width={150}
                    alt="features"
                    className="object-contain mb-4 "
                  ></Image>
                  <p className="text-gray-600">
                    Our smart collars offer you peace of mind with real-time
                    tracking and health insights for your pets.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-4 items-center lg:items-stretch lg:justify-end">
              <div className="flex flex-col items-center bg-white lg:bg-transparent rounded-xl m-2 lg:flex-row lg:items-start lg:w-[30rem] lg:text-right p-4">
                <Image
                  src="/petcare/dog-icon.png"
                  height={1000}
                  width={1000}
                  alt="dog icon"
                  className="object-contain block w-28 lg:hidden"
                ></Image>
                <div className="text-xl">
                  <p className="font-bold mb-2">Stay Linked. Stay Informed.</p>
                  <p className="text-gray-600 lg:text-xl text-lg">
                    Elevate confidence in pet care with MyPerro Smart Collars
                  </p>
                </div>
                <Image
                  src="/petcare/dog-icon.png"
                  height={100}
                  width={100}
                  alt="dog icon"
                  className="object-contain hidden lg:block"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* <Image
              src="/petcare/base-n.png"
              width={1000}
              height={1000}
              alt='bottom left image'
              className=' hidden lg:block lg:absolute -bottom-20 h-[500] w-11/12  z-[0]'
            /> */}
      </div>
      <FeatureShowcase />
      <Features />
      <Unleash />
      <Companies />
    </>
  );
}
