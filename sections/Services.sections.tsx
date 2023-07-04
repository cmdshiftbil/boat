"use client";
import gsap from "gsap";
import { useRef } from "react";
import BlueprintLabel from "@/components/BlueprintLabel";
import Button from "@/components/Button";
import DrawIcon from "@/components/DrawIcon";
import Heading from "@/components/Heading";
import ServiceItem from "@/components/ServiceItem";
import Text from "@/components/Text";
import ConeIcon from "@/components/UserInterfaceElements/ConeIcon";
import CubeSide from "@/components/UserInterfaceElements/CubeSide";
import ElbowLineRight from "@/components/UserInterfaceElements/ElbowLineRight";
import PerspectiveDivider from "@/components/UserInterfaceElements/PerspectiveDivider";
import SpiralIcon from "@/components/UserInterfaceElements/SpiralIcon";
import StairsUpIcon from "@/components/UserInterfaceElements/StairsUpIcon";
import useGsapEffect from "@/hooks/useGsapEffect";

const content1 = [
  {
    id: "a15a3612-9e9e-4466-9f9d-647ea50ce81a",
    icon: <DrawIcon icon={<StairsUpIcon />} />,
    title: "Retail Store Design Planning",
    description:
      "We recreate retail shop design plans in intricate detail to reflect your vision for the project and the identity of your brand.",
  },
  {
    id: "c3be2ed1-e1cc-4925-b90f-514bb85ab9f4",
    icon: <DrawIcon icon={<CubeSide />} />,
    title: "Shop Fixture Installation and Provisioning",
    description:
      "Then our professional teams meticulously follow this blueprint to ensure your shop fixture, in-shop or pop-up store meets your objectives.",
  },
];

const content2 = [
  {
    id: "4fbb04bf-66cb-4ff2-9c20-8ba51b7e9d1d",
    icon: <DrawIcon icon={<ConeIcon />} />,
    title: "Bringing Your Shop Fit Out Designs to Life",
    description:
      "We manufacture any design for shop fit outs, whether it’s in-shop or for a pop-up store, we will bring your concept to life through our craftsmanship.",
  },
  {
    id: "d7dea3b6-783d-47ca-b7c9-18d78edaa533",
    icon: <DrawIcon icon={<SpiralIcon />} />,
    title: "Skilled Team and Expertise",
    description:
      "Our skilled team works with any material, including wood, metal, and acrylic, and offer mechanical, electrical, and plumbing (MEP) expertise.",
  },
];

const ServicesSections = () => {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGsapEffect((self: any) => {
    //   const tl = gsap.timeline({
    //     defaults: { duration: 3, ease: "none" },
    //     scrollTrigger: {
    //       trigger: "#services-header",
    //       scrub: true,
    //       start: "top top",
    //     },
    //   });
    //   tl.fromTo(
    //     "#elbow-line-right-horizontal path",
    //     { drawSVG: "0%" },
    //     { drawSVG: "100%" }
    //   );
    //   tl.fromTo(
    //     "#elbow-line-right-elbow path",
    //     { drawSVG: "0%", duration: 1 },
    //     { drawSVG: "100%", duration: 1 }
    //   );
    //   tl.fromTo(
    //     "#elbow-line-right-vertical path",
    //     { drawSVG: "0%", transformOrigin: "top" },
    //     { drawSVG: "100%", transformOrigin: "top" }
    //   );
    //   tl.reversed(!tl.reversed());
  }, ref);

  return (
    <section ref={ref}>
      <header
        id="services-header"
        className="bg-shark-900 bg-grid-surface pt-32 pb-24 px-6 md:px-12 bg-cover border-b-2 border-shark-50/30 "
      >
        <Heading className="text-shark-50">Retail build services</Heading>
      </header>

      <div
        id="services-grid"
        className="grid grid-cols-0 sm:grid-cols-2  sm:p-12"
      >
        {content1.map((item, index) => {
          return (
            <ServiceItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>

      <div className="flex-1 flex justify-center items-center py-60 bg-horizontal-lines bg-cover">
        <Button to="/contact">Talk us about your project</Button>
      </div>

      <div
        id="services-grid"
        className="grid grid-cols-1 sm:grid-cols-2  sm:p-12"
      >
        {content2.map((item, index) => {
          return (
            <ServiceItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSections;
