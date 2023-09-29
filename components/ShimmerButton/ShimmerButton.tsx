import { cn } from "@/utils/tailwind.utils";
import Link from "next/link";
import React, { CSSProperties } from "react";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // ...props
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#C2AB82",
      shimmerSize = "0.1em",
      shimmerDuration = "5.5s",
      borderRadius = "0px",
      background = "radial-gradient(ellipse 80% 50% at 50% 120%,rgba(10, 2, 3),rgba(10, 2, 3))",
      className,
      children,
      to,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "border border-caramel-500/10 group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 [background:var(--bg)] [border-radius:var(--radius)] ",
          "transition-all duration-300 ease-in-out hover:scale-105",
          className
        )}
        ref={ref}
        {...props}
      >
        <Link href={to}>
          {/* spark container */}
          <div className="absolute inset-0 overflow-visible [container-type:size]">
            {/* spark */}
            <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
              {/* spark before */}
              <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>

          {/* backdrop */}
          <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
          {/* content */}

          <div className="pointer-events-none relative z-10 flex text-white dark:text-black">
            {children}
          </div>
        </Link>
      </button>
    );
  }
);

export default ShimmerButton;
