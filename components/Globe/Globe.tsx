import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/utils/tailwind.utils";
import useMobileDetect from "@/hooks/useMobileDetect";
import { hexToNormalizedRGB } from "@/utils/color.utils";
import { useMeasure } from "react-use";
import { useResizeObserver } from "@studio-freight/hamo";

export default function Globe({ markers, currentLocation, className }: any) {
  const canvasRef = useRef<any>();
  const locationToAngles = (lat: number, long: number) => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };
  const focusRef = useRef(locationToAngles(25.2048, 55.2708));
  const { isMobile } = useMobileDetect();
  const [ref, { width }] = useMeasure();

  useEffect(() => {
    if (currentLocation) {
      focusRef.current = locationToAngles(
        currentLocation.lat,
        currentLocation.long
      );
    }
  }, [currentLocation]);

  // useEffect(() => {
  //   let width = 0;
  //   let currentPhi = 0;
  //   let currentTheta = 0;
  //   const doublePi = Math.PI * 2;
  //   const onResize = () =>
  //     canvasRef.current && (width = canvasRef.current.offsetWidth);
  //   window.addEventListener("resize", onResize);
  //   onResize();
  //   const globe = createGlobe(canvasRef.current, {
  //     devicePixelRatio: 2,
  //     width: width * 2,
  //     height: width * 2,
  //     phi: 0,
  //     theta: 0.3,
  //     dark: 10,
  //     diffuse: 1,
  //     mapSamples: 16000,
  //     mapBrightness: 1.2,
  //     baseColor: hexToNormalizedRGB("#f7f4ef"),
  //     markerColor: hexToNormalizedRGB("#aa8455"),
  //     glowColor: hexToNormalizedRGB("#0a0203"),
  //     markers: markers ?? [],
  //     scale: isMobile() ? 1.3 : 1.0,
  //     onRender: (state) => {
  //       state.phi = currentPhi;
  //       state.theta = currentTheta;
  //       const [focusPhi, focusTheta] = focusRef.current;
  //       const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
  //       const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

  //       // Control the speed
  //       if (distPositive < distNegative) {
  //         currentPhi += distPositive * 0.08;
  //       } else {
  //         currentPhi -= distNegative * 0.08;
  //       }

  //       currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
  //       state.width = width * 2;
  //       state.height = width * 2;
  //     },
  //   });
  //   setTimeout(() => (canvasRef.current.style.opacity = "1"));

  //   return () => {
  //     globe.destroy();
  //     window.removeEventListener("resize", onResize); // Remove the event listener
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [markers]);

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 200 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [
        { location: [37.78, -122.412], size: 0.1 },
        { location: [52.52, 13.405], size: 0.1 },
        { location: [35.676, 139.65], size: 0.1 },
        { location: [-34.6, -58.38], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = focusRef.current;
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;
        // Control the speed
        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div className={cn(className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}
