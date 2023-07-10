import ProjectHeading from "@/components/ProjectLayout/ProjectHeading";
import getPayloadClient from "@/payload/payloadClient";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";
import RichText from "@/components/RichText";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageSlugName = "projects";
  // read route params
  const slug = params.slug;

  const payload = await getPayloadClient();
  const pageResponse = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: { equals: pageSlugName },
    },
  });

  const projects = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const project = projects?.docs?.[0];

  const pageData = pageResponse.docs?.[0] ?? {};
  const seoData = prepareSeoData({
    ...pageData,
    title: `Project: ${project?.title}`,
  });
  return seoData;
}

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

      <div className="px-12 text-2xl">
        {(project.content as any[])?.map((contentPiece, idx) =>
          contentPiece.blogContentFields?.richText ? (
            <RichText
              key={idx}
              className="pt-4 text-xl"
              content={contentPiece.blogContentFields?.richText}
            />
          ) : null
        )}
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
