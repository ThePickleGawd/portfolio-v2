import React from "react";

type ButtonProps = {
  children: React.ReactNode | string;
  secondary?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const GradiantButton = (props: ButtonProps) => {
  return (
    <button
      className={`hover:animate-breathing relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-md group bg-gradient-to-br ${
        props.secondary
          ? "from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          : "from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      } ${props.className}`}
      onClick={props.onClick}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {props.children}
      </span>
    </button>
  );
};

export default GradiantButton;
