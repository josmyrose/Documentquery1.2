"use client";

import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState } from "react";

const particleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: {
      value: 70,
      density: { enable: true, width: 1200, height: 800 },
    },
    color: { value: "#facc15" },
    links: {
      enable: true,
      color: "#facc15",
      distance: 150,
      opacity: 0.16,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      outModes: { default: "bounce" },
    },
    opacity: { value: 0.45 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 180,
        links: { opacity: 0.28 },
      },
    },
  },
  detectRetina: true,
};

export function ParticleBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 z-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.10),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.10),transparent_20%),radial-gradient(circle_at_50%_60%,rgba(59,130,246,0.08),transparent_24%)]" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Particles options={particleOptions} />
    </div>
  );
}