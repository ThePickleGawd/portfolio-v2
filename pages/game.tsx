import Image from "next/image";
import GameViewer from "../components/Home/Game/GameViewer";
import monitor from "../public/images/monitor.png";
import background from "../public/images/background.png";

const Game = () => {
  return (
    <div
      className={`bg-zinc-900 h-screen w-screen flex justify-center overflow-clip select-none`}
    >
      <Image
        src={background}
        alt="background"
        className={`absolute select-none pointer-events-none`}
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`max-w-screen-xl max-h-screen sm:w-10/12 lg:w-8/12 2xl:w-7/12 absolute bottom-5 overflow-clip`}
      >
        <Image src={monitor} alt="monitor" layout="responsive" />
        <div
          className={`absolute w-full h-full top-0 pt-[3.89%] pl-[3.82%] pr-[4.1%] pb-[28%]`}
        >
          <GameViewer />
        </div>
      </div>
    </div>
  );
};

export default Game;
