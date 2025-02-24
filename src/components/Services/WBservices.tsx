import React from "react";
import Image from "next/image";
import { Clock, Kanban, PawPrint, MoveUpRight } from "lucide-react";

function WBservices() {
  return (
    <div className="w-full h-[200vh]">
      <div className="flex h-[90vh] my-[5vh] bg-white p-10 rounded-3xl text-secondary">
        <div className="w-[50%]">
          <Image
            src="/services/dog-walking-women.png"
            alt="dog walking women"
            width={1000}
            height={1000}
            className="w-auto h-full object-cover"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="text-8xl font-borela">
            DOG <span className="text-background">WALKING</span> <br /> SERVICE
          </h1>
          <p className="text-2xl my-5 font-montserrat">
            Soon, we’ll offer reliable dog walking tailored to your dog’s needs,
            ensuring they get the exercise and attention they deserve.
          </p>
          <ul className="space-y-4 my-10">
            <li className="flex gap-4 text-background  font-montserrat items-center text-2xl">
              <Clock className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
              Flexible time schedules
            </li>
            <li className="flex gap-4 text-background  font-montserrat items-center text-2xl">
              <Kanban className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
              Safe routes and fun experiences
            </li>
            <li className="flex gap-4 text-background  font-montserrat items-center text-2xl">
              <PawPrint className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
              Individual and group walks
            </li>
          </ul>
          <button className="flex bg-background p-4 gap-4 text-white rounded-full mt-28 font-borela text-2xl items-center px-6">
            BECOME A DOG WALKER{" "}
            <MoveUpRight className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
          </button>
        </div>
      </div>
      <div className="flex h-[90vh] my-[5vh] bg-white p-10 rounded-3xl text-secondary">
        <div className="w-[50%]">
          <h1 className="text-8xl font-borela">
            DOG <span className="text-background">BOARDING</span> <br /> SERVICE
          </h1>
          <p className="text-2xl my-5 font-montserrat">
            We&apos;re creating a safe, comfortable space where your dog will
            receive the care and attention they need while you&apos;re away.
          </p>
          <ul className="space-y-4 my-10">
            <li className="flex gap-4 text-background  font-montserrat items-center text-2xl">
              <Clock className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
              Safe and clean accommodations
            </li>
            <li className="flex gap-4 text-background  font-montserrat items-center text-2xl">
              <Kanban className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
              Personalized care and feeding
            </li>
            <li className="flex gap-4 text-background  font-montserrat items-center text-2xl">
              <PawPrint className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
              Monitoring with regular updates
            </li>
          </ul>
          <button className="flex bg-background p-4 gap-4 text-white rounded-full mt-28 font-borela text-2xl items-center px-6">
            BECOME A PET SITTER{" "}
            <MoveUpRight className="bg-primary rounded-full p-3 text-foreground h-12 w-12" />
          </button>
        </div>
        <div className="flex justify-end w-[50%]">
          <Image
            src="/services/dog-boarding-women.png"
            alt="dog walking women"
            width={1000}
            height={1000}
            className="w-auto h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default WBservices;
