import React, { ReactChild, useEffect } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export const StarBackground = () => {
  const customInit = async (engine: Engine): Promise<void> => {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  };
  const options: ISourceOptions = {
    preset: "stars",
    particles: {
      number: {
        density: {
          enable: true,
          area: 900,
        },
      },
    },
  };

  return <Particles options={options} init={customInit} />;
};

export default StarBackground;
