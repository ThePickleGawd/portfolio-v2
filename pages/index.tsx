import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import laptopAnimation from "../public/animations/laptop.json";
import LaptopBackground from "../components/Home/Game/LaptopBackground";
import { LottieRef, LottieRefCurrentProps } from "lottie-react";

const Home: NextPage = () => {
  const laptopLottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (laptopLottieRef.current == null) return;

    laptopLottieRef.current.goToAndStop(0, true);
  }, []);

  const click2 = () => {
    laptopLottieRef.current?.goToAndStop(1, true);
  };

  const click = () => {
    console.log("click");
    console.log(laptopLottieRef.current);
    laptopLottieRef.current?.goToAndPlay(2, true);
  };

  return (
    <div className={`bg-black`}>
      <LaptopBackground lottieRef={laptopLottieRef} />
      <div className={`absolute left-32 top-64`}>
        <div className={`font-sans text-6xl text-white`}>Dylan Lu</div>
        <div className={`bg-blue w-10 h-10`}>TEST</div>
      </div>
      <button onClick={click}>Click me</button>
      <button onClick={click2}>Click 2</button>
    </div>
  );
};

export default Home;
