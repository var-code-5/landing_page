import React from 'react'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
function Contact() {
  return (
    <div className="bg-foreground w-full min-h-screen text-center flex flex-col items-center p-4 md:p-6 lg:p-8">

          <h1 className="font-borela text-4xl sm:text-5xl md:text-7xl text-center text-background  mt-12 md:mt-0">
            <p className=''>GET IN TOUCH WITH US </p>
            <p className='mt-4 text-2xl font-montserrat text-gray-600'>Because we believe that great care starts with a conversation!</p>
          </h1>

          <div className='w-full md:px-8 mt-12 gap-8 flex flex-col md:flex-row'>
            <ContactCard />
            <div className='w-full md:w-2/3'>
                <ContactForm />
            </div>
          </div>
    </div>
  )
}

export default Contact