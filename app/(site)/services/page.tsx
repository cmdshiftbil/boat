import DrawIcon from "@/components/DrawIcon";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Title from "@/components/Title";
import ConeIcon from "@/components/UserInterfaceElements/ConeIcon";
import CubeSide from "@/components/UserInterfaceElements/CubeSide";
import SpiralIcon from "@/components/UserInterfaceElements/SpiralIcon";
import StairsUpIcon from "@/components/UserInterfaceElements/StairsUpIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import servicePageContent from "@/content/servicePage.content";
import { getServices } from "@/lib/fetchers";
import getPayloadClient from "@/payload/payloadClient";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";
import Link from "next/link";

const { title, description, services } = servicePageContent;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageSlugName = "services";
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

export default async function Services() {
  const services = await getServices();

  const iconMaps = [SpiralIcon, StairsUpIcon, ConeIcon, CubeSide];

  return (
    <FadeInStagger>
      <header className="container space-y-4">
        <Title>{title}</Title>
        <p className="text-3xl text-caramel-100 font-normal">{description}</p>
      </header>
      <div className="py-12 p-2">
        <SchemaCard maxWidth={false} padding={false}>
          <div className="grid auto-rows-max grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-dashed overflow-hidden">
            {services.map((service, index) => {
              const Icon = iconMaps[index];
              return (
                <div key={service.id} className="py-12 px-6 space-y-6">
                  <FadeIn>
                    <DrawIcon icon={<Icon />} />
                  </FadeIn>
                  <FadeIn>
                    <Title as="h4" animate>
                      <span className="text-caramel-100">
                        {index + 1} <span className="text-caramel-500">/ </span>
                      </span>
                      {service.title}
                    </Title>
                  </FadeIn>
                  <FadeIn>
                    <p className="text-xl text-caramel-100 font-normal">
                      {service.description}
                    </p>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </SchemaCard>
      </div>
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Title
              as="h2"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Turnkey Solutions from Sketch to Finish.
              <br />
              Let&rsquo;s discuss today.
            </Title>
            {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
           
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Link
                href="/contact"
                className={buttonVariants({ variant: "link" })}
              >
                Contact Us
              </Link> */}
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline" })}
              >
                Contact Us <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#aa8455" />
              <stop offset={1} stopColor="#2f1f19" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* <ServicesSections /> */}
      {/* <CarbonReportsSection /> */}
      {/* <HowItWorksSection /> */}
    </FadeInStagger>
  );
}
