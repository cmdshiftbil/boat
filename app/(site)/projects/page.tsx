import Page from "@/components/Page";
import getPayloadClient from "@/payload/payloadClient";
import { Header } from "@/app/(site)/projects/components/Header";
import { Projects } from "@/app/(site)/projects/components/Projects";
import { AnimateInOut } from "@/components/Animations";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
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
    <Page>
      <AnimateInOut
        durationIn={0.6}
        durationOut={0.2}
        // Initial
        set={{
          transform: "translate(" + 0 + "px, " + 200 + "px)",
          opacity: 0,
          duration: 0.25,
          ease: "power4.out",
        }}
        // Transition In (to)
        to={{
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power4.inOut",
        }}
        // TODO: Outro is buggy
        // Transition Out (from)
        // from={{
        //   transform: "translate(" + 0 + "px, " + 200 + "px)",
        //   opacity: 0,
        //   duration: 0.25,
        //   ease: "power4.out",
        // }}
        skipOutro={true}
      >
        <Header />
        <Projects projects={projects} />
      </AnimateInOut>
    </Page>
  );
}
