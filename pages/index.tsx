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

  const [scrollTop, setScrollTop] = useState(0);

  const superSaiyan = () => scrollTop != 0;

  useEffect(() => {
    parallaxRef.current?.container.current.addEventListener("scroll", () =>
      setScrollTop(parallaxRef.current?.container.current.scrollTop)
    );
  }, [parallaxRef]);

  return (
    <Parallax
      pages={3}
      className={`bg-slate-300 ${superSaiyan() && "animate-shake"}`}
      ref={parallaxRef}
    >
      <ParallaxLayer>
        {console.log(parallaxRef.current?.container.current.scrollTop)}
        <div className="absolute w-full h-full z-20">
          <div className={`text-cyan-500 text-5xl`}>A Super Saiyan God</div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 3 }} className={`-z-10`}>
        <Dylan superSaiyan={superSaiyan()} />
      </ParallaxLayer>
      <ParallaxLayer speed={5}>
        <div className={`bg-[#1D1D1D] h-screen w-screen`} />
      </ParallaxLayer>
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
    </Parallax>
  );
};

export default Home;
