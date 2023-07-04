import { FadeIn } from "@/components/Animations";
import ScaleInOut from "@/components/Animations/ScaleInOut";
import Button from "@/components/Button";
import { PostSummary } from "@/components/Post";
import { mergeOpenGraph } from "@/seo/mergeOpenGraph";
import getPayloadClient from "@/payload/payloadClient";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  openGraph: mergeOpenGraph({
    url: "/blog",
  }),
};

export default async function Blog() {
  const blogPosts = await getBlogPosts();
  const posts = blogPosts.docs;

  if (!posts) {
    return null;
  }

  return (
    <div className="bg-shark-50">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <ScaleInOut skipOutro={true} ease="back.out" scaleTo={1}>
              <h2 className="font-bold tracking-tight text-gray-900 uppercase text-4xl md:text-5xl">
                From the blog
              </h2>
            </ScaleInOut>
            <FadeIn
              animate={{
                y: 200,
              }}
            >
              <p className="mt-2 text-xl leading-8 text-gray-600">
                What we are doing at Alpha Nero
              </p>
            </FadeIn>
          </div>
          <div className="mx-auto mt-16 gap-y-20 gap-8 lg:mx-0lg:grid-cols-3">
            {posts.map((post) => {
              const { id } = post;
              return <PostSummary key={id} {...post} />;
            })}

            {/* <div className="flex justify-center mt-20">
              <Button className="bg-transparent sticky invert">
                Load more
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
