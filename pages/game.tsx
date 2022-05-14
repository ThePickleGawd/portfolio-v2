import Image from "next/image";
import GameViewer from "../components/Game/GameViewer";
import monitor from "../public/images/monitor.png";
import postit from "../public/images/post-it.png";
import postitHover from "../public/images/post-it-hover.png";
import background from "../public/images/background.png";
import background4k from "../public/images/background-4k.png";
import GradiantButton from "../components/GradiantButton";
import { useRouter } from "next/router";
import { useState } from "react";
import HintPopover from "../components/Game/HintPopover";

const Game = () => {
  const router = useRouter();
  const [hintHover, setHintHover] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <div
      className={`bg-zinc-900 h-screen w-screen flex justify-center overflow-clip select-none`}
    >
      <Image
        src={background4k}
        alt="background"
        className={`absolute select-none pointer-events-none`}
        layout="fill"
        objectFit="cover"
        priority
      />
      <HintPopover open={hintOpen} requestClose={() => setHintOpen(false)} />
      <div className={`absolute left-6 top-5`}>
        <GradiantButton onClick={() => router.push("/")}>Back</GradiantButton>
      </div>
      <div
        className={`max-w-screen-xl max-h-screen inline-block sm:w-8/12 lg:w-7/12 2xl:w-7/12 absolute bottom-5 overflow-clip mb-1`}
      >
        <Image
          src={monitor}
          alt="monitor"
          layout="responsive"
          placeholder="blur"
        />
        <div
          className={`absolute w-full h-full top-0 pt-[3.89%] pl-[3.82%] pr-[4.1%] pb-[28%]`}
        >
          <GameViewer />
        </div>
        <div
          className={`sm:w-[86px] sm:h-[95px] md:w-[107px] md:h-[119px] absolute sm:bottom-9 md:bottom-13 lg:bottom-15 right-0`}
          onMouseOver={() => setHintHover(true)}
          onMouseLeave={() => setHintHover(false)}
          onClick={() => setHintOpen(true)}
        >
          <Image
            src={postit}
            alt=""
            layout="fill"
            className={`${hintHover && "opacity-0"}`}
          />
          <Image
            src={postitHover}
            alt=""
            layout="fill"
            className={`${!hintHover && "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
