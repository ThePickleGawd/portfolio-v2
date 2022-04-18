import Image from "next/image";
import GameViewer from "../components/Home/Game/GameViewer";
import monitor from "../public/images/monitor.png";

const Game = () => {
  return (
    <div
      className={`bg-zinc-900 h-screen w-screen flex justify-center overflow-clip`}
    >
      <div
        className={`max-w-screen-xl max-h-screen sm:w-4/5 lg:w-3/5 2xl:w-1/2 absolute bottom-5 overflow-clip`}
      >
        <Image src={monitor} alt="monitor" layout="responsive" />
        <div
          className={`absolute w-full h-full top-0 pt-[3.9%] pl-[3.9%] pr-[4.2%] pb-[28.3%]`}
        >
          <GameViewer />
        </div>
      </div>
    </div>
  );
};

export default Game;
