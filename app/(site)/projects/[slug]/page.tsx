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
      <div className="px-12 text-2xl">
        <p>
          <strong>Authentic</strong>: adidas is the first genuine sports brand.
          They were founded by a true athlete whose one guiding principle was to
          make equipment that makes athletes better. This is what made Adi
          Dassler Authentic then, this is what makes Adidas authentic today, and
          this is what will always make them authentic.
        </p>
        <br />
        <p>
          <strong>Passionate</strong>: Passion is at the heart of sport and of
          every true athlete. Passior knows know borders, no age, no race and
          not time. Passion is what drives athletes to succeed and is what drove
          Adi Dassler to make his first pair of athletic shoes in 1920. It is
          this same passion that will always guide adidas.
        </p>
        <br />
        <p>
          <strong>Innovative</strong>: There is continuous innovation in every
          area of their business - from product technologies that help athletes
          perform better to communications that help athletes understand their
          brand and their products. New ideas and solutions can be found in
          every office and department around the world.
        </p>
        <br />
        <p>
          <strong>Inspirational</strong>: Being inspirational helps build and
          maintain relationships with the athletes adidas support. It is their
          emotional connection to their heritage, their athletes and to sport
          that inspires them to create products and communications that, in
          turn, inspire others.
        </p>
        <br />
        <p>
          <strong>Committed</strong>: Adidas commitment to their athletes and
          sport is uncompromising, unwavering and forever. They will continue to
          sponsor, advice, listen to and support athletes with the same resolve
          as Adi Dassler.
        </p>
        <br />
        <p>
          <strong>Honest</strong>: At all times and in all relationships, adidas
          is genuine, ethical and fair.
        </p>
        <br />
        <p>
          <strong>Consumer focused</strong>: and therefore Adidas continuously
          improve the quality, look, feel, and image of their products and their
          organizational structures to match and exceed consumer expectations
          and to provide them with the highest value.
        </p>
        <br />
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
