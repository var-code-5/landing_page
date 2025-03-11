import React from "react";
import Story from "./Story";
import Description from "./Description";
import Hero from "./Hero";
import Mission from "../../components/Mission";
import Newsletter from "../../components/Newsletter/Newsletter";
import Companies from "../../components/Companies/Companies";
import TeamSection from "@/components/About/TeamSection";

function About() {
  return (
    <>
      <Hero />
      <Description />
      <Mission />
      <Story />
      <TeamSection />
      <Newsletter />
      <Companies />
    </>
  );
}

export default About;
