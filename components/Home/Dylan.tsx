import Image from "next/image";
import Aura from "./Aura";
import dylan from "../../public/images/Dylan.png";
import dylanFaded from "../../public/images/Dylan-faded.png";
import dylan2 from "../../public/images/Dylan2.png";
import { useState } from "react";

const Dylan = ({ superSaiyan }: { superSaiyan: boolean }) => {
  // TODO: blender render the dylan into the aura

  return (
    <div className={`relative w-screen h-screen`}>
      <Image
        src={dylanFaded}
        alt=""
        layout="fill"
        objectFit="scale-down"
        className={`select-none ${superSaiyan && "opacity-0"} `}
      />
      <Image
        src={dylan2}
        alt=""
        layout="fill"
        objectFit="scale-down"
        className={`select-none ${!superSaiyan && "opacity-0"} ${
          superSaiyan && "animate-breathing"
        }`}
      />
      <Aura enabled={superSaiyan} />
    </div>
  );
};

export default Dylan;
