import { cn } from "@/utils/tailwind.utils";
import {
  Children,
  EventHandler,
  UIEvent,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useEvent } from "react-use";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  reverseOnScroll?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

const Marquee = ({
  className,
  reverse,
  reverseOnScroll,
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) => {
  const [shouldReverse, setShouldReverse] = useState<boolean | undefined>(
    reverse
  );

  const lastScrollLeft = useRef(0);

  const reverseAnimationOnScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const scrollDiv = event.currentTarget;

      const isScrollingRight = scrollDiv.scrollLeft > lastScrollLeft.current;
      const isScrollingLeft = scrollDiv.scrollLeft < lastScrollLeft.current;

      console.log(
        "isScrollingRight",
        scrollDiv.scrollLeft,
        lastScrollLeft.current
      );

      if (isScrollingRight) {
        console.log("should scroll left");
        setShouldReverse(false);
      } else if (isScrollingLeft) {
        console.log("should scroll right");
        setShouldReverse(true);
      }

      lastScrollLeft.current = scrollDiv.scrollLeft;
    },
    []
  );

  return (
    <div
      {...props}
      {...(reverseOnScroll && { onScroll: reverseAnimationOnScroll })}
      className={cn(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className,
        "overflow-x-auto"
      )}
    >
      <div
        className={cn("flex w-max animate-marquee items-stretch gap-[--gap]", {
          "[animation-direction:reverse]": shouldReverse,
          "hover:[animation-play-state:paused]": pauseOnHover,
        })}
      >
        {Children.map(children, (child) => cloneElement(child as any))}
        {Children.map(children, (child) => cloneElement(child as any))}
      </div>
    </div>
  );
};

export default Marquee;
