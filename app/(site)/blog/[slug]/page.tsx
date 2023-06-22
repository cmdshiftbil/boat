import Link from "next/link";
import Post from "@/components/Post/Post";
import { getSamplePosts } from "@/content/blog";

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
        <Link
          href="/blog"
          className="group relative uppercase bg-white transition-all hover:bg-shark-700 text-shark-900 p-4 border-2 border-shark-900 text-md hover:px-6 hover:text-white"
        >
          <span className="group-hover:hidden">Back</span>
          <span className="hidden group-hover:inline-block">Blog</span>
        </Link>

        <Post {...post} className="pt-8" />
      </div>
    </div>
  );
}
