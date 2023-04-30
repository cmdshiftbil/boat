import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { raf } from "@/lib/raf";
import { useDebug } from "@studio-freight/hamo";
import { useStore } from "@/lib/store";
import { useScroll } from "@/hooks/useScroll";
import RealViewport from "@/components/RealViewport";
import GoogleTagManager from "@/components/GoogleTagManager";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import SplitText from "gsap/dist/SplitText";
import { Layout } from "@/layouts/default";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";

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

const Stats = dynamic(
  () => import("@/components/Stats").then((Stats) => Stats),
  { ssr: false }
);

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const debug = useDebug();
  const lenis: any = useStore(({ lenis }) => lenis);

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
