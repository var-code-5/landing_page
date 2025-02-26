import Image from "next/image"

const Story = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md lg:overflow-hidden mt-12 md:mt-24 lg:mt-0 h-full w-full lg:w-3/4  mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative h-[30vh] lg:h-auto">
          <Image
              src='/about/sidedog.png'
              width={1000}
              height={1000}
              alt="happy shiba inu"
              className="w-3/4 md:w-1/2 lg:w-full h-auto object-cover bottom-3 -scale-x-100 absolute"
            />
          <div className="w-1/2 lg:w-3/5 bg-primary h-full rounded-r-full">
          </div>
        </div>
        
        <div className="p-8 lg:p-20 lg:pl-0 lg:w-3/5">
          <h2 className="text-4xl lg:text-6xl font-borela  text-gray-800 mb-6">OUR STORY</h2>

          <p className="text-gray-700 font-medium text-md lg:text-xl mb-6 font-montserrat">
            MyPerro is a pet care startup that combines smart collar technology with a network of certified caregivers
            to provide real-time health monitoring and premium services like dog walking and boarding. Our smart collars
            track essential health vitals and GPS location.
          </p>

          <p className="text-gray-700 font-medium text-md lg:text-xl font-montserrat">
            We aim to give pet parents peace of mind by ensuring their dogs receive personalized attention and care,
            even when they're away, their "Perro" will be just like it is "MyPerro" in a safe and home-like environment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Story

