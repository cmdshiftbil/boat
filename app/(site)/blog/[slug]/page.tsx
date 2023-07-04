import Link from "next/link";
import Post from "@/components/Post/Post";
import getPayloadClient from "@/payload/payloadClient";
import { notFound } from "next/navigation";

export default async function BlogPostPage(props: any) {
  const { params } = props;
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const post = posts.docs?.[0];
  if (!post || !posts.docs?.length) {
    return notFound();
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
