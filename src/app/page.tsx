import Image from "next/image";
import Hero from "@/components/Hero";
import Petcare from "@/components/Petcare/petcare";
import Features from "@/components/Features/Features";
import HeroCollar from "@/components/HeroCollar";

export default function Home() {
  return (
    <>
      <HeroCollar/>
      <Petcare/>
      <Features/>
    </>
  );
}
