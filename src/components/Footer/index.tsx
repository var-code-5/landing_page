import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background rounded-t-3xl mt-10">
      {/* Desktop Footer */}
      <div className="hidden md:flex relative justify-end py-16 lg:mt-[30vh] xl:mt-[45vh]">
        <Image
          src="/footer-dog.svg"
          alt="footer"
          width={1000}
          height={1000}
          className="absolute hidden lg:block left-0 bottom-0 w-1/3 lg:w-[40%]"
        />
        <div className="w-full lg:w-[60%] h-auto p-6 md:p-10 ml-auto">
          <div className="flex justify-between items-center font-montserrat mb-10">
            <Image
              src="/myperro-logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-20 w-auto object-contain"
            />
            <div className="h-full w-auto flex items-center">
              <ul className="flex h-fit gap-4">
                <li className="rounded-full overflow-hidden">
                  <Instagram className="h-10 md:h-12 w-10 md:w-12 p-2 bg-primary text-white" />
                </li>
                <li className="rounded-full overflow-hidden">
                  <Linkedin className="h-10 md:h-12 w-10 md:w-12 p-2 bg-primary text-white" />
                </li>
                <li className="rounded-full overflow-hidden">
                  <Twitter className="h-10 md:h-12 w-10 md:w-12 p-2 bg-primary text-white" />
                </li>
                <li className="rounded-full overflow-hidden">
                  <Facebook className="h-10 md:h-12 w-10 md:w-12 p-2 bg-primary text-white" />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-white">
            <div>
              <h3 className="text-xl md:text-2xl uppercase font-bold">Company</h3>
              <ul className="text-lg lg:text-xl space-y-4 mt-4">
                <li className="cursor-pointer hover:text-primary transition-colors">About Us</li>
                <li className="cursor-pointer hover:text-primary transition-colors">Our Mission</li>
                <li className="cursor-pointer hover:text-primary transition-colors">Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl uppercase font-bold">Support</h3>
              <ul className="text-lg lg:text-xl space-y-4 mt-4">
                <li className="cursor-pointer hover:text-primary transition-colors">Contact Us</li>
                <li className="cursor-pointer hover:text-primary transition-colors">FAQs</li>
                <li className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl uppercase font-bold">
                Quick Links
              </h3>
              <ul className="text-lg lg:text-xl space-y-4 mt-4">
                <li className="cursor-pointer hover:text-primary transition-colors">Smart Collar</li>
                <li className="cursor-pointer hover:text-primary transition-colors">Blogs</li>
                <li className="cursor-pointer hover:text-primary transition-colors">Services</li>
              </ul>
            </div>
          </div>
          
          <div className="text-white text-sm mt-10 pt-6 border-t border-white/20">
            © {new Date().getFullYear()} MyPerro. All rights reserved.
          </div>
        </div>
      </div>
      
      {/* Mobile Footer */}
      <div className="md:hidden py-8 px-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Image
              src="/myperro-logo.png"
              alt="logo"
              width={150}
              height={40}
              className="h-14 w-auto object-contain"
            />
          </div>
          
          <div className="flex gap-1">
            <div className="rounded-full overflow-hidden bg-primary p-1.5 flex items-center justify-center">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div className="rounded-full overflow-hidden bg-primary p-1.5 flex items-center justify-center">
              <Linkedin className="h-5 w-5 text-white" />
            </div>
            <div className="rounded-full overflow-hidden bg-primary p-1.5 flex items-center justify-center">
              <Twitter className="h-5 w-5 text-white" />
            </div>
            <div className="rounded-full overflow-hidden bg-primary p-1.5 flex items-center justify-center">
              <Facebook className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-white">
          <div>
            <p className="uppercase text-sm font-semibold">About us</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">Blogs</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">Careers</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">Contact us</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">Smart collar</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">FAQs</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">Services</p>
          </div>
          <div>
            <p className="uppercase text-sm font-semibold">Privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}