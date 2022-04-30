import React, { useState } from "react";

export const Title = () => {
  return (
    <div className={`flex`}>
      {React.Children.toArray(
        "Dylan Lu".split("").map((x, i) => <WiggleLetter key={i} letter={x} />)
      )}
    </div>
  );
};

const WiggleLetter = ({ letter }: { letter: string }) => {
  const [wiggle, setWiggle] = useState(false);

  if (letter == " ") return <div className={`text-8xl`}>&nbsp;</div>;

  return (
    <div
      className={`text-white text-8xl ${
        wiggle && "animate-wiggle text-teal-300"
      } `}
      onMouseOver={() => setWiggle(true)}
      onAnimationEnd={() => setWiggle(false)}
    >
      {letter}
    </div>
  );
};

export default Title;
