"use client"

import { cn } from "@/lib/utils"
import { MapIcon, BarChart3Icon, MapPinIcon, ActivityIcon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import Image from "next/image"

const features = [
  {
    id: "gps",
    title: "GPS TRACKING",
    icon: MapIcon,
    content: {
      heading: "Never lose sight of your pet's location, no matter where they roam.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },
  {
    id: "activity",
    title: "ACTIVITY INSIGHTS",
    icon: BarChart3Icon,
    content: {
      heading: "Track your pet's daily activities and monitor their health.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },
  {
    id: "geofencing",
    title: "GEOFENCING",
    icon: MapPinIcon,
    content: {
      heading: "Set up virtual boundaries and get alerts when your pet crosses them.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },
  {
    id: "pulse",
    title: "PULSE CHECKING",
    icon: ActivityIcon,
    content: {
      heading: "Monitor your pet's vital signs in real-time for peace of mind.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },{
    id: "pulse2",
    title: "PULSE CHECKING",
    icon: ActivityIcon,
    content: {
      heading: "Monitor your pet's vital signs in real-time for peace of mind.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },{
    id: "pulse3",
    title: "PULSE CHECKING",
    icon: ActivityIcon,
    content: {
      heading: "Monitor your pet's vital signs in real-time for peace of mind.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },{
    id: "pulse4",
    title: "PULSE CHECKING",
    icon: ActivityIcon,
    content: {
      heading: "Monitor your pet's vital signs in real-time for peace of mind.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },{
    id: "pulse5",
    title: "PULSE CHECKING",
    icon: ActivityIcon,
    content: {
      heading: "Monitor your pet's vital signs in real-time for peace of mind.",
      image: "/placeholder.svg?height=400&width=600",
    },
  },
]

export default function FeatureSlider() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const currentIndex = features.findIndex((f) => f.id === activeFeature)

  const handleNext = () => {
    setDirection("next")
    setActiveFeature(features[(currentIndex + 1) % features.length].id)
  }

  const handlePrev = () => {
    setDirection("prev")
    setActiveFeature(features[(currentIndex - 1 + features.length) % features.length].id)
  }

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 p-6">
      {/* Sidebar */}
      <ScrollArea className="md:w-[26rem] pr-8 h-96 space-y-1 ">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => {
              setDirection(features.findIndex((f) => f.id === feature.id) > currentIndex ? "next" : "prev")
              setActiveFeature(feature.id)
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-6 border-b-gray-400 border-b text-gray-400 text-xl font-montserrat font-medium text-left transition-colors",
              "hover:text-gray-700 ",
              activeFeature === feature.id && "text-gray-700",
            )}
          >
            <feature.icon className="h-5 w-5" />
            {feature.title}
          </button>
        ))}
      </ScrollArea>

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden rounded-xl bg-muted/30 p-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={cn(
              "absolute inset-0 p-6 transition-all duration-500 ease-in-out",
              activeFeature === feature.id
                ? "translate-x-0 opacity-100"
                : direction === "next"
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0",
            )}
          >
            <div className="space-y-6">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{feature.title}</div>
              <h2 className="text-3xl font-semibold leading-tight max-w-md">{feature.content.heading}</h2>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={feature.content.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            aria-label="Previous feature"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-colors"
            aria-label="Next feature"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

