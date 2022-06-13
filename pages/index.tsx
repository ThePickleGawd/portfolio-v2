import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import WiggleText from "../components/Home/WiggleText";
import Image from "next/image";
import football from "../public/images/football03.png";
import GradiantButton from "../components/GradiantButton";
import { useRouter } from "next/router";
import Particles from "react-tsparticles";
import test from "../public/images/test.svg";
import aura from "../public/images/aura.png";
import Aura from "../components/Home/Aura";
import Dylan from "../components/Home/Dylan";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectCard from "../components/Home/ProjectCard";
import Head from "next/head";

import cpp from "../public/images/skills/cpp.png";
import FadeInSection from "../components/FadeInSection";

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
      pages={4}
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
      <ParallaxLayer speed={1.5} className={`bg-[#141717]`}></ParallaxLayer>
      <ParallaxLayer speed={1}>
        <div className={`flex flex-col items-center h-full justify-center`}>
          <WiggleText
            text="Dylan Lu"
            fontSize="text-9xl"
            textColor="text-cyan-50"
            letterClassOverrides="hover:text-sky-400 font-extrabold"
          />
          <WiggleText
            text="A student developer and engineer"
            classOverrides={`mt-10 mb-5`}
            letterClassOverrides={`hover:text-red-400`}
            textColor="text-slate-400"
            fontSize="text-xl"
          />
          <div className={`flex space-x-2`}>
            <GradiantButton onClick={() => router.push("/resume")}>
              Resume
            </GradiantButton>
            <GradiantButton onClick={() => router.push("/game")} secondary>
              Game
            </GradiantButton>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} factor={0.1}>
        <ParallaxLayer horizontal offset={0} speed={-0.5} factor={1}>
          <div className={`text-8xl text-gray-500 font-extrabold`}>
            {"Things I'm crazy at..."}
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.9}
        speed={2}
        factor={3.5}
        className={"bg-gray-900"}
      ></ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.2}>
        <div className={`text-8xl text-red-400 font-extrabold mt-10 ml-20`}>
          Coding!
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.2}
        className={`flex justify-end items-center`}
      >
        <Image src={cpp} alt="cpp" width={250} height={275} className="" />
      </ParallaxLayer>
      {/* <ParallaxLayer speed={0.5} offset={3} factor={2}>
        <div className={`w-full h-full p-10`}>
          <div className={`text-7xl font-semibold`}>Notable Projects</div>
          <div
            className={`grid gap-4 xl:grid-cols-3 lg:grid-cols-1 lg:pt-5 xl:pt-20`}
          >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </ParallaxLayer> */}
    </Parallax>
  );
};

export default Home;
