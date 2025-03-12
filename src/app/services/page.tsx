import React from "react";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import { Clock, Kanban, MoveUpRight, PawPrint } from "lucide-react";

export default function services() {
  return (
    <div className="w-full max-w-[85vw] mx-auto">
      {/* hero section */}
      <div className="text-black w-full">
        <div className="relative w-full h-auto  overflow-hidden rounded-3xl px-4 sm:px-6 md:px-10 py-8 md:py-16 mt-10 md:mt-20">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url('/services/dog-field-full.jpeg')] bg-cover bg-bottom" />
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-borela">
              OUR UPCOMING <br /> SERVICES
            </h1>
            <div className="flex flex-col md:flex-row mt-5 gap-6 justify-between">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <p className="text-white text-lg md:text-xl lg:text-2xl">
                  Take a look at the exciting services that we are launching
                  soon, created for your dog&apos;s happiness and safety.
                </p>
                <button className="mt-5 rounded-full gap-2 flex text-lg md:text-xl items-center font-borela text-white bg-secondary px-3 py-2">
                  STAY UPDATED{" "}
                  <MoveUpRight className="bg-primary w-8 h-8 md:w-12 md:h-12 rounded-full p-2 font-bold" />
                </button>
              </div>
              <div className="hidden sm:flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-0">
                <div className="w-full sm:w-1/2 max-w-[350px] h-auto bg-white bg-opacity-10 rounded-3xl px-3 py-2">
                  <div className="py-3 md:py-5 flex text-white text-xl md:text-2xl justify-between items-center">
                    <h1>
                      Dog <br /> Walking
                    </h1>
                    <MoveUpRight className="bg-primary w-8 h-8 md:w-12 md:h-12 rounded-full p-2 font-bold" />
                  </div>
                  <Image
                    src="/services/dog-walking.png"
                    alt="dog walking"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-full sm:w-1/2 max-w-[350px] h-auto bg-white bg-opacity-10 rounded-2xl px-3 py-2">
                  <div className="py-3 md:py-5 flex text-white text-xl md:text-2xl justify-between items-center">
                    <h1>
                      Dog <br /> Walking
                    </h1>
                    <MoveUpRight className="bg-primary w-8 h-8 md:w-12 md:h-12 rounded-full p-2 font-bold" />
                  </div>
                  <Image
                    src="/services/dog-walking.png"
                    alt="dog walking"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* walking and boarding */}
      <div className="w-full">
        {/* Dog Walking Service */}
        <div className="flex flex-col lg:flex-row my-6 md:my-10 bg-white p-4 sm:p-6 md:p-10 rounded-3xl text-secondary">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src="/services/dog-walking-women.png"
              alt="dog walking women"
              width={1000}
              height={1000}
              className="w-auto max-h-[50vh] lg:max-h-[80vh] object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-borela">
              DOG <span className="text-background">WALKING</span> <br /> SERVICE
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl my-3 md:my-5 font-montserrat">
              Soon, we&apos;ll offer reliable dog walking tailored to your dog&apos;s
              needs, ensuring they get the exercise and attention they deserve.
            </p>
            <ul className="space-y-3 md:space-y-4 my-6 md:my-10">
              <li className="flex gap-3 md:gap-4 text-background font-montserrat items-center text-lg md:text-xl lg:text-2xl">
                <Clock className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
                Flexible time schedules
              </li>
              <li className="flex gap-3 md:gap-4 text-background font-montserrat items-center text-lg md:text-xl lg:text-2xl">
                <Kanban className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
                Safe routes and fun experiences
              </li>
              <li className="flex gap-3 md:gap-4 text-background font-montserrat items-center text-lg md:text-xl lg:text-2xl">
                <PawPrint className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
                Individual and group walks
              </li>
            </ul>
            <button className="flex bg-background p-3 md:p-4 gap-3 md:gap-4 text-white rounded-full mt-6 md:mt-10 lg:mt-16 font-borela text-lg md:text-xl lg:text-2xl items-center px-4 md:px-6">
              BECOME A DOG WALKER{" "}
              <MoveUpRight className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
            </button>
          </div>
        </div>

        {/* Dog Boarding Service */}
        <div className="flex flex-col-reverse lg:flex-row my-6 md:my-10 bg-white p-4 sm:p-6 md:p-10 rounded-3xl text-secondary">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-borela mt-6 lg:mt-0">
              DOG <span className="text-background">BOARDING</span> <br /> SERVICE
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl my-3 md:my-5 font-montserrat">
              We&apos;re creating a safe, comfortable space where your dog will
              receive the care and attention they need while you&apos;re away.
            </p>
            <ul className="space-y-3 md:space-y-4 my-6 md:my-10">
              <li className="flex gap-3 md:gap-4 text-background font-montserrat items-center text-lg md:text-xl lg:text-2xl">
                <Clock className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
                Safe and clean accommodations
              </li>
              <li className="flex gap-3 md:gap-4 text-background font-montserrat items-center text-lg md:text-xl lg:text-2xl">
                <Kanban className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
                Personalized care and feeding
              </li>
              <li className="flex gap-3 md:gap-4 text-background font-montserrat items-center text-lg md:text-xl lg:text-2xl">
                <PawPrint className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
                Monitoring with regular updates
              </li>
            </ul>
            <button className="flex bg-background p-3 md:p-4 gap-3 md:gap-4 text-white rounded-full mt-6 md:mt-10 lg:mt-16 font-borela text-lg md:text-xl lg:text-2xl items-center px-4 md:px-6">
              BECOME A PET SITTER{" "}
              <MoveUpRight className="bg-primary rounded-full p-2 md:p-3 text-foreground h-10 w-10 md:h-12 md:w-12" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <Image
              src="/services/dog-boarding-women.png"
              alt="dog boarding women"
              width={1000}
              height={1000}
              className="w-auto max-h-[50vh] lg:max-h-[80vh] object-cover"
            />
          </div>
        </div>
      </div>
      
      <FAQ />
    </div>
  );
}