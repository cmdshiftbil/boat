import useMobileDetect from "@/hooks/useMobileDetect";
import { cn } from "@/utils/tailwind.utils";
import { Fragment } from "react";
import LinearGradient from "../LinearGradient";
import { MagicCard, MagicContainer } from "../MagicCard/MagicCard";
import Marquee from "../Marquee/Marquee";
import SchemaCard from "../SchemaCard/SchemaCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CountriesList({ countries }: any) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className=" relative grid grid-cols-2 h-full auto-cols-max">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10"> */}
      {countries.map((country: any, idx: number) => (
        <div
          key={country?.id}
          className="relative group block h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(0)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block z-10"
                layoutId="hoverBackground" // required for the background to follow
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              >
                <SchemaCard maxWidth={false} className="w-full h-full" />
              </motion.span>
            )}
          </AnimatePresence>

          <div className="h-full w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] relative z-50">
            <div className="relative z-50 p-2 box-border h-full">
              <div className="pl-2 h-full flex flex-col justify-center w-full rounded-sm">
                <h4 className="text-caramel-300 font-light tracking-wide text-sm md:text-4xl ">
                  {country.name}
                </h4>
                <p className="text-caramel-400/40 tracking-wide leading-relaxed text-xs">
                  {`${country.lat}N, ${country.long}E`}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
