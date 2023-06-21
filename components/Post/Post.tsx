"use client";

import Link from "next/link";
import classNames from "classnames";
import ReactTimeAgo from "react-time-ago";
import { FadeIn } from "../Animations";
import PostImage from "./PostImage";

interface PostProps extends BlogPost {
  className?: string;
}
const Post = ({
  id,
  title,
  slug,
  date,
  featuredImage,
  excerpt,
  content,
  className,
  publishedDate,
}: PostProps) => {
  return (
    <FadeIn
      key={id}
      animate={{
        y: 250,
      }}
    >
      <article className="flex flex-col md:flex-row items-start justify-between gap-4 mb-16">
        {/* Desktop Image */}
        <PostImage className="w-full" slug={slug} imageUrl={featuredImage} />

        <div
          className={classNames({
            "md:max-w-md lg:max-w-xl": !!featuredImage,
          })}
        >
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            {/* Time */}
            <time
              dateTime={publishedDate.toLocaleDateString()}
              className="text-gray-500"
            >
              <ReactTimeAgo date={publishedDate} locale="en-US" />
            </time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
            {/* Mobile Image */}
            <PostImage
              className="md:hidden mt-10 mb-10"
              slug={slug}
              imageUrl={featuredImage}
            />
            <p className="mt-2 text-lg">{excerpt}</p>
          </div>
        </div>
      </article>
    </FadeIn>
  );
};
export default Post;
