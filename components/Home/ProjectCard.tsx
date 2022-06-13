import React from "react";
import WiggleText from "./WiggleText";
import tmp from "../../public/images/projects/tmp.jpg";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="rounded-lg hover:animate-breathing hover:bg-cyan-100">
      <div className="p-5 lg:flex xl:block">
        <div>
          <WiggleText
            text={`Gunncoin`}
            fontSize="text-xl"
            textColor="text-black"
          />
          <WiggleText
            text={`Decentralized project that ls;akdjf;lsdjf;lskj ;lskjd;lfjs;ldfj`}
            fontSize="text-lg"
            textColor="text-slate-500"
          />
        </div>
        <div
          className={`xl:w-full lg:w-96 xl:h-auto lg:h-[20vh] px-10 pt-5 overflow-clip`}
        >
          <Image src={tmp} alt="tmp" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
