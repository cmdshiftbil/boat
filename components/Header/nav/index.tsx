"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";

import NavImage from "./Image/NavImage";
import { cn } from "@/lib/utils";
import Body from "./Body";
import Footer from "./Footer";

const links = [
  { id: "1", href: "/", title: "Home", src: "" },
  { id: "2", href: "/about", title: "About", src: "" },
  { id: "3", href: "/projects", title: "Projects", src: "" },
  { id: "4", href: "/services", title: "Services", src: "" },
  { id: "5", href: "/contact", title: "Contact", src: "" },
  { id: "6", href: "/blog", title: "Blog", src: "" },
];

export default function Navgigation() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={cn("overflow-hidden ")}
    >
      <div className={cn("flex gap-12 mb-20 md:mb-0 md:justify-between")}>
        <div className={cn("flex flex-col justify-between")}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <NavImage
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
          // alt="alpha nero"
        />
      </div>
    </motion.div>
  );
}
