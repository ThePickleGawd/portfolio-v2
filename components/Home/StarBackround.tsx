import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export const StarBackground = () => {
  const customInit = async (engine: Engine): Promise<void> => {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  };
  const options = {
    preset: "stars",
  };

  return <Particles options={options} init={customInit} />;
};

export default StarBackground;
