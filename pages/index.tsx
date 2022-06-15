import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import WiggleText from "../components/Home/WiggleText";
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

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home: NextPage = () => {
  const router = useRouter();
  const parallaxRef = useRef<IParallax>(null);

  return (
    <Parallax
      pages={6}
      className={`bg-cyan-50 relative dark`}
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
        <div className={`flex flex-col items-center h-full justify-center`}>
          <WiggleText
            text="Dylan Lu"
            fontSize="text-9xl"
            textColor="text-slate-300"
            letterClassOverrides="hover:bg-gradient-to-r hover:text-transparent from-sky-500 to-indigo-500 bg-clip-text -mb-4 font-extrabold"
          />
          <WiggleText
            text="A student developer and engineer"
            classOverrides={`mt-2 mb-5 translate-x-12`}
            letterClassOverrides={`hover:text-red-400 font-semibold`}
            textColor="text-blue-400"
            fontSize="text-xl"
          />
          <div className={`flex space-x-6 justify-start -translate-x-[60px]`}>
            <GradiantButton onClick={() => router.push("/resume")}>
              Resume
            </GradiantButton>
            <GradiantButton onClick={() => router.push("/game")} secondary>
              Game
            </GradiantButton>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} factor={0.5}>
        <ParallaxLayer horizontal offset={0} speed={-0.5} factor={1}>
          <div className={`text-8xl text-gray-500 font-extrabold w-screen`}>
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
      <ParallaxLayer offset={2} speed={0.7}>
        <div className={`text-8xl text-red-400 font-extrabold mt-10 ml-20`}>
          Coding!
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={2.5}
        className={`flex justify-center items-center`}
      >
        <div className="translate-x-[100px] translate-y-[80px]">
          <Image src={c} alt="c" width={250} height={260} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.2}
        className={`flex justify-center items-center`}
      >
        <div className="-translate-x-[140px]">
          <Image src={cpp} alt="cpp" width={175} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div className="absolute left-80 bottom-[475px] hover:bg-blue-500">
          <Image src={react} alt="react" width={200} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.8} className={``}>
        <div className="absolute left-1 bottom-[220px]">
          <Image src={next} alt="next" width={400} height={200} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} className={``}>
        <div className="absolute left-10 bottom-[450px]">
          <Image src={javascript} alt="javascript" width={175} height={175} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.8} className={``}>
        <div className="absolute left-96 bottom-[220px]">
          <Image src={typescript} alt="typescript" width={175} height={175} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div className="absolute right-64 bottom-96">
          <Image src={unity} alt="unity" width={400} height={400} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.75} className={``}>
        <div className="absolute right-1 bottom-64">
          <Image src={cs} alt="cs" width={350} height={350} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.2} className={``}>
        <div
          className={`text-7xl text-green-400 font-extrabold absolute bottom-28 left-60`}
        >
          Web
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} className={`flex justify-center`}>
        <div
          className={`text-7xl text-purple-400 font-extrabold absolute bottom-28`}
        >
          Firmware
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.8} className={``}>
        <div
          className={`text-7xl text-orange-400 font-extrabold absolute bottom-28 right-60`}
        >
          Games
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.9}
        speed={0.6}
        className={`flex flex-col justify-center`}
      >
        <div
          className={`text-8xl text-red-400 font-extrabold mt-10 ml-20 -translate-y-28`}
        >
          And so much more!
        </div>
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
        offset={5}
        speed={2}
        className={`bg-gray-900`}
      ></ParallaxLayer>
    </Parallax>
  );
};

export default Home;
