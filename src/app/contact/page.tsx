import React from 'react'
import Newsletter from '@/components/Newsletter/Newsletter'
import Companies from '@/components/Companies/Companies'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with MyPerro for inquiries, collaborations, or support. We\'re here to help!',
};

function page() {
  return (
    <div className="w-full max-w-[85vw] mx-auto">
      {/* hero section */}
      <div className="text-black w-full">
        <div className="relative w-full h-auto overflow-hidden rounded-3xl px-4 sm:px-6 md:px-10 py-8 md:py-16 mt-10 md:mt-15">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url('/contact/contact-hero.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-borela">
              GET IN TOUCH <br /> WITH US
            </h1>
            <div className="flex flex-col md:flex-row mt-5 gap-6 justify-between">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <p className="text-white text-lg md:text-xl lg:text-2xl">
                  Need assistance? We&apos;re always here for you and your furry friends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form section */}
      <div id="contact-form" className="bg-foreground w-full min-h-screen text-center flex flex-col items-center p-4 md:p-6 lg:p-8">
        <h1 className="font-borela text-4xl sm:text-5xl md:text-7xl text-center text-background mt-12 md:mt-0">
          <p>CONTACT DETAILS</p>
          <p className="mt-4 text-2xl font-montserrat text-gray-600">Because we believe that great care starts with a conversation!</p>
        </h1>

        <div className="w-full md:px-8 mt-12 gap-8 flex flex-col md:flex-row">
          <ContactCard />
          <div className="w-full md:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>

      <Newsletter />
      <Companies />
    </div>
  )
}

export default page