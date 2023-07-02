import React from "react";
import { Metadata } from "next";

// import { RenderBlogArchive } from "./renderBlogArchive";
import { mergeOpenGraph } from "@/seo/mergeOpenGraph";
import getPayloadClient from "@/payload/payloadClient";

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

const BlogPage = async () => {
  const posts = await getBlogPosts();
  console.log({
    posts,
    docs: posts.docs,
    docsJSON: JSON.stringify(posts.docs),
  });

  return <div>Blog Page</div>;
  // return <RenderBlogArchive posts={[]} />;
};

export default BlogPage;
