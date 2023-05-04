"use client";
import { clamp, mapRange } from "../../utils/math.utils";

import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { useScroll } from "@/hooks/useScroll";
import { useStore } from "@/hooks/useStore";

export default function ProgressScrollbar({}) {
  const progressBar = useRef<any>();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const lenis = useStore<any>(({ lenis }) => lenis);

  useScroll(({ scroll, limit }: any) => {
    const progress = scroll / limit;
    progressBar.current.style.transform = `scaleX(${progress})`;
  });

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) return;

    function onPointerMove(e: any) {
      e.preventDefault();

      const offset = (windowHeight - innerHeight) / 2;
      const y = mapRange(
        0,
        windowHeight,
        e.clientY,
        -offset,
        innerHeight + offset
      );

      const progress = clamp(0, y / innerHeight, 1);
      const newPos = lenis.limit * progress;

      lenis.direction === "vertical"
        ? window.scrollTo(0, newPos)
        : window.scrollTo(newPos, 0);
    }

    function onPointerUp() {
      setClicked(false);
    }

    window.addEventListener("pointermove", onPointerMove, false);
    window.addEventListener("pointerup", onPointerUp, false);

    return () => {
      window.removeEventListener("pointermove", onPointerMove, false);
      window.removeEventListener("pointerup", onPointerUp, false);
    };
  }, [clicked, windowHeight, windowWidth, lenis]);

  return (
    <div className="fixed top-0 left-0 z-[100] w-screen p-0">
      <div
        ref={progressBar}
        className="w-full h-2 relative bg-shark-500 origin-top-left scale-x-0"
      />
    </div>
  );
}
