"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Title from "@/components/Title";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function ProjectsPreview() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    //   const lenis = new Lenis();

    //   const raf = (time) => {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    //   };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    //   requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section>
      {/* <div className={styles.spacer}></div> */}
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      {/* <div className={styles.spacer}></div> */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Title
              as="h2"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Read more about our projects use-cases.
            </Title>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
              We have worked with some of the most prestigious brands in the
              world. We are proud of our work and the relationships we have
              built with our clients.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className={buttonVariants({ variant: "link", size: "lg" })}
              >
                View all projects
              </Link>
              <Link
                href="/contanct"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Let&apos;s Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Column = ({ images, y, className }: any) => {
  return (
    <motion.div className={cn(className, styles.column)} style={{ y }}>
      {images.map((src: any, i: number) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/previews/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
