"use client";
import CustomHead from "@/components/CustomHead/CustomHead";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Transition from "@/components/Transition/Transition";
import { useFrame } from "@studio-freight/hamo";
import Lenis from "@studio-freight/lenis";
// import { Scrollbar } from "components/scrollbar";
import { useStore } from "@/lib/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProgressScrollbar from "@/components/ScrollProgressBar/ScrollProgressBar";
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
  const [lenis, setLenis] = useStore((state: any) => [
    state.lenis,
    state.setLenis,
  ]);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();
    //@ts-ignore
    window.lenis = lenis;
    setLenis(lenis);

    // new ScrollSnap(lenis, { type: 'proximity' })

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  const [hash, setHash] = useState<any>();

  useEffect(() => {
    if (lenis && hash) {
      // scroll to on hash change
      const target = document.querySelector(hash);
      lenis.scrollTo(target, { offset: 0 });
    }
  }, [lenis, hash]);

  // useEffect(() => {
  //   // update scroll position on page refresh based on hash
  //   if (router.asPath.includes("#")) {
  //     const hash = router.asPath.split("#").pop();
  //     setHash("#" + hash);
  //   }
  // }, [router]);

  useEffect(() => {
    // catch anchor links clicks
    function onClick(e: any) {
      e.preventDefault();
      const node = e.currentTarget;
      const hash = node.href.split("#").pop();
      setHash("#" + hash);
      setTimeout(() => {
        window.location.hash = hash;
      }, 0);
    }

    const internalLinks = [...document.querySelectorAll("[href]")].filter(
      (node: any) => node.href.includes(pathname + "#")
    );

    internalLinks.forEach((node) => {
      node.addEventListener("click", onClick, false);
    });

    return () => {
      internalLinks.forEach((node) => {
        node.removeEventListener("click", onClick, false);
      });
    };
  }, []);

  useFrame((time: any) => {
    lenis?.raf(time);
  });

  return (
    <>
      <CustomHead {...seo} />
      <div>
        <TransitionProvider>
          {/* <PageTransition /> */}
          <Header />
          {/* <Cursor /> */}
          <ProgressScrollbar />
          <main className="h-full min-h-full pt-32 overflow-x-hidden bg-shark-900">
            <Transition>{children}</Transition>
          </main>
          <Footer />
        </TransitionProvider>
      </div>
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
