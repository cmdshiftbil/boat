import { Children } from "react";

interface ScrollTriggerOptions {
  start?: string;
  end?: string;
}
export interface HeadingProps {
  color?: string;
  className?: string;
  headingClassName?: string;
  animationDir?: "default" | "top" | "left";
  children: string;
  eyebrow?: string;
  fontSize?: string;
  scrollTriggerOptions?: ScrollTriggerOptions;
}
