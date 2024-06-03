import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import WiggleText, { WiggleParagraph } from "../components/Home/WiggleText";
import Image from "next/image";
import football from "../public/images/football03.png";
import GradiantButton from "../components/GradiantButton";
import { useRouter } from "next/router";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectCard from "../components/Home/ProjectCard";
import Head from "next/head";
import Navbar from "../components/Home/Navbar";

// Images
import cpp from "../public/images/skills/cpp.png";
import c from "../public/images/skills/c.png";
import javascript from "../public/images/skills/javascript.png";
import typescript from "../public/images/skills/typescript.png";
import python from "../public/images/skills/python.png";
import next from "../public/images/skills/next.png";
import react from "../public/images/skills/react.png";
import unity from "../public/images/skills/unity.png";
import cs from "../public/images/skills/cs.png";
import java from "../public/images/skills/java.png";
import rpi from "../public/images/skills/rpi.svg";
import vim from "../public/images/skills/vim.png";
import Dylan from "../components/Home/Dylan";
import StarBackground from "../components/Home/StarBackround";
import Link from "next/link";

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home = () => {
  const router = useRouter();
  const parallaxRef = useRef<IParallax>(null);
  const iconSizeBreakpoints = "sm:w-36 md:w-36 lg:w-48 xl:w-52 2xl:w-auto";

  return (
    <Parallax
      pages={6}
      className={`bg-cyan-50 relative dark scrollbar hidden lg:block`}
      ref={parallaxRef}
    >
      <Head>
        <title>Dylan Lu | Portfolio V2</title>
        <meta
          name="description"
          content="The second iteration of my portfolio"
        />
      </Head>
      <Navbar />
      <ParallaxLayer factor={7}>
        <StarBackground />
      </ParallaxLayer>

      <ParallaxLayer speed={1.5} className={"flex justify-center"}>
        <div
          className={`text-slate-500 text-lg absolute bottom-5 tracking-widest`}
        >
          Scroll
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={1}>
        <Dylan />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} factor={0.5}>
        <ParallaxLayer horizontal offset={0} speed={-0.5} factor={1}>
          <div
            className={`text-5xl xl:text-8xl lg:text-6xl text-gray-400 font-extrabold w-screen`}
          >
            {"Things I'm crazy at..."}
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.7} className="z-10" factor={0.2}>
        <WiggleText
          classOverrides={`font-extrabold mt-10 ml-20`}
          textColor="text-red-400"
          fontSize="text-8xl"
          text="Coding!"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={2.5}
        className={`flex justify-center items-center`}
      >
        <div
          className={`translate-x-[100px] xl:translate-y-[80px] translate-y-[160px] ${iconSizeBreakpoints}`}
        >
          <Image priority src={c} alt="c" width={250} height={260} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.2}
        className={`flex justify-center items-center`}
      >
        <div
          className={`2xl:-translate-x-[140px] xl:-translate-x-[90px] ${iconSizeBreakpoints}`}
        >
          <Image priority src={cpp} alt="cpp" width={175} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div
          className={`absolute left-64 bottom-[475px] hover:bg-blue-500 ${iconSizeBreakpoints}`}
        >
          <Image priority src={react} alt="react" width={200} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.8} className={``}>
        <div
          className={`absolute left-1 bottom-[220px] ${iconSizeBreakpoints}`}
        >
          <Image priority src={next} alt="next" width={300} height={150} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} className={``}>
        <div
          className={`absolute left-10 bottom-[450px] ${iconSizeBreakpoints}`}
        >
          <Image
            priority
            src={javascript}
            alt="javascript"
            width={175}
            height={175}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.8} className={``}>
        <div
          className={`absolute 2xl:left-96 left-64 bottom-[220px] ${iconSizeBreakpoints}`}
        >
          <Image
            priority
            src={typescript}
            alt="typescript"
            width={175}
            height={175}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div
          className={`absolute right-36 lg:right-52 xl:right-64 bottom-96 ${iconSizeBreakpoints}`}
        >
          <Image priority src={unity} alt="unity" width={300} height={300} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.75} className={``}>
        <div className={`absolute right-1 bottom-64 ${iconSizeBreakpoints}`}>
          <Image priority src={cs} alt="cs" width={250} height={250} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div
          className={`text-5xl lg:text-7xl text-green-400 font-extrabold absolute bottom-28 left-[10%]`}
        >
          Web
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} className={`flex justify-center`}>
        <div
          className={`text-5xl lg:text-7xl text-purple-400 font-extrabold absolute bottom-28`}
        >
          Low Level
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.8} className={``}>
        <div
          className={`text-5xl lg:text-7xl text-orange-400 font-extrabold absolute bottom-28 right-[7%]`}
        >
          Games
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.9}
        speed={0.6}
        className={`z-10 flex flex-col justify-center`}
      >
        <WiggleText
          classOverrides={`font-extrabold mt-10 ml-20 -translate-y-28`}
          textColor="text-red-400"
          fontSize="text-8xl"
          text="More coding!"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1.25} className={`flex justify-center`}>
        <div className="translate-x-10 translate-y-5">
          <Image priority src={python} alt="python" width={250} height={250} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1.4} className={`flex justify-center`}>
        <div className="-translate-x-64 -translate-y-32">
          <Image priority src={java} alt="java" width={250} height={250} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1.2} className={`flex justify-center`}>
        <div className="translate-x-80 -translate-y-52">
          <Image priority src={rpi} alt="rpi" width={200} height={260} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.2}
        speed={0.6}
        className={`z-10 flex flex-col justify-end`}
      >
        <WiggleText
          classOverrides={`font-extrabold mt-10 ml-20 -translate-y-28`}
          textColor="text-gray-400"
          fontSize="text-8xl"
          text="Oh yeah, and..."
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.5}
        speed={1}
        className={`flex justify-center items-center flex-col`}
      >
        <div className="flex flex-col justify-center items-center w-screenrounded-xl max-w-screen-2xl p-24 skew-y-12">
          <WiggleText
            classOverrides={`font-extrabold`}
            letterClassOverrides={`hover:text-yellow-300 xl:text-7xl`}
            textColor={"text-yellow-400"}
            fontSize="text-5xl"
            text={`All of these!`}
          />
          <WiggleParagraph
            classOverrides="font-semibold"
            letterClassOverrides="hover:text-yellow-300 xl:text-5xl"
            textColor="text-yellow-400"
            fontSize="text-3xl"
            text={`
            Photoshop, Linux, Vim, Schematics, Audacity,
            FL Studio, Elden Ring?, Bluetooth Low Energy, 
            Rapping???, Basketball, Being like Goku, 
            Databases, NumPy, PyTorch, Writing Essays,
            GitHub, Giving Great Presentations,
            SATs, ZELDA, Creativity, Leetcode, 
            Trying to run a sub 5 mile, ChemH, 
            Building computers, Training AI, Golf,
            Premiere Pro, After Effects, 
            Clearly not very good UI,
            Music videos, Scoring toudies, 
            USACO, Reading Books, 
            Scoring an 80 yard kickoff return TD 
            on the first play of the game`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={5.5}
        speed={0.6}
        className={`z-10 flex flex-col justify-center`}
      >
        <div className="font-extrabold mt-10 ml-20 -translate-y-28 text-5xl text-blue-500">
          <Link href="https://v1.dylanlu.com">
            Wanna see the older version?
          </Link>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

// Rapping!
// <ParallaxLayer
//   offset={3}
//   speed={0.8}
//   className={`flex justify-start ml-[5%]`}
// >
//   <div
//     className={
//       "-rotate-[25deg] flex items-center flex-col group space-y-3 hover:tracking-widest hover:cursor-pointer h-5"
//     }
//     onClick={() => router.push("/raps")}
//   >
//     <div className="text-6xl font-bold text-indigo-700 group-hover:text-blue-500">
//       {"Rapping?"}
//     </div>
//     <div className="text-md font-semibold text-slate-400">
//       {"(Click me)"}
//     </div>
//   </div>
// </ParallaxLayer>
