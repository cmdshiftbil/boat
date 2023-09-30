import { motion, useTransform, useScroll } from "framer-motion";
import { Children, cloneElement, useRef } from "react";
import SchemaCard from "../SchemaCard/SchemaCard";
import { cn } from "@/lib/utils";

// const Card = ({ card }) => {
//   return (
//     <div key={card.id} className="group relative h-[450px] w-[450px]">
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <SchemaCard className="absolute inset-0 z-10 grid place-content-center">
//         <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </div>
//       </SchemaCard>
//     </div>
//   );
// };

const HorizontalScroll = ({ children }: any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    smooth: 0.1,
    layoutEffect: true,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <motion.div style={{ x }} className="flex snap-x snap-proximity">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
