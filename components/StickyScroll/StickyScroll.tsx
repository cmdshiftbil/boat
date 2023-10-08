"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 0.2) setActiveCard(() => 0);
    if (latest > 0.2 && latest < 0.4) setActiveCard(() => 1);
    if (latest > 0.4 && latest < 0.99) setActiveCard(() => 2);
  });
  return (
    <motion.div
      animate={{
        backgroundColor:
          activeCard === 0
            ? "var(--slate-900)"
            : activeCard === 1
            ? "var(--slate-800)"
            : "var(--slate-900)",
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  color:
                    activeCard === index
                      ? "var(--neutral-200)"
                      : "var(--slate-700)",
                  opacity: 1,
                }}
                className="text-4xl text-slate-600"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  color:
                    activeCard === index
                      ? "var(--neutral-400)"
                      : "var(--slate-700)",
                  opacity: 1,
                }}
                className="text-lg text-slate-700 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background:
            activeCard === 0
              ? "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))"
              : activeCard === 1
              ? "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))"
              : "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
};
