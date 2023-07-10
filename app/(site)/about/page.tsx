import { AnimateInOut } from "@/components/Animations";
import Heading from "@/components/Heading";
import MotionLine from "@/components/MotionLine/MotionLine";
import Parallax from "@/components/Parallax";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import Section from "@/components/Section";
import Text from "@/components/Text";
import VerticalScrollSection from "@/components/VerticalScrollSection";
import content from "@/content/content";
import LeadershipSection from "@/sections/Leadership.section";
import TeamCountersSection from "@/sections/TeamCounters.section";
import TeamScrollSection from "@/sections/TeamScroll.section";
import getPayloadClient from "@/payload/payloadClient";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageSlugName = "about";
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

export default async function AboutPage() {
  return (
    <>
      <Section className="p-4 md:p-6 lg:p-12" title="A short history">
        <Text animate>
          Founded in 2010 in Dubai, United Arab Emirates. Alpha Nero has
          established itself as a <strong>leading retail design</strong> and
          <strong>production company</strong> in the region. With a strong focus
          on <strong>high-end luxury retail and branding strategy</strong>,
          quickly the company gained a reputation for its innovative ideas and
          ability to create unique and engaging retail spaces for its clients.
          <br />
          <br />
          Over the years, Alpha Nero has expanded its operations to serve
          clients across the Middle East, Africa, and Southeast Asia. Today, the
          company continues to evolve and push the boundaries of retail design,
          working with some of the most prestigious brands in the market.
        </Text>
      </Section>
      <section className="p-4 md:p-6 lg:p-12">
        <Parallax speed={0.5}>
          <h3 className="font-bold clamp-text-9xl text-shark-50">
            Craftsmanship
          </h3>
          <h4 className="font-[100] text-shark-100 clamp-text-6xl italic">
            noun [ U ]
          </h4>
          <Text className="font-[100] text-shark-100 clamp-text-2xl mt-4">
            UK /ˈkrɑːfts.mən.ʃɪp/ US /ˈkræfts.mən.ʃɪp/
          </Text>
        </Parallax>

        <Text className="py-4 md:py-6 lg:py-12 clamp-text-2xl" animate>
          From our <strong>management</strong> to our{" "}
          <strong>metal operators</strong>, everyone plays a special role in
          bringing branded retail installations to life
        </Text>
      </section>
      <TeamScrollSection />
      <LeadershipSection
        team={[
          {
            name: "Simon Hacker",
            position: "Founder & Managing Partner",
            picture: "/images/leadership/simon.png",
          },
          {
            name: "Khaled Ali",
            position: "Business Development Manager & Partner",
            picture: "/images/leadership/khaled.png",
          },
          {
            name: "Séverine Hoss",
            position: "Finance Manager",
            picture: "/images/leadership/severine.png",
          },
          // {
          //   name: "Rajesh M.V.",
          //   position: "Operation Manager & Partner",
          //   picture: "/images/leadership/simon.png",
          // },
        ]}
      />
    </>
  );
}
