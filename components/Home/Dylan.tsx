import GradiantButton from "../GradiantButton";
import WiggleText from "./WiggleText";
import { useRouter } from "next/router";

export const Dylan = () => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-center h-screen w-screen justify-start mt-[45%] lg:justify-center lg:mt-0`}
    >
      <WiggleText
        text="Dylan Lu"
        fontSize="text-6xl"
        textColor="text-slate-300"
        letterClassOverrides="hover:bg-gradient-to-r hover:text-transparent from-sky-500 to-indigo-500 bg-clip-text -mb-4 font-extrabold lg:text-9xl"
      />
      <WiggleText
        text="A student developer and engineer"
        classOverrides={`mt-2 mb-5 lg:translate-x-12`}
        letterClassOverrides={`hover:text-red-400 font-semibold`}
        textColor="text-blue-400"
        fontSize="text-xl"
      />
      <div
        className={`flex space-x-6 justify-center items-center lg:-translate-x-[60px]`}
      >
        <GradiantButton onClick={() => router.push("/dylan-lu-resume.pdf")}>
          Resume
        </GradiantButton>
        <GradiantButton
          onClick={() => router.push("/game")}
          secondary
          className="hidden sm:inline-flex"
        >
          Game
        </GradiantButton>
      </div>
    </div>
  );
};

export default Dylan;
