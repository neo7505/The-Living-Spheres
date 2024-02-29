"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import { Antonio } from "next/font/google";

const ant = Antonio({ subsets: ["latin"] });

export async function generateStaticParams() {
  return await data.map((planet) => ({
    id: planet.name.toString(),
  }));
}

const PlanetInfo = ({ params }) => {
  const planet = data.find((p) => p.name.toString() === params.id);
  const [selectedSection, setSelectedSection] = useState("overview");

  if (!planet) {
    return <div>Not found</div>;
  }

  function getSelectedImage() {
    switch (selectedSection) {
      case "overview":
        return planet.images.planet;
      case "internal":
        return planet.images.internal;
      case "geology":
        return planet.images.geology;
      default:
        return planet.images.planet;
    }
  }

  function getSelectedContent() {
    if (!planet) {
      return { content: "", source: "" }; // Return default values if planet is undefined
    }

    switch (selectedSection) {
      case "overview":
        return planet.overview || { content: "", source: "" }; // Return default values if overview is undefined
      case "internal":
        return planet.structure || { content: "", source: "" }; // Return default values if internal is undefined
      case "geology":
        return planet.geology || { content: "", source: "" }; // Return default values if geology is undefined
      default:
        return planet.overview || { content: "", source: "" }; // Return default values if overview is undefined
    }
  }

  function getBgClass(id) {
    switch (id) {
      case "Mercury":
        return "bg-Mercury";
      case "Venus":
        return "bg-Venus";
      case "Earth":
        return "bg-Earth";
      case "Mars":
        return "bg-Mars";
      case "Jupiter":
        return "bg-Jupiter";
      case "Saturn":
        return "bg-Saturn";
      case "Uranus":
        return "bg-Uranus";
      case "Neptune":
        return "bg-Neptune";
      default:
        return "";
    }
  }

  function getBorderClass(id) {
    switch (id) {
      case "Mercury":
        return "border-Mercury";
      case "Venus":
        return "border-Venus";
      case "Earth":
        return "border-Earth";
      case "Mars":
        return "border-Mars";
      case "Jupiter":
        return "border-Jupiter";
      case "Saturn":
        return "border-Saturn";
      case "Uranus":
        return "border-Uranus";
      case "Neptune":
        return "border-Neptune";
      default:
        return "";
    }
  }

  const selectedContent = getSelectedContent();

  return (
    <div className="flex flex-col justify-center items-center text-white md:pt-[96px] w-screen">
      <div className="flex justify-between flex-col lg:flex-row text-left items-center md:p-4">
        {/* Mobile nav menu */}
        <div className="md:hidden h-[50px] pt-2 flex w-screen justify-around items-center border-b-[1px] border-t-[1px] border-gray-700">
          <h2
            className={`w-[100px] h-[40px] text-center pb-0 text-[14px] ${
              selectedSection === "overview"
                ? `border-b-[2px] ${getBorderClass(params.id)}`
                : "hover:bg-gray-600"
            }`}
            onClick={() => setSelectedSection("overview")}
          >
            OVERVIEW
          </h2>
          <h2
            className={`w-[100px] h-[40px] text-center pb-0 text-[14px] ${
              selectedSection === "internal"
                ? `border-b-[2px] ${getBorderClass(params.id)}`
                : "border-gray-700"
            }`}
            onClick={() => setSelectedSection("internal")}
          >
            STRUCTURE
          </h2>
          <h2
            className={`w-[100px] h-[40px] text-center pb-0 text-[14px] ${
              selectedSection === "geology"
                ? `border-b-[2px] ${getBorderClass(params.id)}`
                : "border-gray-700"
            }`}
            onClick={() => setSelectedSection("geology")}
          >
            SURFACE
          </h2>
        </div>

        <div className="relative pt-20 md:pt-0 w-[300px] md:w-[500px] lg:w-full">
          <Image
            src={getSelectedImage()}
            width={10}
            height={10}
            alt="planet image"
            layout="responsive"
          />
        </div>

        <div className="lg:pl-[153px] md:pt-20 text-center md:text-start flex lg:block ">
          <div className="md:pr-[100px]">
            {" "}
            <h1 className="text-[80px]">{planet.name}</h1>
            <p className="text-[14px] w-[350px] leading-[25px]">
              {selectedContent["content"]}
            </p>
            <p className="flex pt-[49px] justify-center md:justify-start">
              Read more: <Link href={selectedContent["source"]} className="underline pl-1">
                Wikipedia{" "}
              </Link>
              <span className="pt-2 pl-2">
                <Image
                  src="/assets/icon-source.svg"
                  width={12}
                  height={12}
                  alt="source icon"
                />
              </span>
            </p>
          </div>

          <div className="hidden pt-[39px] text-[14px] md:block">
            <div
              className={`flex pt-3 pl-6 mb-[16px] md:w-[350px] h-[48px] border-gray-900 md:border-2 cursor-pointer ${
                selectedSection === "overview"
                  ? getBgClass(params.id)
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setSelectedSection("overview")}
            >
              <p className="hidden md:flex pr-8">01</p>
              <h2>OVERVIEW</h2>
            </div>
            <div
              className={`flex pt-3 pl-6 mb-[16px] md:w-[350px] h-[48px] border-gray-900 md:border-2 cursor-pointer ${
                selectedSection === "internal"
                  ? getBgClass(params.id)
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setSelectedSection("internal")}
            >
              <p className="pr-8">02</p>
              <h2>INTERNAL STRUCTURE</h2>
            </div>
            <div
              className={`flex pt-3 pl-6 mb-[16px] md:w-[350px] h-[48px] border-gray-900 md:border-2 cursor-pointer ${
                selectedSection === "geology"
                  ? getBgClass(params.id)
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setSelectedSection("geology")}
            >
              <p className="pr-8">03</p>
              <h2>SURFACE GEOLOGY</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-10 lg:pt-0 pb-10">
        <div className="w-[327px] h-[48px] md:mr-[30px] md:w-[164px] md:h-[88px] lg:w-[255px] lg:h-[128px] border-gray-600 border-2 flex justify-between md:flex-col md:justify-center md:pl-6 p-2 md:p-0 mb-[8px] md:mb-0">
          <h2 className="text-[12px] text-gray-400">ROTATION TIME</h2>
          <p
            className={`${ant.className} text-[20px] md:text-[24px] lg:text-[40px]`}
          >
            {planet.rotation}
          </p>
        </div>
        <div className="w-[327px] h-[48px] md:mr-[30px] md:w-[164px] md:h-[88px] lg:w-[255px] lg:h-[128px] border-gray-600 border-2 flex justify-between md:flex-col md:justify-center md:pl-6 p-2 md:p-0 mb-[8px] md:mb-0">
          <h2 className="text-[12px] text-gray-400">REVOLUTION TIME</h2>
          <p
            className={`${ant.className} text-[20px] md:text-[24px] lg:text-[40px]`}
          >
            {planet.revolution}
          </p>
        </div>
        <div className="w-[327px] h-[48px] md:mr-[30px] md:w-[164px] md:h-[88px] lg:w-[255px] lg:h-[128px] border-gray-600 border-2 flex justify-between md:flex-col md:justify-center md:pl-6 p-2 md:p-0 mb-[8px] md:mb-0">
          <h2 className="text-[12px] text-gray-400">RADIUS</h2>
          <p
            className={`${ant.className} text-[20px] md:text-[24px] lg:text-[40px]`}
          >
            {planet.radius}
          </p>
        </div>
        <div className="w-[327px] h-[48px] md:mr-[30px] md:w-[164px] md:h-[88px] lg:w-[255px] lg:h-[128px] border-gray-600 border-2 flex justify-between md:flex-col md:justify-center md:pl-6 p-2 md:p-0 mb-[8px] md:mb-0">
          <h2 className="text-[12px] text-gray-400">AVERAGE TEMP.</h2>
          <p
            className={`${ant.className} text-[20px] md:text-[24px] lg:text-[40px]`}
          >
            {planet.temperature}
            
        </p>
        
        </div>
      </div>
      <div>
          <p>Made with 💗 by Chitrankar  </p>
        </div>
    </div>

    
  );
};
export default PlanetInfo;
