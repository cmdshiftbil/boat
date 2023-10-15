import { ContactDepartments } from "@/components/ContactPageContent/ContactPageContent";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import getPayloadClient from "@/payload/payloadClient";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageSlugName = "contact";

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

export default async function ContactPage() {
  return (
    <FadeInStagger className="py-24 md:py-48 container space-y-24 md:space-y-48">
      <FadeIn>
        <PageIntro
          title="Let's Discuss Your Project"
          description="Get in touch with us"
        />
      </FadeIn>

      <ContactDepartments />
    </FadeInStagger>
  );
}
