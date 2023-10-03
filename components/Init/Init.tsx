"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

import "@/styles/globals.css";

import GoogleTagManager from "@/components/GoogleTagManager";
import RealViewport from "@/components/RealViewport";
import { raf } from "@/lib/raf";
import { useStore } from "@/lib/store";
import { useDebug } from "@studio-freight/hamo";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Observer from "gsap/dist/Observer";
import dynamic from "next/dynamic";

const Stats = dynamic(
  () => import("@/components/Stats").then((Stats) => Stats),
  { ssr: false }
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(Observer);
  gsap.registerPlugin(DrawSVGPlugin);
  // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === "development" });

  // merge rafs
  // gsap.ticker.lagSmoothing(0);
  // gsap.ticker.remove(gsap.updateRoot);
  // raf.add((time) => {
  //   gsap.updateRoot(time / 1000);
  // }, 0);

  //reset scroll position
  // window.scrollTo(0, 0);
  // window.history.scrollRestoration = "manual";
}

export const Init = () => {
  const debug = useDebug();

  // const lenis = useLenis(ScrollTrigger.update);
  // useEffect(ScrollTrigger.refresh, [lenis]);

  // const navIsOpened = useStore(({ navIsOpened }: any) => navIsOpened);

  // useEffect(() => {
  //   if (navIsOpened) {
  //     lenis?.stop();
  //   } else {
  //     lenis?.start();
  //   }
  // }, [lenis, navIsOpened]);

  return (
    <>
      {debug && <Stats />}
      <GoogleTagManager id="" />
      <RealViewport />
    </>
  );
};
