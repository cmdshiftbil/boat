import Page from "@/components/Page";
import { HomeData } from "@/types/pages";
import getPayloadClient from "@/payload/payloadClient";
import HeroSection from "@/sections/Hero.section";
import MainHeadlineSection from "@/sections/MainHeadline.section";
import OurClientsSection from "@/sections/OurClients.section";
import OurPresenceSection from "@/sections/OurPresence.section";
import OurProcessSection from "@/sections/OurProcess.section";
import WhatWeDoSection from "@/sections/WhatWeDo.section";
import content from "@/content/content";
import { AnimateInOut } from "@/components/Animations";

export const metadata = {
  title: "Alpha Nero | Home",
};

// TODO: Export all data calls to a separate directory
const getClients = async () => {
  const payload = await getPayloadClient();
  const clients = await payload.find({
    collection: "clients",
    limit: 20,
  });
  return clients.docs;
};

const getServices = async () => {
  const payload = await getPayloadClient();
  const services = await payload.find({
    collection: "services",
    where: {
      showInHomePage: { equals: true },
    },
    limit: 3,
  });
  return services.docs;
};

export default async function HomePage() {
  const clients = await getClients();
  const services = await getServices();

  const homeData: HomeData = {
    mainHeadline: {
      title: "We are forward-thinking retail concept development specialists.",
    },
    hero: {
      title: "Retail fit out contractor",
      subtitle: "retail experts for luxury lifestyle brands",
    },
    presence: {
      title:
        "Operating in Dubai, across the Middle East and North Africa Region",
      imageUrl: "https://via.placeholder.com/550x550",
      imageAlt: "Temporary country image",
    },
    whatWeDo: {
      title: "What we do",
      services,
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
      ctaUrl: "/projects",
      clients,
    },
  };

  return (
    <Page>
      <AnimateInOut
        durationIn={0.6}
        durationOut={0.2}
        // Initial
        set={{
          transform: "translate(" + 0 + "px, " + 200 + "px)",
          opacity: 0,
          duration: 0.25,
          ease: "power4.out",
        }}
        // Transition In (to)
        to={{
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power4.inOut",
        }}
        // TODO: Outro is buggy
        // Transition Out (from)
        // from={{
        //   transform: "translate(" + 0 + "px, " + 200 + "px)",
        //   opacity: 0,
        //   duration: 0.25,
        //   ease: "power4.out",
        // }}
        skipOutro={true}
      >
        <>
          <HeroSection data={homeData.hero} />
          <MainHeadlineSection />
          <OurPresenceSection data={homeData.presence} />
          <WhatWeDoSection data={homeData.whatWeDo} />
          <OurProcessSection data={homeData.ourProcess} />
          <OurClientsSection data={homeData.ourClients} />
        </>
      </AnimateInOut>
    </Page>
  );
}
