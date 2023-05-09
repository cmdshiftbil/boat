import { ReactNode } from "react";

export interface SectionProps {
  title?: string;
  bg?: string;
  headingClassName?: string,
  header?: ReactNode;
  children: ReactNode;
  articleClassName?: string;
  className?: string;
  colorScheme?: "pampas" | "pampas-dark" | "shark" | "transparent";
  titlePlacement?: "default" | "top" | "left";
}
