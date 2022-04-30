import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Title from "../components/Home/Title";

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home: NextPage = () => {
  return (
    <div className={`bg-black h-screen w-screen`}>
      <div className={`flex `}>
        <Title />
      </div>
    </div>
  );
};

export default Home;
