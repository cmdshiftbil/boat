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

// import s from "./layout.module.scss";

// const Cursor = dynamic(
//   () => import("components/cursor").then((mod) => mod.Cursor),
//   { ssr: false }
// );

// const PageTransition = dynamic(
//   () => import("components/page-transition").then((mod) => mod.PageTransition),
//   { ssr: false }
// );

export function Layout({
  seo = { title: "", description: "", image: "", keywords: "" },
  children,
}: any) {
  // TODO: Fix this with react-lenis and the new method of router events in nextjs appDir
  // const lenis = useLenis();

  // useEffect(() => {
  //   function onHashChangeStart(url: any) {
  //     url = "#" + url.split("#").pop();
  //     lenis.scrollTo(url);
  //   }

  //   // Router.events.on("hashChangeStart", onHashChangeStart);

  //   return () => {
  //     // Router.events.off("hashChangeStart", onHashChangeStart);
  //   };
  // }, [lenis]);

  return (
    <>
      <CustomHead {...seo} />
      <Lenis
        root
        options={{
          lerp: 0.1,
          smooth: true,
        }}
      >
        <TransitionProvider>
          {/* <PageTransition /> */}
          <Header />
          {/* <Cursor /> */}

          <main className="h-full min-h-full pt-32 overflow-x-hidden bg-shark-900">
            <Transition>{children}</Transition>
          </main>
          <Footer />
        </TransitionProvider>
      </Lenis>
    </>
  );
}

// TODO:: Fix meta data
export async function generateMetadata({ params }: any) {
  const project = await fetchContent(
    "projects",
    `where[slug][equals]=${params.slug}`
  );

  console.log("Meta Call", project.docs[0].meta);

  return {
    title: project.docs[0].meta,
    description: "This is a description",
  };
}
