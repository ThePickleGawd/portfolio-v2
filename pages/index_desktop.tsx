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
      pages={12}
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
      <ParallaxLayer speed={1.5} className={"bg-black flex justify-center"}>
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
            className={`text-5xl xl:text-8xl lg:text-6xl text-gray-500 font-extrabold w-screen`}
          >
            {"Things I'm crazy at..."}
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.9}
        speed={2}
        factor={5.5}
        className={"bg-gray-900"}
      ></ParallaxLayer>
      <ParallaxLayer offset={2}></ParallaxLayer>
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
          <Image src={c} alt="c" width={250} height={260} />
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
          <Image src={cpp} alt="cpp" width={175} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div
          className={`absolute left-64 bottom-[475px] hover:bg-blue-500 ${iconSizeBreakpoints}`}
        >
          <Image src={react} alt="react" width={200} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.8} className={``}>
        <div
          className={`absolute left-1 bottom-[220px] ${iconSizeBreakpoints}`}
        >
          <Image src={next} alt="next" width={300} height={150} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} className={``}>
        <div
          className={`absolute left-10 bottom-[450px] ${iconSizeBreakpoints}`}
        >
          <Image src={javascript} alt="javascript" width={175} height={175} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.8} className={``}>
        <div
          className={`absolute 2xl:left-96 left-64 bottom-[220px] ${iconSizeBreakpoints}`}
        >
          <Image src={typescript} alt="typescript" width={175} height={175} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div
          className={`absolute right-36 lg:right-52 xl:right-64 bottom-96 ${iconSizeBreakpoints}`}
        >
          <Image src={unity} alt="unity" width={300} height={300} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.75} className={``}>
        <div className={`absolute right-1 bottom-64 ${iconSizeBreakpoints}`}>
          <Image src={cs} alt="cs" width={250} height={250} />
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
          Firmware
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
          <Image src={python} alt="python" width={250} height={250} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1.4} className={`flex justify-center`}>
        <div className="-translate-x-64 -translate-y-32">
          <Image src={java} alt="java" width={250} height={250} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1.2} className={`flex justify-center`}>
        <div className="translate-x-80 -translate-y-52">
          <Image src={rpi} alt="rpi" width={200} height={260} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={2}
        factor={3}
        className={`bg-red-400`}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={4.2}
        speed={2}
        className={`ml-16 flex justify-center align-center flex-col`}
      >
        <WiggleText
          classOverrides="text-gray-700 text-7xl font-extrabold"
          fontSize="text-7xl"
          textColor="text-gray-700"
          text="Oh yeah, and..."
        />
        <div className="w-screen">
          <WiggleParagraph
            classOverrides="text-white pt-5 pr-[150px] font-bold max-w-screen-2xl space-y-8"
            letterClassOverrides="hover:text-blue-400"
            fontSize="text-6xl"
            text={` Photoshop, Linux, Premiere Pro, Vim, Schematics, Audacity, FL
            Studio, The Witcher 3?, Bluetooth Low Energy, Rapping???,
            Basketball, I'm literally Goku, Databases, Spreadsheets, Excel,
            Powerpoint/Google Slides, Presentations, Writing Reports, SATs,
            ZELDA!!!!, Creativity, Driving, Leetcode`}
          />
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
