import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const useGameContext = () => {
  const unityContext = useUnityContext({
    loaderUrl: "gameBuild/Build.loader.js",
    dataUrl: "gameBuild/Build.data.unityweb",
    frameworkUrl: "gameBuild/Build.framework.js.unityweb",
    codeUrl: "gameBuild/Build.wasm.unityweb",
  });

  return unityContext;
};

const GameViewer = () => {
  const router = useRouter();
  const { unityProvider, unload, isLoaded, loadingProgression } =
    useGameContext();
  const [unloaded, setUnloaded] = useState(false);

  useEffect(() => {
    const unloadBruh = async () => {
      await unload().then(() => {
        setUnloaded(true);
        router.push("/");
      });
    };

    Router.beforePopState(({ as }) => {
      if (!isLoaded || unloaded) return true;

      if (as !== router.asPath) {
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state

        unloadBruh();
      }
      return false;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router, unload, isLoaded, unloaded]); // Add any state variables to dependencies array if needed.

  return (
    <div className={`w-full h-full bg-black`}>
      {!isLoaded && (
        <div className={`text-white text-2xl font-semibold p-10`}>
          Loading... {loadingProgression * 100}%
        </div>
      )}
      <Unity unityProvider={unityProvider} className={`w-full h-full`} />
    </div>
  );
};

export default GameViewer;
