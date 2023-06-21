import { FadeIn } from "@/components/Animations";
import ScaleInOut from "@/components/Animations/ScaleInOut";
import Button from "@/components/Button";
import { PostSummary } from "@/components/Post";
import ScreenSize from "@/components/ScreenSize/ScreenSize";
import { getSamplePosts } from "@/content/blog";

export default async function Blog() {
  const posts = getSamplePosts(10);

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
            <div className="flex justify-center mt-20">
              <Button className="bg-transparent sticky invert">
                Load more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
