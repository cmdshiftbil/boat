import BouncyLine from "@/components/BouncyLine";
import { Container } from "@/components/Container";
import Counter from "@/components/Counter";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import HoverGrid from "@/components/HoverGrid";
import LeadershipGrid from "@/components/LeadershipGrid/LeadershipGrid";
import { PageIntro } from "@/components/PageIntro";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Text from "@/components/Text";
import Title from "@/components/Title";
import content from "@/content/content";
import getPayloadClient from "@/payload/payloadClient";
import LeadershipSection from "@/sections/Leadership.section";
import TeamScrollSection from "@/sections/TeamScroll.section";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";
import Image from "next/image";

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
  console.log("About", {
    seoData,
    stringifiedSeoData: JSON.stringify(seoData),
  });
  return seoData;
}

export default async function AboutPage() {
  return (
    <FadeInStagger className="py-24 md:py-48 container space-y-24 md:space-y-48">
      <section className="flex flex-col gap-6">
        <FadeIn>
          <Title>A Short History.</Title>
        </FadeIn>
        <FadeIn>
          <Text className="text-xl md:text-3xl text-caramel-200" animate>
            Founded in 2010 in Dubai, United Arab Emirates. Alpha Nero has
            established itself as a <strong>leading retail design</strong> and
            <strong>production company</strong> in the region. With a strong
            focus on{" "}
            <strong>high-end luxury retail and branding strategy</strong>,
            quickly the company gained a reputation for its innovative ideas and
            ability to create unique and engaging retail spaces for its clients.
            <br />
            <br />
            Over the years, Alpha Nero has expanded its operations to serve
            clients across the Middle East, Africa, and Southeast Asia. Today,
            the company continues to evolve and push the boundaries of retail
            design, working with some of the most prestigious brands in the
            market.
          </Text>
        </FadeIn>
        <FadeIn>
          <BouncyLine />
        </FadeIn>
        <div className="flex flex-col md:flex-row p-2 md:p-0 gap-6">
          <div className="flex-1">
            <FadeIn>
              <Title as="h3" className="text-4xl md:text-6xl">
                Craftsmanship
              </Title>
            </FadeIn>
            <FadeIn>
              <h4 className="font-[100] text-caramel-100 clamp-text-6xl italic">
                noun [ U ]
              </h4>
            </FadeIn>
            <FadeIn>
              <p className="font-[100] text-caramel-100 clamp-text-6xl italic">
                UK /ˈkrɑːfts.mən.ʃɪp/ US /ˈkræfts.mən.ʃɪp/
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-1 items-center">
            <FadeIn>
              <Text className="text-2xl" animate>
                From our <strong>management</strong> to our{" "}
                <strong>metal operators</strong>, everyone plays a special role
                in bringing branded retail installations to life
              </Text>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative">
        <PageIntro title="A Few Numbers" description="" />

        {/* <div className="absolute h-full w-full top-0 left-0 bg-grid-perspective bg-repeat-x" /> */}
        <HoverGrid>
          {content.teamCounters.map((stat) => {
            return (
              <div
                className="flex flex-row p-6 justify-between items-center gap-2"
                key={stat.id}
              >
                <div className="flex flex-col">
                  <Counter
                    value={stat.number}
                    suffix={stat.suffix}
                    className="text-4xl text-caramel-500 font-bold"
                  />
                  <span className="text-xl tracking-wide text-caramel-100">
                    {stat.label}
                  </span>
                </div>
                <Image
                  src={stat.image}
                  width={48}
                  height={48}
                  alt={stat.label}
                />
              </div>
            );
          })}
        </HoverGrid>
      </section>

      <section className="flex flex-col gap-6">
        <PageIntro
          title="Leadership"
          description="We are a team of passionate individuals who are committed to
          delivering the best possible results for our clients. We are
          driven by our passion for creativity and innovation, and we are
          constantly looking for new ways to improve our work."
        />

        <LeadershipGrid />
      </section>
    </FadeInStagger>
  );
}
