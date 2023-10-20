"use client";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import React from "react";

export default function LoadingScreen() {
  return (
    <motion.div className="fixed top-0 h-screen w-screen bg-graphite-950 z-[100] flex items-center justify-center">
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: {
            duration: 1,
            ease: [0.33, 1, 0.68, 1],
            times: [0, 1],
            // Infinity
            repeatDelay: 0.5,
            repeat: Infinity,
          },
        }}
      >
        <Logo />
      </motion.div>
    </motion.div>
  );
}
