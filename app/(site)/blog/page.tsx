import { FadeIn } from "@/components/Animations";
import ScaleInOut from "@/components/Animations/ScaleInOut";
import { FadeInStagger } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
// import Button from "@/components/Button";
import { PostSummary } from "@/components/Post";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
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
    <FadeInStagger className="py-12 container">
      <PageIntro
        eyebrow="Blog"
        title="The latest articles and news"
        className="mb-12 mx-0"
      >
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to improve our services and products.
        </p>
      </PageIntro>

      <div>
        <div className="flex-1 flex flex-col gap-10">
          {posts.map((post) => {
            const { id } = post;
            return (
              <FadeIn key={id}>
                <SchemaCard maxWidth={false} padding={false}>
                  <PostSummary {...post} />
                </SchemaCard>
              </FadeIn>
            );
          })}

          <div className="flex justify-center mt-20">
            <Button variant="ghost" className="sticky">
              Load more
            </Button>
          </div>
        </div>
      </div>
    </FadeInStagger>
  );
}
