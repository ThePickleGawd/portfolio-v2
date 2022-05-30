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
      pages={2}
      className={`bg-cyan-50 relative dark`}
      ref={parallaxRef}
    >
      <ParallaxLayer speed={1.5} className={`bg-[#1D1D1D]`}></ParallaxLayer>
      <ParallaxLayer speed={1}>
        <div className={`pl-24 pt-24`}>
          <WiggleText text="Hello!" />
          <WiggleText text="I'm Dylan" />
          <div
            className={`my-5 text-xl  text-gray-400`}
          >{`A student developer`}</div>
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
      <ParallaxLayer speed={0.5} offset={1} className={``}>
        <div className={`flex justify-around w-full h-full pt-[5%]`}>
          <div className={``}>
            <div className={`text-2xl`}>Notable Projects</div>
            <div className={`grid grid-cols-5 grid-rows-2`}>
              <div>TEST</div>
              <div>TEST</div>
              <div>TEST</div>
              <div>TEST</div>
              <div>TEST</div>
            </div>
          </div>
          <div>Rap Videos</div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
