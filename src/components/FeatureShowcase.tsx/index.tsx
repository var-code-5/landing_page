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
    <section className="relative w-full min-h-screen bg-foreground text-center p-4 md:p-10 flex flex-col justify-center">
      
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-600 font-borela uppercase tracking-wide">
            Designed to fit your <span className="text-background">pet&apos;s needs</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Let&apos;s take a closer look of the smart collar.
          </p>
        </div>

        <div className="w-full md:w-[90%] mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-md overflow-hidden transition-all duration-300">
            <div className="relative">
              {/* Feature content */}
              <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col xl:flex-row justify-between items-start gap-6 mb-4">

                  {/* Thumbnail slider - top on small, right on large */}
                  <div className="w-full xl:max-w-[40%] order-first xl:order-last md:flex md:justify-center sm:flex sm:justify-center ">
                    <div className="flex items-center overflow-x-auto gap-3 pb-2">
                      {features.map((feature, index) => (
                        <button
                          key={feature.id}
                          onClick={() => setActiveFeature(index)}
                          className={cn(
                            "flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl shadow-md bg-cover bg-center transition-all",
                            activeFeature === index ? "border border-gray-300" : "border-gray-200 opacity-40",
                          )}
                          aria-label={`View ${feature.title} feature`}
                        >
                          <Image
                            src={feature.thumbnail || "/placeholder.svg"}
                            alt={feature.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                      <button
                        onClick={handleNext}
                        className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-gray-400 shadow-md backdrop-blur-md bg-white/30 -ml-10"
                        aria-label="Next feature"
                      >
                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Feature text */}
                  <div className="w-full xl:max-w-[60%]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-borela text-gray-800 font-normal">
                      {features[activeFeature].title}
                    </h3>
                    <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-Montserrat mt-4 font-normal">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature image */}
              <div className="transition-all duration-500 ease-in-out">
                <Image
                  src={features[activeFeature].image || "/petcare/dog-collar.png"}
                  alt={features[activeFeature].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-t-xl object-cover max-h-[60vh] sm:max-h-[75vh] lg:max-h-[80vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}