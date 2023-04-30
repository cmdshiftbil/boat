import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";

import invariant from "tiny-invariant";
import { getPost } from "~/models/post.server";
import { Bricks } from "~/lib/bricks/src";

export const loader = async ({ params }: LoaderArgs) => {
  console.log("PARAMS", params);

  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug as string);

  console.log("POST", post, params.slug, "POST");

  invariant(post, `Post not found: ${params.slug}`);

  return json({
    post,
    params,
  });
};

const BlogPostPage = () => {
  const data = useLoaderData<typeof loader>();

  if (!data) {
    return null;
  }

  const { docs: post, params } = data.post;
  const { title, layout } = post[0];

  return (
    <div className="bg-white py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>

        <Bricks layout={layout} />
      </div>
    </div>
  );
};

export default BlogPostPage;
