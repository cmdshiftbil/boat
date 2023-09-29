// import { cn } from "@/lib/utils";
// import { Container } from "../Container";

// import { FadeIn, FadeInStagger } from "../FadeIn";
// import Logo from "../Logo";
// import FooterAddress from "./FooterAddress";
// import FooterNavigationItem from "./FooterNavigationItem";
// import { Circle } from "lucide-react";
// import Locations from "./Locations";
// import Link from "next/link";
// import { buttonVariants } from "../ui/button";
// import SocialLinksList from "./SocialLinksList";
// import Copyright from "./Copyright";

// const mainNavigationLinks = [
//   {
//     id: "5dd7caa0-d5e3-45cb-93c2-9cdd1f5d658c",
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: "4c54dc29-c98f-45e2-b3ff-4dfd3bdd1060",
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: "fe46c086-fb06-4f9b-9d2d-12b4b87370fd",
//     title: "Projects",
//     url: "/projects",
//   },
//   {
//     id: "fab076fb-90fc-4eb8-a40d-16169b5b4775",
//     title: "Services",
//     url: "/services",
//   },
//   {
//     id: "f59b487e-65d6-4501-9c19-c9bedac75930",
//     title: "Contact",
//     url: "/contact",
//   },
// ];

// const legalLinks = [
//   {
//     id: "3540d3e8-82e0-4a5d-a3b4-438ce5ae5c21",
//     title: "Privacy",
//     url: "/privacy",
//   },
//   {
//     id: "6ff424cd-d000-4c90-b5f5-8f3055d50295",
//     title: "Terms",
//     url: "/terms",
//   },
// ];

// // const alphaNeroSubLinks = [
// //   {
// //     id: "f5a3bda8-526b-474a-8254-6538247fa475",
// //     title: "Blog",
// //     url: "/blog",
// //   },
// //   // {
// //   //   id: "dbf7011e-ae27-4f76-b5c9-1765ceacbbe1",
// //   //   title: "Press",
// //   //   url: "/press",
// //   // },
// //   // {
// //   //   id: "deeae65a-a400-4b1e-8a70-3122417f11d9",
// //   //   title: "Careers",
// //   //   url: "/careers",
// //   // },
// // ];

const locations = [
  {
    name: "Dubai",
    address:
      "Warehouse C07 1-2-3, Dubai Production City P.O. 485008, Dubai, UAE",
  },
  {
    name: "Riyadh",
    address:
      "Al Fozan Industrial Park Block 50, warehouse, 555/558, Riyadh 14548, KSA",
  },
];

// const footerColumns = [
//   {
//     title: "",
//     content: locations,
//     component: Locations,
//   },

//   // Terms column
//   {
//     title: "We're compliant",
//     content: [
//       {
//         href: "/privacy",
//         title: "Privacy",
//       },
//       {
//         href: "/terms",
//         title: "Terms",
//       },
//     ],
//   },

//   {
//     title: "Alpha Nero",
//   },
// ];

// const Footer = () => {
//   return (
//     <FadeIn>
//       <footer className="">
//         <div className="p-12">
//           {/* <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2> */}
//           <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
//             <li className="col-span-1 flex rounded-md shadow-sm">
//               <SocialLinksList />
//             </li>
//             <li className="col-span-1 flex rounded-md shadow-sm">
//               <FadeInStagger>
//                 <div className="flex flex-col">
//                   <FadeIn>
//                     <h6 className="text-muted-foreground">Let&apos;s talk!</h6>
//                   </FadeIn>
//                   <FadeIn>
//                     <a
//                       href="mailto:marketing@alpha-nero.com"
//                       className="text-primary hover:underline"
//                     >
//                       marketing@alpha-nero.com
//                     </a>
//                   </FadeIn>
//                 </div>
//               </FadeInStagger>
//             </li>
//             <li className="col-span-1 flex rounded-md shadow-sm">
//               <Locations locations={locations} />
//             </li>
//             <li className="col-span-1 flex rounded-md shadow-sm">
//               <Copyright />
//             </li>
//           </ul>
//         </div>
//       </footer>
//     </FadeIn>
//   );
// };

// export default Footer;

import styles from "./style.module.scss";
import Image from "next/image";
// import Rounded from "../../common/RoundedButton";
import { memo, useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "../FadeIn";
import SocialLinksList from "./SocialLinksList";
import Locations from "./Locations";
import Copyright from "./Copyright";
import { Container } from "../Container";
import Logo from "../Logo";
import Link from "next/link";
// import Magnetic from "../../common/Magnetic";

function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className={cn(
        "text-graphite-950 flex flex-col items-center relative will-change-transform",
        styles.contact
      )}
    >
      <div className={cn("bg-caramel-100 w-full pt-96 pb-12")}>
        <Container>
          <div
            className={cn(
              "border-b pb-20 flex flex-col md:flex-row gap-12 md:items-center justify-between",
              styles.title
            )}
          >
            <div className="md:order-1">
              <Link href="/">
                <Logo className="fill-caramel-950" />
              </Link>
            </div>

            <h2 className="flex flex-col text-7xl md:text-9xl font-medium">
              <span>Let&apos;s work</span>
              <span>together</span>
            </h2>
          </div>
        </Container>
        <Container>
          <div className={cn("flex items-center mx-auto mt-20", styles.nav)}>
            <FadeIn>
              <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                <li className="col-span-1 flex">
                  <SocialLinksList />
                </li>
                <li className="col-span-1 flex ">
                  <FadeInStagger>
                    <div className="flex flex-col">
                      <FadeIn>
                        <h6 className="text-muted-foreground">
                          Let&apos;s talk!
                        </h6>
                      </FadeIn>
                      <FadeIn>
                        <a
                          href="mailto:marketing@alpha-nero.com"
                          className="text-primary hover:underline"
                        >
                          marketing@alpha-nero.com
                        </a>
                      </FadeIn>
                    </div>
                  </FadeInStagger>
                </li>
                <li className="col-span-1 flex">
                  <Locations locations={locations} />
                </li>
                <li className="col-span-1 flex">
                  <Copyright />
                </li>
              </ul>
            </FadeIn>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}

export default memo(Footer);
