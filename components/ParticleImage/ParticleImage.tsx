"use client";

import { Canvas } from "@react-three/fiber";
import React, { HTMLAttributes, useRef } from "react";
import classNames from "classnames";
import { hasHeightClass, hasWidthClass } from "@/utils/dom.utils";
import ParticleImageMesh from "./ParticleImageMesh";

interface ParticleImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

const ParticleImage = ({ src, className }: ParticleImageProps) => {
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
        <ParticleImageMesh src={src} canvasRef={canvasRef} />
      </Canvas>
    </div>
  );
};

export default ParticleImage;
