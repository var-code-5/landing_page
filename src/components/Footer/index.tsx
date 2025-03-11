import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function index() {
  return (
    <footer className="relative flex justify-end mt-10 sm:mt-[45vh] h-[50vh] bg-background rounded-t-3xl w-full pr-5">
      <Image
        src="/footer-dog.svg"
        alt="footer"
        width={1000}
        height={1000}
        className="absolute hidden lg:block left-0 bottom-0 w-[40%]"
      />
      <div className="w-full lg:w-[60%] h-auto p-10">
        <div className="grid grid-cols-3 h-20 font-montserrat">
          <Image
            src="/myperro-logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="col-span-3 h-full w-auto object-contain"
          />
          <div className="h-full w-auto flex items-center col-span-3">
            <ul className="flex h-fit gap-4 ">
              <li className="rounded-full overflow-hidden">
                <Instagram className="h-12 w-12 p-2 bg-primary text-white" />
              </li>
              <li className="rounded-full overflow-hidden">
                <Linkedin className="h-12 w-12 p-2 bg-primary text-white" />
              </li>
              <li className="rounded-full overflow-hidden">
                <Twitter className="h-12 w-12 p-2 bg-primary text-white" />
              </li>
              <li className="rounded-full overflow-hidden">
                <Facebook className="h-12 w-12 p-2 bg-primary text-white" />
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div>
            <h3 className="text-2xl text-white uppercase font-bold">Company</h3>
            <ul className="text-xl space-y-4 mt-4">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl text-white uppercase font-bold">Support</h3>
            <ul className="text-xl space-y-4 mt-4">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl text-white uppercase font-bold">
              Quick Links
            </h3>
            <ul className="text-xl space-y-4 mt-4">
              <li>Smart Collar</li>
              <li>Blogs</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
