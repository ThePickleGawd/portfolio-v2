import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { text } from "node:stream/consumers";

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

interface WiggleParagraphProps {
  text: string;
  classOverrides?: string;
  lineClassOverrides?: string;
  letterClassOverrides?: string;
  textColor?: string;
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
}

interface WiggleLineProps {
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

export const WiggleParagraph = ({
  text,
  classOverrides = "",
  lineClassOverrides = "",
  letterClassOverrides = "",
  fontSize = "text-lg",
  textColor = "text-cyan-50",
}: WiggleParagraphProps) => {
  const classStr = classnames(
    "flex flex-col items-center justify-center space-y-5 w-full",
    classOverrides
  );

  return (
    <div className={classStr}>
      {React.Children.toArray(
        text
          .split("\n")
          .map((x, i) => (
            <WiggleLine
              key={i}
              text={x}
              classOverrides={lineClassOverrides}
              letterClassOverrides={letterClassOverrides}
              fontSize={fontSize}
              textColor={textColor}
            />
          ))
      )}
    </div>
  );
};

export const WiggleLine = ({
  text = "",
  classOverrides = "",
  letterClassOverrides = "",
  fontSize = "text-lg",
  textColor = "text-cyan-50",
}: WiggleLineProps) => {
  const classStr = classnames("flex w-full justify-between", classOverrides);
  return (
    <div className={classStr}>
      {text
        .split("")
        .filter((x, i, arr) => !(x === " " && arr[i - 1] === " "))
        .map((x, i) => (
          <WiggleLetter
            key={i}
            letter={x}
            classOverrides={letterClassOverrides}
            fontSize={fontSize}
            textColor={textColor}
          />
        ))}
    </div>
  );
};

export const WiggleLetter = ({
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
    `select-none`,
    { "animate-wiggle": wiggle },
    { [`${fontSize}`]: true },
    { [`${textColor}`]: true },
    { [`${classOverrides}`]: true }
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
