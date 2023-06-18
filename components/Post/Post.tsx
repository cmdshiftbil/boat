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
      <Link href={`/blog/${slug}`}>
        <img
          src={imageUrl}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </Link>
      <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-pampas-200 hover:ring-pampas-300"></div>
    </div>
  ) : null;
};

interface PostProps extends BlogPost {
  className?: string;
}
const Post = ({
  id,
  title,
  slug,
  date,
  tags,
  featuredImage,
  author,
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
      <article className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10">
        <div
          className={classNames({
            "md:max-w-md lg:max-w-xl": !!featuredImage,
          })}
        >
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time
              dateTime={publishedDate.toLocaleDateString()}
              className="text-gray-500"
            >
              <ReactTimeAgo date={publishedDate} locale="en-US" />
            </time>
            {tags?.map((tag, idx) => (
              <a
                key={idx}
                href="#"
                className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 bg-pampas-100 hover:bg-pampas-200"
              >
                {tag}
              </a>
            ))}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
            <PostImage
              className="md:hidden my-4"
              slug={`/blog/${slug}`}
              imageUrl={featuredImage}
            />
            <p className="mt-2">{excerpt}</p>
          </div>
          <div className="relative mt-6 flex items-center gap-x-4">
            <img
              src={author.image}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">{author.name}</a>
              </p>
              <p className="text-gray-600">Co-Founder / CTO</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <PostImage
          className="hidden md:block"
          slug={`/blog/${slug}`}
          imageUrl={featuredImage}
        />
      </article>
    </FadeIn>
  );
};
export default Post;
