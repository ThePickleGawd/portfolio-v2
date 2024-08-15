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
import Dylan from "../components/Home/Dylan";

const stars =
  "https://raw.githubusercontent.com/ThePickleGawd/portfolio/main/public/icons/stars.svg";

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home = () => {
  const router = useRouter();

  return (
    <div
      className={`relative dark overflow-x-hidden block lg:hidden bg-black`}
      style={{ backgroundImage: `url(${stars})`, backgroundSize: "contain" }}
    >
      <Head>
        <title>Dylan Lu | Portfolio V2</title>
        <meta
          name="description"
          content="The second iteration of my portfolio"
        />
      </Head>
      <Dylan />
      <div
        className={`h-screen w-screen flex flex-col items-center justify-start space-y-2`}
      >
        <div className={`text-white font-extrabold text-4xl pt-20`}>
          Psst...
        </div>
        <div className="text-white font-extrabold text-xl pt-2">
          View this site on a desktop
        </div>
      </div>
    </div>
  );
};

export default Home;
