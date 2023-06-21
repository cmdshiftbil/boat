import Post from "@/components/Post/Post";
import { getSamplePosts } from "@/content/blog";
import { Bricks } from "@/lib/bricks/src";

export default async function BlogPostPage() {
  // const { docs: post, params } = data.post;
  // const { title, layout } = post[0];
  const post = getSamplePosts(1)[0];

  if (!post) {
    return null;
  }

  return (
    <div className="bg-white py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
        <Post {...post} />
      </div>
    </div>
  );
}
