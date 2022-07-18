import { useEffect, useState } from "react";
import { useGameContext } from "./GameViewer";

const HintPopover = ({
  open,
  requestClose,
}: {
  open: boolean;
  requestClose: () => void;
}) => {
  const [hint, setHint] = useState("");
  const { addEventListener, removeEventListener, isLoaded } = useGameContext();

  useEffect(() => {
    if (isLoaded) addEventListener("SetHint", setHint);

    return () => {
      if (isLoaded) removeEventListener("SetHint", setHint);
    };
  }, [addEventListener, removeEventListener, setHint, isLoaded]);

  return (
    <div
      className={`${
        !open && "hidden"
      } fixed w-full h-full bg-[rgba(0,0,0,.5)] bg-blend-multiply z-10 grid place-items-center`}
      onClick={requestClose}
    >
      <div
        className={`bg-[#FBE96E] w-3/4 md:w-1/2 xl:w-1/3 h-1/2 rounded-sm shadow-xl grid place-items-center text-xl font-bold text-slate-700 p-5`}
      >
        {hint}
      </div>
    </div>
  );
};

export default HintPopover;
