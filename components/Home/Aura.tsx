import SequenceAnimator from "../SequenceAnimator/SequenceAnimator";
import Image from "next/image";

const Aura = ({ enabled }: { enabled: boolean }) => {
  return (
    <div className={`${!enabled && "hidden"}`}>
      <SequenceAnimator loop>
        {Array.from({ length: 30 }, (x, i) => i).map((x) => {
          return (
            <Image
              key={x}
              src={
                "/images/aura_render/00" +
                (x + 1 < 10 ? `0${x + 1}` : x + 1) +
                ".png"
              }
              alt=""
              layout="fill"
              objectFit="cover"
              className="select-none relative opacity-50"
              priority
            />
          );
        })}
      </SequenceAnimator>
    </div>
  );
};

export default Aura;
