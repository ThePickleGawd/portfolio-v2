import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import WiggleText from "../components/Home/WiggleText";
import Image from "next/image";
import football from "../public/images/football03.png";
import GradiantButton from "../components/GradiantButton";
import { useRouter } from "next/router";
import background from "../public/images/background.png";
import Particles from "react-tsparticles";

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={`bg-[#1D1D1D] h-screen w-screen`}>
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
    </div>
  );
};

export default Home;
