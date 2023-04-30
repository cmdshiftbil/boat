import gsap from "gsap";
import { useCallback, useRef } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import useInstance from "@/hooks/useInstance";
import useTicker from "@/hooks/useTicker";
import { getAngle, getScale } from "@/utils/math.utils";

const Cursor = () => {
  // React Refs for Cursor and Text
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  // Save pos and velocity Objects
  const pos: any = useInstance(() => ({ x: 0, y: 0 }));
  const vel: any = useInstance(() => ({ x: 0, y: 0 }));
  const set: any = useInstance();

  // Set GSAP quick setter Values on useIsomorphicLayoutEffect Update
  useIsomorphicLayoutEffect(() => {
    set.x = gsap.quickSetter(cursorRef.current, "x", "px");
    set.y = gsap.quickSetter(cursorRef.current, "y", "px");
    set.r = gsap.quickSetter(cursorRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(cursorRef.current, "scaleX");
    set.sy = gsap.quickSetter(cursorRef.current, "scaleY");
    set.width = gsap.quickSetter(cursorRef.current, "width", "px");
    set.rt = gsap.quickSetter(textRef.current, "rotate", "deg");
  }, []);

  // Start Animation loop
  const loop = useCallback(() => {
    // Calculate angle and scale based on velocity
    var rotation = getAngle(vel.x, vel.y); // Mouse Move Angle
    var scale = getScale(vel.x, vel.y); // Blob Squeeze Amount

    // Set GSAP quick setter Values on Loop Function
    set.x(pos.x);
    set.y(pos.y);
    set.width(40 + scale * 150);
    set.r(rotation);
    set.sx(1 + scale);
    set.sy(1 - scale);
    set.rt(-rotation);
  }, []);

  // Run on Mouse Move
  useIsomorphicLayoutEffect(() => {
    // Caluclate Everything Function
    const setFromEvent = (e: any) => {
      // Mouse X and Y
      const x = e.clientX;
      const y = e.clientY;

      // Animate Position and calculate Velocity with GSAP
      gsap.to(pos, {
        x: x,
        y: y,
        duration: 1.25,
        ease: "Expo.easeOut",
        onUpdate: () => {
          vel.x = x - pos.x;
          vel.y = y - pos.y;
        },
      });

      loop();
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useTicker(loop);

  return (
    <div
      ref={cursorRef}
      className="
            fixed
            top-0
            left-0
            right-0
            bottom-0
            w-[40px]
            h-[40px]
            flex
            items-center
            justify-center
            border-2
            border-shark-300
            rounded-full
            origin-[50% 50%]
            will-change-auto
            z-50
            pointer-events-none

        "
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Cursor;
