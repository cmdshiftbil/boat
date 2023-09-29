import { ReactNode } from "react";

export interface SectionProps {
  title?: string;
  bg?: string;
  headingClassName?: string;
  header?: ReactNode;
  children: ReactNode;
  articleClassName?: string;
  className?: string;
  colorScheme?: "caramel" | "caramel-dark" | "shark" | "transparent";
  titlePlacement?: "default" | "top" | "left";
}
