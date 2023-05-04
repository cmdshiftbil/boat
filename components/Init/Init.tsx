"use client";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { raf } from "@/lib/raf";
import { useDebug, useFrame } from "@studio-freight/hamo";
import { useStore } from "@/lib/store";
import { useScroll } from "@/hooks/useScroll";
import RealViewport from "@/components/RealViewport";
import GoogleTagManager from "@/components/GoogleTagManager";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { Layout } from "@/layouts/default";
import { useIsomorphicLayoutEffect } from "react-use";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";

const Stats = dynamic(
  () => import("@/components/Stats").then((Stats) => Stats),
  { ssr: false }
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(DrawSVGPlugin);
  // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === "development" });

  // merge rafs
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  raf.add((time) => {
    gsap.updateRoot(time / 1000);
  }, 0);
}

export const Init = () => {
  const debug = useDebug();

  const lenis: any = useStore(({ lenis }: any) => lenis);
  const overflow = useStore(({ overflow }: any) => overflow);

  useFrame((time: any) => {
    lenis?.raf(time);
  }, 0);

  useScroll(ScrollTrigger.update);

  useEffect(() => {
    if (overflow) {
      lenis?.start();
      document.documentElement.style.removeProperty("overflow");
    } else {
      lenis?.stop();
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }, [lenis, overflow]);

  useIsomorphicLayoutEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh();
    }
  }, [lenis]);

  useIsomorphicLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useScroll(ScrollTrigger.update);

  useEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh();
      lenis?.start();
    }
  }, [lenis]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      {debug && <Stats />}
      <GoogleTagManager id="" />
      <RealViewport />
    </>
  );
};
