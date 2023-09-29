import BouncyLine from "@/components/BouncyLine";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import LeadershipGrid from "@/components/LeadershipGrid/LeadershipGrid";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Text from "@/components/Text";
import Title from "@/components/Title";
import getPayloadClient from "@/payload/payloadClient";
import LeadershipSection from "@/sections/Leadership.section";
import TeamScrollSection from "@/sections/TeamScroll.section";
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
  console.log("About", {
    seoData,
    stringifiedSeoData: JSON.stringify(seoData),
  });
  return seoData;
}

export default async function AboutPage() {
  return (
    <FadeInStagger>
      <Container>
        <article className="flex flex-col gap-6 p-2 md:p-6">
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
              quickly the company gained a reputation for its innovative ideas
              and ability to create unique and engaging retail spaces for its
              clients.
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
          <div className="flex flex-col md:flex-row items-center p-2 md:p-0 gap-4">
            <div className="flex-1">
              <FadeIn>
                <Title as="h3" className="text-4xl md:text-6xl">
                  Craftsmanship
                </Title>
              </FadeIn>
              <FadeIn>
                <h4 className="font-[100] text-shark-100 clamp-text-6xl italic">
                  noun [ U ]
                </h4>
              </FadeIn>
              <FadeIn>
                <p>UK /ˈkrɑːfts.mən.ʃɪp/ US /ˈkræfts.mən.ʃɪp/</p>
              </FadeIn>
            </div>

            <div className="flex-1">
              <FadeIn>
                <Text className="text-2xl" animate>
                  From our <strong>management</strong> to our{" "}
                  <strong>metal operators</strong>, everyone plays a special
                  role in bringing branded retail installations to life
                </Text>
              </FadeIn>
            </div>
          </div>
        </article>
      </Container>

      <TeamScrollSection />

      <FadeInStagger>
        <article className="flex flex-col gap-6 px-6 py-24">
          <FadeIn className="mb-12">
            <div>
              <Title className="mb-6">Leadership</Title>
              <Text>
                We are a team of passionate individuals who are committed to
                delivering the best possible results for our clients. We are
                driven by our passion for creativity and innovation, and we are
                constantly looking for new ways to improve our work.
              </Text>
            </div>
          </FadeIn>

          <LeadershipGrid />
        </article>
      </FadeInStagger>
    </FadeInStagger>
  );
}
