'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import '@google/model-viewer/dist/model-viewer.min.js';
import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  //@ts-ignore
  () => import("@google/model-viewer"),
  { ssr: false }
);


export default function HeroCollar() {

  useEffect(() => {
    // Ensure the model-viewer script is added to the DOM
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.head.appendChild(script);
  }, []);
  
  const sectionRef = useRef(null);

  return (
    <div className="w-full h-screen flex justify-center items-center" ref={sectionRef}>
      <Image
        src="/heroCollar/background.png"
        alt="bg"
        width={1000}
        height={1000}
        className="w-[80%] h-[80%] rounded-[50px]"
      />
      <div className="absolute flex flex-col justify-around text-secondary opacity-50 w-[80%] h-[80%] text-center text-[8rem] overflow-hidden text-nowrap leading-tight font-borela">
        <h3>TAILORED</h3>
        <h3>TECHNOLOGY</h3>
        <h3>FOR YOUR PET</h3>
      </div>
      <model-viewer src="dogCollar.glb" alt="A 3D model of a dog collar" loading="eager" camera-controls camera-orbit="-10deg 60deg 45deg" disable-zoom disable-pan shadow-intensity="1" className="absolute w-[80%] h-[80%]"></model-viewer>
    </div>
  );
}
