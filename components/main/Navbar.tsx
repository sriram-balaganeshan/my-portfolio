import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            FrontEnd Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div style={{background : 'rgb(225 225 225 / 0.1)'}} className="flex items-center justify-between  w-full h-auto border border-[#7042f861]   mr-[15px] px-[20px] py-[10px] rounded-full ">
            <a  href="#about-me" className=" !uppercase !text-[12px] !opacity-90  !z-[999] text-[#FFF] hover:text-indigo-500">
              About me
            </a>
            <a href="#skills" className="cursor-pointer !uppercase !text-[12px] !opacity-90  !z-[999] text-[#FFF] hover:text-indigo-500">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer !uppercase !text-[12px] !opacity-90  !z-[999] text-[#FFF] hover:text-indigo-500">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href="https://www.instagram.com/_roger_fox_/">
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
