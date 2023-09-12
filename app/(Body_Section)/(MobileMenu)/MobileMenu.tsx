"use client";
import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { setMobileMenu } from "../../../Redux-store/Redux-action";
import { useDispatch } from "react-redux";
import MoreMobile from "./MoreMobile";
import Link from "next/link";
import Image from "next/image";

function MobileMenu() {
  const [course, setcourse] = useState<boolean>(false);
  const [More, setMore] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <div
      id="scroolbar-hidden"
      className={` group  flex flex-col items-center 860:hidden cursor-pointer animate-slideleft overflow-y-scroll  shadow-lg shadow-[#2A0E61]/50  fixed inset-x-0 bottom-0
       z-[999] w-[80%] 500:w-[60%] h-full  text-gray-300  bg-slate-950 
       pb-5 sm:hidden px-[15px] `}
    >
      <div className="w-full min-h-[60px] flex flex-row items-center  justify-between">
        <div
          onClick={() => dispatch(setMobileMenu(false))}
          className=" flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-6 w-6  mr-[5px] " />
          <span className=" text-[17px]">Back</span>
        </div>
        <Image
          src={"/glaxy.png"}
          width={40}
          height={40}
          alt="Hyat Myat"
          className="  cursor-pointer  hover:animate-slowspin  "
        />
      </div>
      <Link href={"/"} 
        className=" w-full min-h-[50px] rounded-[10px] border
        hover:border-sky-500  border-[#7042f861] mt-[15px] flex flex-row  items-center font-semibold justify-center  ">
        Home
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[9px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
      <Link
        href={"/Project"}
        className=" w-full min-h-[50px] rounded-[10px] border
             hover:border-sky-500  border-[#7042f861] mt-[15px] flex flex-row  items-center font-semibold justify-center  "
      >
        Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[9px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
      <Link href={"AboutMe"}
        className=" w-full min-h-[50px] rounded-[10px] border pl-[25px]
             hover:border-sky-500  border-[#7042f861] mt-[15px] flex flex-row  text-gray-200 items-center font-semibold justify-center "
      >
        About Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[9px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
      <div
        onClick={() => setMore(!More)}
        className=" w-full min-h-[50px] rounded-[10px] border pr-[5px]
             hover:border-sky-500  border-[#7042f861] flex flex-row mt-[15px] items-center font-semibold justify-center "
      >
        Menu
        <ChevronDownIcon className=" w-[20px] h-[20px]  text-gray-200 translate-y-[2px] group-hover:text-[#0000009e] group-hover:text-gray-50 ml-[10px]" />
      </div>
      {More ? <MoreMobile /> : <div></div>}
    </div>
  );
}

export default MobileMenu;
