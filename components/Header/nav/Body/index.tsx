import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { blur, translate } from "../../anim";
import { cn } from "@/lib/utils";
import ActiveElement from "../../ActiveElement";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Body({ links }: any) {
  const pathname = usePathname();
  const isCurrentPathname = (href: string) => href === pathname;
  const currentActiveIndex = links.findIndex((link: any) =>
    isCurrentPathname(link.href)
  );

  const activeObject = {
    isActive: false,
    index: 0,
  };

  const [selectedLink, setSelectedLink] = useState(activeObject);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(
    currentActiveIndex
  );

  const getChars = (word: any) => {
    let chars: any[] = [];
    word.split("").forEach((char: any, i: number) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <nav>
      <ul
        className={cn(
          "flex mt-10 flex-wrap",
          // Desktop
          "md:max-w-6xl md:mt-20"
        )}
      >
        {links.map((link: any, index: number) => {
          const { title, href } = link;
          return (
            <motion.li
              className={cn(
                "relative flex overflow-hidden",
                // Text
                "text-5xl",
                // Desktop
                "md:text-[6vw]"
              )}
              key={`l_${index}`}
              onMouseOver={() => {
                setHoveredIndex(index);
                setSelectedLink({
                  isActive: true,
                  index,
                });
              }}
              onMouseLeave={() => {
                setHoveredIndex(currentActiveIndex);
                setSelectedLink({
                  isActive: false,
                  index,
                });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              <Link
                href={href}
                className="uppercase text-graphite-950 flex overflow-hidden pr-8 pt-3 font-medium m-0"
              >
                {getChars(title)}
              </Link>
              <AnimatePresence mode="wait">
                {hoveredIndex === index && (
                  <ActiveElement className="absolute top-3 right-3" />
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
