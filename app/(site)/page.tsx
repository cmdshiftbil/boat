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
import { getPageTitle, prepareSeoData } from "@/utils/seo.utils";
import ThreeDModelSection from "@/sections/ThreeDModel.section";
import { Metadata } from "next";
import { MainHeadline } from "@/sections/Headline.section";
import ProjectsPreview from "@/sections/ProjectsPreview.section";
import HompageServices from "@/sections/HompageServices.section";
import { getServices } from "@/lib/fetchers";
import { InteractiveMarquee } from "@/components/Marquee";
import Title from "@/components/Title";
import CallToActionSection from "@/sections/CallToAction.section";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageSlugName = "home";
  // read route params
  const id = params.id;

  const payload = await getPayloadClient();
  const pageResponse = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: { equals: pageSlugName },
    },
  });

  const pageData = pageResponse.docs?.[0] ?? {};
  const seoData = prepareSeoData(pageData);
  return seoData;
}

// TODO: Export all data calls to a separate directory
const getClients = async () => {
  const payload = await getPayloadClient();
  const clients = await payload.find({
    collection: "clients",
    limit: 20,
  });
  return clients.docs;
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
        "Headquartered in Dubai, with operations across the UAE, KSA, Middle East, Levant and Africa",
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
    <>
      <HeroSection />
      <MainHeadline />
      <HompageServices services={services} />
      <ProjectsPreview />
      <CallToActionSection />
      <OurPresenceSection />
      <OurClientsSection data={homeData.ourClients} />
    </>
  );
}
