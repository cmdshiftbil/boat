import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Heading from "../Heading";
import MotionLine from "../MotionLine/MotionLine";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleColor?: string;
  titlePlacement?: "top" | "left" | "default" | undefined;
  underline?: boolean;
  suffix?: React.ReactNode;
  className?: string;
}

const SectionHeader = ({
  className,
  title,
  subtitle,
  titleColor,
  titlePlacement = "top",
  underline = true,
  suffix = <span className="text-5xl text-shark-50">02</span>,
}: SectionHeaderProps) => {
  return (
    <header
      className={twMerge(className, "flex flex-col", "font-bold  text-6xl")}
    >
      <div className="flex flex-row items-center justify-between">
        <Heading
          className="mb-9"
          animationDir={titlePlacement}
          color={titleColor}
        >
          {title}
        </Heading>
        {/* {suffix && suffix} */}
      </div>

      {underline && <MotionLine className="mb-9" />}
    </header>
  );
};

export default SectionHeader;
