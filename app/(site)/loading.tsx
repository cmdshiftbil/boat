"use client";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import React from "react";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed top-0 h-screen w-screen bg-graphite-950 z-[100] flex items-center justify-center"
      animate={{
        opacity: [0, 1, 0],
        transition: {
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1],
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      <Logo />
    </motion.div>
  );
}
