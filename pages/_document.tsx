import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useScroll } from "@/hooks/useScroll";
import { useStore } from "@/lib/store";
import { useFrame } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import { useIsomorphicLayoutEffect } from "react-use";

export default function Document() {
  const lenis: any = useStore(({ lenis }) => lenis);
  const overflow = useStore(({ overflow }) => overflow);

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

  // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === "development" });

  return (
    <Html>
      <Head />
      <body className="h-full min-h-full pt-32 overflow-x-hidden bg-shark-900">
        <ScrollProgressBar />
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  );
}
