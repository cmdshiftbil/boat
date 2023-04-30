import { forwardRef, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { BoxProps } from "./Box.interface";
import BoxLines from "./BoxLines";

const Box = forwardRef(
  ({ children, className = "", inView }: BoxProps, ref: any) => {
    return (
      <div ref={ref} className={twMerge("relative h-auto w-full")}>
        <div className={twMerge("z-10", className)}>{children}</div>
        <BoxLines
          inView={inView}
          className="absolute top-0 left-0 right-0 bottom-0 z-0"
        />
      </div>
    );
  }
);

export default Box;
