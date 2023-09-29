import Page from "@/components/Page";

import { ContactDepartments } from "@/components/ContactPageContent/ContactPageContent";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import getPayloadClient from "@/payload/payloadClient";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";
import ContactHeader from "./_components/ContactHeader";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageSlugName = "contact";

  // const id = params.id;

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
    <>
      <FadeInStagger>
        <FadeIn>
          <ContactHeader />
        </FadeIn>

        <FadeIn>
          <ContactDepartments />
        </FadeIn>
      </FadeInStagger>
    </>
  );
}
