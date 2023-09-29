"use client";
import localFont from "next/font/local";
import CustomHead from "@/components/CustomHead/CustomHead";
import Footer from "@/components/Footer/Footer";
import { Lenis, ReactLenis } from "@studio-freight/react-lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import TimeAgo from "javascript-time-ago";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import en from "javascript-time-ago/locale/en.json";
import gsap from "gsap";
import { Fraunces } from "next/font/google";

// import s from "./layout.module.scss";

// const Cursor = dynamic(
//   () => import("components/cursor").then((mod) => mod.Cursor),
//   { ssr: false }
// );

// const PageTransition = dynamic(
//   () => import("components/page-transition").then((mod) => mod.PageTransition),
//   { ssr: false }
// );
TimeAgo.addDefaultLocale(en);

// const scriptFont = localFont({
//   src: "../fonts/telma/Telma-Variable.woff2",
//   variable: "--font-script",
//   display: "swap",
//   preload: true,
// });

const scriptFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-script",
  display: "swap",
});

export function Layout({
  seo = { title: "", description: "", image: "", keywords: "" },
  children,
}: any) {
  const container = useRef(null);
  const lenisRef = useRef<any>();

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  // const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const height = useTransform(scrollYProgress, [0, 0.9], [800, 0]);
  const radius = useTransform(scrollYProgress, [0, 0.9], [1000, 0]);

  return (
    <>
      <CustomHead {...seo} />
      {/* <NextNProgress color="#96786c" /> */}

      <Header />
      {/* <Cursor /> */}
      <ReactLenis
        ref={lenisRef}
        root
        autoRaf={false}
        options={{
          lerp: 0.1,
          smoothWheel: true,
          syncTouch: true,
        }}
      >
        <main
          ref={container}
          className={cn(
            scriptFont.variable,
            // "h-full min-h-full bg-graphite-950",
            // bottom animation style
            "bg-graphite-950",
            "z-10 relative flex flex-col",
            "pt-24"
          )}
        >
          {children}
        </main>
        {/* <motion.div
        style={{
          height,
          background: "#0a0203",
          position: "relative",
          borderBottomRightRadius: radius,
          borderBottomLeftRadius: radius,
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
        className="bg-graphite-500 relative mt-[100px] z-10"
      /> */}

        <Footer />
      </ReactLenis>
    </>
  );
}

// // TODO:: Fix meta data
// export async function generateMetadata({ params }: any) {
//   const project = await fetchContent(
//     "projects",
//     `where[slug][equals]=${params.slug}`
//   );

//   return {
//     title: project.docs[0].meta,
//     description: "This is a description",
//   };
// }
