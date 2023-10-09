import Page from "@/components/Page";
import getPayloadClient from "@/payload/payloadClient";
import { Projects } from "@/app/(site)/projects/components/Projects";
import { AnimateInOut } from "@/components/Animations";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import BouncyLine from "@/components/BouncyLine";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageSlugName = "projects";
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

async function getProjects() {
  const payload = await getPayloadClient();

  const projects = await payload.find({
    collection: "projects",
  });

  if (projects.totalDocs === 0) {
    return { projects: null };
  }

  return { projects: projects.docs };
}

export default async function ProjectsPage() {
  const { projects } = await getProjects();

  return (
    <>
      <PageIntro
        title="Projects"
        description="As a leading retail fit out agency, we design and build retail
        showcase outlets for the world’s iconic luxury retail brands from the
        ground up to engineer incredible shopping experiences."
      >
        <BouncyLine />
      </PageIntro>

      <div className="sm:container">
        {/* <Container> */}
        <Projects projects={projects} />
        {/* </Container> */}
      </div>
    </>
  );
}
