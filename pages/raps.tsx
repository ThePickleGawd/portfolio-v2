import React from "react";
import RapCard from "../components/Raps/RapCard";

const Raps = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className={`bg-slate-700 flex-1 flex flex-col items-center pt-5`}>
        <div className={`font-bold text-6xl text-cyan-50`}>
          {"Dylan's insanely fire raps"}
        </div>
        <div className="grid grid-cols-2 w-full gap-5 px-5 pt-10">
          <RapCard />
          <RapCard />
          <RapCard />
          <RapCard />
          <RapCard />
        </div>
      </div>
      <div className={`bg-cyan-100 2xl:w-[800px] xl:w-[500px] lg:w-0`}></div>
      <div className={`absol`}></div>
    </div>
  );
};

export default Raps;
