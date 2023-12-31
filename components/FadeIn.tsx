"use client";

import { RefObject, createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

// const viewport = { once: false, margin: "0px 0px -200px" };
const viewport: {
  root?: RefObject<Element>;
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
} = { once: false, margin: "0px 0px 0px" };

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 48 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.25 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
