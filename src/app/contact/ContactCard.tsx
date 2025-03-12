import React from 'react';
import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="bg-background font-montserrat text-white py-16 px-8 lg:w-1/3 rounded-3xl relative overflow-hidden">
      <h2 className="text-3xl text-left font-semibold mb-12">Reach us out</h2>
      
      {/* Contact Information */}
      <div className="space-y-8">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-400 p-2 rounded-full">
            <PhoneCall className="h-7 w-7 text-background " />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-left">Call us</h3>
            <p className="text-gray-300 text-sm">+1012 3456 789</p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-400 p-2 rounded-full">
            <Mail className="h-7 w-7 text-background" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-left">Email us</h3>
            <p className="text-gray-300 text-sm">myperro@gmail.com</p>
          </div>
        </div>
        
        {/* Address */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-400 p-2 rounded-full">
            <MapPin className="h-7 w-7 text-background" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-left">Head Office</h3>
            <p className="text-gray-300 text-sm text-left">Address</p>
          </div>
        </div>
      </div>
      
      {/* Social Media */}
      <div className="mt-10 md:mt-18">
        <h3 className="mb-3 text-left">Our socials</h3>
        <div className="flex gap-2">
        <div className="h-full w-auto flex items-center">
            <ul className="flex h-fit gap-4 ">
              <li className="rounded-full overflow-hidden">
                <Instagram className="h-8 w-8 p-2 bg-primary text-white" />
              </li>
              <li className="rounded-full overflow-hidden">
                <Linkedin className="h-8 w-8 p-2 bg-primary text-white" />
              </li>
              <li className="rounded-full overflow-hidden">
                <Twitter className="h-8 w-8 p-2 bg-primary text-white" />
              </li>
              <li className="rounded-full overflow-hidden">
                <Facebook className="h-8 w-8 p-2 bg-primary text-white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0">
        <div className="h-24 w-24 bg-gray-600 rounded-full opacity-30"></div>
        <div className="h-16 w-16 bg-orange-400 rounded-full opacity-30 -mt-8 ml-8"></div>
      </div>
    </div>
  );
};

export default ContactCard;