import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { fetchContent } from "@/utils/api.utils";
import ProjectHeading from "@/components/ProjectLayout/ProjectHeading";
import getPayloadClient from "@/payload/payloadClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";

export default async function ProjectPage(props: any) {
  const { params } = props;
  const payload = await getPayloadClient();

  const projects = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const project = projects.docs?.[0];
  if (!project || !projects.docs?.length) {
    return notFound();
  }

  console.log({
    project,
    projectImages: project?.images,
    projectImagesLength: project?.images?.length,
  });

  return (
    <div className="p-12 bg-shark-50 text-shark-900">
      <ProjectHeading
        title={project?.title}
        date={project.buildDate}
        location={project.location}
      />

      {!!project.images?.length && <ImageGallery images={project.images} />}

      <p>
        loem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
        tincidunt nisl nisl vel nisl. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
      </p>
      <p>
        loem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
        tincidunt nisl nisl vel nisl. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
      </p>
      <p>
        loem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
        tincidunt nisl nisl vel nisl. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
      </p>
      <p>
        loem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
        tincidunt nisl nisl vel nisl. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
      </p>
    </div>
  );
}

// export async function generateMetadata({ params }: any): Promise<Metadata> {
//   const payload = await getPayloadClient();
//   const projects = await payload.find({
//     collection: "projects",
//     where: {
//       slug: {
//         equals: params.slug,
//       },
//     },
//   });

//   return { title: projects[0].title };
// }

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const projects = await payload.find({
    collection: "projects",
    limit: 0,
  });

  const paths = projects.docs.map((project: any) => {
    return {
      slug: project.slug,
    };
  });

  return paths;
}
