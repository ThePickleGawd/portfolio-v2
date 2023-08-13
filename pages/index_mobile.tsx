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
      <div className={`h-screen w-screen flex flex-col items-center space-y-2`}>
        <div className={`text-white font-extrabold text-4xl pt-20`}>
          Psst...
        </div>
        <div className={`text-gray-400 text-md font-bold text-center`}>
          Check this site out on a computer silly!
        </div>
        <div className={`px-2 py-24 m-5 flex flex-col`}>
          <div className="text-white font-extrabold text-xl">Quick summary</div>
          <div className="flex flex-col space-y-3 mt-3">
            {[
              "I can code and develop things",
              "I'm crazy at sports and rapping",
              "Like seriously, you should hire me!",
            ].map((skill) => {
              return (
                <div
                  className={`text-blue-400 bg-gray-800 p-4 rounded-lg text-md font-bold`}
                  key={skill}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
