import { Boxes, CalendarCheck2, Factory, Wrench } from "lucide-react";

const servicePageContent = {
  title: "Services",
  description:
    "We assemble stories in brick and mortar, from world – class boutique builds to immersive shop-in-shops and sustainable pop-ups.",
  services: [
    {
      title: "Retail build services",
      steps: [
        {
          icon: CalendarCheck2,
          title: "Retail Store Design Planning",
          description:
            "We recreate retail shop design plans in intricate detail to reflect your vision for the project and the identity of your brand.",
        },
        {
          icon: Wrench,
          title: "Shop Fixture Installation and Provisioning",
          description:
            "Then our professional teams meticulously follow this blueprint to ensure your shop fixture, in-shop or pop-up store meets your objectives.",
        },
      ],
    },
    {
      title: "Production services",
      steps: [
        {
          icon: Factory,
          title: "Manufacturing Shop Fit-Out Designs",
          description:
            "We manufacture any design for shop fit outs, whether it’s in-shop or for a pop-up store, we will bring your concept to life through our craftsmanship.",
        },
        {
          icon: Boxes,
          title: "Skilled Team and Expertise",
          description:
            "Our skilled team works with any material, including wood, metal, and acrylic, and offer mechanical, electrical, and plumbing (MEP) expertise.",
        },
      ],
    },
  ],
};

export default servicePageContent;
