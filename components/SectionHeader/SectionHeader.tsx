import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Heading from "../Heading";
import MotionLine from "../MotionLine/MotionLine";
import { cn } from "@/utils/tailwind.utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleColor?: string;
  titlePlacement?: "top" | "left" | "default" | undefined;
  underline?: boolean;
  suffix?: React.ReactNode;
  className?: string;
  headingClassName?: string;
}

const SectionHeader = ({
  className,
  headingClassName,
  title,
  subtitle,
  titleColor,
  titlePlacement = "top",
  underline = true,
  suffix = <span className="text-5xl text-shark-50">02</span>,
}: SectionHeaderProps) => {
  return (
    <header
      className={cn(className, "flex flex-col", "font-bold  clamp-text-6xl")}
    >
      <div className=" relative flex flex-row items-center justify-between">
        <Heading
          className={classNames("mb-9", headingClassName)}
          headingClassName={headingClassName}
          animationDir={titlePlacement}
          color={titleColor}
        >
          {title}
        </Heading>
        {/* {suffix && suffix} */}
        {/* {underline && (
          <MotionLine height="10px" className="mb-9 absolute bg-caramel-500" />
        )} */}
      </div>

      {/* {underline && <MotionLine height="10px" className="mb-9" />} */}
    </header>
  );
};

export default SectionHeader;
