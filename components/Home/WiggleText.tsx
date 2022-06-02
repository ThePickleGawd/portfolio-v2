import React, { useState } from "react";

interface WiggleTextProps {
  text: string;
  fontSize?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl";
  classOverrides?: string;
  letterClassOverrides?: string;
}

export const WiggleText = ({
  text,
  classOverrides = "",
  letterClassOverrides = "",
  fontSize = "lg",
}: WiggleTextProps) => {
  return (
    <div className={`flex relative flex-wrap ${classOverrides}`}>
      {React.Children.toArray(
        text
          .split("")
          .map((x, i) => (
            <WiggleLetter
              key={i}
              letter={x}
              classOverrides={letterClassOverrides}
              fontSize={fontSize}
            />
          ))
      )}
    </div>
  );
};

const WiggleLetter = ({
  letter,
  classOverrides,
  fontSize,
}: {
  letter: string;
  classOverrides: string;
  fontSize: string;
}) => {
  const [wiggle, setWiggle] = useState(false);

  if (letter == " ")
    return <div className={`text-${fontSize} select-none`}>&nbsp;</div>;

  return (
    <div
      className={`text-cyan-50 text-${fontSize} font-semibold hover:text-sky-400 select-none ${
        wiggle && "animate-wiggle"
      } ${classOverrides}`}
      onMouseOver={() => setWiggle(true)}
      onAnimationEnd={() => setWiggle(false)}
    >
      {letter}
    </div>
  );
};

export default WiggleText;
