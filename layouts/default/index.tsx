"use client";
import CustomHead from "@/components/CustomHead/CustomHead";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Transition from "@/components/Transition/Transition";
import { useFrame } from "@studio-freight/hamo";
import { Lenis, useLenis } from "@studio-freight/react-lenis";
// import { Scrollbar } from "components/scrollbar";
import { useStore } from "@/lib/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TransitionProvider } from "@/components/Transition/Transition.provider";
import { fetchContent } from "@/utils/api.utils";
import NextNProgress from "nextjs-progressbar";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";

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

export function Layout({
  seo = { title: "", description: "", image: "", keywords: "" },
  children,
}: any) {
  return (
    <>
      <CustomHead {...seo} />
      <NextNProgress color="#96786c" />
      <Lenis
        root
        options={{
          lerp: 0.1,
          smoothWheel: true,
        }}
      >
        <TransitionProvider>
          {/* <PageTransition /> */}
          <Header />
          {/* <Cursor /> */}

          <main className="h-full min-h-full pt-32 bg-shark-900">
            {/* <Transition>{children}</Transition> */}
            {children}
          </main>
          <Footer />
        </TransitionProvider>
      </Lenis>
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
