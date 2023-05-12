import ProjectHeading from "@/components/ProjectLayout/ProjectHeading";
import getPayloadClient from "@/payload/payloadClient";
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

  return (
    <div className="py-12 bg-shark-50 text-shark-900">
      <div className="px-12">
        <ProjectHeading
          title={project?.title}
          date={project.buildDate}
          location={project.location}
        />
      </div>

      {!!project.images?.length && (
        <ImageGallery
          logo={project.logo}
          images={project.images}
          className="md:px-12"
        />
      )}
      <div className="px-12">
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
