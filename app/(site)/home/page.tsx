import Page from "@/components/Page";
import StairsUpIcon from "@/components/UserInterfaceElements/StairsUpIcon";
import content from "@/content/content";
import { HomeData } from "@/types/pages";
import getPayloadClient from "@/payload/payloadClient";
import HeroSection from "@/sections/Hero.section";
import MainHeadlineSection from "@/sections/MainHeadline.section";
import OurClientsSection from "@/sections/OurClients.section";
import OurPresenceSection from "@/sections/OurPresence.section";
import OurProcessSection from "@/sections/OurProcess.section";
import WhatWeDoSection from "@/sections/WhatWeDo.section";

export const metadata = {
  title: "Alpha Nero | Home",
};

const getClients = async () => {
  const payload = await getPayloadClient();
  const clients = await payload.find({
    collection: "clients",
    limit: 20,
  });

  return clients.docs;
};

const homeData: HomeData = {
  hero: {
    title1: "Retail fit out contractor",
    title2: "retail experts for luxury lifestyle brands",
  },
  presence: {
    title: "Operating in Dubai, across the Middle East and North Africa Region",
    imageUrl: "https://via.placeholder.com/550x550",
    imageAlt: "Temporary country image",
  },
  whatWeDo: {
    title: "What we do",
    features: [
      {
        name: "Retail build services",
        description:
          "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
        href: "#",
        icon: "stairsUpIcon",
      },
      {
        name: "Production services",
        description:
          "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
        href: "#",
        icon: "stairsUpIcon",
      },
      {
        name: "Carbon Reports",
        description:
          "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
        href: "#",
        icon: "stairsUpIcon",
      },
    ],
  },
  ourProcess: {
    title: "How we work",
    contactCtaText: "Discuss your project",
    contactCtaUrl: "/contact",
    process: content.process,
  },
  ourClients: {
    title: "Industries we serve",
    subtitle:
      "We serve predominantly prestigious cosmetics, jewelry, fashion & accessory brands.",
    ctaText: "Discover our work",
    ctaUrl: "/portfolio",
  },
};

export default async function HomePage() {
  const clients = await getClients();

  return (
    <Page>
      <HeroSection data={homeData.hero} />

      <MainHeadlineSection />

      <OurPresenceSection data={homeData.presence} />

      <WhatWeDoSection data={homeData.whatWeDo} />

      <OurProcessSection data={homeData.ourProcess} />

      <OurClientsSection data={{ ...homeData.ourClients, clients }} />
    </Page>
  );
}
