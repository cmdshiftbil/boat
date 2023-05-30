"use client";

import { Canvas } from "@react-three/fiber";
import React, { HTMLAttributes, useRef } from "react";
import classNames from "classnames";
import { hasHeightClass, hasWidthClass } from "@/utils/dom.utils";
import ParticleImageMesh from "./ParticleImageMesh";
import { ParticleSettings } from "./types";

interface ParticleImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  initialSettings?: ParticleSettings;
  settings?: ParticleSettings;
}

const ParticleImage = (props: ParticleImageProps) => {
  const { className, ...otherProps } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <div
      className={classNames(
        "mx-auto",
        {
          "w-[500px]": !hasWidthClass(className),
          "h-[500px]": !hasHeightClass(className),
        },
        className
      )}
    >
      <Canvas ref={canvasRef}>
        <ParticleImageMesh canvasRef={canvasRef} {...otherProps} />
      </Canvas>
    </div>
  );
};

export default ParticleImage;
