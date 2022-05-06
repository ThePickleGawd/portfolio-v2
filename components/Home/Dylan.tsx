import Image from "next/image";
import Aura from "./Aura";
import dylan from "../../public/images/Dylan.png";
import dylanFaded from "../../public/images/Dylan-faded.png";
import { useState } from "react";

const Dylan = () => {
  const [superSaiyan, setSuperSaiyan] = useState(false);

  // TODO: blender render the dylan into the aura

  return (
    <div>
      <Image
        src={dylan}
        alt=""
        layout="fill"
        objectFit="scale-down"
        className="select-none"
      />
      <Aura enabled={superSaiyan} />
      <button
        className="w-screen h-screen absolute z-10"
        onClick={() => setSuperSaiyan((x) => !x)}
      >
        CLICK
      </button>
    </div>
  );
};

export default Dylan;
