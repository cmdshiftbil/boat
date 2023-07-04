"use client";

import Link from "next/link";
import classNames from "classnames";
import ReactTimeAgo from "react-time-ago";
import { FadeIn } from "../Animations";
import PostImage from "./PostImage";

interface PostSummaryProps extends BlogPost {
  className?: string;
}
const PostSummary = ({
  id,
  title,
  slug,
  image,
  excerpt,
  content,
  className,
  publishedOn,
}: PostSummaryProps) => {
  const publishedOnDate = new Date(publishedOn);
  const originalExcerpt = excerpt
    .map((p) => p.children?.[0].text ?? "")
    .join(" ");
  const shortenedExcerpt = originalExcerpt.substring(0, 400);

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
            "md:max-w-md lg:max-w-xl": !!image,
          })}
        >
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            {/* Time */}
            <time
              dateTime={publishedOnDate.toLocaleDateString()}
              className="text-gray-500"
            >
              <ReactTimeAgo date={publishedOnDate} locale="en-US" />
            </time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
            {/* Mobile Image */}
            <PostImage
              isInline
              className="md:hidden mt-10 mb-10"
              slug={slug}
              imageUrl={image?.url}
            />
            <p className="mt-2 text-lg">
              {shortenedExcerpt}
              {shortenedExcerpt.length !== originalExcerpt.length ? "..." : ""}
            </p>
          </div>
        </div>

        {/* Desktop Image */}
        <PostImage
          isInline
          className="hidden md:block"
          slug={slug}
          imageUrl={image?.url}
        />
      </article>
    </FadeIn>
  );
};
export default PostSummary;
