import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function EmailClipboardCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dylanelu@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div
      className={`rounded-lg px-6 py-3 flex items-center bg-neutral-800/70 ${
        copied ? "outline-green-500 outline-2 outline" : "outline-none"
      }`}
    >
      <a href="mailto:dylanelu@gmail.com" className="text-lg text-white flex-1">
        dylanelu@gmail.com
      </a>
      <button onClick={handleCopy} className="ml-4">
        {copied ? (
          <CheckIcon className="h-6 w-6 text-green-500" />
        ) : (
          <ClipboardIcon className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}
