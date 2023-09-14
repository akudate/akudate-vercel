import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      {/* <div className=" w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div> */}
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Mon, 11 Sep 2023</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hi, I&apos;m Daffa
        </div>
        <div className=" text-gray-300 animate-slideright ">
          A passionate software engineer with a deep passion for creating elegant and efficient solutions through code. With a comprehensive understanding of various <span className="text-sky-500">frontend</span> & <span className="text-emerald-500">backend</span> libraries and frameworks, I have been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in Cirebon, <span className="text-rose-600">Indonesia</span>.
        </div>
        <div>
          <div style={{ opacity: 0, userSelect: 'none' }} className="text-[5px]  my-[15px]  animate-slideright ">
            <span className="monospace">All i learning selfstudy from</span>
            <span className="text-rose-600"> youtube</span> ,
            <span className="text-emerald-500"> Google</span> ,
            <span className=" text-[#F48024]"> Stackoverflow</span>
          </div>
        </div>
        <div className="text-gray-300  animate-slideright">
          As a <span className="text-yellow-500">fast learner</span> and <span className=" text-[#F48024]">adaptive thinker</span>, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every members input.
        </div>
        {/* <div className=" text-gray-300  animate-slideright  ">
          <span className="monospace ">In my free time, I learing</span>
          <span className="text-sky-500"> Golang</span> ,
          <span className="text-yellow-500"> Gin </span>
          <span className="">
            For My Dream Mutiplayer Game Server and Backend Developments
          </span>
        </div> */}
        {/* <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Development Experience ⏳
        </div>
        <div className="mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]">
          I&apos;m a skilled web developer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, and expertise
          in frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>, and
          <span className="text-[#433a74] "> Next js</span>. I&apos;m a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let&apos;s work together to bring your ideas to life!
        </div> */}
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  ">
        <span className="text-sky-500">Frontend</span> 
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
          Next.js, React.js, Vue.js, JavaScript, TypeScript, Bootstrap, Tailwind, CSS.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
        <span className="text-emerald-500">Backend</span>
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Node.js, Express.js, Laravel, CodeIgniter, PHP, MongoDB, Firebase, Prisma, Docker, MySQL.
        </div>
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Projects
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
