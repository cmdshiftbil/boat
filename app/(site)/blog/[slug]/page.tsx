import Link from "next/link";
import Post from "@/components/Post/Post";
import getPayloadClient from "@/payload/payloadClient";
import { notFound } from "next/navigation";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageSlugName = "blog";
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

  const posts = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const post = posts.docs?.[0];

  const pageData = pageResponse.docs?.[0] ?? {};
  const seoData = prepareSeoData({
    ...pageData,
    title: `Blog | ${post?.title}`,
  });
  return seoData;
}

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
    <div className="bg-white py-32 px-6 lg:px-8 text-black">
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
