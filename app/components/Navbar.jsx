"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Antonio } from "next/font/google";

const ant = Antonio({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex md:flex-col md:text-center lg:flex-row lg:justify-between md:items-center md:w-full md:p-6 pt-2 md:pt-8  md:border-b-[1px] border-gray-700 text-white">
      <div className="flex pb-10 md:pb-0 md:none justify-between p-4">
        <h1 className={`${ant.className} text-[28px]`}>THE LIVING SPHERE</h1>
        <button className="md:hidden" onClick={toggleMenu}>
          <Image
            src="/assets/hamburger-button.svg"
            width={24}
            height={17}
            alt="burger menu button"
          />
        </button>
      </div>

      {isOpen && (
        <div>
          <Link
            href="/Mercury"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/mercury-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Venus"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/venus-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Earth"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/earth-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Mars"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/mars-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Jupiter"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/jupiter-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Saturn"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/saturn-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Uranus"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/uranus-mobile.svg" width={319} height={25} />
          </Link>
          <Link
            href="/Neptune"
            onClick={() => setIsOpen(false)}
            className="border-b-[1px] border-gray-700 h-[65px] flex justify-center"
          >
            <Image src="/assets/neptune-mobile.svg" width={319} height={25} />
          </Link>
        </div>
      )}

      <div className="hidden md:flex md:justify-around md:w-[650px] md:pt-[39px] lg:pt-0 md:items-center md:text-center">
        <Link
          className="border-t-[#419EBB] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Mercury"
        >
          MERCURY
        </Link>
        <Link
          className="border-t-[#EDA249] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Venus"
        >
          VENUS
        </Link>
        <Link
          className="border-t-[#6F2ED6] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Earth"
        >
          EARTH
        </Link>
        <Link
          className="border-t-[#D14C32] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Mars"
        >
          MARS
        </Link>
        <Link
          className="border-t-[#D83A34] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Jupiter"
        >
          JUPITER
        </Link>
        <Link
          className="border-t-[#CD5120] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Saturn"
        >
          SATURN
        </Link>
        <Link
          className="border-t-[#1EC2A4] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Uranus"
        >
          URANUS
        </Link>
        <Link
          className="border-t-[#2D68F0] lg:hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Neptune"
        >
          NEPTUNE
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
