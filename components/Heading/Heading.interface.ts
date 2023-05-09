import { Children } from "react";
export interface HeadingProps {
  color?: string;
  className?: string;
  headingClassName?: string;
  animationDir?: "default" | "top" | "left";
  children: string;
  eyebrow?: string;
  fontSize?: string;
}
