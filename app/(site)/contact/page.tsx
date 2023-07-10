import ContactForm from "@/components/ContactForm";
import ContactPageContent from "@/components/ContactPageContent";
import Map from "@/components/Map";
import Page from "@/components/Page";
import Section from "@/components/Section";
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
  const pageSlugName = "contact";
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
export default async function ContactPage() {
  return (
    <Page>
      <Section title="Let's talk">
        <ContactForm />
      </Section>

      <ContactPageContent />

      <section className="relative h-96">
        <Map />
      </section>
    </Page>
  );
}
