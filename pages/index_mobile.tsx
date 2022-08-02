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
import StarBackground from "../components/Home/StarBackround";
import Link from "next/link";

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home = () => {
  const router = useRouter();

  return (
    <div className={`relative dark overflow-x-hidden block lg:hidden bg-black`}>
      <Head>
        <title>Dylan Lu | Portfolio V2</title>
        <meta
          name="description"
          content="The second iteration of my portfolio"
        />
      </Head>
      <Dylan />
      <div
        className={`h-screen w-screen bg-cyan-50 flex flex-col items-center space-y-2`}
      >
        <div className={`text-black font-extrabold text-4xl pt-20`}>
          So Sad!
        </div>
        <div className={`text-gray-700 text-md font-bold text-center`}>
          If you had a bigger screen, this site is a lot cooler!
        </div>
        <div className={"flex-1 flex justify-center items-center"}>
          TODO: insert crying picture
        </div>
        <div className={"h-10"}>
          In the meantime, checkout my{" "}
          <a href="raps" className="text-cyan-500">
            raps!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
