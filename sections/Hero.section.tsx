"use client";

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

import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import CheckerboardGrid from "@/components/CheckboardGrid/CheckboardGrid";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import BouncyLine from "@/components/BouncyLine";

const HeroSection = ({ data }: any) => {
  return (
    <FadeInStagger>
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <CheckerboardGrid />
        <div className="z-10 pointer-events-none flex flex-col justify-center items-center gap-2">
          <FadeIn>
            <h1 className="text-4xl font-bold">{data.title}</h1>
          </FadeIn>
          <FadeIn>
            <h2 className="text-3xl font-thin  capitalize">{data.subtitle}</h2>
          </FadeIn>
        </div>
      </div>
    </FadeInStagger>
  );
};

export default HeroSection;
