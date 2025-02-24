import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-black w-full h-screen">
      <div className="relative w-full h-[70vh] overflow-hidden rounded-3xl px-10 py-16 mt-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/services/dog-field-full.jpeg')] bg-cover bg-bottom" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl md:text-6xl lg:text-8xl text-white font-borela">
            OUR UPCOMING <br /> SERVICES
          </h1>
          <div className="h-full flex mt-5  justify-between">
            <div className="w-1/2 lg:w-1/4">
              <p className="text-white text-2xl">
                Take a look at the exciting services that we are launching soon,
                created for your dog&apos;s happiness and safety.{" "}
              </p>
              <button className="mt-5 rounded-full gap-3 flex text-xl items-center  font-borela text-white bg-secondary px-3 py-2">
                STAY UPDATED{" "}
                <MoveUpRight className="bg-primary w-12 h-12 rounded-full p-2 font-bold" />
              </button>
            </div>
            <div className="lg:flex gap-8 hidden ">
              <div className="w-80 h-auto bg-white bg-opacity-10 rounded-3xl px-3 py-2">
                <div className="py-5 flex text-white text-2xl justify-between items-center">
                  <h1>
                    Dog <br /> Walking
                  </h1>
                  <MoveUpRight className="bg-primary w-12 h-12 rounded-full p-2 font-bold" />
                </div>
                <Image
                  src="/services/dog-walking.png"
                  alt="dog walking"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-80 h-auto bg-white bg-opacity-10 rounded-2xl px-3 py-2">
                <div className="py-5 flex text-white text-2xl justify-between items-center">
                  <h1>
                    Dog <br /> Walking
                  </h1>
                  <MoveUpRight className="bg-primary w-12 h-12 rounded-full p-2 font-bold" />
                </div>
                <Image
                  src="/services/dog-walking.png"
                  alt="dog walking"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
