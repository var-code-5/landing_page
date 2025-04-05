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
    <section className="w-[85vw] mb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-6xl font-medium text-gray-600 font-borela uppercase tracking-wide">
            Designed to fit your <span className="text-background">pet&apos;s needs</span>
          </h2>
          <p className="text-gray-600 mt-2 md:text-3xl">Let&apos;s take a closer look of the smart collar.</p>
        </div>

        <div className="w-[90%] mx-auto">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300">
            <div className="relative">
              {/* Feature content */}
              <div className="flex flex-col p-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="max-w-[50%] ml-10 mt-10">
                    <h3 className="text-6xl font-borela text-gray-800 font-normal">{features[activeFeature].title}</h3>
                    <p className="max-w-[100%] text-2xl text-gray-600 font-Montserrat mt-6 font-normal">{features[activeFeature].description}</p>
                  </div>

                  {/* Thumbnail navigation */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {features.map((feature, index) => (
                      <button
                        key={feature.id}
                        onClick={() => setActiveFeature(index)}
                        className={cn(
                          "w-24 h-24 rounded-xl shadow-md bg-cover bg-center transition-all",
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
                      className="w-20 h-20 flex items-center justify-center -ml-10 rounded-full border border-gray-400 shadow-md backdrop-blur-md bg-white/30"
                      aria-label="Next feature" 
                    >
                      <ChevronRight className="w-10 h-10 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Feature image */}
              <div className=" transition-all duration-500 ease-in-out ">
                <Image
                  src={features[activeFeature].image || "/petcare/dog-collar.png"}
                  alt={features[activeFeature].title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-t-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

