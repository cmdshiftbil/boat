"use client";
import ReactPlayer from "react-player";

// // import { FadeIn } from "@/components/Animations";
// // import ScrollIcon from "@/components/ScrollIcon";
// // import { HomeData } from "@/types/pages";
// // import { Canvas } from "@react-three/fiber";

// interface HeroSectionProps {
//   data: HomeData["hero"];
// }

// import { FadeIn, FadeInStagger } from "@/components/FadeIn";
// // const HeroSection = ({ data }: HeroSectionProps) => {
// //   return (
// //     <section className="h-screen flex flex-col justify-between py-12">
// //       <div className="text-center mt-[30vh] ">
// //         <FadeIn>
// //           <h1 className="font-bold tracking-tight text-shark-300 text-6xl">
// //             {data.title}
// //           </h1>
// //           <p className="mt-6 text-lg leading-8 text-shark-400">
// //             {data.subtitle}
// //           </p>
// //         </FadeIn>
// //       </div>
// //       <div className="flex justify-center items-center w-full">
// //         <ScrollIcon />
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import { HomeData } from "@/types/pages";
// import { MouseIcon } from "lucide-react";
// // import styles from "./page.module.css";
// import { useState, useEffect } from "react";

// // const HeroSection = ({ data }: HeroSectionProps) => {
// export default function HeroSection({ data }: HeroSectionProps) {
//   const [windowsWidth, setWindowsWidth] = useState(0);

//   useEffect(() => {
//     setWindowsWidth(window.innerWidth);
//   }, []);

//   const getBlocks = () => {
//     const blockSize = windowsWidth * 0.05;
//     const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);

//     return [...Array(nbOfBlocks).keys()].map((_, index) => {
//       return (
//         <div
//           key={index}
//           className="w-full aspect-square  h-[5vw]"
//           onMouseEnter={(e) => {
//             console.log(e.target);
//             colorize(e.target);
//           }}
//         ></div>
//       );
//     });
//   };

//   const colorize = (el: any) => {
//     console.log("Hovering");

//     const caramel = [
//       "#f7f4ef",
//       "#ebe5d6",
//       "#d9cbaf",
//       "#c2ab82",
//       "#b0905f",
//       "#aa8455",
//       "#8a6544",
//       "#6f4e39",
//       "#5f4234",
//       "#523a31",
//       "#2f1f19",
//     ];

//     el.style.backgroundColor =
//       caramel[Math.floor(Math.random() * caramel.length)];
//     setTimeout(() => {
//       el.style.backgroundColor = "transparent";
//     }, 300);
//   };

//   return (
//     <FadeInStagger>
//       <div
//         className="relative flex flex-col h-screen justify-center items-center bg-graphite-950 gap-60"
//         // className={styles.container}
//       >
//         <div
//           //  className={styles.body}
//           // className="flex h-full w-full overflow-hidden absolute text-caramel-100"
//           className=" flex flex-col gap-4 text-center w-[70%] z-10 mix-blend-difference  pointer-events-none relative  text-caramel-100"
//         >
//           <FadeIn>
//             <h1 className="text-4xl font-bold">{data.title}</h1>
//           </FadeIn>
//           <FadeIn>
//             <h2 className="text-3xl font-thin  capitalize">{data.subtitle}</h2>
//           </FadeIn>
//         </div>
//         <div
//           // className={styles.grid}
//           // className="text-center w-[70%] z-10 mix-blend-difference uppercase pointer-events-none relative "
//           className="absolute flex h-full w-full overflow-hidden text-caramel-100"
//         >
//           {windowsWidth > 0 &&
//             [...Array(20).keys()].map((_, index) => {
//               return (
//                 <div
//                   key={index}
//                   // className={styles.column}
//                   className="w-[5vw]"
//                 >
//                   {getBlocks()}
//                 </div>
//               );
//             })}
//         </div>
//         <div className="flex justify-center items-center w-full">
//           <MouseIcon />
//         </div>
//       </div>
//     </FadeInStagger>
//   );
// }

// import React from "react";

// import localFont from "next/font/local";
// import { twMerge } from "tailwind-merge";
// import CheckerboardGrid from "@/components/CheckboardGrid/CheckboardGrid";
// import { FadeIn, FadeInStagger } from "@/components/FadeIn";
// import BouncyLine from "@/components/BouncyLine";

// const HeroSection = ({ data }: any) => {
//   return (
//     <FadeInStagger>
//       <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
//         <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
//         <CheckerboardGrid />
//         <div className="z-10 pointer-events-none flex flex-col justify-center items-center gap-2">
//           <FadeIn>
//             <h1 className="text-4xl font-bold">{data.title}</h1>
//           </FadeIn>
//           <FadeIn>
//             <h2 className="text-3xl font-thin  capitalize">{data.subtitle}</h2>
//           </FadeIn>
//         </div>
//       </div>
//     </FadeInStagger>
//   );
// };

// export default HeroSection;

import type { NextPage } from "next";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";

import { twMerge } from "tailwind-merge";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Title from "@/components/Title";
import Logo from "@/components/Logo";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
// import { users } from "./users";

// export const HeroScrollPreview = () => {
//   return (
//     <div className="flex flex-col bg-white">
//       <HeroScroll />
//     </div>
//   );
// };

const HeroSection = ({}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 0.97] : [1.05, 1];
  };

  const translateDimensions = () => {
    return isMobile ? [0.7, 200] : [-50, -200];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    translateDimensions()
  );

  return (
    <div
      className="h-[120vh] flex items-center justify-center relative"
      ref={containerRef}
    >
      <FadeIn>
        <div
          className="py-40 w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Header translate={translate} />

          <Card rotate={rotate} translate={translate} scale={scale} />
        </div>
      </FadeIn>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="mx-auto text-center"
    >
      <FadeInStagger>
        <FadeIn>
          <Title as="h1" className="text-6xl">
            Retail Fit Out Contractor
          </Title>
        </FadeIn>
        <FadeIn>
          <Title as="h2" className="text-3xl font-thin">
            Retail Experts For Luxury Lifestyle Brands.
          </Title>
        </FadeIn>
      </FadeInStagger>
    </motion.div>
  );
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) => {
  const [ready, setReady] = React.useState(false);
  const readyToPlay = () => {
    setReady(true);
  };

  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      // h-[30rem] md:h-[40rem]
      className="max-w-5xl -mt-12 mx-auto  w-full bg-graphite-950 shadow-2xl aspect-video"
    >
      <SchemaCard maxWidth={false} padding={false}>
        <div className="flex flex-col gap-4 h-full w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              variants={fadeIn}
              initial="visible"
              animate={ready ? "hidden" : "visible"}
              className="bg-graphite-950 h-full w-full absolute top-0 left-0 z-10 flex items-center justify-center"
            >
              Loading ...
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="visible"
              animate={!ready ? "hidden" : "visible"}
              className="h-full w-full"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=wQn56hJ7DWk"
                width={"100%"}
                height={"100%"}
                playing
                loop
                muted
                controls={false}
                style={{ pointerEvents: "none" }}
                stopOnUnmount
                onReady={readyToPlay}
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 0,
                    },
                  },
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </SchemaCard>
    </motion.div>
  );
};

export default HeroSection;
