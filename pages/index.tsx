import { useEffect, useRef } from "react";
import type { NextPage } from "next";

/*

Raps Page:
Raps page is locked. The key can be found ingame in the Game tab.
If you're in a hurry, it can also be unlocked by typing "Dylan is the most sexy person alive"
*/

const Home: NextPage = () => {
  return (
    <div className={`bg-black h-screen w-screen`}>
      <div
        className={`w-screen h-screen flex flex-col space-y-4 items-center justify-center`}
      >
        <div className={`text-white text-8xl`}>{"Dylan Lu"}</div>
        <div className={`text-white text-3xl`}>{"<Developer/>"}</div>
      </div>
    </div>
  );
};

export default Home;
