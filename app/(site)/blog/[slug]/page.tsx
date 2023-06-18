import { Bricks } from "@/lib/bricks/src";

export default async function BlogPostPage() {
  // const { docs: post, params } = data.post;
  // const { title, layout } = post[0];

  return (
    <div className="bg-white py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blog Title here
        </h1>
        {/* <Bricks layout={layout} /> */}
        Blog content
      </div>
    </div>
  );
}
