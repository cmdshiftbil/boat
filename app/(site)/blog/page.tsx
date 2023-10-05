import { FadeIn } from "@/components/Animations";
import ScaleInOut from "@/components/Animations/ScaleInOut";
import { FadeInStagger } from "@/components/FadeIn";
// import Button from "@/components/Button";
import { PostSummary } from "@/components/Post";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Title from "@/components/Title";
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
  const pageSlugName = "blog";
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

const getBlogPosts = async () => {
  const payload = await getPayloadClient();
  const blogPosts = await payload.find({
    collection: "posts",
    // where: {
    //   publishedOn: {
    //     // less_than_equal: true,
    //   },
    // },
    limit: 300,
    sort: "-publishedOn",
  });
  return blogPosts;
};

export default async function Blog() {
  const blogPosts = await getBlogPosts();
  const posts = blogPosts.docs;

  if (!posts) {
    return null;
  }

  return (
    <FadeInStagger>
      <div className="container">
        <div className="flex-1">
          <FadeIn>
            <Title as="h1">Blog</Title>
          </FadeIn>
          <FadeIn>
            <p className="text-primary/50 mt-6 text-xl">
              What we are doing at Alpha Nero
            </p>
          </FadeIn>
        </div>

        <div className="flex-1">
          {posts.map((post) => {
            const { id } = post;
            return (
              <FadeIn key={id}>
                <SchemaCard maxWidth={false}>
                  <PostSummary {...post} />
                </SchemaCard>
              </FadeIn>
            );
          })}

          {/* <div className="flex justify-center mt-20">
              <Button className="bg-transparent sticky invert">
                Load more
              </Button>
            </div> */}
        </div>
      </div>
    </FadeInStagger>
  );
}
