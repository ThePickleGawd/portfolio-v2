import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export const unityContext = new UnityContext({
  loaderUrl: "gameBuild/Build.loader.js",
  dataUrl: "gameBuild/Build.data.unityweb",
  frameworkUrl: "gameBuild/Build.framework.js.unityweb",
  codeUrl: "gameBuild/Build.wasm.unityweb",
});

const GameViewer = () => {
  useEffect(() => {
    return () => {
      //unityContext.removeAllEventListeners();
    };
  }, []);

  return (
    <div className={`w-full h-full bg-black`}>
      <Unity unityContext={unityContext} className={`w-full h-full`} />
    </div>
  );
};

export default GameViewer;
