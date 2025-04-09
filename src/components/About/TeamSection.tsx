"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";

// Define the team member type
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  tags: string[];
}

// Define the tag type
interface Tag {
  id: string;
  label: string;
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "SAIPRASAD PANDILWAR",
    role: "Founder",
    image: "/placeholder.svg?height=150&width=150",
    tags: ["founders"],
  },
  {
    id: "2",
    name: "MANAN VYAS",
    role: "Co-Founder",
    image: "/placeholder.svg?height=150&width=150",
    tags: ["founders"],
  },
  {
    id: "3",
    name: "Arvind Babu",
    role: "Frontend Developer",
    image: "/team/arvind.jpeg",
    tags: ["developers"],
  },
  {
    id: "4",
    name: "Dhanesh Baheti",
    role: "IOT Developer",
    image: "/team/dhaneshbaheti.jpeg",
    tags: ["developers"],
  },
  {
    id: "5",
    name: "ALEX JOHNSON",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=150&width=150",
    tags: ["developers"],
  },
  {
    id: "6",
    name: "Sarvesh",
    role: "Backend Developer",
    image: "/team/diptesh_das.png",
    tags: ["developers"],
  },
  {
    id: "7",
    name: "Harsh Dalmia",
    role: "Backend Developer",
    image: "/team/harsh.jpg",
    tags: ["developers"],
  },
];

// Initial tags
const initialTags: Tag[] = [
  { id: "founders", label: "FOUNDERS" },
  { id: "designers", label: "DESIGNERS" },
  { id: "developers", label: "DEVELOPERS" },
  { id: "marketing", label: "MARKETING" },
];

export default function TeamSection() {
  const [activeTag, setActiveTag] = useState<string>("founders");
  const [tags, setTags] = useState<Tag[]>(initialTags);

  const handleTagClick = (tagId: string) => {
    if (tagId === activeTag) return;

    const prevActiveTagIndex = tags.findIndex((tag) => tag.id === activeTag);
    const newTags = [...tags];

    if (prevActiveTagIndex !== -1) {
      const [prevActiveTag] = newTags.splice(prevActiveTagIndex, 1);
      newTags.push(prevActiveTag);
    }

    setActiveTag(tagId);
    setTags(newTags);
  };
  const filteredMembers = teamMembers.filter((member) =>
    member.tags.includes(activeTag),
  );

  return (
    <section className="py-16 px-4 mt-5 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-8xl font-borela font-bold text-center text-[#333333] mb-4">
          MEET OUR TEAM
        </h1>
        <p className="text-center text-gray-600 font-montserrat max-w-2xl text-2xl mx-auto mb-12">
          Meet our exceptional team at MyPerro! Comprising diverse talents and
          expertise, we are a dedicated group committed to deliver quality
          services.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 font-borela ">
          <AnimatePresence initial={false}>
            {tags.map((tag) => (
              <motion.button
                key={tag.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, type: "spring" }}
                className={`font-medium text-3xl ${
                  activeTag === tag.id ? "text-[#333333]" : "text-gray-400"
                } hover:text-[#333333] transition-colors`}
                onClick={() => handleTagClick(tag.id)}
              >
                #{tag.label}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-4 shadow-sm"
              >
                <div className="relative">
                  <div className="rounded-full overflow-hidden w-full aspect-square bg-gray-100 relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    className="absolute top-2 right-2 bg-[#e6a06e] text-white p-2 rounded-full"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </button>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-background text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
