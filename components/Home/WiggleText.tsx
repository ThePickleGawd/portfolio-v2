import React, { useEffect, useState } from "react";
import classnames from "classnames";

interface WiggleTextProps {
  text: string;
  fontSize?:
    | "text-sm"
    | "text-md"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  textColor?: string;
  classOverrides?: string;
  letterClassOverrides?: string;
}

export const WiggleText = ({
  text,
  classOverrides = "",
  letterClassOverrides = "",
  fontSize = "text-lg",
  textColor = "text-cyan-50",
}: WiggleTextProps) => {
  const classStr = classnames("flex relative flex-wrap", classOverrides);

  return (
    <div className={classStr}>
      {React.Children.toArray(
        text
          .split("")
          .map((x, i) => (
            <WiggleLetter
              key={i}
              letter={x}
              classOverrides={letterClassOverrides}
              fontSize={fontSize}
              textColor={textColor}
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
  textColor,
}: {
  letter: string;
  classOverrides: string;
  fontSize: string;
  textColor: string;
}) => {
  const [wiggle, setWiggle] = useState(false);

  const letterClassStr = classnames(
    { [`${classOverrides}`]: true },
    `font-semibold select-none`,
    { "animate-wiggle": wiggle },
    { [`${fontSize}`]: true },
    { [`${textColor}`]: true }
  );
  const emptyClassStr = classnames(`select-none`, `${fontSize}`);

  if (letter == " ") return <div className={emptyClassStr}>&nbsp;</div>;

  return (
    <div
      className={letterClassStr}
      onMouseOver={() => setWiggle(true)}
      onAnimationEnd={() => setWiggle(false)}
    >
      {letter}
    </div>
  );
};

export default WiggleText;
