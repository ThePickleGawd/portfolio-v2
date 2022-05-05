import React, { useState } from "react";

export const WiggleText = ({ text }: { text: string }) => {
  return (
    <div className={`flex`}>
      {React.Children.toArray(
        text.split("").map((x, i) => <WiggleLetter key={i} letter={x} />)
      )}
    </div>
  );
};

const WiggleLetter = ({ letter }: { letter: string }) => {
  const [wiggle, setWiggle] = useState(false);

  if (letter == " ")
    return <div className={`text-8xl select-none`}>&nbsp;</div>;

  return (
    <div
      className={`text-white text-8xl font-semibold hover:text-sky-400 select-none ${
        wiggle && "animate-wiggle"
      }`}
      onMouseOver={() => setWiggle(true)}
      onAnimationEnd={() => setWiggle(false)}
    >
      {letter}
    </div>
  );
};

export default WiggleText;
