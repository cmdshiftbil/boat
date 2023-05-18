"use client";
import { HTMLAttributes } from "react";
import AnimateInOut from "./AnimateInOut";
const getRandomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

interface RotateInOut3DProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div";
  set?: gsap.TweenVars;
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  durationIn: number;
  durationOut: number;
  delay?: number;
  offsetX?: number;
  offsetY?: number;
}

const RotateInOut3D = ({
  durationIn,
  durationOut,
  children,
  offsetX,
  offsetY,
  delay,
}: RotateInOut3DProps) => (
  <AnimateInOut
    as="div"
    durationIn={durationIn}
    durationOut={durationOut ?? 0.25}
    delay={delay}
    set={{
      transformOrigin: "50% 50%",
      perspective: 10,
      rotationX: getRandomNumberBetween(-80, 80),
      rotationY: getRandomNumberBetween(-40, 40),
      rotationZ: getRandomNumberBetween(-10, 10),
      x: offsetX || 0,
      y: offsetY || 0,
      scale: 0.8,
      opacity: 0,
    }}
    from={{
      opacity: 0,
      ease: "power4.out",
      rotationX: getRandomNumberBetween(-80, 80),
      rotationY: getRandomNumberBetween(-40, 40),
      rotationZ: getRandomNumberBetween(-10, 10),
      x: offsetX || 0,
      y: offsetY || 0,
    }}
    to={{
      opacity: 1,
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
);

export default RotateInOut3D;
