import Page from "@/components/Page";
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

export default async function HomePage() {
  const clients = await getClients();

  return (
    <Page>
      <HeroSection />

      <MainHeadlineSection />

      <OurPresenceSection />

      <WhatWeDoSection />

      <OurProcessSection />

      <OurClientsSection clients={clients} />
    </Page>
  );
}
