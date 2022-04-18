import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "gameBuild/Build.loader.js",
  dataUrl: "gameBuild/Build.data.gz",
  frameworkUrl: "gameBuild/Build.framework.js.gz",
  codeUrl: "gameBuild/Build.wasm.gz",
});

const GameViewer = () => {
  return (
    <div className={`w-full h-full bg-black`}>
      <Unity unityContext={unityContext} />
    </div>
  );
};

export default GameViewer;
