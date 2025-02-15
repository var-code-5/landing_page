"use client"

import { cn } from "@/lib/utils"
import { MapIcon, BarChart3Icon, MapPinIcon, ActivityIcon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import Image from "next/image"
import woman from "../../../public/features/woman-using-smartphone.jpeg"

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

  const currentIndex = features.findIndex((f) => f.id === activeFeature)


  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 p-6">
      {/* Sidebar */}
      <ScrollArea className="md:w-[26rem] pr-8 h-96 space-y-1 ">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => {
              setActiveFeature(feature.id)
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-6 border-b-gray-400 border-b text-gray-400 text-xl font-montserrat font-medium text-left transition-colors",
              "hover:text-gray-700 ",
              activeFeature === feature.id && "text-gray-700",
            )}
          >
            <div className="flex flex-row justify-between w-full text-2xl">
                {feature.title}
                <feature.icon className="h-7 w-7" />
            </div>
          </button>
        ))}
      </ScrollArea>

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden rounded-xl bg-muted/30 p-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={cn(
              "absolute inset-0 p-6 transition-all duration-1000 ease-in-out",
              activeFeature === feature.id
                ? "translate-x-0 opacity-100"
                : "opacity-0"
            )}
          >
            <div className="space-y-6">
                <div className="flex flex-row justify-between w-full">
                    <div>   
                        <div className="text-sm text-gray-400 uppercase tracking-wider">{feature.title}</div>
                        <h2 className="text-3xl text-secondary font-semibold leading-tight mt-8 w-4/5 max-w-md">"{feature.content.heading}"</h2>
                    </div>
                    <div className="h-full rounded-xl overflow-hidden">
                        <Image
                        src={woman || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-[300px] object-cover"
                        />
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

