import React from "react";
import WiggleText from "./WiggleText";

const ProjectCard = () => {
  return (
    <div className="rounded-lg hover:animate-breathing hover:bg-cyan-100">
      <div className="p-5">
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
    </div>
  );
};

export default ProjectCard;
