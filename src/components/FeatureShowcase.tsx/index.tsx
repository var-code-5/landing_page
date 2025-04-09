"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Feature = {
  id: number
  title: string
  description: string
  image: string
  thumbnail: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "Advanced Sensor Technology",
    description:
      "Equipped with advanced sensors for real-time tracking of activity, health, and location with accuracy and reliability.",
    image: "/features/featureShowCase/main1.png?height=400&width=600",
    thumbnail: "/features/featureShowCase/thumbnail1.png?height=40&width=40",
  },
  {
    id: 2,
    title: "Water-Resistant Design",
    description:
      "Durable and water-resistant construction that withstands your pet's adventures in any weather condition.",
    image: "/features/featureShowCase/main2.png?height=400&width=600",
    thumbnail: "/features/featureShowCase/thumbnail2.png?height=40&width=40",
  },
  {
    id: 3,
    title: "Long Battery Life",
    description:
      "Extended battery life of up to 14 days on a single charge, ensuring continuous monitoring of your pet.",
    image: "/features/featureShowCase/main3.png?height=400&width=600",
    thumbnail: "/features/featureShowCase/thumbnail3.png?height=40&width=40",
  },
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(0)

  const handleNext = () => {
    setActiveFeature((prev) => (prev + 1) % features.length)
  }

  return (
    <section className="relative w-full py-16 md:py-24 lg:min-h-screen bg-foreground text-center px-4 md:px-8 flex flex-col justify-center">
      
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-600 font-borela uppercase tracking-wide">
            Designed to fit your <span className="text-background">pet&apos;s needs</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            Let&apos;s take a closer look of the smart collar.
          </p>
        </div>

        <div className="w-full lg:w-[90%] mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md overflow-hidden transition-all duration-300">
            <div className="flex flex-col">
              {/* Feature image - now above text on mobile */}
              <div className="transition-all duration-500 ease-in-out h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src={features[activeFeature].image || "/petcare/dog-collar.png"}
                  alt={features[activeFeature].title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Feature content */}
              <div className="flex flex-col p-4 sm:p-6 md:p-8">
                {/* Feature text */}
                <div className="w-full mb-4 md:mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-borela text-gray-800 font-normal">
                    {features[activeFeature].title}
                  </h3>
                  <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-Montserrat mt-2 md:mt-4 font-normal">
                    {features[activeFeature].description}
                  </p>
                </div>

                {/* Thumbnail slider - bottom on all screen sizes */}
                <div className="w-full mt-2 md:mt-4">
                  <div className="flex items-center justify-start overflow-x-auto gap-2 sm:gap-3 pb-2">
                    {features.map((feature, index) => (
                      <button
                        key={feature.id}
                        onClick={() => setActiveFeature(index)}
                        className={cn(
                          "flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg shadow-md bg-cover bg-center transition-all",
                          activeFeature === index ? "border-2 border-gray-400" : "border-gray-200 opacity-60"
                        )}
                        aria-label={`View ${feature.title} feature`}
                      >
                        <Image
                          src={feature.thumbnail || "/placeholder.svg"}
                          alt={feature.title}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}

                    <button
                      onClick={handleNext}
                      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-gray-400 shadow-md bg-white/90 ml-2"
                      aria-label="Next feature"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
