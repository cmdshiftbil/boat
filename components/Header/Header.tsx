"use client";
import useRouteChange from "@/hooks/useRouteChange";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import { background, headerMotionVariants } from "./anim";
import Navgigation from "./nav";
import MenuTrigger from "./nav/MenuTrigger";
import { LogoAnimated } from "../Logo/Logo";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useRouteChange(() => {
    return () => {
      setIsActive(false);
    };
  });

  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    <motion.header
      initial="initial"
      animate={isActive ? "enter" : "exit"}
      variants={headerMotionVariants}
      className={cn(
        "sticky w-full box-border py-4 px-5 top-0 z-20",
        //Desktop
        "md:p-12"
      )}
    >
      <div
        className={cn("relative flex justify-between items-center flex-row ")}
      >
        <div className="flex-1 h-full mix-blend-difference">
          <Link href="/">
            <LogoAnimated />
          </Link>
        </div>

        <div className="flex-1 h-full flex justify-end mix-blend-difference">
          <MenuTrigger isOpen={isActive} onToggle={toggleActive} />
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={cn(
          "bg-graphite-950 absolute top-full left-0 w-full h-full opacity-70 cursor-pointer"
        )}
        onClick={toggleActive}
      />
      <AnimatePresence mode="wait">
        {isActive && <Navgigation />}
      </AnimatePresence>
    </motion.header>
  );
}
