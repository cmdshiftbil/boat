// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import useGsapEffect from "@/hooks/useGsapEffect";

// gsap.registerPlugin(ScrollTrigger);

// const DiagonalLine = ({ className }: any) => {
//   const ref = useRef<any>();
//   useGsapEffect(() => {
//     // GSAP Animation with ScrollTrigger
//     gsap.fromTo(
//       "#animatedPath",
//       { x: -2759, y: -943.423 },
//       {
//         x: 0,
//         y: 0,
//         scrollTrigger: {
//           trigger: ref.current,
//           start: "top 50%",
//           end: "bottom 50%",
//           toggleActions: "restart none none none",

//           scrub: 1,
//           // markers: true,
//         },
//       }
//     );
//   }, ref);

//   return (
//     <div className={className} ref={ref}>
//       <svg
//         className={className}
//         width="2759"
//         height="1010"
//         viewBox="0 0 2759 1010"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           id="animatedPath"
//           d="M0 68.7248V0L2759 943.423V1010L0 68.7248Z"
//           className="fill-caramel-200"
//           // fill="#E44C14"
//         />
//       </svg>
//     </div>
//   );
// };

// export default DiagonalLine;

import { motion, useScroll } from "framer-motion";

const DiagonalLine = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  );
};

export default DiagonalLine;
