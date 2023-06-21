"use client";

import Link from "next/link";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import ReactTimeAgo from "react-time-ago";
import { FadeIn } from "../Animations";

interface PostImageProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<BlogPost, "slug"> {
  imageUrl?: string;
}

const PostImage = ({ imageUrl, slug, className }: PostImageProps) => {
  return imageUrl ? (
    <div className={classNames("relative w-full md:w-3/5 lg:w-2/5", className)}>
      <Link href={`/blog/${slug}`} className="relative">
        <img
          src={imageUrl}
          alt=""
          className="aspect-[16/9] w-full bg-gray-100 border-[2px] border-black object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </Link>
      <div className="absolute transition-all duration-500 border-2 border-black -top-[20px] -right-[20px] w-full h-full -z-10"></div>
    </div>
  ) : null;
};

interface PostSummaryProps extends BlogPost {
  className?: string;
}
const PostSummary = ({
  id,
  title,
  slug,
  date,
  featuredImage,
  excerpt,
  content,
  className,
  publishedDate,
}: PostSummaryProps) => {
  return (
    <FadeIn
      key={id}
      animate={{
        y: 250,
      }}
    >
      <article className="flex flex-col md:flex-row items-start justify-between gap-4 mb-16">
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

        {/* Desktop Image */}
        <PostImage
          className="hidden md:block"
          slug={slug}
          imageUrl={featuredImage}
        />
      </article>
    </FadeIn>
  );
};
export default PostSummary;
